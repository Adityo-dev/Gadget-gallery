import styles from "./page.module.css";

// import components
import HomeHero from "@/modules/home/hero";
import LimitedTimeDeal from "@/modules/home/limitedTimeDeal";
import ProductBanner1 from "@/components/banner/banner1";
import BestSellers from "@/components/best-sellers";
import ProductBanner2 from "@/components/banner/banner2";
import ProductBanner3 from "@/components/banner/banner3";
import TrendingProducts from "@/components/trending-products";
import Brand from "@/modules/home/brand";
import Newsletter from "@/modules/home/newsletter";
import Service from "@/modules/home/service";

export default function Home() {
  return (
    <main className={styles.main}>
      <HomeHero />
      <LimitedTimeDeal />
      <ProductBanner1 />
      <BestSellers />
      <div>
        <ProductBanner2 />
        <ProductBanner3 />
      </div>
      <TrendingProducts />
      <Brand />
      <Newsletter />
      <Service />
    </main>
  );
}
