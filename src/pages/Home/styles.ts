import styled from "styled-components";
import bgIntroImg from '../../assets/intro-background.png'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const IntroContainer = styled.section`
  width: 100%;
  display: grid;
  place-items: center;
  min-height: 34rem;
  background: url(${bgIntroImg}) no-repeat center;
  background-size: cover;
  padding: ${({theme}) => `0 ${theme.layout.paddingX}`};
  
  > div {
    width: ${({theme}) => theme.layout.width};
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 1120px) {
      > img {
        display: none;
      }
    }
  }
`;

export const TitleContainer = styled.div`
  max-width: 36.75rem;

  h1 {
    color: ${({theme}) => theme.color.base.title};
    font-size: ${({theme}) => theme.font.size.title.xl};
  }
  
  p {
    margin-top: 1rem;
    font-size: ${({theme}) => theme.font.size.text.xl};
    color: ${({theme}) => theme.color.base.subtitle};
  }
`;

export const DescriptionsContainer = styled.div`
  margin-top: 4.125rem;
  display: grid;
  grid-template-columns: repeat(2, max-content);
  gap: 1.25rem 2.5rem;
`;

export const DescriptionItem = styled.div`
  display: flex;
  align-items: center;
  gap: .75rem;
  
  div {
    padding: .5rem;
    border-radius: 50%;
    color: ${({theme}) => theme.color.base.background};
    display: grid;
    place-items: center;
  }

  &:nth-child(1) {
    div {
      background: ${({theme}) => theme.color.yellow[700]}
    }
  }

  &:nth-child(2) {
    div {
      background: ${({theme}) => theme.color.base.text}
    }
  }

  &:nth-child(3) {
    div {
      background: ${({theme}) => theme.color.yellow[500]}
    }
  }

  &:nth-child(4) {
    div {
      background: ${({theme}) => theme.color.purple[500]}
    }
  }
`;

export const CoffeesContainer = styled.section`
  width: ${({theme}) => theme.layout.width};
  padding: 2rem 0;

  & > div {
    padding: ${({theme}) => `0 ${theme.layout.paddingX}`}
  }

  h2 {
    color: ${({theme}) => theme.color.base.subtitle};
    font-size: ${({theme}) => theme.font.size.title.lg};
  }
`;

export const CoffeeList = styled.ul`
  margin-top: 3.375rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15.25rem, 1fr));
  gap: 2.5rem 2rem;
`;