"use client";
import styles from "./bestSellers.module.css";
import Image from "next/image";
import Link from "next/link";
// import Tabs
import { Tab } from "@headlessui/react";
// import components
import ColumnCart from "../products-cart/columnCart";
import DynamicButton from "../buttonGroup/normalButton";
// import image
// smart Phone
import smartPhone0 from "../../assets/images/products/smart-phone/0.png";
import smartPhone1 from "../../assets/images/products/smart-phone/1.png";
import smartPhone2 from "../../assets/images/products/smart-phone/2.png";
import smartPhone3 from "../../assets/images/products/smart-phone/3.png";
import smartPhone4 from "../../assets/images/products/smart-phone/4.png";
import smartPhone5 from "../../assets/images/products/smart-phone/5.png";
import smartPhone6 from "../../assets/images/products/smart-phone/6.png";
import smartPhone7 from "../../assets/images/products/smart-phone/7.png";

// laptop
import laptop1 from "../../assets/images/products/laptop/1.png";
import laptop0 from "../../assets/images/products/laptop/10.png";
import laptop2 from "../../assets/images/products/laptop/2.png";
import laptop3 from "../../assets/images/products/laptop/3.png";
import laptop4 from "../../assets/images/products/laptop/4.png";
import laptop5 from "../../assets/images/products/laptop/5.png";
import laptop6 from "../../assets/images/products/laptop/6.png";
import laptop7 from "../../assets/images/products/laptop/7.png";

// watch
import watch0 from "../../assets/images/products/watch/0.png";
import watch1 from "../../assets/images/products/watch/1.png";
import watch2 from "../../assets/images/products/watch/2.png";
import watch3 from "../../assets/images/products/watch/3.png";
import watch4 from "../../assets/images/products/watch/4.png";
import watch5 from "../../assets/images/products/watch/5.png";
import watch6 from "../../assets/images/products/watch/6.png";
import watch7 from "../../assets/images/products/watch/7.png";
// accessories
import accessories0 from "../../assets/images/products/accessories/0.png";
import accessories1 from "../../assets/images/products/accessories/1.png";
import accessories2 from "../../assets/images/products/accessories/11.png";
import accessories3 from "../../assets/images/products/accessories/14.png";
import accessories4 from "../../assets/images/products/accessories/4.png";
import accessories5 from "../../assets/images/products/accessories/8.png";
import accessories6 from "../../assets/images/products/accessories/6.png";
import accessories7 from "../../assets/images/products/accessories/7.png";

// banner
import phoneBanner from "../../assets/images/banner/banner-16.png";
import laptopBanner from "../../assets/images/banner/banner-18.png";
import watchBanner from "../../assets/images/banner/banner-17.png";
import accessoriesBanner from "../../assets/images/banner/banner-11.jpg";

