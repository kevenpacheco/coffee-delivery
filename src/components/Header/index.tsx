import { ShoppingCart, MapPin } from "phosphor-react";
import { Cart, Container, Content, Location } from "./styles";
import logoSVG from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../contexts/ShoppingCartContext";
import { useContext } from "react";

export function Header() {
  const { shoppingCartItems } = useContext(ShoppingCartContext);
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
              {shoppingCartItems.length > 0 && (
                <span>{shoppingCartItems.length}</span>
              )}
            </Cart>
          </NavLink>
        </div>
      </Content>
    </Container>
  );
}
