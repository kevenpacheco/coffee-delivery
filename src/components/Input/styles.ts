import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: .25rem;
  height: 2.625rem;
  background: ${({theme}) => theme.color.base.input};
  border: 1px solid #e6e5e5;
  border-radius: 4px;
  position: relative;
  transform: .3s;
  
  :focus-within {
    border-color: ${({theme}) => theme.color.yellow[700]};
  }
  
  input {
    width: 100%;
    font-size: ${({theme}) => theme.font.size.text.sm};
    background: transparent;
    border: 0;
    padding: 0 .75rem;

    :placeholder {
      color: ${({theme}) => theme.color.base.label};
    }
  }

  input:focus-visible, input:not([value=""]) {
    + label {
      font-size: .75rem;
      transform: translate(-1px, calc(-100% - .25rem));
      border-radius: 4px 4px 0 0;
      border: 1px solid transparent;
      background-origin: border-box;
      background-clip: padding-box, border-box;
    }
  }

  input:not([value=""]) {
    + label {
      border-left-color: #e6e5e5;
      background-image: 
        linear-gradient(${({theme}) => theme.color.base.input}, ${({theme}) => theme.color.base.input}),
        linear-gradient(#e6e5e5 50%, transparent 50%);
    }
  }

  input:focus-visible {
    + label {
      border-left-color: ${({theme}) => theme.color.yellow[700]};
      background-image: 
        linear-gradient(${({theme}) => theme.color.base.input}, ${({theme}) => theme.color.base.input}),
        linear-gradient(${({theme}) => theme.color.yellow[700]} 50%, transparent 50%);
    }
  }

  label {
    position: absolute;
    left: 0;
    padding: 0 .75rem;
    transition: .3s;
    pointer-events: none;
  }
  
  span {
    color: ${({theme}) => theme.color.base.label};
    font-size: ${({theme}) => theme.font.size.text.xs};
    font-style: italic;
    padding-right: .75rem;
  }
`;