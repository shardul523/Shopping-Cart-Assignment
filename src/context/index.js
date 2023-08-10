import { createContext, useContext } from "react";

export const ShopContext = createContext();
export const CartContext = createContext();

export const useShop = () => useContext(ShopContext);
export const useCart = () => useContext(CartContext);
