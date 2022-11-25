import { ShoppingCart, MapPin } from "phosphor-react";
import { Cart, Container, Content, Location } from "./styles";
import logoSVG from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";

interface HeaderPropsType {
  quantityItemsInShoppingCart: number;
}

export function Header({ quantityItemsInShoppingCart }: HeaderPropsType) {
  return (
    <Container>
      <Content>
        <NavLink to="/">
          <img
            src={logoSVG}
            alt="Logo da Coffee Delivery - Um copo de café roxo com o nome da empresa ao ladologoSVG"
            height={40}
            width={84.95}
          />
        </NavLink>

        <div>
          <Location>
            <MapPin weight="fill" size={22} />
            <p>Porto Alegre, RS</p>
          </Location>

          <NavLink to="/checkout">
            <Cart>
              <ShoppingCart weight="fill" size={22} />
              {quantityItemsInShoppingCart > 0 && (
                <span>{quantityItemsInShoppingCart}</span>
              )}
            </Cart>
          </NavLink>
        </div>
      </Content>
    </Container>
  );
}