const bestSellersData = [
  {
    categoryName: "Smart Phone",
    categoryData: [
      {
        image: smartPhone0,
        name: "samsung galaxy",
        title: "Samsung Galaxy S23 Ultra, Factory Unlocked, 512GB",
        rating: "4.5",
        currentPrice: "699.99",
        oldPrice: "949.99",
        discount: "26",
        soldOut: false,
        hot: true,
        url: "",
      },
      {
        image: smartPhone1,
        name: "iPhone",
        title: "Apple iPhone 15 Pro Max, 512GB, Unlocked",
        rating: "5",
        currentPrice: "1299.00",
        oldPrice: "1399.00",
        discount: "7",
        soldOut: true,
        hot: false,
        url: "",
      },
      {
        image: smartPhone2,
        name: "Prepaid Phones",
        title: "Apple iPhone 14 Pro Max (256 GB) – White Titanium",
        rating: "0",
        currentPrice: "519.09",
        oldPrice: "805.19",
        discount: "36",
        soldOut: false,
        hot: false,
        url: "",
      },
      {
        image: smartPhone3,
        name: "iPhone",
        title: "Apple iPhone 11 Pro Max Triple Camera",
        rating: "5",
        currentPrice: "425.00",
        oldPrice: "525.00",
        discount: "10",
        url: "",
      },
      {
        image: smartPhone4,
        name: "Unlocked Phones",
        title: "Unlocked iPhone 12 5G LTE 6.1” 4GB-128GB",
        rating: "4",
        currentPrice: "744.00",
        oldPrice: "",
        discount: "",
        url: "",
      },
      {
        image: smartPhone5,
        name: "Unlocked Phones",
        title: "Apple iPhone 13 Mini – 128GB – Factory Unlocked",
        rating: "0",
        currentPrice: "699.99",
        oldPrice: "",
        discount: "",
        url: "",
      },
      {
        image: smartPhone6,
        name: "unlocked Phones",
        title: "Apple iPhone SE 2022 Unlocked",
        rating: "5",
        currentPrice: "382.58",
        oldPrice: "",
        discount: "",
        url: "",
      },
      {
        image: smartPhone7,
        name: "samsung galaxy",
        title: "Samsung Galaxy S23 Ultra, Factory Unlocked, 512GB",
        rating: "5",
        currentPrice: "1499.00",
        oldPrice: "2761.00",
        discount: "46",
        url: "",
      },
    ],
    seeMoreData: {
      image: phoneBanner,
      subTitle: "best selling collection",
      title: "big sale",
      url: "/product-category/smartphone",
    },
  },
  {
    categoryName: "Laptop",
    categoryData: [
      {
        image: laptop1,
        name: "Laptop",
        title: "MacBook Air, 13″, Core I5 1.6Ghz 8GB RAM 128GB SSD",
        rating: "5",
        currentPrice: "894.53",
        oldPrice: "949.99",
        discount: "26",
        soldOut: false,
        hot: true,
        url: "",
      },
      {
        image: laptop0,
        name: "laptop",
        title: "Laptop 17.3″ FHD 165Hz IPS Display, 16GB DDR5, 1TB Gen 4 SSD",
        rating: "5",
        currentPrice: "1106.07",
        oldPrice: "1199.99",
        discount: "8",
        soldOut: false,
        hot: false,
        url: "",
      },
      {
        image: laptop2,
        name: "Laptop",
        title: "MacBook Air, 13″, Core I5 1.6Ghz 8GB RAM 128GB SSD",
        rating: "5",
        currentPrice: "894.53",
        oldPrice: "",
        discount: "",
        soldOut: false,
        hot: true,
        url: "",
      },
      {
        image: laptop3,
        name: "laptop",
        title: "DELL Vostro 3530 Laptops for Student & Business",
        rating: "5",
        currentPrice: "789.99",
        oldPrice: "",
        discount: "",
        soldOut: false,
        hot: true,
        url: "",
      },
      {
        image: laptop4,
        name: "Laptops",
        title: "Laptop 14″ 8-core CPU, M2 2022, 8GB | 256GB, New",
        rating: "5",
        currentPrice: "1359.00",
        oldPrice: "1584.00",
        discount: "14",
        soldOut: false,
        hot: true,
        url: "",
      },
      {
        image: laptop5,
        name: "laptop",
        title: "HP 14″ Convertible 2-in-1 Chromebook Laptop",
        rating: "5",
        currentPrice: "379.99",
        oldPrice: "",
        discount: "26",
        soldOut: false,
        hot: true,
        url: "",
      },
      {
        image: laptop6,
        name: "laptop",
        title: "Laptop 16”, AMD Radeon Vega 7 Graphics, 8GB RAM, 512GB SSD",
        rating: "5",
        currentPrice: "747.79",
        oldPrice: "",
        discount: "",
        soldOut: false,
        hot: true,
        url: "",
      },
      {
        image: laptop7,
        name: "laptop",
        title: "Laptop 2 in 1 9420 Core i7, Windows 11 Pro",
        rating: "5",
        currentPrice: "2851.00",
        oldPrice: "",
        discount: "",
        soldOut: false,
        hot: false,
        url: "",
      },
    ],
    seeMoreData: {
      image: laptopBanner,
      subTitle: "up to 20% up",
      title: "best gift",
      url: "/product-category/laptops",
    },
  },
  {
    categoryName: "watch",
    categoryData: [
      {
        image: watch0,
        name: "iWatch",
        title: "Apple Watch SE 2022 40mm GPS",
        rating: "4",
        currentPrice: "296.70",
        oldPrice: "333.33",
        discount: "11",
        soldOut: false,
        hot: false,
        url: "",
      },
      {
        image: watch1,
        name: "iWatch",
        title: "Apple Watch Series 8 LTE 41mm",
        rating: "5",
        currentPrice: "950.00",
        oldPrice: "",
        discount: "",
        soldOut: false,
        hot: false,
        url: "",
      },
      {
        image: watch2,
        name: "iWatch",
        title: "Apple Watch Series 5 Aluminium – Black",
        rating: "5",
        currentPrice: "399.00",
        oldPrice: "",
        discount: "",
        soldOut: false,
        hot: true,
        url: "",
      },
      {
        image: watch3,
        name: "iWatch",
        title: "Samsung Galaxy S23 Ultra, Factory Unlocked, 512GB",
        rating: "4",
        currentPrice: "950.00",
        oldPrice: "",
        discount: "",
        soldOut: false,
        hot: true,
        url: "",
      },
      {
        image: watch4,
        name: "iWatch",
        title: "Apple Watch Ultra, Titanium Case",
        rating: "5",
        currentPrice: "600.00",
        oldPrice: "800.00",
        discount: "25",
        soldOut: false,
        hot: true,
        url: "",
      },
      {
        image: watch5,
        name: "iWatch",
        title: "Apple Watch Ultra 49mm – Beige",
        rating: "2",
        currentPrice: "599.99",
        oldPrice: "775.00",
        discount: "23",
        soldOut: false,
        hot: false,
        url: "",
      },
      {
        image: watch6,
        name: "iWatch",
        title: "Apple Watch Series 7 Aluminum 41mm",
        rating: "5",
        currentPrice: "499.00",
        oldPrice: "",
        discount: "",
        soldOut: false,
        hot: true,
        url: "",
      },
      {
        image: watch7,
        name: "iWatch",
        title: "Apple Watch Series 7 Aluminum 41mm",
        rating: "5",
        currentPrice: "499.00",
        oldPrice: "",
        discount: "",
        soldOut: false,
        hot: true,
        url: "",
      },
    ],
    seeMoreData: {
      image: watchBanner,
      subTitle: "up to 20% up",
      title: "best gift",
      url: "/product-category/watches",
    },
  },
  {
    categoryName: "accessories",
    categoryData: [
      {
        image: accessories0,
        name: "accessories",
        title: "Gold Plated DisplayPort to DisplayPort Cable 10 Feet",
        rating: "5",
        currentPrice: "16.62",
        oldPrice: "",
        discount: "",
        soldOut: false,
        hot: true,
        url: "",
      },
      {
        image: accessories1,
        name: "accessories",
        title: "ASUS ROG Sheath Gaming Mousemat",
        rating: "4",
        currentPrice: "40.06",
        oldPrice: "59.00",
        discount: "42",
        soldOut: false,
        hot: true,
        url: "",
      },
      {
        image: accessories2,
        name: "accessories",
        title: "Extension Cable Male Jack 4.4mm, Gold Plated 3m",
        rating: "5",
        currentPrice: "23.90",
        oldPrice: "25.00",
        discount: "4",
        soldOut: false,
        hot: false,
        url: "",
      },
      {
        image: accessories3,
        name: "accessories",
        title: "Plug Charger Power Supply AC Adapter",
        rating: "5",
        currentPrice: "8.94",
        oldPrice: "18.00",
        discount: "50",
        soldOut: false,
        hot: true,
        url: "",
      },
      {
        image: accessories4,
        name: "accessories",
        title: "Wifi Adapter Dual Band, USB 3.0, Network Interface Card",
        rating: "5",
        currentPrice: "44.00",
        oldPrice: "",
        discount: "",
        soldOut: false,
        hot: true,
        url: "",
      },
      {
        image: accessories5,
        name: "accessories",
        title: "Ultra Slim Portable External Hard Drive 1TB",
        rating: "4",
        currentPrice: "69.00",
        oldPrice: "",
        discount: "",
        soldOut: false,
        hot: true,
        url: "",
      },
      {
        image: accessories6,
        name: "accessories",
        title: "Wireless Mouse For Computer Gaming",
        rating: "5",
        currentPrice: "13.80",
        oldPrice: "19.72",
        discount: "30",
        soldOut: false,
        hot: false,
        url: "",
      },
      {
        image: accessories7,
        name: "accessories",
        title: "USB-C Premium Multiport Adapter with HDMI",
        rating: "5",
        currentPrice: "79.77",
        oldPrice: "120.54",
        discount: "34",
        soldOut: false,
        hot: false,
        url: "",
      },
    ],
    seeMoreData: {
      image: accessoriesBanner,
      subTitle: "buy 1 get 1 free",
      title: "don't miss!",
      url: "/product-category/accessories",
    },
  },
];

