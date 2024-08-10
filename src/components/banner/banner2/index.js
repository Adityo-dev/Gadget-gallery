import styles from "./banner2.module.css";
import Image from "next/image";
import Link from "next/link";
// import components
import DynamicButton from "@/components/button";
// import image
import banner3 from "../../../assets/images/banner/banner-3.png";

const productBanner2Data = [
  {
    headerTitle: "EXCLUSIVE HEADPHONE",
    title: "Discounts 50% On All \n Headphone",
    url: "",
    image: banner3,
    backgroundColor: "#DBD9CC",
  },
];

const ProductBanner2 = () => {
  return (
    <div className={styles.banner2AllDataContainer}>
      {productBanner2Data.map((bannerData, ind) => (
        <div
          key={ind}
          style={{ backgroundColor: `${bannerData.backgroundColor}` }}
          className={styles.banner2DataContainer}
        >
          <div className={styles.banner2InfoContainer}>
            <p className={styles.headerTitle}>{bannerData?.headerTitle}</p>
            <h1 className={styles.title}>{bannerData?.title}</h1>
            <DynamicButton btnName={"Shop now"} btnUrl={bannerData?.url} />
          </div>
          <Image
            className={styles.bannerImage}
            src={bannerData?.image}
            alt=""
          />
        </div>
      ))}
    </div>
  );
};

export default ProductBanner2;
