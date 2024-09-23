import DynamicRating from "@/components/rating";
import styles from "./rowCart.module.css";
import Image from "next/image";
import Link from "next/link";

const RowCart = ({ cartData }) => {
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
    rating,
  } = cartData;

  return (
    <div className={styles.cartDataContainer}>
      <div className={styles.productImageContainer}>
        <Link href={`/shop/${cartData?.title}`}>
          <Image
            className={`${styles.productImage} ${
              soldOut == true ? styles.soldOutImage : ""
            }`}
            src={image}
            alt={name}
          />
        </Link>
        <div>
          {soldOut === true ? (
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

      <div className={styles.cartDataInfoContainer}>
        <Link href={url} className={styles.productName}>
          {name}
        </Link>
        <Link
          href={`/shop/${title}`}
          className={`${styles.productName} ${styles.productTitle}`}
        >
          {title}
        </Link>
        <DynamicRating rating={rating} />
        <p className={styles.productsPriceContainer}>
          {currentPrice && (
            <span className={styles.productsCurrentPrice}>${currentPrice}</span>
          )}
          {oldPrice && (
            <del className={styles.productsOldPrice}>${oldPrice}</del>
          )}
        </p>
      </div>
    </div>
  );
};

export default RowCart;
