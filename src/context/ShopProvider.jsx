import { useState } from "react";
import CATEGORIES from "../assets/categories.json";
import PRODUCTS from "../assets/products.json";
import { ShopContext } from "./ShopContext";

const ShopProvider = ({ children }) => {
  const [categories] = useState(CATEGORIES);
  const [products] = useState(PRODUCTS);

  return (
    <ShopContext.Provider value={{ categories, products }}>
      {children}
    </ShopContext.Provider>
  );
};
export default ShopProvider;
