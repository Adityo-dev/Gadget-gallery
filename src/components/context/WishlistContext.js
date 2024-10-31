"use client";
import { createContext, useContext, useState, useEffect } from "react";

const WishlistContext = createContext();

export const useWishlist = () => useContext(WishlistContext);

export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState(() => {
    // ✅ Initial load from localStorage, only if window is defined
    if (typeof window !== "undefined") {
      const savedWishlist = localStorage.getItem("wishlistItems");
      return savedWishlist ? JSON.parse(savedWishlist) : [];
    }
    return []; // ✅ server side এ খালি array ফেরত দিচ্ছে
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

  // ✅ Update localStorage only on client-side
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
    }
  }, [wishlistItems]);

  return (
    <WishlistContext.Provider
      value={{ wishlistItems, addToWishlist, removeFromWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
