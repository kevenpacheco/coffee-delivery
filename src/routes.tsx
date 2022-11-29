import { Routes, Route } from "react-router-dom";
import { useScrollToTop } from "./hooks/useScrollToTop";
import { Checkout } from "./pages/Checkout";
import { Home } from "./pages/Home";
import { Success } from "./pages/Success";

export function AppRoutes() {
  useScrollToTop();

  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/checkout" element={<Checkout />}/>
      <Route path="/success" element={<Success />}/>
    </Routes>
  )
}
