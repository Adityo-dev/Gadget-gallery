"use client";
import styles from "./productDetailsSlider.module.css";
import Image from "next/image";

//
import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// image
import image from "../../assets/images/products/games/0.png";
import image1 from "../../assets/images/products/games/11.png";
import image2 from "../../assets/images/products/games/2.png";
import image3 from "../../assets/images/products/games/5.png";

function ProductDetailsSlider({ cartData }) {
  // const {
  //   image,
  //   name,
  //   title,
  //   currentPrice,
  //   oldPrice,
  //   discount,
  //   soldOut,
  //   hot,
  //   url,
  // } = cartData;

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);

  var settings = {
    dots: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    infinite: false,
  };

  const imageData = [image, image1, image2, image3];

  return (
    <div>
      <Slider
        className={styles.firstImageContainer}
        asNavFor={nav2}
        ref={(slider) => (sliderRef1 = slider)}
      >
        {imageData.map((image, ind) => (
          <div key={ind}>
            <Image className={styles.firstImage} src={image} alt="" />
          </div>
        ))}
      </Slider>
      {/* Second Slider */}
      <Slider
        asNavFor={nav1}
        ref={(slider) => (sliderRef2 = slider)}
        swipeToSlide={true}
        focusOnSelect={true}
        {...settings}
        className={styles.secondImageAllDataContainer}
      >
        {imageData.map((image, ind) => (
          <div className={styles.secondImageContainer} key={ind}>
            <Image className={styles.secondImage} src={image} alt="" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ProductDetailsSlider;
