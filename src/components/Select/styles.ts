import styled from "styled-components";

export const SelectContainer = styled.div`
  position: relative;
  width: 100%;

  input {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    cursor: pointer;
    opacity: 0;

    :hover + div {
      background: ${({theme}) => theme.color.base.hover};
      color: ${({theme}) => theme.color.base.subtitle};
    }

    :checked + div {
      background: ${({theme}) => theme.color.purple[300]};
      border-color: ${({theme}) => theme.color.purple[500]};
    }
  }
`;

export const SelectContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: .75rem;
  padding: 1rem;
  background: ${({theme}) => theme.color.base.button};
  border-radius: 6px;
  text-transform: uppercase;
  border: 1px solid transparent;
  transition: .3s;
    
  p {
    font-size: ${({theme}) => theme.font.size.text.xs};
  }
`;