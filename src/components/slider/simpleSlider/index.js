"use client";
import styles from "./simpleSlider.module.css";
import Image from "next/image";
// import slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// smart Phone
import smartPhone0 from "../../../assets/images/products/smart-phone/0.png";
import smartPhone1 from "../../../assets/images/products/smart-phone/1.png";
import smartPhone2 from "../../../assets/images/products/smart-phone/2.png";
import smartPhone3 from "../../../assets/images/products/smart-phone/3.png";
import smartPhone4 from "../../../assets/images/products/smart-phone/4.png";
// slider data
const dealData = [
  {
    image: smartPhone0,
    name: "samsung galaxy",
    title: "Samsung Galaxy S23 Ultra, Factory Unlocked, 512GB",
    rating: "4.5",
    currentPrice: "699.99",
    oldPrice: "949.99",
    discount: "26",
    soldOut: false,
    hot: true,
    url: "",
  },
  {
    image: smartPhone1,
    name: "iPhone",
    title: "Apple iPhone 15 Pro Max, 512GB, Unlocked",
    rating: "5",
    currentPrice: "1299.00",
    oldPrice: "1399.00",
    discount: "7",
    soldOut: true,
    hot: false,
    url: "",
  },
  {
    image: smartPhone2,
    name: "Prepaid Phones",
    title: "Apple iPhone 14 Pro Max (256 GB) – White Titanium",
    rating: "0",
    currentPrice: "519.09",
    oldPrice: "805.19",
    discount: "36",
    soldOut: false,
    hot: false,
    url: "",
  },
  {
    image: smartPhone3,
    name: "iPhone",
    title: "Apple iPhone 11 Pro Max Triple Camera",
    rating: "5",
    currentPrice: "425.00",
    oldPrice: "525.00",
    discount: "10",
    url: "",
  },
];

function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section>
      <Slider {...settings}>
        {dealData.map((data, ind) => (
          <div className={styles.dealDataContainer} key={ind}>
            <div>
              <Image className={styles.dealImage} src={data?.image} alt="" />
            </div>

            <div>
              <p>{data?.name}</p>
              <p>{data?.title}</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default SimpleSlider;
