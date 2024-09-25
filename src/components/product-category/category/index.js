import styles from "./category.module.css";
import Image from "next/image";
import Link from "next/link";

const ProductCategory = ({ data }) => {
  const { icon, title, backgroundColor } = data;

  return (
    <>
      <div className={styles.productCategoryDataContainer}>
        <div
          style={{ backgroundColor: `${backgroundColor}` }}
          className={styles.productCategoryInfoContainer}
        >
          <Link className={styles.productCategoryInfo} href={""}>
            <Image className={styles.productCategoryIcon} src={icon} alt="" />
            <p className={styles.productCategoryName}>{title}</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProductCategory;
