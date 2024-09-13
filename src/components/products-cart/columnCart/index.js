import styles from "./columnCart.module.css";
import Image from "next/image";
import Link from "next/link";
import CartButton from "../cartBtn";

const ColumnCart = ({ cartData }) => {
  return (
    <main className={styles.cartAllDataContainer}>
      <div>
        <Link href={`/shop/${cartData?.title}`}>
          <div className={styles.cartImage}>
            <Image
              className={`${styles.cartImage} ${
                cartData?.soldOut == true ? styles.soldOutImage : ""
              }`}
              src={cartData?.image}
              alt={cartData?.name}
            />
          </div>
        </Link>

        <div>
          {cartData?.soldOut == true ? (
            <p
              className={
                cartData?.soldOut === true ? styles.soldOut : styles.soldOutNone
              }
            >
              {cartData?.soldOut ? "Sold Out" : ""}
            </p>
          ) : (
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
                  cartData?.hot === true
                    ? styles.productHot
                    : styles.productHotNone
                }
              >
                {cartData?.hot ? "Hot" : ""}
              </p>
            </div>
          )}
        </div>
      </div>

      <div className={styles.cartInfoContainer}>
        <Link href={cartData?.url} className={styles.productName}>
          {cartData?.name}
        </Link>
        <Link href={`/shop/${cartData?.title}`} className={styles.productTitle}>
          {cartData?.title}
        </Link>
        <p className={styles.productsPriceContainer}>
          <span className={styles.productsCurrentPrice}>
            ${cartData?.currentPrice}
          </span>
          <del className={styles.productsOldPrice}>${cartData?.oldPrice}</del>
        </p>
      </div>

      <div className={styles.cartButton}>
        <CartButton />
      </div>
    </main>
  );
};

export default ColumnCart;
