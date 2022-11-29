import styled from "styled-components";

export const Container = styled.div`
  padding: ${({theme}) => `2.5rem ${theme.layout.paddingX}`}; 
`;

export const Content = styled.form`
  margin: 0 auto; 
  width: ${({theme}) => `${theme.layout.width}`};
  display: grid;
  grid-template-columns: 1fr 28rem;
  align-items: flex-start;
  gap: 2rem;

  > div {
    width: 100%;
    display: grid;
    gap: .75rem;
  }

  h2 {
    margin-bottom: 1rem;
  }

  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
  }
`;

export const OrderDetailsCard = styled.div`
  padding: 2.5rem;
  background: ${({theme}) => theme.color.base.card};
  border-radius: 6px;
`;

export const OrderDetailsHeader = styled.header`
  display: flex;
  gap: .5rem;
  margin-bottom: 2rem;
  
  div {
    p:first-child {
      color: ${({theme}) => theme.color.base.subtitle};
    }

    p:last-child {
      color: ${({theme}) => theme.color.base.title};
      font-size: ${({theme}) => theme.font.size.text.sm};
      margin-top: .125rem;
    }
  }
`;

export const InputsContainer = styled.div`
  display: grid;
  grid-template-columns: 12.5rem 1fr 3.75rem;
  gap: 1rem .75rem;

  > div {
    :nth-child(2) {
      grid-column: 1 / 4;
    }
    
    :nth-child(4) {
      grid-column: 2 / 4;
    }
  }

  @media (max-width: 570px) {
    grid-template-columns: 1fr 3.75rem;

    > div {
      :nth-child(2),
      :nth-child(3),
      :nth-child(4),
      :nth-child(5) {
        grid-column: 1 / 3;
      }
    }
  }
`;

export const PaymentOptions = styled.div`
  display: flex;
  align-items: center;
  gap: .75rem;

  @media (max-width: 710px) {
    flex-direction: column;
  }
`;

export const OrderSummary = styled.div`
  padding: 2.5rem;
  background: ${({theme}) => theme.color.base.card};
  border-radius: 6px 44px;
  display: grid;
  gap: 1.5rem;
`;

export const Separator = styled.hr`
  border: 1px solid ${({theme}) => theme.color.base.button};
`;

export const OrderTotalPriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: .75rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    :not(:last-child) {
      p:first-child {
        font-size: ${({theme}) => theme.font.size.text.sm}
      }
    }

    :last-child {
      p {
        font-weight: 700;
        font-size: ${({theme}) => theme.font.size.text.xl};
      }
    }
  }
`;

export const ConfirmOrderButton = styled.button`
  background: ${({theme}) => theme.color.yellow[500]};
  display: grid;
  place-items: center;
  padding: 0 .5rem;
  height: 2.875rem;
  width: 100%;
  border-radius: 6px;
  text-transform: uppercase;
  color: ${({theme}) => theme.color.white};
  font-weight: 700;
  font-size: ${({theme}) => theme.font.size.text.sm};
  transition: 0.3s;

  :hover:not(:disabled) {
    background: ${({theme}) => theme.color.yellow[700]};
  }
  
  :disabled {
    opacity: .5;
    cursor: not-allowed;
  }
`;