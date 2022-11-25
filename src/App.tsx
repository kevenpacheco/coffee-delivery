import { GlobalStyle } from "./styles/global";
import { Home } from "./pages/Home";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { Checkout } from "./pages/Checkout";
import { Success } from "./pages/Success";

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {/* <Home /> */}
      {/* <Checkout /> */}
      <Success />
    </ThemeProvider>
  );
}
