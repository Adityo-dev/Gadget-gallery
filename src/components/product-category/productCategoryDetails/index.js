import styles from "./productCategoryDetails.module.css";
import Image from "next/image";
import Link from "next/link";

// import components
import ProductCategory from "../category";
import ColumnCart from "@/components/products-cart/columnCart";

// import image
import product1 from "../../../assets/images/products/games/0.png";
import product2 from "../../../assets/images/products/games/1.png";
import product3 from "../../../assets/images/products/games/2.png";
import product4 from "../../../assets/images/products/games/3.png";
import product5 from "../../../assets/images/products/games/4.png";
import product6 from "../../../assets/images/products/games/5.png";
import product7 from "../../../assets/images/products/games/6.png";
import product8 from "../../../assets/images/products/games/7.png";
import product9 from "../../../assets/images/products/games/8.png";
import product10 from "../../../assets/images/products/games/19.png";
import product11 from "../../../assets/images/products/games/10.png";
import product12 from "../../../assets/images/products/games/11.png";
import product13 from "../../../assets/images/products/games/12.png";
import product14 from "../../../assets/images/products/games/13.png";
import product15 from "../../../assets/images/products/games/14.png";
import product16 from "../../../assets/images/products/games/15.png";
import product17 from "../../../assets/images/products/games/16.png";
import product18 from "../../../assets/images/products/games/17.png";
import product19 from "../../../assets/images/products/games/18.png";

const productCategory = [
  {
    image: product1,
    name: "laptops",
    title: "MacBook Pro 13.3″ 16GB-512GB Silver",
    rating: 5,
    currentPrice: "1527.00",
    oldPrice: "1795.00",
    discount: "15",
    hot: true,
    url: "",
  },
  {
    image: product2,
    name: "watch",
    title: "MacBook Pro 13.3″ 16GB-512GB Silver",
    rating: 5,
    currentPrice: "1527.00",
    oldPrice: "1795.00",
    discount: "15",
    hot: true,
    url: "",
  },
  {
    image: product3,
    name: "phone",
    title: "MacBook Pro 13.3″ 16GB-512GB Silver",
    rating: 5,
    currentPrice: "1527.00",
    oldPrice: "1795.00",
    discount: "15",
    hot: false,
    url: "",
  },
  {
    image: product4,
    name: "laptops",
    title: "MacBook Pro 13.3″ 16GB-512GB Silver",
    rating: 5,
    currentPrice: "1527.00",
    oldPrice: "1795.00",
    discount: "15",
    hot: true,
    url: "",
  },
  {
    image: product5,
    name: "watch",
    title: "MacBook Pro 13.3″ 16GB-512GB Silver",
    rating: 5,
    currentPrice: "1527.00",
    oldPrice: "1795.00",
    discount: "15",
    hot: true,
    url: "",
  },
  {
    image: product6,
    name: "phone",
    title: "MacBook Pro 13.3″ 16GB-512GB Silver",
    rating: 5,
    currentPrice: "1527.00",
    oldPrice: "1795.00",
    discount: "15",
    hot: true,
    url: "",
  },
  {
    image: product7,
    name: "laptops",
    title: "MacBook Pro 13.3″ 16GB-512GB Silver",
    rating: 5,
    currentPrice: "1527.00",
    oldPrice: "1795.00",
    discount: "",
    hot: true,
    url: "",
  },
  {
    image: product8,
    name: "laptops",
    title: "MacBook Pro 13.3″ 16GB-512GB Silver",
    rating: 5,
    currentPrice: "1527.00",
    oldPrice: "1795.00",
    discount: "15",
    hot: true,
    url: "",
  },
  {
    image: product9,
    name: "laptops",
    title: "MacBook Pro 13.3″ 16GB-512GB Silver",
    rating: 5,
    currentPrice: "1527.00",
    oldPrice: "1795.00",
    discount: "15",
    hot: true,
    url: "",
  },
  {
    image: product10,
    name: "watch",
    title: "MacBook Pro 13.3″ 16GB-512GB Silver",
    rating: 5,
    currentPrice: "1527.00",
    oldPrice: "1795.00",
    discount: "15",
    hot: false,
    url: "",
  },
  {
    image: product11,
    name: "phone",
    title: "MacBook Pro 13.3″ 16GB-512GB Silver",
    rating: 5,
    currentPrice: "1527.00",
    oldPrice: "1795.00",
    discount: "15",
    hot: true,
    url: "",
  },
  {
    image: product12,
    name: "watch",
    title: "MacBook Pro 13.3″ 16GB-512GB Silver",
    rating: 5,
    currentPrice: "1527.00",
    oldPrice: "1795.00",
    discount: "",
    hot: true,
    url: "",
  },
  {
    image: product13,
    name: "watch",
    title: "MacBook Pro 13.3″ 16GB-512GB Silver",
    rating: 5,
    currentPrice: "1527.00",
    oldPrice: "1795.00",
    discount: "",
    hot: true,
    url: "",
  },
  {
    image: product14,
    name: "watch",
    title: "MacBook Pro 13.3″ 16GB-512GB Silver",
    rating: 5,
    currentPrice: "1527.00",
    oldPrice: "1795.00",
    discount: "",
    hot: true,
    url: "",
  },
  {
    image: product15,
    name: "watch",
    title: "MacBook Pro 13.3″ 16GB-512GB Silver",
    rating: 5,
    currentPrice: "1527.00",
    oldPrice: "1795.00",
    discount: "",
    hot: true,
    url: "",
  },
  {
    image: product16,
    name: "watch",
    title: "MacBook Pro 13.3″ 16GB-512GB Silver",
    rating: 5,
    currentPrice: "1527.00",
    oldPrice: "1795.00",
    discount: "",
    hot: true,
    url: "",
  },
  {
    image: product17,
    name: "watch",
    title: "MacBook Pro 13.3″ 16GB-512GB Silver",
    rating: 5,
    currentPrice: "1527.00",
    oldPrice: "1795.00",
    discount: "",
    hot: true,
    url: "",
  },
  {
    image: product18,
    name: "watch",
    title: "MacBook Pro 13.3″ 16GB-512GB Silver",
    rating: 5,
    currentPrice: "1527.00",
    oldPrice: "1795.00",
    discount: "",
    hot: true,
    url: "",
  },
  {
    image: product19,
    name: "watch",
    title: "MacBook Pro 13.3″ 16GB-512GB Silver",
    rating: 5,
    currentPrice: "1527.00",
    oldPrice: "1795.00",
    discount: "",
    hot: true,
    url: "",
  },
];

const ProductCategoryDetails = ({ productCategoryData }) => {
  const pageName = productCategoryData;
  return (
    <>
      <section className={styles.productCategoryAndHomeContainer}>
        <div className={styles.productCategoryAndHome}>
          <Link className={styles.home} href={"/"}>
            Home
          </Link>
          /
          <Link className={styles.shop} href={"/shop"}>
            shop
          </Link>
          /<p className={styles.productCategory}>{pageName}</p>
        </div>
      </section>

      <section className={styles.productCategoryDetailsAllDataContainer}>
        <div>
          <ProductCategory productCategoryData={pageName} />
        </div>

        <div className={styles.productCategoryDetailsCartAndAsideContainer}>
          <div className={styles.productCategoryDetailsAsideContainer}>
            <h1>Price</h1>
          </div>

          <div className={styles.productCategoryDetailsCartContainer}>
            {productCategory.map((data, ind) => (
              <div key={ind}>
                <ColumnCart cartData={data} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductCategoryDetails;
