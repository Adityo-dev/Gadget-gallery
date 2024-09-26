"use client";
import styles from "././brand.module.css";
import Image from "next/image";

// import marquee
import Marquee from "react-fast-marquee";

// import image
import brand1 from "../../../assets/images/brand/asus.png";
import brand2 from "../../../assets/images/brand/dell.png";
import brand3 from "../../../assets/images/brand/lenovo.png";
import brand4 from "../../../assets/images/brand/oppo.png";
import brand5 from "../../../assets/images/brand/panasonic.png";
import brand6 from "../../../assets/images/brand/samsung.png";
import brand7 from "../../../assets/images/brand/sanyo-1.png";
import brand8 from "../../../assets/images/brand/sony-1.png";

const brandData = [
  brand1,
  brand2,
  brand3,
  brand4,
  brand5,
  brand6,
  brand7,
  brand8,
  brand1,
  brand2,
];

const Brand = () => {
  return (
    <div className={styles.brandAllDataContainer}>
      <Marquee className={styles.brandDataContainer} pauseOnHover="true">
        {brandData.map((data, ind) => (
          <div className={styles.brandInfo} key={ind}>
            <Image src={data} alt="" />
          </div>
        ))}
      </Marquee>

      <Marquee
        className={styles.brandDataContainer}
        pauseOnHover="true"
        direction="right"
      >
        {brandData.map((data, ind) => (
          <div className={styles.brandInfo} key={ind}>
            <Image src={data} alt="" />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Brand;
