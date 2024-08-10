"use client";
import styles from "./heroSlider.module.css";
import Image from "next/image";
import Link from "next/link";

// import slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//import image
import imageSlider1 from "../../../../assets/images/home/hero/slide1-ipad.png";
import imageSlider2 from "../../../../assets/images/home/hero/slide1-iphone.png";
import imageSlider3 from "../../../../assets/images/home/hero/slide1-watches.png";
import DynamicButton from "@/components/button";

const sliderData = [
  {
    tag: "today deal",
    title: "best iPad deals \n at a glance",
    subTitle: "free shipping by gadget gallery",
    price: "499.99",
    url: "/",
    image: imageSlider1,
    backgroundColor: "#192c57",
  },
  {
    tag: "big sale",
    title: "IPhone on sale at \n up to 20% off",
    subTitle: "buy top products on gadget gallery",
    price: "399.99",
    url: "/",
    image: imageSlider2,
    backgroundColor: "#202f22",
  },
  {
    tag: "weekend deal",
    title: "all new \n  for a better you",
    subTitle: "amazing discounts and deals",
    price: "399.99",
    url: "/",
    image: imageSlider3,
    backgroundColor: "#2c2c46",
  },
];

function HeroSlider() {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 8000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
  };
  return (
    <div>
      <Slider {...settings}>
        {sliderData.map((data, ind) => (
          <div key={ind}>
            <div
              style={{ background: `${data.backgroundColor}` }}
              className={`${styles.sliderDataContainer} `}
            >
              <div className={styles.sliderInfoContainer}>
                <div>
                  <p className={styles.tag}>{data?.tag}</p>
                </div>
                <div>
                  <h2 className={styles.title}>{data?.title}</h2>
                  <p className={styles.subTitle}>{data?.subTitle}</p>
                </div>
                <p className={styles.priceContainer}>
                  From <span className={styles.price}>${data?.price}</span>
                </p>
                <DynamicButton btnName={"Shop now"} btnUrl={data?.url} />
              </div>

              <div className={styles.sliderImageContainer}>
                <Image
                  className={styles.sliderImage}
                  src={data?.image}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default HeroSlider;
