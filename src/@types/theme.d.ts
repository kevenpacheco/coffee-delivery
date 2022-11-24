import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      white: string;
      yellow: {
        700: string;
        500: string;
        300: string;
      };
      purple: {
        700: string;
        500: string;
        300: string;
      };
      base: {
        title: string;
        subtitle: string;
        text: string;
        label: string;
        hover: string;
        button: string;
        input: string;
        card: string;
        background: string;
      };
    };
    font: {
      size: {
        title: {
          xs: string;
          sm: string;
          md: string;
          lg: string;
          xl: string;
        };
        text: {
          xxs: string;
          xs: string;
          sm: string;
          md: string;
          lg: string;
          xl: string;
          xxl: string;
        };
      };
    };
    layout: {
      width: string;
      paddingX: string;
    }
  }
}