import { GlobalStyle } from "./styles/global";
import { Home } from "./pages/Home";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
}
