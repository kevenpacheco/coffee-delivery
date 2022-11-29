import { Trash } from "phosphor-react";
import { useContext } from "react";
import { ShoppingCartItemsType } from "../../@types/ShoppingCartItems";
import { ShoppingCartContext } from "../../contexts/ShoppingCartContext";
import { transformCentsInReal } from "../../utils/transformCentsInReal";
import { CountButton } from "../Buttons/CountButton";
import { Actions, Container, Info, RemoveButton, Total } from "./styles";
import { toast } from "react-toastify";

interface CartCardPropsType {
  data: ShoppingCartItemsType;
}

export function CartCard({ data }: CartCardPropsType) {
  const { image, title, priceInCents, quantity, id } = data;
  const {
    decrementShoppingCartItemById,
    incrementShoppingCartItemById,
    deleteCoffeeInShoppingCartById,
  } = useContext(ShoppingCartContext);

  function handleRemoveCoffeInShoppingCart() {
    deleteCoffeeInShoppingCartById(id);
    toast.success("Café removido");
  }

  const priceTotal = transformCentsInReal(priceInCents * quantity);

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
              onIncrement={() => incrementShoppingCartItemById(id)}
              onDecrement={() => decrementShoppingCartItemById(id)}
            />

            <RemoveButton
              type="button"
              onClick={handleRemoveCoffeInShoppingCart}
            >
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
