"use client";
import styles from "./rowSlider.module.css";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ProductDetailsRowSlider({ cartData }) {
  const { image, title } = cartData;
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);

  var settingsThumbnails = {
    dots: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    focusOnSelect: true,
    infinite: true,
    arrows: false,
  };

  var settingsMainImage = {
    dots: false,
    speed: 500,
    fade: true,
    waitForAnimate: true,
    lazyLoad: "progressive",
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    infinite: false,
  };

  return (
    <div className={styles.rowSliderDataContainer}>
      {/* Thumbnail Slider */}
      <div className={styles.thumbnailSliderContainer}>
        <Slider
          asNavFor={nav1}
          ref={(slider) => (sliderRef2 = slider)}
          {...settingsThumbnails}
          className={styles.secondImageAllContainer}
        >
          {image.map((img, ind) => (
            <div className={styles.secondImageContainer} key={ind}>
              <Image className={styles.secondImage} src={img} alt="" />
            </div>
          ))}
        </Slider>
      </div>

      {/* Main Image Slider */}
      <div className={styles.mainImageContainer}>
        <Slider
          asNavFor={nav2}
          ref={(slider) => (sliderRef1 = slider)}
          {...settingsMainImage}
        >
          {image.map((img, ind) => (
            <Link href={`shop/${title}`} key={ind}>
              <Image className={styles.firstImage} src={img} alt="" />
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default ProductDetailsRowSlider;
