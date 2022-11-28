import { createContext, ReactNode, useState } from "react";
import { CoffeeType } from "../@types/Coffee";
import { ShoppingCartItemsType } from "../@types/ShoppingCartItems";

export interface ShoppingCartContextType {
  shoppingCartItems: ShoppingCartItemsType[];
  addCoffeeInShoppingCart: (coffee: CoffeeType, quantity: number) => void;
  incrementShoppingCartItemById: (coffeeId: string) => void;
  decrementShoppingCartItemById: (coffeeId: string) => void;
  resetShoppingCart: () => void;
  deleteCoffeeInShoppingCartById: (coffeeId: string) => void;
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

  function addCoffeeInShoppingCart(coffee: CoffeeType, quantity: number) {
    setShoppingCartItems((prevState) => {
      const currentCoffeeIndex = prevState.findIndex(
        ({ id }) => id === coffee.id
      );

      if (currentCoffeeIndex < 0) {
        return prevState.concat({ ...coffee, quantity });
      }

      const newShoppingCartItems = JSON.parse(JSON.stringify(prevState));
      newShoppingCartItems[currentCoffeeIndex].quantity += quantity;

      return newShoppingCartItems;
    });
  }

  function incrementShoppingCartItemById(coffeeId: string) {
    setShoppingCartItems((prevState) => {
      const indexCurrentCoffee = prevState.findIndex(
        ({ id }) => id === coffeeId
      );

      const newShoppingCartItems: ShoppingCartItemsType[] = [
        ...JSON.parse(JSON.stringify(prevState)),
      ];
      newShoppingCartItems[indexCurrentCoffee].quantity += 1;

      return newShoppingCartItems;
    });
  }

  function decrementShoppingCartItemById(coffeeId: string) {
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
    setShoppingCartItems([]);
  }

  function deleteCoffeeInShoppingCartById(coffeeId: string) {
    setShoppingCartItems((prevState) =>
      prevState.filter((coffee) => coffee.id !== coffeeId)
    );
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        shoppingCartItems,
        addCoffeeInShoppingCart,
        incrementShoppingCartItemById,
        decrementShoppingCartItemById,
        resetShoppingCart,
        deleteCoffeeInShoppingCartById,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
