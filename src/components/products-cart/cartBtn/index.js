import styles from "./cartBtn.module.css";
import Link from "next/link";
import Image from "next/image";
// import components
import ProductDetailsSlider from "@/components/productDetailsSlider";

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

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      {cartBtnData.map((data, ind) => (
        <Tooltip
          style={{ display: "flex" }}
          key={ind}
          title={data?.name}
          placement="left"
          arrow
        >
          <button
            className={styles.cartBtn}
            onClick={ind === 2 ? handleOpen : null}
          >
            {data?.icon}
          </button>
        </Tooltip>
      ))}

      {/* modal */}
      <div>
        <Modal open={open} onClose={handleClose}>
          <div className={styles.modalContainer}>
            <div className={styles.modalInfoContainer}>
              <div>
                <ProductDetailsSlider cartData={cartData} />
                <VscChromeClose
                  onClick={handleClose}
                  className={styles.modalCloseIcon}
                />
              </div>

              <div>
                <p className={styles.name}>{name}</p>
                <h3 className={styles.title}>{title}</h3>
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

                <p className={styles.priceContainer}>
                  <span className={styles.currentPrice}>${currentPrice}</span>
                  {oldPrice && (
                    <del className={styles.oldPrice}>${oldPrice}</del>
                  )}

                  {discount && (
                    <span className={styles.discount}>(-{`${discount}%`})</span>
                  )}
                </p>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}
