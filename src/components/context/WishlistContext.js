"use client";
import { createContext, useContext, useState } from "react";

// Create Wishlist Context
const WishlistContext = createContext();

// Custom hook to use Wishlist Context
export const useWishlist = () => useContext(WishlistContext);

// WishlistProvider component to wrap around the components needing wishlist access
export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([]);

  // Function to add product to wishlist
  const addToWishlist = (product) => {
    // Check if the product already exists in the wishlist
    const existingProduct = wishlistItems.find(
      (item) => item.id === product.id
    );
    if (!existingProduct) {
      setWishlistItems((prevItems) => [...prevItems, product]);
    }
  };

  // Function to remove product from wishlist
  const removeFromWishlist = (id) => {
    setWishlistItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Provide the wishlist state and functions to the children
  return (
    <WishlistContext.Provider
      value={{ wishlistItems, addToWishlist, removeFromWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
