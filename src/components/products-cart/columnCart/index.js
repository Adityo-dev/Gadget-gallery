import styles from "./columnCart.module.css";
import Image from "next/image";
import Link from "next/link";

const ColumnCart = ({ cartData }) => {
  return (
    <main className={styles.cartAllDataContainer}>
      <div>
        <Link href={cartData?.url}>
          <Image className={styles.cartImage} src={cartData?.image} alt="" />
        </Link>
        <div className={styles.hotAndDiscountContainer}>
          <p
            className={
              cartData?.discount
                ? styles.productDiscount
                : styles.productDiscountNone
            }
          >
            -{cartData?.discount}%
          </p>
          <p
            className={
              cartData?.hot === true ? styles.productHot : styles.productHotNone
            }
          >
            {cartData?.hot ? "Hot" : ""}
          </p>
        </div>
      </div>

      <div className={styles.cartInfoContainer}>
        <Link href={cartData?.url} className={styles.productName}>
          {cartData?.name}
        </Link>
        <Link href={cartData?.url} className={styles.productTitle}>
          {cartData?.title}
        </Link>
        <p className={styles.productsPriceContainer}>
          <span className={styles.productsCurrentPrice}>
            ${cartData?.currentPrice}
          </span>
          <del className={styles.productsOldPrice}>${cartData?.oldPrice}</del>
        </p>
      </div>

      <div className={styles.gg}>
        <p>Hi</p>
      </div>
    </main>
  );
};

export default ColumnCart;
