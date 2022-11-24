import styled from "styled-components";

export const SIZES_MAP = {
  sm: '2rem',
  md: '2.375rem'
}

interface StyleCountButtonType {
  size: keyof typeof SIZES_MAP;
}

export const Container = styled.div<StyleCountButtonType>`
  width: min-content;
  display: flex;
  align-items: center;
  gap: .25rem;
  background: ${({ theme }) => theme.color.base.button};
  padding: 0 .5rem;
  border-radius: 6px;
  height: ${({ size }) => SIZES_MAP[size]};

  button {
    color: ${({ theme }) => theme.color.purple[500]};
    display: grid;
    place-items: center;
    background: transparent;
    transition: color .3s;

    :not(:disabled):hover {
      color: ${({ theme }) => theme.color.purple[700]};
    }

    :disabled {
      cursor: not-allowed;
    }
  }

  span {
    min-width: 1.25rem;
    text-align: center;
  }
`;
