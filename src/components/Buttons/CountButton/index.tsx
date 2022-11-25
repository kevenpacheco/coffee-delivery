import { Minus, Plus } from "phosphor-react";
import { useState } from "react";
import { Container, SIZES_MAP } from "./styles";

interface CountButtonPropsType {
  size?: keyof typeof SIZES_MAP;
}

export function CountButton({ size = "md" }: CountButtonPropsType) {
  const [count, setCount] = useState(1);

  function handleDecrementCount() {
    setCount(prevState => prevState - 1)
  }

  function handleIncrementCount() {
    setCount(prevState => prevState + 1)
  }

  return (
    <Container size={size}>
      <button type="button" onClick={handleDecrementCount} disabled={count === 1}>
        <Minus weight="bold" size={14} />
      </button>

      <span>{count}</span>

      <button type="button" onClick={handleIncrementCount}>
        <Plus weight="bold" size={14} />
      </button>
    </Container>
  );
}
