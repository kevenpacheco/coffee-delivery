import { createContext, ReactNode, useState } from "react";
import { ShoppingCartItemsType } from "../@types/ShoppingCartItems";

export interface ShoppingCartContextType {
  shoppingCartItems: ShoppingCartItemsType[];
  handleIncrementShoppingCartItem: (coffee: ShoppingCartItemsType, quantity?: number) => void;
  handleDecrementShoppingCartItem: (coffeeId: string) => void;
  resetShoppingCart: () => void;
}

export const ShoppingCartContext = createContext({} as ShoppingCartContextType);

interface ShoppingCartContextProviderPropsType {
  children: ReactNode;
}

export function ShoppingCartContextProvider({
  children,
}: ShoppingCartContextProviderPropsType) {
  const [shoppingCartItems, setShoppingCartItems] = useState<
    ShoppingCartItemsType[]
  >([]);

  function handleIncrementShoppingCartItem(coffee: ShoppingCartItemsType, quantity?: number) {
    setShoppingCartItems((prevState) => {
      const indexCurrentCoffee = prevState.findIndex(
        ({ id }) => id === coffee.id
      );

      const quantityToAdd = quantity || 1;

      if (indexCurrentCoffee < 0) {
        return prevState.concat({ ...coffee, quantity: quantityToAdd });
      }

      const newShoppingCartItems: ShoppingCartItemsType[] = [
        ...JSON.parse(JSON.stringify(prevState)),
      ];
      newShoppingCartItems[indexCurrentCoffee].quantity += quantityToAdd;

      return newShoppingCartItems;
    });
  }

  function handleDecrementShoppingCartItem(coffeeId: string) {
    setShoppingCartItems((prevState) => {
      const newCoffees = prevState
        .map((coffee) => {
          if (coffee.id !== coffeeId) return coffee;

          return {
            ...coffee,
            quantity: coffee.quantity - 1,
          };
        })
        .filter((coffee) => coffee.quantity > 0);

      return newCoffees;
    });
  }

  function resetShoppingCart() {
    setShoppingCartItems([])
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        shoppingCartItems,
        handleIncrementShoppingCartItem,
        handleDecrementShoppingCartItem,
        resetShoppingCart
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
