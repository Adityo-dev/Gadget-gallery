"use client";

import { createContext, useContext, useReducer } from "react";
import reducer from "../reducer/CartReducer";

const CartContext = createContext();

const initialState = {
  cart: [],
  // total_item: "",
  // total_amount: "",
  // shopping_fee: 50000,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (name, title, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { name, title, product } });
  };

  const removeCart = (id) => {
    dispatch({ type: "REMOVE_CART", payload: id });
  };

  return (
    <CartContext.Provider value={{ ...state, addToCart, removeCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
