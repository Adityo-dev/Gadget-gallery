"use client";
import styles from "./dynamicProductDisplay.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// import components
import ColumnCart from "../products-cart/columnCart";
import ProductCategory from "../product-category/category";
import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import DynamicBreadcrumb from "../dynamicBreadcrumb";
import DynamicProductFiltering from "../dynamicProductFiltering";

// import icon
import games_icon from "../../assets/icons/product-category-icon/icon-games.png";
import headphone_icon from "../../assets/icons/product-category-icon/icon-headphone.png";
import laptops_icon from "../../assets/icons/product-category-icon/icon-laptops.png";
import phone_icon from "../../assets/icons/product-category-icon/icon-phone.png";
import speaker_icon from "../../assets/icons/product-category-icon/icon-speaker.png";
import television_icon from "../../assets/icons/product-category-icon/icon-television.png";
import ArrowSlider from "../arrowSlider";

const productCategory = [
  {
    icon: laptops_icon,
    title: "laptops",
    backgroundColor: "#DAEBE9",
  },
  {
    icon: games_icon,
    title: "games",
    backgroundColor: "#EBDDE8",
  },
  {
    icon: phone_icon,
    title: "smartphones",
    backgroundColor: "#F2E1D7",
  },
  {
    icon: television_icon,
    title: "television",
    backgroundColor: "#E9E5EF",
  },
  {
    icon: headphone_icon,
    title: "headphone",
    backgroundColor: "#EEEAE0",
  },
  {
    icon: speaker_icon,
    title: "speakers",
    backgroundColor: "#F2F5DE",
  },
];

const DynamicProductDetailsDisplay = ({ DynamicPageName, products }) => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(90000);

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
  ];

  return (
    <>
      <section>
        <DynamicBreadcrumb breadcrumbItems={breadcrumbItems} />
      </section>

      <section className={styles.productCategoryDetailsAllDataContainer}>
        <h1 className={styles.pageName}>{DynamicPageName}</h1>
        <div>
          <ArrowSlider categoryData={productCategory} />
        </div>

        <div className={styles.productCategoryDetailsCartAndAsideContainer}>
          <div className={styles.productCategoryDetailsAsideContainer}>
            <div className={styles.priceRangeContainer}>
              <p className={styles.priceRangeTitle}>Price Range</p>
              <p className={styles.hrLine} />
              <div className={styles.priceRangeInputContainer}>
                <input
                  className={styles.priceRangeInput}
                  type="text"
                  value={minPrice}
                  onChange={(e) => setMinPrice(Number(e.target.value))}
                />
                <input
                  className={styles.priceRangeInput}
                  type="text"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                />
              </div>
            </div>
            <br />
            <DynamicProductFiltering />
          </div>

          <div className={styles.productCategoryDetailsCartContainer}>
            {products.map((data, ind) => {
              if (
                data?.currentPrice >= minPrice &&
                data?.currentPrice <= maxPrice
              ) {
                return (
                  <div key={ind}>
                    <ColumnCart cartData={data} />
                  </div>
                );
              }
            })}
          </div>
        </div>
      </section>

      <div className={styles.productPaginationContainer}>
        {products.length < 20 ? (
          <div>
            <Stack spacing={2}>
              <Pagination count={5} variant="outlined" shape="rounded" />
            </Stack>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default DynamicProductDetailsDisplay;
