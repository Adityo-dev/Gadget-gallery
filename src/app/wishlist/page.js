// components/Wishlist.js
"use client";
import styles from "./wishlist.module.css";
import Link from "next/link";
import Image from "next/image";
import DynamicBreadcrumb from "@/components/dynamicBreadcrumb";
import { useWishlist } from "@/components/context/WishlistContext";
import image from "../../assets/images/products/games/4.png";
import { GoCheck } from "react-icons/go";
import { RxCross1 } from "react-icons/rx";

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Wishlist", href: "/wishlist" },
];

const Wishlist = () => {
  const { wishlistItems, removeFromWishlist } = useWishlist();

  // Check if wishlist items are correctly passed
  console.log("Wishlist Items:", wishlistItems); // Debugging

  return (
    <section className={styles.wishlistAllInfoAllDataContainer}>
      <section>
        <DynamicBreadcrumb breadcrumbItems={breadcrumbItems} />
      </section>

      <section>
        {wishlistItems.length === 0 ? (
          <p>Your wishlist is empty.</p>
        ) : (
          wishlistItems.map((item) => (
            <div key={item.id}>
              <div>
                <div className={styles.wishlistAllDataContainer}>
                  <h1 className={styles.myWishlistText}>My Wishlist</h1>

                  <div className={styles.productCategoryContainer}>
                    <p className={styles.productName}>Product Name</p>
                    <p className={styles.productPriceAndStorkContainer}>
                      <span className={styles.productPrice}>Unit Price</span>
                      <span className={styles.productStorkStatus}>
                        Stock Status
                      </span>
                    </p>
                  </div>
                </div>

                <div className={styles.wishlistProductDataContainer}>
                  <div className={styles.wishlistProductImageAndNameContainer}>
                    <Image
                      className={styles.wishlistProductImage}
                      src={item?.image}
                      alt="Product"
                    />
                    <p className={styles.wishlistProductName}>{item?.title}</p>
                  </div>

                  <div
                    className={styles.wishlistProductPriceBtnAmdStockContainer}
                  >
                    <div className={styles.wishlistPriceAndInStockContainer}>
                      <p className={styles.priceContainer}>
                        <span className={styles.currentPrice}>
                          ${item?.currentPrice}
                        </span>
                        <del className={styles.oldPrice}>${item?.oldPrice}</del>
                      </p>
                      <p
                        className={
                          item.soldOut
                            ? styles.wishlistInStockRed
                            : styles.wishlistInStock
                        }
                      >
                        <GoCheck className={styles.wishlistCheckIcon} />{" "}
                        {item.soldOut === true ? "out Stock" : "In Stock"}
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
              </div>
            </div>
          ))
        )}
      </section>
    </section>
  );
};

export default Wishlist;
