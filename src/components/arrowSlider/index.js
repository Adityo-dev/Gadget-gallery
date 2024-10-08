"use client";
import styles from "./arrowSlider.module.css";
// import responsive slider
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import components
import NextArrow from "./nextArrow";
import PrevArrow from "./prevArrow";
import ColumnCart from "../products-cart/columnCart";
import ProductCategory from "../product-category/category";

function ArrowSlider({ categoryData, relatedProducts }) {
  var relatedProductsSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  var categoryDataSettings2 = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    slidesToScroll: 1,
    swipeToSlide: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.arrowSliderContainer}>
      {categoryData && (
        <Slider {...categoryDataSettings2}>
          {categoryData.map((data, ind) => (
            <div key={ind}>
              <ProductCategory data={data} />
            </div>
          ))}
        </Slider>
      )}

      {relatedProducts && (
        <Slider {...relatedProductsSettings}>
          {relatedProducts.map((data, ind) => (
            <div className={styles.arrowSliderInfoContainer} key={ind}>
              <ColumnCart cartData={data} />
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
}

export default ArrowSlider;
