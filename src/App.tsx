import { GlobalStyle } from "./styles/global";
import { Home } from "./pages/Home";
import DefaultLayout from "./layouts/defaultLayout";

export function App() {
  return (
    <>
      <GlobalStyle />
      <DefaultLayout>
        <Home />
      </DefaultLayout>
    </>
  )
}
