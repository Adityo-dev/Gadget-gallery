import styles from "./columnCart.module.css";
import Image from "next/image";
import Link from "next/link";

// import components
import CartButton from "../cartBtn";

const ColumnCart = ({ cartData }) => {
  const {
    image,
    name,
    title,
    currentPrice,
    oldPrice,
    discount,
    soldOut,
    hot,
    url,
  } = cartData;

  return (
    <main className={styles.cartAllDataContainer}>
      <div>
        <Link href={`/shop/${title}`}>
          <div className={styles.cartImage}>
            <Image
              className={`${styles.cartImage} ${
                soldOut == true ? styles.soldOutImage : ""
              }`}
              src={image}
              alt={name}
            />
          </div>
        </Link>

        <div>
          {soldOut == true ? (
            <p className={soldOut === true ? styles.soldOut : ""}>
              {"Sold Out"}
            </p>
          ) : (
            <div className={styles.hotAndDiscountContainer}>
              {discount && (
                <p className={styles.productDiscount}>-{discount}%</p>
              )}
              {hot && <p className={styles.productHot}>{"Hot"}</p>}
            </div>
          )}
        </div>
      </div>

      <div className={styles.cartInfoContainer}>
        <Link href={url} className={styles.productName}>
          {name}
        </Link>
        <Link href={`/shop/${title}`} className={styles.productTitle}>
          {title}
        </Link>
        <p className={styles.productsPriceContainer}>
          {currentPrice && (
            <span className={styles.productsCurrentPrice}>${currentPrice}</span>
          )}
          {oldPrice && (
            <del className={styles.productsOldPrice}>${oldPrice}</del>
          )}
        </p>
      </div>

      <div className={styles.cartButton}>
        <CartButton cartData={cartData} />
      </div>
    </main>
  );
};

export default ColumnCart;
