import { Trash } from "phosphor-react";
import { useContext } from "react";
import { ShoppingCartItemsType } from "../../@types/ShoppingCartItems";
import { ShoppingCartContext } from "../../contexts/ShoppingCartContext";
import { formatToDecimalWithFractionOfTwoDigits } from "../../utils/formatToDecimalWithFractionOfTwoDigits";
import { CountButton } from "../Buttons/CountButton";
import { Actions, Container, Info, RemoveButton, Total } from "./styles";

interface CartCardPropsType {
  data: ShoppingCartItemsType;
}

export function CartCard({ data }: CartCardPropsType) {
  const { image, title, priceInCents, quantity, id } = data;
  const { handleDecrementShoppingCartItem, handleIncrementShoppingCartItem } =
    useContext(ShoppingCartContext);

  const priceTotal = `R$ ${formatToDecimalWithFractionOfTwoDigits(
    (priceInCents * quantity) / 100
  )}`;

  return (
    <Container>
      <Info>
        <img src={image} alt="" width={64} height={64} />

        <div>
          <p>{title}</p>

          <Actions>
            <CountButton
              size="sm"
              count={quantity}
              onIncrement={() => handleIncrementShoppingCartItem(data)}
              onDecrement={() => handleDecrementShoppingCartItem(id)}
            />

            <RemoveButton>
              <Trash size={16} />
              <span>Remover</span>
            </RemoveButton>
          </Actions>
        </div>
      </Info>

      <Total>{priceTotal}</Total>
    </Container>
  );
}
