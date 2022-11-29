import styled from "styled-components";

interface PropsType {
  isVisible: boolean;
}

export const Container = styled.div<PropsType>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({theme}) => theme.color.base.card};
  border-radius: 6px 36px;
  padding: 0 1.5rem 1.25rem;
  opacity: ${({isVisible}) => isVisible ? '1' : '0'};
  transform: translateY(${({isVisible}) => isVisible ? '0' : '20%'});
  transition: .5s ease-out;

  img {
    margin-top: -1.25rem;
  }

  h3 {
    font-weight: 700;
    color: ${({theme}) => theme.color.base.subtitle};
    font-size: 1.25rem;
    text-align: center;
    margin-top: .75rem;
  }
  `;

export const TagsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: .25rem;
  margin-top: .5rem;

  span {
    display: grid;
    place-items: center;
    background: ${({theme}) => theme.color.yellow[300]};
    color: ${({theme}) => theme.color.yellow[500]};
    border-radius: 100px;
    padding: .25rem .5rem;
    font-size: ${({theme}) => theme.font.size.text.xxs};
    font-weight: bold;
    text-transform: uppercase;
  }
`;

export const Description = styled.p`
  flex: 1;
  margin-top: 1rem;
  text-align: center;
  font-size: .875rem;
  color: ${({theme}) => theme.color.base.label};
`;

export const FooterCard = styled.footer`
  width: 100%;
  margin-top: 2.0625rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Price = styled.p`
  font-size: ${({theme}) => theme.font.size.text.sm};
  
  strong {
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: ${({theme}) => theme.font.size.title.md};
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: .5rem;
`;

export const CartButton = styled.button`
  display: grid;
  place-items: center;
  padding: .5rem;
  background: ${({theme}) => theme.color.purple[700]};
  border-radius: 6px;
  color: ${({theme}) => theme.color.base.card};
  transition: .3s;

  :hover:not(:disabled) {
    background: ${({theme}) => theme.color.purple[500]};
  }

  :disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;