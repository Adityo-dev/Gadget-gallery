import styles from "./youMayBeInterested.module.css";

// smart Phone
import smartPhone0 from "../../assets/images/products/smart-phone/0.png";
import smartPhone1 from "../../assets/images/products/smart-phone/1.png";
import smartPhone2 from "../../assets/images/products/smart-phone/2.png";
// laptop
import laptop1 from "../../assets/images/products/laptop/1.png";
import laptop0 from "../../assets/images/products/laptop/10.png";
import laptop2 from "../../assets/images/products/laptop/2.png";
import laptop3 from "../../assets/images/products/laptop/3.png";
// watch
import watch1 from "../../assets/images/products/watch/1.png";
import watch2 from "../../assets/images/products/watch/2.png";
import watch3 from "../../assets/images/products/watch/3.png";
// accessories
import accessories1 from "../../assets/images/products/accessories/1.png";
import accessories2 from "../../assets/images/products/accessories/11.png";
import accessories3 from "../../assets/images/products/accessories/14.png";
import accessories4 from "../../assets/images/products/accessories/4.png";
import accessories5 from "../../assets/images/products/accessories/8.png";

import ArrowSlider from "../arrowSlider";

const relatedProducts = [
  {
    image: laptop3,
    name: "laptop",
    title: "DELL Vostro 3530 Laptops for Student & Business",
    rating: "5",
    currentPrice: "789.99",
    oldPrice: "",
    discount: "",
    soldOut: false,
    hot: true,
    url: "",
  },
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
    image: laptop2,
    name: "Laptop",
    title: "MacBook Air, 13″, Core I5 1.6Ghz 8GB RAM 128GB SSD",
    rating: "5",
    currentPrice: "894.53",
    oldPrice: "",
    discount: "",
    soldOut: false,
    hot: true,
    url: "",
  },
  {
    image: accessories4,
    name: "accessories",
    title: "Wifi Adapter Dual Band, USB 3.0, Network Interface Card",
    rating: "5",
    currentPrice: "44.00",
    oldPrice: "",
    discount: "",
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
    image: accessories2,
    name: "accessories",
    title: "Extension Cable Male Jack 4.4mm, Gold Plated 3m",
    rating: "5",
    currentPrice: "23.90",
    oldPrice: "25.00",
    discount: "4",
    soldOut: false,
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
    image: laptop1,
    name: "Laptop",
    title: "MacBook Air, 13″, Core I5 1.6Ghz 8GB RAM 128GB SSD",
    rating: "5",
    currentPrice: "894.53",
    oldPrice: "949.99",
    discount: "26",
    soldOut: false,
    hot: true,
    url: "",
  },
  {
    image: laptop0,
    name: "laptop",
    title: "Laptop 17.3″ FHD 165Hz IPS Display, 16GB DDR5, 1TB Gen 4 SSD",
    rating: "5",
    currentPrice: "1106.07",
    oldPrice: "1199.99",
    discount: "8",
    soldOut: false,
    hot: false,
    url: "",
  },

  {
    image: watch2,
    name: "iWatch",
    title: "Apple Watch Series 5 Aluminium – Black",
    rating: "5",
    currentPrice: "399.00",
    oldPrice: "",
    discount: "",
    soldOut: false,
    hot: true,
    url: "",
  },
  {
    image: watch3,
    name: "iWatch",
    title: "Samsung Galaxy S23 Ultra, Factory Unlocked, 512GB",
    rating: "4",
    currentPrice: "950.00",
    oldPrice: "",
    discount: "",
    soldOut: false,
    hot: true,
    url: "",
  },
  {
    image: accessories1,
    name: "accessories",
    title: "ASUS ROG Sheath Gaming Mousemat",
    rating: "4",
    currentPrice: "40.06",
    oldPrice: "59.00",
    discount: "42",
    soldOut: false,
    hot: true,
    url: "",
  },

  {
    image: accessories3,
    name: "accessories",
    title: "Plug Charger Power Supply AC Adapter",
    rating: "5",
    currentPrice: "8.94",
    oldPrice: "18.00",
    discount: "50",
    soldOut: false,
    hot: true,
    url: "",
  },
  {
    image: accessories5,
    name: "accessories",
    title: "Ultra Slim Portable External Hard Drive 1TB",
    rating: "4",
    currentPrice: "69.00",
    oldPrice: "",
    discount: "",
    soldOut: false,
    hot: true,
    url: "",
  },
];

function YouMayBeInterested() {
  return (
    <div>
      <h1 className={styles.title}>YouMayBeInterested</h1>
      <ArrowSlider relatedProducts={relatedProducts} />
    </div>
  );
}

export default YouMayBeInterested;