export default function BestSellers() {
  return (
    <div className={styles.bestSellersAllDataContainer}>
      <Tab.Group className={styles.bestSellersAllDataInfoContainer}>
        <Tab.List className={styles.bestSellersHeaderTitleContainer}>
          <h2 className={styles.bestSellersTitleText}>Best Sellers</h2>
          <div className={styles.tabBtnContainer}>
            {bestSellersData?.map((data, ind) => (
              <Tab
                className={({ selected }) =>
                  `${styles.tabBtn} ${selected ? styles.selectedBtn : ""}`
                }
                key={ind}
              >
                {data?.categoryName}
              </Tab>
            ))}
          </div>
        </Tab.List>
        <span className={styles.bestSellersLineHr} />
        <Tab.Panels>
          {bestSellersData?.map((data, ind) => (
            <Tab.Panel className={styles.categoryInfoDataContainer} key={ind}>
              {data?.categoryData?.map((categoryData, ind) => (
                <div key={ind}>
                  <ColumnCart cartData={categoryData} />
                </div>
              ))}

              <div className={styles.seeMoreContainer}>
                <Link href={data?.seeMoreData?.url}>
                  <Image
                    className={styles.sreMoreImage}
                    src={data?.seeMoreData?.image}
                    alt=""
                  />
                </Link>
                <div className={styles.seeMoreInfoContainer}>
                  <p className={styles.seeMoreSubtitle}>
                    {data?.seeMoreData?.subTitle}
                  </p>

                  <p className={styles.seeMoreTitle}>
                    {data?.seeMoreData?.title}
                  </p>

                  <div>
                    <DynamicButton
                      btnName={"Shop Now"}
                      btnUrl={data?.seeMoreData?.url}
                    />
                  </div>
                </div>
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
