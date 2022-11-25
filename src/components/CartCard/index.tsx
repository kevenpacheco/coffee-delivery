import { Trash } from "phosphor-react";
import { useState } from "react";
import { ShoppingCartItemsType } from "../../@types/ShoppingCartItems";
import { formatToDecimalWithFractionOfTwoDigits } from "../../utils/formatToDecimalWithFractionOfTwoDigits";
import { CountButton } from "../Buttons/CountButton";
import { Actions, Container, Info, RemoveButton, Total } from "./styles";

interface CartCardPropsType {
  data: ShoppingCartItemsType;
  onIncrement: (coffeeId: string) => void;
  onDecrement: (coffeeId: string) => void;
}

export function CartCard({
  data,
  onIncrement,
  onDecrement,
}: CartCardPropsType) {
  const { image, title, priceInCents, quantity, id } = data;

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
              onIncrement={() => onIncrement(id)}
              onDecrement={() => onDecrement(id)}
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
