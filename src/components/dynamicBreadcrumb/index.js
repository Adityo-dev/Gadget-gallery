"use client";
import styles from "./dynamicBreadcrumb.module.css";
import Link from "next/link";

function DynamicBreadcrumb({ breadcrumbItems }) {
  return (
    <section className={styles.dynamicBreadcrumbContainer}>
      <div className={styles.dynamicBreadcrumb}>
        {breadcrumbItems?.map((data, ind) => {
          const isLast = ind === breadcrumbItems.length - 1;

          return (
            <>
              {isLast ? (
                <span className={styles.productCategory}>{data?.label}</span>
              ) : (
                <>
                  <Link className={styles.linkData} href={data?.href}>
                    {data?.label}
                  </Link>
                  /
                </>
              )}
            </>
          );
        })}
      </div>
    </section>
  );
}

export default DynamicBreadcrumb;
