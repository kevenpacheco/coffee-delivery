import { ShoppingCart } from "phosphor-react";
import { CoffeeType } from "../../@types/Coffee";
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
  data: CoffeeType;
}

export function CoffeeCard({ data }: CoffeeCardPropsType) {
  const { description, image, priceInCents, tags, title } = data;

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
          <CountButton />

          <CartButton>
            <ShoppingCart weight="fill" size={22} />
          </CartButton>
        </Actions>
      </FooterCard>
    </Container>
  );
}
