import styles from "./hero.module.css";
// import components
import ProductCategory from "@/components/product-category";
import HeroSlider from "./heroSlider";

const HomeHero = () => {
  return (
    <main className={styles.heroAllDataMainContainer}>
      <ProductCategory />
      <HeroSlider />
    </main>
  );
};

export default HomeHero;
