import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { AppRoutes } from "./routes";
import { BrowserRouter } from "react-router-dom";

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}
