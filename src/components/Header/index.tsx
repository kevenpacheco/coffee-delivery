import { ShoppingCart, MapPin } from "phosphor-react";
import { Cart, Container, Content, Location } from "./styles";
import logoSVG from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../contexts/ShoppingCartContext";
import { useContext } from "react";
import { OrderDetailsContext } from "../../contexts/OrderDetailsContext";

export function Header() {
  const { shoppingCartItems } = useContext(ShoppingCartContext);
  const { address } = useContext(OrderDetailsContext);
  const { city, uf } = address;

  const addressSummary = `${city}, ${uf}`;

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
            {city && uf ? <p>{addressSummary}</p> : null}
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
