import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Checkout from "./pages/Checkout";
import MainContainer from "./components/MainContainer";

const App = () => {
  return (
    <Routes>
      <Route element={<MainContainer />}>
        <Route path="category/:categoryName" element={<Category />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
export default App;
