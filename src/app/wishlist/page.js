"use client";
import styles from "./wishlist.module.css";
import Link from "next/link";
import Image from "next/image";
import DynamicBreadcrumb from "@/components/dynamicBreadcrumb";
import { useWishlist } from "@/components/context/WishlistContext";
import { useCartContext } from "@/components/context/CartContext";
import { GoCheck } from "react-icons/go";
import { RxCross1 } from "react-icons/rx";

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Wishlist", href: "/wishlist" },
];

const Wishlist = () => {
  const { wishlistItems, removeFromWishlist } = useWishlist();
  // add to shopping Cart
  const { addToCart, removeCart } = useCartContext();

  return (
    <section className={styles.wishlistAllInfoAllDataContainer}>
      <section>
        <DynamicBreadcrumb breadcrumbItems={breadcrumbItems} />
      </section>

      <section className={styles.wishlistAllInfoDataSectionContainer}>
        <div className={styles.wishlistAllDataContainer}>
          <h1 className={styles.myWishlistText}>My Wishlist</h1>

          <div className={styles.productCategoryContainer}>
            <p className={styles.productName}>Product Name</p>
            <p className={styles.productPriceAndStorkContainer}>
              <span className={styles.productPrice}>Unit Price</span>
              <span className={styles.productStorkStatus}>Stock Status</span>
            </p>
          </div>
        </div>
        {wishlistItems.length === 0 ? (
          <p className={styles.wishlistEmpty}>
            No products added to the wishlist
          </p>
        ) : (
          wishlistItems.map((item) => (
            <div key={item.id}>
              <div>
                <div className={styles.wishlistProductDataContainer}>
                  <div className={styles.wishlistProductImageAndNameContainer}>
                    <Image
                      className={styles.wishlistProductImage}
                      src={item?.image}
                      alt="Product"
                    />
                    <div>
                      <p className={styles.wishlistProductName}>
                        {item?.title}
                      </p>

                      <p className={styles.priceSmContainer}>
                        {item.currentPrice && (
                          <span className={styles.currentPrice}>
                            ${item?.currentPrice}
                          </span>
                        )}
                        {item.oldPrice && (
                          <del className={styles.oldPrice}>
                            $<span>{item?.oldPrice}</span>
                          </del>
                        )}
                      </p>
                    </div>
                  </div>

                  <div
                    className={styles.wishlistProductPriceBtnAmdStockContainer}
                  >
                    <div className={styles.wishlistPriceAndInStockContainer}>
                      <p className={styles.priceContainer}>
                        {item.currentPrice && (
                          <span className={styles.currentPrice}>
                            ${item?.currentPrice}
                          </span>
                        )}
                        {item.oldPrice && (
                          <del className={styles.oldPrice}>
                            $<span>{item?.oldPrice}</span>
                          </del>
                        )}
                      </p>
                      <p
                        className={
                          item.soldOut
                            ? styles.wishlistInStockRed
                            : styles.wishlistInStock
                        }
                      >
                        <GoCheck className={styles.wishlistCheckIcon} />
                        {item.soldOut === true ? "out Stock" : "In Stock"}
                      </p>
                    </div>

                    <div className={styles.wishlistBtnAndCross}>
                      {item?.soldOut === false ? (
                        <button
                          onClick={() => {
                            addToCart(item.name, item.title, item);
                            removeFromWishlist(item.title);
                          }}
                          className={styles.wishlistAddToCartBtn}
                        >
                          Add to Cart
                        </button>
                      ) : (
                        ""
                      )}
                      <RxCross1
                        className={styles.crossIcon}
                        onClick={() => removeFromWishlist(item.title)}
                      />
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
