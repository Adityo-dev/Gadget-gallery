import React from "react";
import styles from "./limitedTimeDeal.module.css";
// import components
import Timer from "@/components/timer";

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
            <Timer initialHours={500} />
          </div>
        </div>
        <div className={styles.limitedDealProductInfoContainer}>
          <h1>HI</h1>
        </div>
      </section>
    </main>
  );
}
