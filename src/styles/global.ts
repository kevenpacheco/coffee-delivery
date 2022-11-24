import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, input, button, textarea {
    font-family: 'Roboto', sans-serif;
  }

  body {
    background: ${({theme}) => theme.color.base.background};
    color: ${({theme}) => theme.color.base.text};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    line-height: 130%;
  }
`;