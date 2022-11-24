import { ShoppingCart, MapPin } from "phosphor-react";
import { Cart, Container, Location } from "./styles";
import logoSVG from "../../assets/logo.svg";

export function Header() {
  return (
    <Container>
      <img
        src={logoSVG}
        alt="Logo da Coffee Delivery - Um copo de café roxo com o nome da empresa ao ladologoSVG"
        height={40}
        width={84.95}
      />

      <div>
        <Location>
          <MapPin weight="fill" size={22} />
          <p>Porto Alegre, RS</p>
        </Location>

        <Cart>
          <ShoppingCart weight="fill" size={22} />
        </Cart>
      </div>
    </Container>
  );
}
