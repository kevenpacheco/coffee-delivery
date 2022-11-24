import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: .25rem;
  padding: 0 .75rem;
  height: 2.625rem;
  background: ${({theme}) => theme.color.base.input};
  border: 1px solid #e6e5e5;
  border-radius: 4px;
  
  :focus-within {
    border-color: ${({theme}) => theme.color.yellow[700]};
  }
  
  input {
    width: 100%;
    font-size: ${({theme}) => theme.font.size.text.sm};
    background: transparent;
    border: 0;

    :placeholder {
      color: ${({theme}) => theme.color.base.label};
    }
  }
  
  span {
    color: ${({theme}) => theme.color.base.label};
    font-size: ${({theme}) => theme.font.size.text.xs};
    font-style: italic;
  }
`;