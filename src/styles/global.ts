import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus-visible {
    outline: none;
  }

  body, input, button, textarea {
    font-family: 'Roboto', sans-serif;
    color: ${({theme}) => theme.color.base.text};
  }

  body {
    background: ${({theme}) => theme.color.base.background};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
  }

  button {
    cursor: pointer;
    border: 0;
  }
`;