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
import { useEffect, useState } from "react";
import { Loading } from "./components/Loading";

export function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timingDelayInSeconds = 1000 * 4;

    const delay = setTimeout(() => {
      setIsLoading(false)
    }, timingDelayInSeconds);
    
    return () => {
      clearTimeout(delay);
    }
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      {isLoading ? (
        <Loading />
      ) : (
        <BrowserRouter>
          <ShoppingCartContextProvider>
            <OrderDetailsContextProvider>
              <Header />
              <AppRoutes />
            </OrderDetailsContextProvider>
          </ShoppingCartContextProvider>
        </BrowserRouter>
      )}
      <ToastContainer position="bottom-center" />
    </ThemeProvider>
  );
}
