"use client";
import styles from "./trendingProducts.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import components
import RowCart from "../products-cart/rowCart";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";

// import image
import product1 from "../../assets/images/products/laptop/1.png";
import product2 from "../../assets/images/products/games/6.png";
import product3 from "../../assets/images/products/smart-phone/0.png";
import product4 from "../../assets/images/products/headphones/2.png";
import product5 from "../../assets/images/products/watch/0.png";
import product6 from "../../assets/images/products/television/3.png";
import product7 from "../../assets/images/products/speakers/0.png";
import product8 from "../../assets/images/products/laptop/2.png";
import product9 from "../../assets/images/products/smart-phone/10.png";
import product10 from "../../assets/images/products/headphones/11.png";
import product11 from "../../assets/images/products/games/1.png";
import product12 from "../../assets/images/products/speakers/5.png";

const trendingProductsData = [
  {
    image: product1,
    name: "laptops",
    title: "MacBook Pro 13.3″ 16GB-512GB Silver",
    rating: 5,
    currentPrice: "1527.00",
    oldPrice: "1795.00",
    discount: "15",
    hot: true,
    url: "",
  },
  {
    image: product2,
    name: "watch",
    title: "MacBook Pro 13.3″ 16GB-512GB Silver",
    rating: 5,
    currentPrice: "1527.00",
    oldPrice: "1795.00",
    discount: "15",
    hot: true,
    url: "",
  },
  {
    image: product3,
    name: "phone",
    title: "MacBook Pro 13.3″ 16GB-512GB Silver",
    rating: 5,
    currentPrice: "1527.00",
    oldPrice: "1795.00",
    discount: "15",
    hot: false,
    url: "",
  },
  {
    image: product4,
    name: "laptops",
    title: "MacBook Pro 13.3″ 16GB-512GB Silver",
    rating: 5,
    currentPrice: "1527.00",
    oldPrice: "1795.00",
    discount: "15",
    hot: true,
    url: "",
  },
  {
    image: product5,
    name: "watch",
    title: "MacBook Pro 13.3″ 16GB-512GB Silver",
    rating: 5,
    currentPrice: "1527.00",
    oldPrice: "1795.00",
    discount: "15",
    hot: true,
    url: "",
  },
  {
    image: product6,
    name: "phone",
    title: "MacBook Pro 13.3″ 16GB-512GB Silver",
    rating: 5,
    currentPrice: "1527.00",
    oldPrice: "1795.00",
    discount: "15",
    hot: true,
    url: "",
  },
  {
    image: product7,
    name: "laptops",
    title: "MacBook Pro 13.3″ 16GB-512GB Silver",
    rating: 5,
    currentPrice: "1527.00",
    oldPrice: "1795.00",
    discount: "",
    hot: true,
    url: "",
  },
  {
    image: product8,
    name: "laptops",
    title: "MacBook Pro 13.3″ 16GB-512GB Silver",
    rating: 5,
    currentPrice: "1527.00",
    oldPrice: "1795.00",
    discount: "15",
    hot: true,
    url: "",
  },
  {
    image: product9,
    name: "laptops",
    title: "MacBook Pro 13.3″ 16GB-512GB Silver",
    rating: 5,
    currentPrice: "1527.00",
    oldPrice: "1795.00",
    discount: "15",
    hot: true,
    url: "",
  },
  {
    image: product10,
    name: "watch",
    title: "MacBook Pro 13.3″ 16GB-512GB Silver",
    rating: 5,
    currentPrice: "1527.00",
    oldPrice: "1795.00",
    discount: "15",
    hot: false,
    url: "",
  },
  {
    image: product11,
    name: "phone",
    title: "MacBook Pro 13.3″ 16GB-512GB Silver",
    rating: 5,
    currentPrice: "1527.00",
    oldPrice: "1795.00",
    discount: "15",
    hot: true,
    url: "",
  },
  {
    image: product12,
    name: "watch",
    title: "MacBook Pro 13.3″ 16GB-512GB Silver",
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
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 700,
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
