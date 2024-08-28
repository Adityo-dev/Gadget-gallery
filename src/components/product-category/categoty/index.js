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
  { icon: laptops_icon, title: "laptops", pathName: "/laptops" },
  { icon: games_icon, title: "games", pathName: "/games" },
  { icon: phone_icon, title: "smartphones", pathName: "/smartphones" },
  { icon: television_icon, title: "television", pathName: "/television" },
  { icon: headphone_icon, title: "headphone", pathName: "/headphone" },
  { icon: speaker_icon, title: "speakers", pathName: "/speakers" },
];

const ProductCategory = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 1,
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
              <Link
                href={`/product-category/${category?.pathName}`}
                className={styles.productCategoryDataInfo}
              >
                <Image
                  className={styles.productCategoryIcon}
                  src={category?.icon}
                  alt="product-category-icon"
                />
                <p className={styles.productCategoryTitle}>{category?.title}</p>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ProductCategory;
