"use client";
import styles from "./simpleSlider.module.css";
// import slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// slider data
const data = [
  { name: "Samsung Galaxy S23 Ultra, Factory Unlocked, 512GB" },
  { name: "b" },
  { name: "c" },
  { name: "d" },
];

function SimpleSlider() {
  const settings = {
    dots: true,
    // customPaging: (i) => (
    //   <div className={styles.customDot}>
    //     {i + 1} {/* ডটের জন্য কাস্টম টেক্সট/এলিমেন্ট */}
    //   </div>
    // ),
    // dotsClass: `${styles.slickDots} ${styles.customDots}`,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section>
      <Slider {...settings}>
        {data.map((data, ind) => (
          <div key={ind}>
            <p>{data?.name}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default SimpleSlider;
