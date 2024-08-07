"use client";
import styles from "./bestSellers.module.css";
import Image from "next/image";
import Link from "next/link";
// import Tabs
import { Tab } from "@headlessui/react";
// import components
import ColumnCart from "../products-cart/columnCart";
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
import watch8 from "../../assets/images/products/watch/8.png";
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
import banner8 from "../../assets/images/banner/banner-8.jpeg";
import banner9 from "../../assets/images/banner/banner-9.jpeg";
import banner11 from "../../assets/images/banner/banner-11.jpg";
import DynamicButton from "../button";

const bestSellersData = [
  {
    categoryName: "Smart Phone",
    categoryData: [
      {
        image: smartPhone0,
        name: "samsung galaxy",
        title: "Samsung Galaxy S23 Ultra, Factory Unlocked, 512GB",
        rating: "5",
        currentPrice: "699.99",
        oldPrice: "949.99",
        discount: "26",
        url: "",
      },
      {
        image: smartPhone1,
        name: "samsung galaxy",
        title: "Samsung Galaxy S23 Ultra, Factory Unlocked, 512GB",
        rating: "5",
        currentPrice: "699.99",
        oldPrice: "949.99",
        discount: "26",
        url: "",
      },
      {
        image: smartPhone2,
        name: "samsung galaxy",
        title: "Samsung Galaxy S23 Ultra, Factory Unlocked, 512GB",
        rating: "5",
        currentPrice: "699.99",
        oldPrice: "949.99",
        discount: "26",
        url: "",
      },
      {
        image: smartPhone3,
        name: "samsung galaxy",
        title: "Samsung Galaxy S23 Ultra, Factory Unlocked, 512GB",
        rating: "5",
        currentPrice: "699.99",
        oldPrice: "949.99",
        discount: "26",
        url: "",
      },
      {
        image: smartPhone4,
        name: "samsung galaxy",
        title: "Samsung Galaxy S23 Ultra, Factory Unlocked, 512GB",
        rating: "5",
        currentPrice: "699.99",
        oldPrice: "949.99",
        discount: "26",
        url: "",
      },
      {
        image: smartPhone5,
        name: "samsung galaxy",
        title: "Samsung Galaxy S23 Ultra, Factory Unlocked, 512GB",
        rating: "5",
        currentPrice: "699.99",
        oldPrice: "949.99",
        discount: "26",
        url: "",
      },
      {
        image: smartPhone6,
        name: "samsung galaxy",
        title: "Samsung Galaxy S23 Ultra, Factory Unlocked, 512GB",
        rating: "5",
        currentPrice: "699.99",
        oldPrice: "949.99",
        discount: "26",
        url: "",
      },
      {
        image: smartPhone7,
        name: "samsung galaxy",
        title: "Samsung Galaxy S23 Ultra, Factory Unlocked, 512GB",
        rating: "5",
        currentPrice: "699.99",
        oldPrice: "949.99",
        discount: "26",
        url: "",
      },
    ],
    seeMoreData: {
      image: banner8,
      subTitle: "best selling collection",
      title: "big sale",
      url: "",
    },
  },
  {
    categoryName: "Laptop",
    categoryData: [
      {
        image: laptop1,
        name: "Laptop",
        title: "Samsung Galaxy S23 Ultra, Factory Unlocked, 512GB",
        rating: "5",
        currentPrice: "699.99",
        oldPrice: "949.99",
        discount: "26",
        hot: true,
        url: "",
      },
      {
        image: laptop0,
        name: "samsung galaxy",
        title: "Samsung Galaxy S23 Ultra, Factory Unlocked, 512GB",
        rating: "5",
        currentPrice: "699.99",
        oldPrice: "949.99",
        discount: "26",
        hot: true,
        url: "",
      },
      {
        image: laptop2,
        name: "samsung galaxy",
        title: "Samsung Galaxy S23 Ultra, Factory Unlocked, 512GB",
        rating: "5",
        currentPrice: "699.99",
        oldPrice: "949.99",
        discount: "26",
        hot: true,
        url: "",
      },
      {
        image: laptop3,
        name: "samsung galaxy",
        title: "Samsung Galaxy S23 Ultra, Factory Unlocked, 512GB",
        rating: "5",
        currentPrice: "699.99",
        oldPrice: "949.99",
        discount: "26",
        hot: true,
        url: "",
      },
      {
        image: laptop4,
        name: "samsung galaxy",
        title: "Samsung Galaxy S23 Ultra, Factory Unlocked, 512GB",
        rating: "5",
        currentPrice: "699.99",
        oldPrice: "949.99",
        discount: "26",
        hot: true,
        url: "",
      },
      {
        image: laptop5,
        name: "samsung galaxy",
        title: "Samsung Galaxy S23 Ultra, Factory Unlocked, 512GB",
        rating: "5",
        currentPrice: "699.99",
        oldPrice: "949.99",
        discount: "26",
        hot: true,
        url: "",
      },
      {
        image: laptop6,
        name: "samsung galaxy",
        title: "Samsung Galaxy S23 Ultra, Factory Unlocked, 512GB",
        rating: "5",
        currentPrice: "699.99",
        oldPrice: "949.99",
        discount: "26",
        hot: true,
        url: "",
      },
      {
        image: laptop7,
        name: "samsung galaxy",
        title: "Samsung Galaxy S23 Ultra, Factory Unlocked, 512GB",
        rating: "5",
        currentPrice: "699.99",
        oldPrice: "949.99",
        discount: "26",
        hot: true,
        url: "",
      },
    ],
    seeMoreData: {
      image: banner9,
      subTitle: "up to 20% up",
      title: "best gift",
      url: "",
    },
  },
  {
    categoryName: "watch",
    categoryData: [
      {
        image: watch0,
        name: "Watch",
        title: "Samsung Galaxy S23 Ultra, Factory Unlocked, 512GB",
        rating: "5",
        currentPrice: "699.99",
        oldPrice: "949.99",
        discount: "26",
        url: "",
      },
      {
        image: watch1,
        name: "samsung galaxy",
        title: "Samsung Galaxy S23 Ultra, Factory Unlocked, 512GB",
        rating: "5",
        currentPrice: "699.99",
        oldPrice: "949.99",
        discount: "26",
        url: "",
      },
      {
        image: watch2,
        name: "samsung galaxy",
        title: "Samsung Galaxy S23 Ultra, Factory Unlocked, 512GB",
        rating: "5",
        currentPrice: "699.99",
        oldPrice: "949.99",
        discount: "26",
        url: "",
      },
      {
        image: watch3,
        name: "samsung galaxy",
        title: "Samsung Galaxy S23 Ultra, Factory Unlocked, 512GB",
        rating: "5",
        currentPrice: "699.99",
        oldPrice: "949.99",
        discount: "26",
        url: "",
      },
      {
        image: watch4,
        name: "samsung galaxy",
        title: "Samsung Galaxy S23 Ultra, Factory Unlocked, 512GB",
        rating: "5",
        currentPrice: "699.99",
        oldPrice: "949.99",
        discount: "26",
        url: "",
      },
      {
        image: watch5,
        name: "samsung galaxy",
        title: "Samsung Galaxy S23 Ultra, Factory Unlocked, 512GB",
        rating: "5",
        currentPrice: "699.99",
        oldPrice: "949.99",
        discount: "26",
        url: "",
      },
      {
        image: watch6,
        name: "samsung galaxy",
        title: "Samsung Galaxy S23 Ultra, Factory Unlocked, 512GB",
        rating: "5",
        currentPrice: "699.99",
        oldPrice: "949.99",
        discount: "26",
        url: "",
      },
      {
        image: watch7,
        name: "samsung galaxy",
        title: "Samsung Galaxy S23 Ultra, Factory Unlocked, 512GB",
        rating: "5",
        currentPrice: "699.99",
        oldPrice: "949.99",
        discount: "26",
        url: "",
      },
    ],
    seeMoreData: {
      image: banner8,
      subTitle: "up to 20% up",
      title: "best gift",
      url: "",
    },
  },
  {
    categoryName: "accessories",
    categoryData: [
      {
        image: accessories0,
        name: "accessories",
        title: "Samsung Galaxy S23 Ultra, Factory Unlocked, 512GB",
        rating: "5",
        currentPrice: "699.99",
        oldPrice: "949.99",
        discount: "26",
        url: "",
      },
      {
        image: accessories1,
        name: "samsung galaxy",
        title: "Samsung Galaxy S23 Ultra, Factory Unlocked, 512GB",
        rating: "5",
        currentPrice: "699.99",
        oldPrice: "949.99",
        discount: "26",
        url: "",
      },
      {
        image: accessories2,
        name: "samsung galaxy",
        title: "Samsung Galaxy S23 Ultra, Factory Unlocked, 512GB",
        rating: "5",
        currentPrice: "699.99",
        oldPrice: "949.99",
        discount: "26",
        url: "",
      },
      {
        image: accessories3,
        name: "samsung galaxy",
        title: "Samsung Galaxy S23 Ultra, Factory Unlocked, 512GB",
        rating: "5",
        currentPrice: "699.99",
        oldPrice: "949.99",
        discount: "26",
        url: "",
      },
      {
        image: accessories4,
        name: "samsung galaxy",
        title: "Samsung Galaxy S23 Ultra, Factory Unlocked, 512GB",
        rating: "5",
        currentPrice: "699.99",
        oldPrice: "949.99",
        discount: "26",
        url: "",
      },
      {
        image: accessories5,
        name: "samsung galaxy",
        title: "Samsung Galaxy S23 Ultra, Factory Unlocked, 512GB",
        rating: "5",
        currentPrice: "699.99",
        oldPrice: "949.99",
        discount: "26",
        url: "",
      },
      {
        image: accessories6,
        name: "samsung galaxy",
        title: "Samsung Galaxy S23 Ultra, Factory Unlocked, 512GB",
        rating: "5",
        currentPrice: "699.99",
        oldPrice: "949.99",
        discount: "26",
        url: "",
      },
      {
        image: accessories7,
        name: "samsung galaxy",
        title: "Samsung Galaxy S23 Ultra, Factory Unlocked, 512GB",
        rating: "5",
        currentPrice: "699.99",
        oldPrice: "949.99",
        discount: "26",
        url: "",
      },
    ],
    seeMoreData: {
      image: banner11,
      subTitle: "buy 1 get 1 free",
      title: "don't miss!",
      url: "",
    },
  },
];
// "flex space-x-1 rounded-xl bg-blue-900/20 p-1"
export default function BestSellers() {
  return (
    <div className={styles.bestSellersAllDataContainer}>
      <Tab.Group className={styles.bestSellersAllDataInfoContainer}>
        <Tab.List className={styles.bestSellersHeaderTitleContainer}>
          <h2 className={styles.bestSellersTitleText}>Best Sellers</h2>
          <div className={styles.tabBtnContainer}>
            {bestSellersData?.map((data, ind) => (
              <Tab className={styles.tabBtn} key={ind}>
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
