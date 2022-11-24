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

export function Checkout() {
  return (
    <>
      <Header />

      <Container>
        <Content>
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
                <Input placeholder="CEP" />
                <Input placeholder="Rua" />
                <Input placeholder="Número" />
                <Input placeholder="Complemento" isOptional />
                <Input placeholder="Bairro" />
                <Input placeholder="Cidade" />
                <Input placeholder="UF" />
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
                <Select name="paymentType">
                  <CreditCard color={theme.color.purple[500]} />
                  <p>Cartão de crédito</p>
                </Select>

                <Select name="paymentType">
                  <Bank color={theme.color.purple[500]} />
                  <p>cartão de débito</p>
                </Select>

                <Select name="paymentType">
                  <Money color={theme.color.purple[500]} />
                  <p>dinheiro</p>
                </Select>
              </PaymentOptions>
            </OrderDetailsCard>
          </div>

          <div>
            <h2>Cafés selecionados</h2>

            <OrderSummary>
              <CartCard data={coffeesMock[4]} />

              <Separator />

              <OrderTotalPriceContainer>
                <div>
                  <p>Total de itens</p>
                  <p>R$ 29,70</p>
                </div>

                <div>
                  <p>Entrega</p>
                  <p>R$ 3,50</p>
                </div>

                <div>
                  <p>Total</p>
                  <p>R$ 33,20</p>
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
