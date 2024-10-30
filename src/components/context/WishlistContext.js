"use client";
import { createContext, useContext, useState, useEffect } from "react";

const WishlistContext = createContext();

export const useWishlist = () => useContext(WishlistContext);

export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState(() => {
    // Initial load from localStorage
    const savedWishlist = localStorage.getItem("wishlistItems");
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

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

  // Update localStorage when wishlistItems changes
  useEffect(() => {
    localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  return (
    <WishlistContext.Provider
      value={{ wishlistItems, addToWishlist, removeFromWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
