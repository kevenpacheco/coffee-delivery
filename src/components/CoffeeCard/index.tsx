import { ShoppingCart } from "phosphor-react";
import { useContext, useState } from "react";
import { ShoppingCartItemsType } from "../../@types/ShoppingCartItems";
import { ShoppingCartContext } from "../../contexts/ShoppingCartContext";
import { formatToDecimalWithFractionOfTwoDigits } from "../../utils/formatToDecimalWithFractionOfTwoDigits";
import { CountButton } from "../Buttons/CountButton";
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
  data: ShoppingCartItemsType;
}

export function CoffeeCard({ data }: CoffeeCardPropsType) {
  const { description, image, priceInCents, tags, title } = data;
  const { handleIncrementShoppingCartItem } = useContext(ShoppingCartContext);
  const [quantity, setQuantity] = useState(0);

  function handleIncrementQuantity() {
    setQuantity((prevState) => prevState + 1);
  }

  function handleDecrementQuantity() {
    setQuantity((prevState) => prevState - 1);
  }

  function handleAddToShoppingCart() {
    handleIncrementShoppingCartItem(data, quantity);
    setQuantity(0);
  }

  const priceInReal = formatToDecimalWithFractionOfTwoDigits(
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

          <CartButton type="button" onClick={handleAddToShoppingCart}>
            <ShoppingCart weight="fill" size={22} />
          </CartButton>
        </Actions>
      </FooterCard>
    </Container>
  );
}
