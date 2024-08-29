import styles from "./category.module.css";
import Image from "next/image";
import Link from "next/link";

// import icon
import games_icon from "../../../assets/icons/product-category-icon/icon-games.png";
import headphone_icon from "../../../assets/icons/product-category-icon/icon-headphone.png";
import laptops_icon from "../../../assets/icons/product-category-icon/icon-laptops.png";
import phone_icon from "../../../assets/icons/product-category-icon/icon-phone.png";
import speaker_icon from "../../../assets/icons/product-category-icon/icon-speaker.png";
import television_icon from "../../../assets/icons/product-category-icon/icon-television.png";

const productCategory = [
  { icon: laptops_icon, title: "laptops", pathName: "laptops" },
  { icon: games_icon, title: "games", pathName: "games" },
  { icon: phone_icon, title: "smartphones", pathName: "smartphones" },
  { icon: television_icon, title: "television", pathName: "television" },
  { icon: headphone_icon, title: "headphone", pathName: "headphone" },
  { icon: speaker_icon, title: "speakers", pathName: "speakers" },
];
const ProductCategory = ({ productCategoryData }) => {
  const productName = productCategoryData;
  return (
    <>
      <h3 className={styles.productName}>{productName}</h3>
      <div className={styles.productCategoryDataContainer}>
        {productCategory.map((data, ind) => (
          <Link
            href={`/product-category/${productName}/${data.pathName}`}
            className={styles.productCategoryInfoContainer}
            key={ind}
          >
            <Image
              className={styles.productCategoryIcon}
              src={data.icon}
              alt=""
            />
            <p className={styles.productCategoryName}>{data.title}</p>
          </Link>
        ))}
      </div>
    </>
  );
};

export default ProductCategory;
