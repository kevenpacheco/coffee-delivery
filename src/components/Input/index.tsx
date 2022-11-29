import { InputHTMLAttributes } from "react";
import { InputContainer } from "./styles";

interface InputPropType extends InputHTMLAttributes<HTMLInputElement> {
  isOptional?: boolean;
  label: string;
}

export function Input({ isOptional, label, ...props }: InputPropType) {
  return (
    <InputContainer>
      <input {...props} />

      <label htmlFor={props.id}>{label}</label>

      {isOptional && <span>Opcional</span>}
    </InputContainer>
  );
}
