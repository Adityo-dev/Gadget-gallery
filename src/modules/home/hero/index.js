import styles from "./hero.module.css";
// import components
import ProductCategorySlider from "@/components/product-category/categotySlider";
import HeroSlider from "./heroSlider";

const HomeHero = () => {
  return (
    <main className={styles.heroAllDataMainContainer}>
      <ProductCategorySlider />
      <HeroSlider />
    </main>
  );
};

export default HomeHero;
