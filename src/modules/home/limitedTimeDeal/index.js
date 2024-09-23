import React from "react";
import styles from "./limitedTimeDeal.module.css";
// import components
import Timer from "@/components/timer";
import SimpleSlider from "@/components/simpleSlider";

// smart Phone
import smartPhone0 from "../../../assets/images/products/smart-phone/0.png";
import smartPhone1 from "../../../assets/images/products/smart-phone/1.png";
import smartPhone2 from "../../../assets/images/products/smart-phone/2.png";
import smartPhone3 from "../../../assets/images/products/smart-phone/3.png";
import smartPhone4 from "../../../assets/images/products/smart-phone/4.png";

const dealData = [
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
];

export default function LimitedTimeDeal() {
  return (
    <main className={styles.allDataContainer}>
      <section className={styles.dealAllInfoDataContainer}>
        <div className={styles.limitedDealInfoContainer}>
          <div>
            <p className={styles.dealTopTitle}>ONLY FOR TODAY</p>
            <h3 className={styles.dealTitle}>Deal Of The Day</h3>
            <p className={styles.dealSubTitle}>
              Deal of the Day for deals on consumer electronics. Watch for many
              other great daily offers.
            </p>
          </div>
          <div className={styles.timerContainer}>
            <Timer initialHours={22} />
          </div>
        </div>
        <div className={styles.limitedDealProductInfoContainer}>
          <SimpleSlider dealData={dealData} />
        </div>
      </section>
    </main>
  );
}
