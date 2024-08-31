"use client";
import styles from "./company.module.css";
import Image from "next/image";

// import slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import image
import company1 from "../../../assets/images/company/asus.png";
import company2 from "../../../assets/images/company/dell.png";
import company3 from "../../../assets/images/company/lenovo.png";
import company4 from "../../../assets/images/company/oppo.png";
import company5 from "../../../assets/images/company/panasonic.png";
import company6 from "../../../assets/images/company/samsung.png";
import company7 from "../../../assets/images/company/sanyo-1.png";
import company8 from "../../../assets/images/company/sony-1.png";

const companyData = [
  company1,
  company2,
  company3,
  company4,
  company5,
  company6,
  company7,
  company8,
];

const Company = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div className={styles.companyAllDataContainer}>
      <Slider {...settings}>
        {companyData.map((company, ind) => (
          <div key={ind}>
            <Image className={styles.companyImage} src={company} alt="" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Company;
