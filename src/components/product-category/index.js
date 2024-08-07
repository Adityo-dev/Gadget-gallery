import styles from "./product-category.module.css";
import Image from "next/image";
import Link from "next/link";

// import icon
import games_icon from "../../assets/icons/product-category-icon/icon-games.png";
import headphone_icon from "../../assets/icons/product-category-icon/icon-headphone.png";
import laptops_icon from "../../assets/icons/product-category-icon/icon-laptops.png";
import phone_icon from "../../assets/icons/product-category-icon/icon-phone.png";
import speaker_icon from "../../assets/icons/product-category-icon/icon-speaker.png";
import television_icon from "../../assets/icons/product-category-icon/icon-television.png";

const productCategoryData = [
  { icon: laptops_icon, title: "laptops", pathName: "/games" },
  { icon: games_icon, title: "games", pathName: "/games" },
  { icon: phone_icon, title: "phones", pathName: "/games" },
  { icon: television_icon, title: "television", pathName: "/games" },
  { icon: headphone_icon, title: "headphone", pathName: "/games" },
  { icon: speaker_icon, title: "speakers", pathName: "/games" },
];

const ProductCategory = () => {
  return (
    <section>
      <div className={styles.productCategoryAllDataContainer}>
        {productCategoryData.map((category, ind) => (
          <div className={styles.productCategoryDataContainer} key={ind}>
            <Image
              className={styles.productCategoryIcon}
              src={category?.icon}
              alt="product-category-icon"
            />
            <p className={styles.productCategoryTitle}>{category?.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductCategory;
