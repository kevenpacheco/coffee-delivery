import { Trash } from "phosphor-react";
import { CoffeeType } from "../../@types/Coffee";
import { formatToDecimalWithFractionOfTwoDigits } from "../../utils/formatToDecimalWithFractionOfTwoDigits";
import { CountButton } from "../Buttons/CountButton";
import { Actions, Container, Info, RemoveButton, Total } from "./styles";

interface CartCardPropsType {
  data: CoffeeType;
}

export function CartCard({ data }: CartCardPropsType) {
  const { image, title, priceInCents } = data;

  const price = `R$ ${formatToDecimalWithFractionOfTwoDigits(
    priceInCents / 100
  )}`;

  return (
    <Container>
      <Info>
        <img src={image} alt="" width={64} height={64} />

        <div>
          <p>{title}</p>

          <Actions>
            <CountButton size="sm" />
            
            <RemoveButton>
              <Trash size={16} />
              <span>Remover</span>
            </RemoveButton>
          </Actions>
        </div>
      </Info>

      <Total>{price}</Total>
    </Container>
  );
}
