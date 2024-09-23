"use client";
import styles from "./simpleSlider.module.css";
// import slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ProductDetailsRowSlider from "@/components/productDetailsSlider/rowSlider";
// slider data

function SimpleSlider({ dealData }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <section>
      <Slider {...settings}>
        {dealData.map((data, ind) => (
          <div className={styles.dealAllDataContainer} key={ind}>
            <div className={styles.dealDataContainer}>
              <div className={styles.dealProductImageContainer}>
                <ProductDetailsRowSlider />
              </div>
              <div>
                <p>{data?.name}</p>
                <p>{data?.title}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default SimpleSlider;
