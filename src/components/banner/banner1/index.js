import styles from "./banner1.module.css";
import Image from "next/image";
import Link from "next/link";

// import image
import banner1 from "../../../assets/images/banner/banner-1.png";
import banner2 from "../../../assets/images/banner/banner-2.png";

import DynamicButton from "@/components/button";

const productBanner1Data = [
  {
    image: banner1,
    headerTitle: "USE CODE: SALE35%",
    title: "Heavy On Features \n Light On Price",
    subTitle: "AMAZING DISCOUNTS AND DEALS",
    url: "/",
    backgroundColor: "#EEE0E0",
  },
  {
    image: banner2,
    headerTitle: "NEW PRODUCT",
    title: "Red Dead 2 Even \n  Bette",
    subTitle: "RELEASE DATE & PRICE",
    url: "/",
    backgroundColor: "#D8D9EB",
  },
];

const ProductBanner1 = () => {
  return (
    <main className={styles.banner1AllDataContainer}>
      {productBanner1Data.map((data, ind) => (
        <div
          className={`${ind === 0 && styles.banner1LeftContainer} ${
            ind === 1 && styles.banner1RightContainer
          }`}
          style={{ backgroundColor: `${data.backgroundColor}` }}
          key={ind}
        >
          <div
            className={`${ind === 0 && styles.banner1LeftAllInfoContainer} ${
              ind === 1 && styles.banner1RightAllInfoContainer
            }`}
          >
            <div
              className={`${ind === 0 && styles.bannerLeftInfoContainer} ${
                ind === 1 && styles.bannerInfoRightContainer
              }`}
            >
              <p
                className={`${ind === 0 && styles.banner1LeftHeaderTitle} ${
                  ind === 1 && styles.banner1RightHeaderTitle
                }`}
              >
                {data?.headerTitle}
              </p>
              <h2
                className={`${ind === 0 && styles.banner1LeftTitle} ${
                  ind === 1 && styles.banner1RightTitle
                }`}
              >
                {data.title}
              </h2>
              <p
                className={`${ind === 0 && styles.banner1LeftSubTitle} ${
                  ind === 1 && styles.banner1RightSubTitle
                }`}
              >
                {data?.subTitle}
              </p>
              <div className={styles.btnShopNow}>
                <div className={ind === 1 && styles.banner1RightBtn}>
                  <DynamicButton btnUrl={data?.url} btnName={"shop now"} />
                </div>
              </div>
            </div>
            <Image
              className={`${ind === 0 && styles.banner1LeftImage} ${
                ind === 1 && styles.banner1RightImage
              }`}
              src={data?.image}
              alt=""
            />
          </div>
        </div>
      ))}
    </main>
  );
};

export default ProductBanner1;
