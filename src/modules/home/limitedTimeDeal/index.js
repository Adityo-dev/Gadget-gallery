import React from "react";
import styles from "./limitedTimeDeal.module.css";
// import components
import Timer from "@/components/timer";
import SimpleSlider from "@/components/simpleSlider";

// smart Phone
import product0 from "../../../assets/images/products/smart-phone/0.png";
import product0_1 from "../../../assets/images/products/smart-phone/0.1.png";
import product0_2 from "../../../assets/images/products/smart-phone/0.2.png";
import product0_3 from "../../../assets/images/products/smart-phone/0.3.png";
import product1 from "../../../assets/images/products/smart-phone/1.png";
import product1_1 from "../../../assets/images/products/smart-phone/1.1.png";
import product1_2 from "../../../assets/images/products/smart-phone/1.2.png";
import product1_3 from "../../../assets/images/products/smart-phone/1.3.png";
import product2 from "../../../assets/images/products/laptop/4.png";
import product2_1 from "../../../assets/images/products/laptop/8.png";
import product2_2 from "../../../assets/images/products/laptop/6.png";
import product2_3 from "../../../assets/images/products/laptop/10.png";
import product3 from "../../../assets/images/products/camera/6.png";
import product3_1 from "../../../assets/images/products/camera/1.png";
import product3_2 from "../../../assets/images/products/camera/3.png";
import product3_3 from "../../../assets/images/products/camera/4.png";

const dealData = [
  {
    image: [product0_1, product0_3, product0_2, product0],
    name: "samsung galaxy",
    title: "Samsung Galaxy S23 Ultra, Factory Unlocked, 512GB",
    rating: "4.5",
    currentPrice: "699.99",
    oldPrice: "949.99",
    discount: "26",
    soldOut: false,
    hot: true,
  },
  {
    image: [product3, product3_1, product3_2, product3_3],
    name: "Camera & Lenses",
    title: "Action Camera with 5 3K60 Ultra HD Video",
    rating: "2",
    currentPrice: "129.74",
    oldPrice: "",
    discount: "",
    soldOut: false,
    hot: true,
  },

  {
    image: [product2, product2_1, product2_2, product2_3],
    name: "Laptops",
    title: "Laptop 14″ 8-core CPU, M2 2022, 8GB | 256GB, New",
    rating: "",
    currentPrice: "1359.00",
    oldPrice: "1584.00",
    discount: "14",
    soldOut: false,
    hot: true,
  },
  {
    image: [product1, product1_1, product1_2, product1_3],
    name: "iPhone",
    title: "Apple iPhone 15 Pro Max, 512GB, Unlocked",
    rating: "5",
    currentPrice: "1299.00",
    oldPrice: "1399.00",
    discount: "7",
    soldOut: true,
    hot: false,
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
