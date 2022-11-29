import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { AppRoutes } from "./routes";
import { BrowserRouter } from "react-router-dom";
import { ShoppingCartContextProvider } from "./contexts/ShoppingCartContext";
import { Header } from "./components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { OrderDetailsContextProvider } from "./contexts/OrderDetailsContext";

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <ShoppingCartContextProvider>
          <OrderDetailsContextProvider>
            <Header />
            <AppRoutes />
          </OrderDetailsContextProvider>
        </ShoppingCartContextProvider>
      </BrowserRouter>
      <ToastContainer position="bottom-center" />
    </ThemeProvider>
  );
}
