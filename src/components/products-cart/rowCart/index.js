import styles from "./rowCart.module.css";
import Image from "next/image";
import Link from "next/link";

const RowCart = ({ cartData }) => {
  return (
    <div className={styles.cartDataContainer}>
      <div className={styles.productImageContainer}>
        <Image className={styles.productImage} src={cartData?.image} alt="" />
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

      <div className={styles.cartDataInfoContainer}>
        <Link href={cartData?.url} className={styles.productName}>
          {cartData?.name}
        </Link>
        <Link
          href={cartData?.url}
          className={`${styles.productName} ${styles.productTitle}`}
        >
          {cartData?.title}
        </Link>
        <p className={styles.productsPriceContainer}>
          <span className={styles.productsCurrentPrice}>
            ${cartData?.currentPrice}
          </span>

          <del className={styles.productsOldPrice}>${cartData?.oldPrice}</del>
        </p>
      </div>
    </div>
  );
};

export default RowCart;
