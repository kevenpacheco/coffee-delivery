import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";
import { CartCard } from "../../components/CartCard";
import { Header } from "../../components/Header";
import Input from "../../components/Input";
import { Select } from "../../components/Select";
import { theme } from "../../styles/theme";
import { coffees as coffeesMock } from "../../mocks/coffees";
import {
  OrderDetailsCard,
  OrderDetailsHeader,
  Container,
  Content,
  InputsContainer,
  PaymentOptions,
  OrderSummary,
  Separator,
  OrderTotalPriceContainer,
  ConfirmOrderButton,
} from "./styles";
import { ChangeEvent, FormEvent, useState } from "react";
import { ShoppingCartItemsType } from "../../@types/ShoppingCartItems";
import { transformCentsInReal } from "../../utils/transformCentsInReal";
import { useNavigate } from "react-router-dom";

interface AddressType {
  cep: string;
  street: string;
  number: string;
  complement: string;
  district: string;
  city: string;
  uf: string;
}

interface FormDataType {
  address: AddressType;
  paymentType: "CREDIT_CARD" | "DEBIT_CARD" | "MONEY" | null;
  coffees: ShoppingCartItemsType[];
}

export function Checkout() {
  const navigation = useNavigate()
  const [formData, setFormData] = useState<FormDataType>({
    address: {
      cep: "",
      street: "",
      number: "",
      complement: "",
      district: "",
      city: "",
      uf: "",
    },
    paymentType: null,
    coffees: [{ ...coffeesMock[9], quantity: 3 }],
  });

  function handleChangeInput({
    target: { name, value },
  }: ChangeEvent<HTMLInputElement>) {
    setFormData((prevState) => ({
      ...prevState,
      address: {
        ...prevState.address,
        [name]: value,
      },
    }));
  }

  function handleSelectPayment({
    target: { name, value },
  }: ChangeEvent<HTMLInputElement>) {
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleIncrementQuantityCoffeeById(coffeeId: string) {
    setFormData((prevState) => {
      const newCoffees = prevState.coffees.map((coffee) => {
        if (coffee.id !== coffeeId) return coffee;

        return {
          ...coffee,
          quantity: coffee.quantity + 1,
        };
      });

      const newFormData = JSON.parse(JSON.stringify(prevState));

      return {
        ...newFormData,
        coffees: newCoffees,
      };
    });
  }

  function handleDecrementQuantityCoffeeById(coffeeId: string) {
    setFormData((prevState) => {
      const newCoffees = prevState.coffees
        .map((coffee) => {
          if (coffee.id !== coffeeId) return coffee;

          return {
            ...coffee,
            quantity: coffee.quantity - 1,
          };
        })
        .filter((coffee) => coffee.quantity > 0);

      const newFormData = JSON.parse(JSON.stringify(prevState));

      return {
        ...newFormData,
        coffees: newCoffees,
      };
    });
  }

  function handleConfirmOrder(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    navigation('/success')
  }

  const totalPriceItemsInCents = formData.coffees.reduce(
    (acc, coffee) => acc + coffee.priceInCents * coffee.quantity,
    0
  );
  const totalPriceItems = transformCentsInReal(totalPriceItemsInCents);

  const deliveryFeeInCents = 350;
  const deliveryFee = transformCentsInReal(deliveryFeeInCents);

  const orderTotal = transformCentsInReal(
    totalPriceItemsInCents + deliveryFeeInCents
  );

  return (
    <>
      <Header quantityItemsInShoppingCart={formData.coffees.length} />

      <Container>
        <Content onSubmit={handleConfirmOrder}>
          <div>
            <h2>Complete seu pedido</h2>

            <OrderDetailsCard>
              <OrderDetailsHeader>
                <MapPinLine size={22} color={theme.color.yellow[700]} />
                <div>
                  <p>Endereço de Entrega</p>
                  <p>Informe o endereço onde deseja receber seu pedido</p>
                </div>
              </OrderDetailsHeader>

              <InputsContainer>
                <Input
                  placeholder="CEP"
                  value={formData.address.cep}
                  name="cep"
                  onChange={handleChangeInput}
                />

                <Input
                  placeholder="Rua"
                  value={formData.address.street}
                  name="street"
                  onChange={handleChangeInput}
                />

                <Input
                  placeholder="Número"
                  value={formData.address.number}
                  name="number"
                  onChange={handleChangeInput}
                />

                <Input
                  placeholder="Complemento"
                  value={formData.address.complement}
                  name="complement"
                  onChange={handleChangeInput}
                  isOptional
                />

                <Input
                  placeholder="Bairro"
                  value={formData.address.district}
                  name="district"
                  onChange={handleChangeInput}
                />

                <Input
                  placeholder="Cidade"
                  value={formData.address.city}
                  name="city"
                  onChange={handleChangeInput}
                />

                <Input
                  placeholder="UF"
                  value={formData.address.uf}
                  name="uf"
                  onChange={handleChangeInput}
                />
              </InputsContainer>
            </OrderDetailsCard>

            <OrderDetailsCard>
              <OrderDetailsHeader>
                <CurrencyDollar size={22} color={theme.color.purple[500]} />
                <div>
                  <p>Pagamento</p>
                  <p>
                    O pagamento é feito na entrega. Escolha a forma que deseja
                    pagar
                  </p>
                </div>
              </OrderDetailsHeader>

              <PaymentOptions>
                <Select
                  name="paymentType"
                  value="CREDIT_CARD"
                  onChange={handleSelectPayment}
                >
                  <CreditCard color={theme.color.purple[500]} />
                  <p>Cartão de crédito</p>
                </Select>

                <Select
                  name="paymentType"
                  value="DEBIT_CARD"
                  onChange={handleSelectPayment}
                >
                  <Bank color={theme.color.purple[500]} />
                  <p>cartão de débito</p>
                </Select>

                <Select
                  name="paymentType"
                  value="MONEY"
                  onChange={handleSelectPayment}
                >
                  <Money color={theme.color.purple[500]} />
                  <p>dinheiro</p>
                </Select>
              </PaymentOptions>
            </OrderDetailsCard>
          </div>

          <div>
            <h2>Cafés selecionados</h2>

            <OrderSummary>
              {formData.coffees.length > 0 && (
                <>
                  <CartCard
                    data={formData.coffees[0]}
                    onIncrement={handleIncrementQuantityCoffeeById}
                    onDecrement={handleDecrementQuantityCoffeeById}
                  />
                  <Separator />
                </>
              )}

              <OrderTotalPriceContainer>
                <div>
                  <p>Total de itens</p>
                  <p>{totalPriceItems}</p>
                </div>

                <div>
                  <p>Entrega</p>
                  <p>{deliveryFee}</p>
                </div>

                <div>
                  <p>Total</p>
                  <p>{orderTotal}</p>
                </div>
              </OrderTotalPriceContainer>

              <ConfirmOrderButton>confirmar pedido</ConfirmOrderButton>
            </OrderSummary>
          </div>
        </Content>
      </Container>
    </>
  );
}
