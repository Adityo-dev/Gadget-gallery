"use client";
import { createContext, useContext, useReducer } from "react";
import reducer from "../reducer/CartReducer";

const CartContext = createContext();

const initialState = {
  cart: [],
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (name, title, counter, product) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { name, title, counter, product },
    });
  };

  // setIncrement and setDecrement the product
  const setDecrement = (id) => {
    dispatch({ type: "SET_DECREMENT", payload: id });
  };

  const setIncrement = (id) => {
    dispatch({ type: "SET_INCREMENT", payload: id });
  };

  // to remove the individual item from cart
  const removeCart = (id) => {
    dispatch({ type: "REMOVE_CART", payload: id });
  };

  return (
    <CartContext.Provider
      value={{ ...state, addToCart, removeCart, setDecrement, setIncrement }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
