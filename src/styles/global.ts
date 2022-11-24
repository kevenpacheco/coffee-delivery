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
`;