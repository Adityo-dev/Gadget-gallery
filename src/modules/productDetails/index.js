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
import DynamicBreadcrumb from "@/components/dynamicBreadcrumb";
import ProductDetailsColumnSlider from "@/components/productDetailsSlider";
import RelatedProducts from "@/components/relatedProducts";

const ProductDetails = ({ data }) => {
  let searchId = data.split("%").join(" ");
  let searchValue = searchId.split("20").join(" ");

  const productDetailsData = [
    {
      title: searchValue,
      name: "Xbox series",
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
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: `${searchValue}`, href: "/shop" },
  ];

  return (
    <main className={styles.productDetailsAllDataInfoContainer}>
      <section>
        <DynamicBreadcrumb breadcrumbItems={breadcrumbItems} />
      </section>

      <section className={styles.productDetailsALlDataContainer}>
        <div className={styles.productDetailsImageContainer}>
          <ProductDetailsColumnSlider />
        </div>

        <div className={styles.productDetailsInfoContainer}>
          {productDetailsData.map((data, ind) => (
            <div key={ind}>
              <p className={styles.title}>{data?.name}</p>
              <h3 className={styles.name}>{data?.title}</h3>

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

              <ul className={styles.serviceList}>
                {data.productService.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>

              <ProductCounter product={data} />

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
      <section>
        <RelatedProducts />
      </section>
    </main>
  );
};

export default ProductDetails;
