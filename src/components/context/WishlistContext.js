"use client";
import { createContext, useContext, useState } from "react";

const WishlistContext = createContext();

export const useWishlist = () => useContext(WishlistContext);

export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([]);

  const addToWishlist = (product) => {
    const existingProduct = wishlistItems.find(
      (item) =>
        item.title === product.title &&
        item.currentPrice === product.currentPrice
    );
    if (!existingProduct) {
      setWishlistItems((prevItems) => [...prevItems, product]);
    }
  };

  const removeFromWishlist = (title) => {
    setWishlistItems((prevItems) =>
      prevItems.filter((item) => item.title !== title)
    );
  };

  return (
    <WishlistContext.Provider
      value={{ wishlistItems, addToWishlist, removeFromWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
