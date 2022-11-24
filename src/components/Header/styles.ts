import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 6.5rem;

  > div {
    display: flex;
    align-items: center;
    gap: .75rem;
  }
`;

export const Location = styled.div`
  display: flex;
  align-items: center;
  gap: .25rem;
  padding: .5rem;
  background: ${({theme}) => theme.color.purple[300]};
  border-radius: 6px;
  color: ${({theme}) => theme.color.purple[500]};
  font-size: ${({theme}) => theme.font.size.text.sm};
  line-height: 130%;
`;

export const Cart = styled.div`
  display: grid;
  place-items: center;
  padding: .5rem;
  background: ${({theme}) => theme.color.yellow[300]};
  border-radius: 6px;
  color: ${({theme}) => theme.color.yellow[500]};
`;