import { InputHTMLAttributes } from "react";
import { InputContainer } from "./styles";

interface InputPropType extends InputHTMLAttributes<HTMLInputElement> {
  isOptional?: boolean;
}

export function Input({ isOptional, ...props }: InputPropType) {
  return (
    <InputContainer>
      <input {...props} />
      {isOptional && <span>Opcional</span>}
    </InputContainer>
  );
}
