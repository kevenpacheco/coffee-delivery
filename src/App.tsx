import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { AppRoutes } from "./routes";
import { BrowserRouter } from "react-router-dom";
import { ShoppingCartContextProvider } from "./contexts/ShoppingCartContext";

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <ShoppingCartContextProvider>
          <AppRoutes />
        </ShoppingCartContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}
