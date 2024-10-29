"use client";
import styles from "./cartBtn.module.css";
import Link from "next/link";
import Image from "next/image";
// import components
import ProductDetailsSlider from "@/components/productDetailsSlider";
import { useCartContext } from "@/components/context/CartContext";
import { useWishlist } from "@/components/context/WishlistContext";

// import icon
import { GiShoppingCart } from "react-icons/gi";
import { CiHeart } from "react-icons/ci";
import { MdOutlineSearch } from "react-icons/md";
import { MdCompareArrows } from "react-icons/md";
import { VscChromeClose } from "react-icons/vsc";

// import mui tooltip
import * as React from "react";
import Tooltip from "@mui/material/Tooltip";
// import modal
import Modal from "@mui/material/Modal";
// import rating
import Rating from "@mui/material/Rating";

export default function CartButton({ cartData }) {
  const {
    image,
    name,
    title,
    currentPrice,
    oldPrice,
    discount,
    rating = 2,
    review = "0",
    stock = 45,
    soldOut,
    hot,
    url,
  } = cartData;

  const cartBtnData = [
    { icon: <GiShoppingCart />, name: "Add to cart" },
    { icon: <CiHeart />, name: "wishlist" },
    { icon: <MdOutlineSearch />, name: "Quick view" },
    { icon: <MdCompareArrows />, name: "compare" },
  ];

  // add to cart Modal
  const [addToCartOpen, setAddToCartOpen] = React.useState(false);
  const addToCartHandleOpen = () => setAddToCartOpen(true);
  const addToCartHandleClose = () => setAddToCartOpen(false);

  // quick View Modal
  const [quickView, setQuickView] = React.useState(false);
  const quickViewHandleOpen = () => setQuickView(true);
  const quickViewHandleClose = () => setQuickView(false);

  // add to shopping Cart
  const { addToCart } = useCartContext();
  // add to Wishlist
  const { addToWishlist } = useWishlist();

  return (
    <div>
      {cartBtnData.map((data, ind) => (
        <div
          key={ind}
          className={`${
            data.name === "wishlist" ? styles.smBlock : styles.smNone
          }`}
        >
          <Tooltip
            style={{ display: "flex" }}
            title={data?.name}
            placement="left"
            arrow
          >
            <button
              className={styles.cartBtn}
              onClick={() => {
                if (ind === 0) {
                  addToCartHandleOpen();
                  addToCart(name, title, cartData);
                } else if (ind === 1) {
                  addToWishlist(cartData);
                } else if (ind === 2) {
                  quickViewHandleOpen();
                }
              }}
            >
              {data?.icon}
            </button>
          </Tooltip>
        </div>
      ))}

      <>
        {/* add To Cart Modal */}
        <Modal open={addToCartOpen} onClose={addToCartHandleClose}>
          <div className={styles.addToCartModalContainer}>
            <VscChromeClose
              onClick={addToCartHandleClose}
              className={styles.modalCloseIcon}
            />
            <div>
              <h2 className={styles.addToCartModalContainerTitle}>
                Product is added to cart
              </h2>
              <div className={styles.addToCartModalItemContainer}>
                <Image
                  className={styles.addToCartModalImage}
                  src={image}
                  alt=""
                />
                <div className={styles.addToCartModalInfoContainer}>
                  <p className={styles.addToCartModalTitle}>{title}</p>
                  <p className={styles.addToCartModalPriceContainer}>
                    <span className={styles.addToCartModalCurrentPrice}>
                      ${currentPrice}
                    </span>
                    {oldPrice && (
                      <del className={styles.addToCartModalOldPrice}>
                        ${oldPrice}
                      </del>
                    )}

                    {discount && (
                      <span className={styles.discount}>
                        (-{`${discount}%`})
                      </span>
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Modal>

        {/* Quick View Modal */}
        <Modal open={quickView} onClose={quickViewHandleClose}>
          <div className={styles.quickViewModalContainer}>
            <div className={styles.quickViewModalModalInfoContainer}>
              <div>
                <ProductDetailsSlider cartData={cartData} />
                <VscChromeClose
                  onClick={quickViewHandleClose}
                  className={styles.modalCloseIcon}
                />
              </div>

              <div>
                <p className={styles.quickViewModalName}>{name}</p>
                <p className={styles.quickViewModalTitle}>{title}</p>
                <div className={styles.ratingReviewAndStockContainer}>
                  {rating && (
                    <>
                      <Rating
                        className={styles.ratingStar}
                        name="rating"
                        defaultValue={rating}
                        precision={0.5}
                        readOnly
                      />
                      <p className={styles.rating}>({rating})</p>
                    </>
                  )}

                  {review && <p className={styles.review}>{review} review</p>}
                  {stock && <p className={styles.stock}>{stock} in stock</p>}
                </div>

                <p className={styles.quickViewPriceContainer}>
                  <span className={styles.quickViewModalCurrentPrice}>
                    ${currentPrice}
                  </span>
                  {oldPrice && (
                    <del className={styles.quickViewModalOldPrice}>
                      ${oldPrice}
                    </del>
                  )}

                  {discount && (
                    <span className={styles.quickViewModalDiscount}>
                      (-{`${discount}%`})
                    </span>
                  )}
                </p>
              </div>
            </div>
          </div>
        </Modal>
      </>
    </div>
  );
}
