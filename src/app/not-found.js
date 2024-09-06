"use client";
import styles from "./notFound.module.css";
import Link from "next/link";

export default function NotFound({ params }) {
  console.log(params);

  return (
    <section className={styles.container}>
      <div className={styles.notFoundAllDataContainer}>
        <h1 className={styles.notFoundNumber}>404</h1>
        <h4 className={styles.notFoundTitle}>
          The page you&apos;re looking for doesn&apos;t exist or
          <br className={styles.notFoundTitleBr} /> probably moved somewhere...
        </h4>
        <p className={styles.notFoundSubTitle}>
          Please back to homepage or check our offer
        </p>
        <Link className={styles.goBackBtn} href={"/"}>
          Back to homepage
        </Link>
      </div>
    </section>
  );
}
