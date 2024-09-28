"use client";
import styles from "./cart.module.css";
import Image from "next/image";
import Link from "next/link";
// import image
import emptyCart from "../../assets/images/other/emptyCart.png";
// import components
import DynamicBreadcrumb from "@/components/dynamicBreadcrumb";
import { useCart } from "../../components/context/CartContext";
import TransparentButton from "@/components/buttonGroup/transparentButton";

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <main>
      <section>
        <DynamicBreadcrumb />
      </section>

      <section className={styles.cartMainDataContainer}>
        <h2>Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <div className={styles.emptyCartContainer}>
            <Image className={styles.emptyCartImage} src={emptyCart} alt="" />
            <p className={styles.emptyTitle}>Your cart is currently empty.</p>
            <TransparentButton btnName={"Return to shop"} btnUrl={"/shop"} />
          </div>
        ) : (
          cartItems.map((item) => (
            <section className={styles.productCartContainer} key={item.id}>
              <div className={styles.imageAndNameContainer}>
                <Image
                  className={styles.productImage}
                  src={item.image}
                  alt=""
                />
                <p className={styles.productName}>{item.title}</p>
              </div>
              <div className={styles.productPriceAndRemoveContainer}>
                <p>{item.currentPrice}</p>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
                <p>{item.currentPrice}</p>
              </div>
            </section>
          ))
        )}
      </section>
    </main>
  );
};

export default Cart;
