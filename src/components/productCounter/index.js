"use client";
import styles from "./productCounter.module.css";
import React, { useState } from "react";

const ProductCounter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) {
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

      <button className={styles.addToCartBtn}>Add to cart</button>
    </div>
  );
};

export default ProductCounter;
