"use client";
import styles from "./productCounter.module.css";
import React, { useState } from "react";
// components
import { useCartContext } from "../context/CartContext";

const ProductCounter = ({ product }) => {
  const { name, title } = product;

  const [count, setCount] = useState(1);
  const { addToCart } = useCartContext();

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className={styles.cartCounterBtnContainer}>
      <div className={styles.cartCounterContainer}>
        <button className={styles.cartCounterBtn} onClick={decrement}>
          -
        </button>
        <span className={styles.cartCounterCounter}>{count}</span>
        <button className={styles.cartCounterBtn} onClick={increment}>
          +
        </button>
      </div>

      <button
        onClick={() => addToCart(name, title, count, product)}
        className={styles.addToCartBtn}
      >
        Add to cart
      </button>
    </div>
  );
};

export default ProductCounter;
