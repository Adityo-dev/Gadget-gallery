import styles from "./banner3.module.css";
import Image from "next/image";
import Link from "next/link";

// import image
import banner4 from "../../../assets/images/banner/banner-4.png";
import banner5 from "../../../assets/images/banner/banner-5.png";
import banner6 from "../../../assets/images/banner/banner-6.png";
import banner7 from "../../../assets/images/banner/banner-7.png";

const productsBanner3Data = [
  {
    tag: "new product",
    title: "Release Date & Price",
    subTitle: "today's super offer",
    image: banner4,
    url: "",
    backgroundColor: "#EFDBDD",
  },
  {
    tag: "big sale",
    title: "biggest discount",
    subTitle: "up to 75% off",
    image: banner5,
    url: "",
    backgroundColor: "#E6EBEF",
  },
  {
    tag: "weekend deal",
    title: "the great sale",
    subTitle: "gift card $150",
    image: banner6,
    url: "",
    backgroundColor: "#EEEADF",
  },
  {
    tag: "month deal",
    title: "spring clean sale",
    subTitle: "up to 45% off",
    image: banner7,
    url: "",
    backgroundColor: "#E8E5EE",
  },
];

const ProductBanner3 = () => {
  return (
    <div className={styles.banner3AllDataContainer}>
      {productsBanner3Data.map((data, ind) => (
        <Link
          href={data?.url}
          className={styles.banner3InfoContainer}
          style={{ backgroundColor: `${data?.backgroundColor}` }}
          key={ind}
        >
          <div className={styles.banner3AllInfoContainer}>
            <p className={styles.tag}>{data?.tag}</p>
            <h2 className={styles.title}>{data?.title}</h2>
            <p className={styles.subTitle}>{data?.subTitle}</p>
          </div>

          <Image className={styles.bannerImage} src={data?.image} alt="" />
        </Link>
      ))}
    </div>
  );
};

export default ProductBanner3;
