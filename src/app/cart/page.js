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
// import icon
import { RxCross1 } from "react-icons/rx";

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Shopping Cart", href: "/shopping-cart" },
];

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <main>
      <section>
        <DynamicBreadcrumb breadcrumbItems={breadcrumbItems} />
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
          <section className={styles.cartAllDataInfoDetailsContainer}>
            <div className={styles.cartDataContainer}>
              <div className={styles.productCategoryContainer}>
                <div className={styles.productNameContainer}>
                  <p className={styles.productName}>Product</p>
                </div>
                <div className={styles.productPriceAndStorkContainer}>
                  <p className={styles.productPrice}>Price</p>
                  <p className={styles.productPrice}>Quantity</p>
                  <p className={styles.productStorkStatus}>Subtotal</p>
                </div>
              </div>

              {cartItems.map((item, ind) => (
                <div key={item.id}>
                  <div className={styles.wishlistProductDataContainer}>
                    <div
                      className={styles.wishlistProductImageAndNameContainer}
                    >
                      <Image
                        className={styles.wishlistProductImage}
                        src={item?.image}
                        alt="Product"
                      />
                      <p className={styles.wishlistProductName}>
                        {item?.title}
                      </p>
                    </div>

                    <div
                      className={
                        styles.wishlistProductPriceBtnAmdStockContainer
                      }
                    >
                      <div className={styles.wishlistPriceAndInStockContainer}>
                        <p className={styles.currentPrice}>
                          ${item?.currentPrice}
                        </p>
                        <p className={styles.currentPrice}>
                          ${item?.currentPrice}
                        </p>
                        <p className={styles.wishlistInStockRed}>
                          ${item?.currentPrice}
                        </p>
                        <p>
                          <RxCross1 className={styles.crossIcon} />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.checkoutAllDataContainer}>
              <h3 className={styles.cartTotals}>Cart totals</h3>
              <p className={styles.subTotalAndAllPrice}>
                <span className={styles.shoppingTotal}>subtotal</span>
                <span className={styles.shoppingTotalPrice}>$71500</span>
              </p>
              <span className={styles.checkoutHrLine} />
              <div className={styles.shoppingInfoContainer}>
                <p className={styles.shoppingTotal}>Shopping</p>
                <p className={styles.shoppingCategory}>
                  <span>free Shopping</span>
                  <span>local pickup: $3.00</span>
                  <span>flat rate: $10.00</span>
                </p>
              </div>
              <span className={styles.checkoutHrLine} />
              <div className={styles.allTotalPriceContainer}>
                <p className={styles.shoppingTotal}>total</p>
                <p className={styles.shoppingTotalPrice}>$71500</p>
              </div>
              <TransparentButton
                className={styles.btn}
                btnName={"Proceed to checkout"}
                btnUrl={"/checkout"}
              />
            </div>
          </section>
        )}
      </section>
    </main>
  );
};

export default Cart;
