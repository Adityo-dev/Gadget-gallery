"use client";
import styles from "./simpleSlider.module.css";
import Link from "next/link";
// import slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ProductDetailsRowSlider from "@/components/productDetailsSlider/rowSlider";
// slider data

function SimpleSlider({ dealData }) {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <section>
      <Slider {...settings}>
        {dealData.map((data, ind) => (
          <div key={ind}>
            <div className={styles.dealDataContainer}>
              <div className={styles.dealProductImageContainer}>
                <ProductDetailsRowSlider />
              </div>

              <div className={styles.cartInfoContainer}>
                {data?.soldOut == true ? (
                  <p className={data?.soldOut === true ? styles.soldOut : ""}>
                    {"Sold Out"}
                  </p>
                ) : (
                  <div className={styles.hotAndDiscountContainer}>
                    {data?.discount && (
                      <p className={styles.productDiscount}>
                        -{data?.discount}%
                      </p>
                    )}
                    {data?.hot && <p className={styles.productHot}>{"Hot"}</p>}
                  </div>
                )}
                <Link href={""} className={styles.productName}>
                  {data?.name}
                </Link>
                <Link href={""} className={styles.productTitle}>
                  {data?.title}
                </Link>
                <p className={styles.productsPriceContainer}>
                  {data?.currentPrice && (
                    <span className={styles.productsCurrentPrice}>
                      ${data?.currentPrice}
                    </span>
                  )}
                  {data?.oldPrice && (
                    <del className={styles.productsOldPrice}>
                      ${data?.oldPrice}
                    </del>
                  )}
                </p>

                <button className={styles.btnAddToCart}>Add to cart</button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default SimpleSlider;
