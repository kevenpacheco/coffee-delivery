import { Minus, Plus } from "phosphor-react";
import { Container, SIZES_MAP } from "./styles";

interface CountButtonPropsType {
  count: number;
  size?: keyof typeof SIZES_MAP;
  onIncrement: () => void;
  onDecrement: () => void;
}

export function CountButton({ count, size = "md", onDecrement, onIncrement }: CountButtonPropsType) {
  return (
    <Container size={size}>
      <button type="button" onClick={onDecrement} disabled={count === 1}>
        <Minus weight="bold" size={14} />
      </button>

      <span>{count}</span>

      <button type="button" onClick={onIncrement}>
        <Plus weight="bold" size={14} />
      </button>
    </Container>
  );
}
