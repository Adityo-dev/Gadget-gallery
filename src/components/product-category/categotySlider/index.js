"use client";
import styles from "./product-category.module.css";
import Image from "next/image";
import Link from "next/link";

// import slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import icon
import games_icon from "../../../assets/icons/product-category-icon/icon-games.png";
import headphone_icon from "../../../assets/icons/product-category-icon/icon-headphone.png";
import laptops_icon from "../../../assets/icons/product-category-icon/icon-laptops.png";
import phone_icon from "../../../assets/icons/product-category-icon/icon-phone.png";
import speaker_icon from "../../../assets/icons/product-category-icon/icon-speaker.png";
import television_icon from "../../../assets/icons/product-category-icon/icon-television.png";

const productCategoryData = [
  { icon: laptops_icon, title: "laptops", pathName: "laptops" },
  { icon: games_icon, title: "games", pathName: "gaming" },
  { icon: phone_icon, title: "smartphones", pathName: "smartphone" },
  { icon: television_icon, title: "television", pathName: "television" },
  { icon: headphone_icon, title: "headphone", pathName: "headphones" },
  { icon: speaker_icon, title: "speakers", pathName: "speakers" },
];

const ProductCategorySlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    swipeToSlide: true,
    touchMove: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        },
      },

      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 570,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <section>
      <div className={styles.productCategoryAllDataContainer}>
        <Slider {...settings}>
          {productCategoryData.map((category, ind) => (
            <div className={styles.productCategoryDataContainer} key={ind}>
              <div className={styles.productCategoryDataInfo}>
                <Link
                  className={styles.productCategoryInfo}
                  href={`/product-category/${category?.pathName}`}
                >
                  <Image
                    className={styles.productCategoryIcon}
                    src={category?.icon}
                    alt="product-category-icon"
                  />
                  <p className={styles.productCategoryTitle}>
                    {category?.title}
                  </p>
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ProductCategorySlider;
