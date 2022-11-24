import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --color-white: #FFFFFF;

    --color-yellow-700: #C47F17;
    --color-yellow-500: #DBAC2C;
    --color-yellow-300: #F1E9C9;

    --color-purple-700: #4B2995;
    --color-purple-500: #8047F8;
    --color-purple-300: #EBE5F9;

    --color-title: #272221;
    --color-subtitle: #403937;
    --color-text: #574F4D;
    --color-label: #8D8686;
    --color-hover: #D7D5D5;
    --color-button: #E6E5E5;
    --color-input: #EDEDED;
    --color-card: #F3F2F2;
    --color-background: #FAFAFA;

    --font-header-xs: 1.125rem;
    --font-header-sm: 1.25rem;
    --font-header-md: 1.5rem;
    --font-header-lg: 2rem;
    --font-header-xl: 3rem;

    --font-text-xxs: .625rem;
    --font-text-xs: .75rem;
    --font-text-sm: .875rem;
    --font-text-md: 1rem;
    --font-text-lg: 1.125rem;
    --font-text-xl: 1.25rem;
    --font-text-xxl: 1.5rem;
  }

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, input, button, textarea {
    font-family: 'Roboto', sans-serif;
  }

  body {
    background: var(--color-background);
    color: var(--color-text);
  }
`;