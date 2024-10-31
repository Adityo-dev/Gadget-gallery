"use client";
import { createContext, useContext, useReducer, useEffect } from "react";
import reducer from "../reducer/CartReducer";

const CartContext = createContext();

const getLocationCartData = () => {
  if (typeof window !== "undefined") {
    let newCartData = localStorage.getItem("gadgetGalleryCart");
    if (!newCartData) {
      return [];
    } else {
      return JSON.parse(newCartData);
    }
  }
  return [];
};

const initialState = {
  cart: getLocationCartData(),
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (name, title, counter, product) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { name, title, counter, product },
    });
  };

  const setDecrement = (id) => {
    dispatch({ type: "SET_DECREMENT", payload: id });
  };

  const setIncrement = (id) => {
    dispatch({ type: "SET_INCREMENT", payload: id });
  };

  const removeCart = (id) => {
    dispatch({ type: "REMOVE_CART", payload: id });
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("gadgetGalleryCart", JSON.stringify(state.cart));
    }
  }, [state.cart]);

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
