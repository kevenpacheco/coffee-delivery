import { GlobalStyle } from "./styles/global";
import { Home } from "./pages/Home";
import DefaultLayout from "./layouts/defaultLayout";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <DefaultLayout>
        <Home />
      </DefaultLayout>
    </ThemeProvider>
  );
}
