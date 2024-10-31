"use client";
import { createContext, useContext, useReducer, useEffect } from "react";
import reducer from "../reducer/CartReducer";

const CartContext = createContext();

// Local storage থেকে ডেটা পেতে ফাংশন
const getLocationCartData = () => {
  if (typeof window !== "undefined") {
    // ✅ চেক করা হচ্ছে window defined আছে কিনা
    let newCartData = localStorage.getItem("gadgetGalleryCart");
    if (!newCartData) {
      return [];
    } else {
      return JSON.parse(newCartData);
    }
  }
  return []; // ✅ server side এ খালি array ফেরত দিচ্ছে
};

const initialState = {
  cart: getLocationCartData(),
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // addToCart ফাংশন
  const addToCart = (name, title, counter, product) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { name, title, counter, product },
    });
  };

  // পণ্যের পরিমাণ বাড়ানো বা কমানোর ফাংশন
  const setDecrement = (id) => {
    dispatch({ type: "SET_DECREMENT", payload: id });
  };

  const setIncrement = (id) => {
    dispatch({ type: "SET_INCREMENT", payload: id });
  };

  // আলাদা আইটেম রিমুভ করার ফাংশন
  const removeCart = (id) => {
    dispatch({ type: "REMOVE_CART", payload: id });
  };

  // Cart ডেটা localStorage এ সংরক্ষণ করতে useEffect
  useEffect(() => {
    if (typeof window !== "undefined") {
      // ✅ চেক করা হচ্ছে window defined আছে কিনা
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
