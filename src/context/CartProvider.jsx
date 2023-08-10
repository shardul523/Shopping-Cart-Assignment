import { useReducer } from "react";
import { CartContext } from ".";

const reducer = (state, action) => {
  const itemIndex = state.findIndex((product) => product.id === action.itemId);

  const newState = [...state];

  switch (action.type) {
    case "remove":
      if (itemIndex === -1) return state;
      newState[itemIndex].count--;

      if (newState[itemIndex].count === 0)
        return newState.filter((product) => product.id !== action.itemId);
      else return newState;
    case "add":
      if (itemIndex === -1)
        return [
          ...state,
          { id: action.itemId, count: 1, price: action.itemPrice },
        ];

      return state.map((product) => {
        if (product.id !== action.itemId) return product;
        return { ...product, count: product.count + 1 };
      });
    default:
      return state;
  }
};

const initialCart = [];

const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(reducer, initialCart);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;
