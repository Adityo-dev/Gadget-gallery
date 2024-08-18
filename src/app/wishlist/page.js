import styles from "./wishlist.module.css";
import Link from "next/link";
import Image from "next/image";

// import image
import image from "../../assets/images/products/games/4.png";

// import icon
import { GoCheck } from "react-icons/go";
import { RxCross1 } from "react-icons/rx";

const Wishlist = () => {
  return (
    <section className={styles.wishlistAllInfoAllDataContainer}>
      <div className={styles.wishlistAndHomeContainer}>
        <div className={styles.wishlistAndHome}>
          <Link className={styles.home} href={"/"}>
            Home
          </Link>
          /<p className={styles.wishlist}>Wishlist</p>
        </div>
      </div>

      <div className={styles.wishlistAllDataContainer}>
        <h1 className={styles.myWishlistText}>my wishlist</h1>

        <div className={styles.productCategoryContainer}>
          <p className={styles.productName}>product name</p>
          <p className={styles.productPriceAndStorkContainer}>
            <span className={styles.productPrice}>unit price</span>
            <span className={styles.productStorkStatus}>stork status</span>
          </p>
        </div>
      </div>

      <div className={styles.wishlistProductDataContainer}>
        <div className={styles.wishlistProductImageAndNameContainer}>
          <Image className={styles.wishlistProductImage} src={image} alt="" />
          <p className={styles.wishlistProductName}>
            Xbox Series S -1TB Gaming All-Digital Console, 4K Streaming Media
          </p>
        </div>

        <div className={styles.wishlistProductPriceBtnAmdStockContainer}>
          <div className={styles.wishlistPriceAndInStockContainer}>
            <p className={styles.priceContainer}>
              <span className={styles.currentPrice}>$279.99</span>
              <del className={styles.oldPrice}>$289.99</del>
            </p>
            <p className={styles.wishlistInStock}>
              <GoCheck className={styles.wishlistCheckIcon} /> In Stock
            </p>
          </div>

          <div className={styles.wishlistBtnAndCross}>
            <button className={styles.wishlistAddToCartBtn}>
              Select options
            </button>
            <RxCross1 className={styles.crossIcon} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wishlist;
