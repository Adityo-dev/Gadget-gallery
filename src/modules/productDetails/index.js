import ProductDetailsSlider from "@/components/productDetailsSlider";
import styles from "./productDetails.module.css";
import Link from "next/link";

const ProductDetails = ({ data }) => {
  let searchId = data.split("%").join(" ");
  let searchValue = searchId.split("20").join(" ");

  const productDetailsData = [
    {
      title: "Xbox series",
      name: searchValue,
      rating: 5,
      review: 2,
      stock: 81,
      currentPrice: 78.89,
      oldPrice: 109.19,
      discount: 28,
      productDetails: [
        "RAM: 16GB",
        "Hard Drive: 256GB SSD",
        "Screen Size: 13.3 inches",
      ],
      color: ["white", "red", "black"],
      productService: [
        "Estimated delivery time 14-30 days",
        "18 months warranty at Genuine Warranty Center.",
        "Discount 30% on Xbox Series, use code: ECM30",
      ],
      sku: "IBX6XH-2",
      tags: [
        "Accessories",
        "Electronic",
        "Game",
        "PC Gaming",
        "Tech Accessories",
      ],
      share: [{ icon: "", url: "" }],
    },
  ];
  return (
    <main>
      <div className={styles.productDetailsAndHomeContainer}>
        <div className={styles.productDetailsAndHome}>
          <Link className={styles.home} href={"/"}>
            Home
          </Link>
          /
          <Link className={styles.shop} href={"/shop"}>
            shop
          </Link>
          /<p className={styles.productDetails}>{searchValue}</p>
        </div>
      </div>

      <section className={styles.productDetailsALlDataContainer}>
        <div>
          <ProductDetailsSlider />
        </div>
        <div>
          {productDetailsData.map((data, ind) => (
            <div key={ind}>
              <p className={styles.title}>{data?.title}</p>
              <h3 className={styles.name}>{data?.name}</h3>

              <div className={styles.ratingReviewAndStockContainer}>
                <p className={styles.rating}>{data?.rating}</p>
                <p className={styles.review}>{data?.review} review</p>
                <p className={styles.stock}>{data?.stock} in stock</p>
              </div>

              <p className={styles.priceContainer}>
                <span className={styles.currentPrice}>
                  ${data?.currentPrice}
                </span>
                <del className={styles.oldPrice}>${data?.oldPrice}</del>
              </p>

              <li>{data?.tags}</li>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ProductDetails;
