import styles from "./cart.module.css";
import Image from "next/image";
import Link from "next/link";

const Cart = () => {
  return (
    <div>
      <div className={styles.cartAndHomeContainer}>
        <div className={styles.cartAndHome}>
          <Link className={styles.home} href={"/"}>
            Home
          </Link>
          /<p className={styles.cart}> Shopping Cart</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
