"use client";
import styles from "./trendingProducts.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import components
import RowCart from "../products-cart/rowCart";
// import image
import laptop1 from "../../assets/images/products/laptop/1.png";
import laptop2 from "../../assets/images/products/laptop/5.png";
import laptop3 from "../../assets/images/products/laptop/2.png";
import phone1 from "../../assets/images/products/smart-phone/0.png";
import phone2 from "../../assets/images/products/smart-phone/1.png";
import phone3 from "../../assets/images/products/smart-phone/3.png";
import watch1 from "../../assets/images/products/watch/0.png";
import watch2 from "../../assets/images/products/watch/1.png";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";

const trendingProductsData = [
  {
    image: laptop1,
    name: "laptops",
    title: "MacBook Pro 13.3″ 16GB/512GB Silver",
    rating: 5,
    currentPrice: "1527.00",
    oldPrice: "1795.00",
    discount: "15",
    hot: true,
    url: "",
  },
  {
    image: watch1,
    name: "watch",
    title: "MacBook Pro 13.3″ 16GB/512GB Silver",
    rating: 5,
    currentPrice: "1527.00",
    oldPrice: "1795.00",
    discount: "15",
    hot: true,
    url: "",
  },
  {
    image: phone1,
    name: "phone",
    title: "MacBook Pro 13.3″ 16GB/512GB Silver",
    rating: 5,
    currentPrice: "1527.00",
    oldPrice: "1795.00",
    discount: "15",
    hot: false,
    url: "",
  },
  {
    image: laptop2,
    name: "laptops",
    title: "MacBook Pro 13.3″ 16GB/512GB Silver",
    rating: 5,
    currentPrice: "1527.00",
    oldPrice: "1795.00",
    discount: "15",
    hot: true,
    url: "",
  },
  {
    image: watch2,
    name: "watch",
    title: "MacBook Pro 13.3″ 16GB/512GB Silver",
    rating: 5,
    currentPrice: "1527.00",
    oldPrice: "1795.00",
    discount: "15",
    hot: true,
    url: "",
  },
  {
    image: phone2,
    name: "phone",
    title: "MacBook Pro 13.3″ 16GB/512GB Silver",
    rating: 5,
    currentPrice: "1527.00",
    oldPrice: "1795.00",
    discount: "15",
    hot: true,
    url: "",
  },
  {
    image: laptop2,
    name: "laptops",
    title: "MacBook Pro 13.3″ 16GB/512GB Silver",
    rating: 5,
    currentPrice: "1527.00",
    oldPrice: "1795.00",
    discount: "",
    hot: true,
    url: "",
  },
  {
    image: laptop3,
    name: "laptops",
    title: "MacBook Pro 13.3″ 16GB/512GB Silver",
    rating: 5,
    currentPrice: "1527.00",
    oldPrice: "1795.00",
    discount: "15",
    hot: true,
    url: "",
  },
  {
    image: laptop1,
    name: "laptops",
    title: "MacBook Pro 13.3″ 16GB/512GB Silver",
    rating: 5,
    currentPrice: "1527.00",
    oldPrice: "1795.00",
    discount: "15",
    hot: true,
    url: "",
  },
  {
    image: watch1,
    name: "watch",
    title: "MacBook Pro 13.3″ 16GB/512GB Silver",
    rating: 5,
    currentPrice: "1527.00",
    oldPrice: "1795.00",
    discount: "15",
    hot: false,
    url: "",
  },
  {
    image: phone3,
    name: "phone",
    title: "MacBook Pro 13.3″ 16GB/512GB Silver",
    rating: 5,
    currentPrice: "1527.00",
    oldPrice: "1795.00",
    discount: "15",
    hot: true,
    url: "",
  },
  {
    image: watch2,
    name: "watch",
    title: "MacBook Pro 13.3″ 16GB/512GB Silver",
    rating: 5,
    currentPrice: "1527.00",
    oldPrice: "1795.00",
    discount: "",
    hot: true,
    url: "",
  },
];

function TrendingProducts() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    rows: 2,
    slidesPerRow: 1,
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
    <main className={styles.trendingProductsSliderAllDataMainContainer}>
      <div className={styles.sliderAllDataContainer}>
        <div>
          <h1 className={styles.trendingProductsText}>Trending Products</h1>
        </div>

        <span className={styles.trendingProductsHrLine} />

        <Slider {...settings}>
          {trendingProductsData.map((data, ind) => (
            <div key={ind}>
              <RowCart cartData={data} />
            </div>
          ))}
        </Slider>
      </div>
    </main>
  );
}

export default TrendingProducts;
