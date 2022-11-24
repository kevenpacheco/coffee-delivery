import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { CoffeeType } from "../../@types/Coffee";
import {
  Actions,
  CartButton,
  Container,
  CountButton,
  Description,
  FooterCard,
  Price,
  TagsContainer,
} from "./styles";

export function CoffeeCard({
  title,
  description,
  image,
  tags,
  priceInCents,
}: CoffeeType) {
  const priceInReal = new Intl.NumberFormat("pt-BR", {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2
  }).format(priceInCents / 100);

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
          <CountButton>
            <button>
              <Minus weight="bold" size={14} />
            </button>
            <span>1</span>
            <button>
              <Plus weight="bold" size={14} />
            </button>
          </CountButton>

          <CartButton>
            <ShoppingCart weight="fill" size={22} />
          </CartButton>
        </Actions>
      </FooterCard>
    </Container>
  );
}
