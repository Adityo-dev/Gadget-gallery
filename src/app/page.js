import TrendingProducts from "@/components/trending-products";
import styles from "./page.module.css";

// import components
import HomeHero from "@/modules/home/hero";
import ProductBanner2 from "@/components/banner/banner2";
import ProductBanner3 from "@/components/banner/banner3";
import BestSellers from "@/components/best-sellers";

export default function Home() {
  return (
    <main className={styles.main}>
      <HomeHero />
      <BestSellers />
      <div>
        <ProductBanner2 />
        <ProductBanner3 />
      </div>
      <TrendingProducts />
    </main>
  );
}
