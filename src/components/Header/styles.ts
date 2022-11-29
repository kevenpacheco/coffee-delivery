import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
  height: 6.5rem;
  padding: ${({theme}) => `0 ${theme.layout.paddingX}`};
  position: sticky;
  top: 0;
  background: ${({theme}) => theme.color.base.background};
  z-index: 99;
`;

export const Content = styled.header`
  width: ${({theme}) => theme.layout.width};
  display: flex;
  align-items: center;
  justify-content: space-between;

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
`;

export const Cart = styled.div`
  display: grid;
  place-items: center;
  padding: .5rem;
  background: ${({theme}) => theme.color.yellow[300]};
  border-radius: 6px;
  color: ${({theme}) => theme.color.yellow[500]};
  position: relative;

  span {
    position: absolute;
    top: -.5625rem;
    right: -.5625rem;

    display: grid;
    place-items: center;
    width: 1.25rem;
    height: 1.25rem;
    background-color: ${({theme}) => theme.color.yellow[700]};
    border-radius: 50%;
    color: ${({theme}) => theme.color.white};
    font-size: ${({theme}) => theme.font.size.text.sm};
    font-weight: 700;
  }
`;