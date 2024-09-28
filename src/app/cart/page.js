"use client";
import styles from "./cart.module.css";
import DynamicBreadcrumb from "@/components/dynamicBreadcrumb";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div>
      <DynamicBreadcrumb />
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id}>
            <p>{item.title}</p>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
