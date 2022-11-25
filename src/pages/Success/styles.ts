import styled from "styled-components";

export const Container = styled.div`
  padding: 5rem ${({ theme }) => theme.layout.paddingX};

  > div {
    width: ${({ theme }) => theme.layout.width};
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    @media (max-width: 1000px) {
      flex-direction: column;
      gap: 2.5rem;
    }
  }
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.font.size.title.lg};
  color: ${({ theme }) => theme.color.yellow[700]};
`;

export const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.font.size.text.lg};
  color: ${({ theme }) => theme.color.base.subtitle};
  margin-top: .25rem;
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5rem;
  gap: 2rem;
  margin-top: 2.5rem;
  
  border: 1px solid transparent;
  border-radius: 6px 36px;
  background-image: linear-gradient(${({ theme }) => theme.color.base.background}, ${({ theme }) => theme.color.base.background}), linear-gradient(102.89deg, #DBAC2C 2.61%, #8047F8 98.76%);
  background-origin: border-box;
  background-clip: padding-box, border-box;
`;

export const DetailContainer = styled.div`
  display: grid;
  grid-template-columns: 2rem 1fr;
  gap: .75rem;

  :nth-child(1) {
    div:first-child {
      background: ${({ theme }) => theme.color.purple[500]};
    }
  }
  
  :nth-child(2) {
    div:first-child {
      background: ${({ theme }) => theme.color.yellow[500]};
    }
  }
  
  :nth-child(3) {
    div:first-child {
      background: ${({ theme }) => theme.color.yellow[700]};
    }
  }

  div:first-child {
    display: grid;
    place-items: center;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    color: ${({ theme }) => theme.color.base.background};
  }
`;