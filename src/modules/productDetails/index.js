import ProductDetailsSlider from "@/components/productDetailsSlider";
import styles from "./productDetails.module.css";
import Link from "next/link";

// import rating component
import * as React from "react";
import Rating from "@mui/material/Rating";
// import icon
import { ImFacebook2 } from "react-icons/im";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquarePinterest } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import ProductCounter from "@/components/productCounter";

const ProductDetails = ({ data }) => {
  let searchId = data.split("%").join(" ");
  let searchValue = searchId.split("20").join(" ");

  const productDetailsData = [
    {
      title: "Xbox series",
      name: searchValue,
      rating: 4.5,
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

      // productDetails2:
      //   "Package includes Xbox Series S 1TB console, 1 Xbox Wireless Controller, High Speed HDMI cable.",

      color: ["white", "red", "black"],
      productService: [
        "Estimated delivery time 14-30 days",
        "18 months warranty at Genuine Warranty Center.",
        "Discount 30% on Xbox Series, use code: ECM30",
      ],

      sku: "IBX6XH-2",
      tags: [
        { name: "Accessories", url: "" },
        { name: "Electronic", url: "" },
        { name: "Game", url: "" },
        { name: "PC Gaming", url: "" },
        { name: "Tech Accessories", url: "" },
      ],
      share: [
        { icon: <ImFacebook2 />, url: "" },
        { icon: <FaSquareXTwitter />, url: "" },
        { icon: <FaSquarePinterest />, url: "" },
        { icon: <FaLinkedin />, url: "" },
      ],
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
                {data.rating && (
                  <>
                    <Rating
                      className={styles.ratingStar}
                      name="rating"
                      defaultValue={data?.rating}
                      precision={0.5}
                      readOnly
                    />
                    <p className={styles.rating}>({data?.rating})</p>
                  </>
                )}

                {data.review && (
                  <p className={styles.review}>{data?.review} review</p>
                )}
                {data.stock && (
                  <p className={styles.stock}>{data?.stock} in stock</p>
                )}
              </div>

              <p className={styles.priceContainer}>
                <span className={styles.currentPrice}>
                  ${data?.currentPrice}
                </span>
                {data.oldPrice && (
                  <del className={styles.oldPrice}>${data?.oldPrice}</del>
                )}

                {data.discount && (
                  <span className={styles.discount}>
                    (-{`${data.discount}%`})
                  </span>
                )}
              </p>

              {data.productDetails && (
                <ul className={styles.productDetailsList}>
                  {data.productDetails.map((details, ind) => (
                    <li key={ind}>{details}</li>
                  ))}
                </ul>
              )}

              {data.productDetails2 && (
                <p className={styles.productDetails2}>{data.productDetails2}</p>
              )}

              <ul className={styles.serviceList}>
                {data.productService.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>

              <ProductCounter />

              <p className={styles.hrLine} />
              <div>
                <p>
                  <span>SKU:</span>
                  {data.sku && <span className={styles.sku}>{data.sku}</span>}
                </p>

                {data.tags && (
                  <div className={styles.tagsContainer}>
                    <span>Tags:</span>
                    <span>
                      {data.tags.map((tag, ind) => (
                        <Link className={styles.tags} href={tag?.url} key={ind}>
                          {tag?.name} {ind < data.tags.length - 1 && ","}
                        </Link>
                      ))}
                    </span>
                  </div>
                )}

                {data.share && (
                  <div className={styles.shareContainer}>
                    <span>share: </span>
                    {data.share.map((share, ind) => (
                      <Link
                        className={styles.shareIcon}
                        href={share?.url}
                        key={ind}
                      >
                        {share?.icon}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ProductDetails;
