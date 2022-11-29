import { ShoppingCart } from "phosphor-react";
import { useContext, useState } from "react";
import { CoffeeType } from "../../@types/Coffee";
import { ShoppingCartContext } from "../../contexts/ShoppingCartContext";
import { CountButton } from "../Buttons/CountButton";
import {toast} from 'react-toastify';
import {
  Actions,
  CartButton,
  Container,
  Description,
  FooterCard,
  Price,
  TagsContainer,
} from "./styles";

interface CoffeeCardPropsType {
  data: CoffeeType;
}

export function CoffeeCard({ data }: CoffeeCardPropsType) {
  const { description, image, priceInCents, tags, title } = data;
  const { addCoffeeInShoppingCart } = useContext(ShoppingCartContext);
  const [quantity, setQuantity] = useState(0);

  function handleIncrementQuantity() {
    setQuantity((prevState) => prevState + 1);
  }

  function handleDecrementQuantity() {
    setQuantity((prevState) => prevState - 1);
  }

  function handleAddToShoppingCart() {
    addCoffeeInShoppingCart(data, quantity);
    setQuantity(0);
    toast.success('Café adicionado com sucesso')
  }

  const priceInReal = new Intl.NumberFormat("pt-BR", {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  }).format(
    priceInCents / 100
  );

  return (
    <Container>
      <img
        src={image}
        alt={`Pires e a xícara de café ${title}`}
        title={title}
        width={120}
        height={120}
      />

      <TagsContainer>
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </TagsContainer>

      <h3>{title}</h3>

      <Description>{description}</Description>

      <FooterCard>
        <Price>
          R$ <strong>{priceInReal}</strong>
        </Price>

        <Actions>
          <CountButton
            count={quantity}
            onDecrement={handleDecrementQuantity}
            onIncrement={handleIncrementQuantity}
          />

          <CartButton type="button" onClick={handleAddToShoppingCart} disabled={quantity < 1}>
            <ShoppingCart weight="fill" size={22} />
          </CartButton>
        </Actions>
      </FooterCard>
    </Container>
  );
}
