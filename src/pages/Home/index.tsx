import { ShoppingCart, Timer, Package, Coffee } from "phosphor-react";
import {
  CoffeeList,
  CoffeesContainer,
  Container,
  DescriptionItem,
  DescriptionsContainer,
  IntroContainer,
  TitleContainer,
} from "./styles";
import { coffees as coffeesMock } from "../../mocks/coffees";
import { Header } from "../../components/Header";
import introIMG from "../../assets/intro-image.png";
import { CoffeeCard } from "../../components/CoffeeCard";
import { useState } from "react";
import { CoffeeType } from "../../@types/Coffee";

interface ShoppingCartItemsType extends CoffeeType {
  quantity: number;
}

export function Home() {
  const [shoppingCartItems, setShoppingCartItems] = useState<
    ShoppingCartItemsType[]
  >([]);

  console.log(shoppingCartItems);

  function handleIncrementShoppingCartItem(
    coffee: CoffeeType,
    quantity: number
  ) {
    setShoppingCartItems((prevState) => {
      const indexCurrentCoffee = prevState.findIndex(
        ({ id }) => id === coffee.id
      );

      if (indexCurrentCoffee < 0) {
        return prevState.concat({ ...coffee, quantity });
      }

      const newShoppingCartItems: ShoppingCartItemsType[] = [
        ...JSON.parse(JSON.stringify(prevState)),
      ];
      newShoppingCartItems[indexCurrentCoffee].quantity += quantity;

      return newShoppingCartItems;
    });
  }

  return (
    <Container>
      <Header quantityItemsInShoppingCart={shoppingCartItems.length} />

      <IntroContainer>
        <div>
          <div>
            <TitleContainer>
              <h1>Encontre o café perfeito para qualquer hora do dia</h1>
              <p>
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </p>
            </TitleContainer>

            <DescriptionsContainer>
              <DescriptionItem>
                <div>
                  <ShoppingCart weight="fill" />
                </div>
                <p>Compra simples e segura</p>
              </DescriptionItem>

              <DescriptionItem>
                <div>
                  <Timer weight="fill" />
                </div>
                <p>Embalagem mantém o café intacto</p>
              </DescriptionItem>

              <DescriptionItem>
                <div>
                  <Package weight="fill" />
                </div>
                <p>Entrega rápida e rastreada</p>
              </DescriptionItem>

              <DescriptionItem>
                <div>
                  <Coffee weight="fill" />
                </div>
                <p>O café chega fresquinho até você</p>
              </DescriptionItem>
            </DescriptionsContainer>
          </div>

          <img
            src={introIMG}
            alt="Um copo de café branco, com tampa preta e uma faixa preta no meio do copo com a logo da empresa e grãos de café ao redor do copo"
            width={476}
            height={360}
          />
        </div>
      </IntroContainer>

      <CoffeesContainer>
        <div>
          <h2>Nossos cafés</h2>
          <CoffeeList>
            {coffeesMock.map((coffee) => (
              <CoffeeCard
                key={coffee.id}
                data={coffee}
                onAdd={handleIncrementShoppingCartItem}
              />
            ))}
          </CoffeeList>
        </div>
      </CoffeesContainer>
    </Container>
  );
}
