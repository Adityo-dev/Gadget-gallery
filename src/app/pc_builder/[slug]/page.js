import styles from "./dynamicPcBuilder.module.css";
import Image from "next/image";
import Link from "next/link";
// import components
import DynamicBreadcrumb from "@/components/dynamicBreadcrumb";
import DynamicProductDetailsDisplay from "@/components/DynamicProductDisplay";
// import image
import cpu1 from "../../../assets/images/products/cpu/cpu.png";
// import image
import product5 from "../../../assets/images/products/games/4.png";
import product7 from "../../../assets/images/products/games/6.png";
import product9 from "../../../assets/images/products/games/8.png";
import product10 from "../../../assets/images/products/games/19.png";
import product11 from "../../../assets/images/products/games/10.png";
import product12 from "../../../assets/images/products/games/11.png";
import product15 from "../../../assets/images/products/games/14.png";
import product16 from "../../../assets/images/products/games/15.png";
import product17 from "../../../assets/images/products/games/16.png";

// smart Phone
import smartPhone0 from "../../../assets/images/products/smart-phone/0.png";
import smartPhone3 from "../../../assets/images/products/smart-phone/3.png";

// laptop;
import laptop2 from "../../../assets/images/products/laptop/2.png";
import laptop4 from "../../../assets/images/products/laptop/4.png";

// watch
import watch3 from "../../../assets/images/products/watch/3.png";
import watch6 from "../../../assets/images/products/watch/6.png";
// accessories
import accessories0 from "../../../assets/images/products/accessories/0.png";
import accessories1 from "../../../assets/images/products/accessories/1.png";
import accessories2 from "../../../assets/images/products/accessories/11.png";
import accessories7 from "../../../assets/images/products/accessories/7.png";

const shop = [
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
    color: "black",
    model: "S23 Ultra",
    stock: "in stock",
    type: "smartphone",
    brand: "Samsung",
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
    color: "silver",
    model: "Air 13″",
    stock: "in stock",
    type: "laptop",
    brand: "Apple",
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
    soldOut: false,
    hot: true,
    color: "gold",
    model: "11 Pro Max",
    stock: "in stock",
    type: "smartphone",
    brand: "Apple",
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
    color: "black",
    model: "Galaxy Watch",
    stock: "in stock",
    type: "smartwatch",
    brand: "Samsung",
    url: "",
  },
  {
    image: product5,
    name: "Xbox Series",
    title: "Xbox Series S -1TB Gaming All-Digital Console, 4K Streaming Media",
    rating: 5,
    currentPrice: "279.99",
    oldPrice: "289.00",
    discount: "3",
    soldOut: false,
    hot: true,
    color: "white",
    model: "Series S",
    stock: "in stock",
    type: "console",
    brand: "Microsoft",
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
    color: "gold",
    model: "4.4mm Jack",
    stock: "in stock",
    type: "accessory",
    brand: "Generic",
    url: "",
  },
  {
    image: product7,
    name: "Playstation 5",
    title: "PlayStation 5 Console – Digital Edition",
    rating: 4,
    currentPrice: "399.00",
    oldPrice: "499.00",
    discount: "20",
    soldOut: false,
    hot: true,
    color: "white",
    model: "PS5 Digital",
    stock: "in stock",
    type: "console",
    brand: "Sony",
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
    color: "black",
    model: "ROG Sheath",
    stock: "in stock",
    type: "accessory",
    brand: "ASUS",
    url: "",
  },
  {
    image: product9,
    name: "Playstation 4",
    title: "PlayStation 4 Console – Spider-Man Bundle",
    rating: 0,
    currentPrice: "180.00",
    oldPrice: "",
    discount: "",
    soldOut: false,
    hot: true,
    color: "black",
    model: "PS4 Spider-Man",
    stock: "in stock",
    type: "console",
    brand: "Sony",
    url: "",
  },
  {
    image: product10,
    name: "Accessories",
    title: "Playstation DualSense Media Wireless Remote",
    rating: 4.33,
    currentPrice: "25.42",
    oldPrice: "36.89",
    discount: "31",
    soldOut: false,
    hot: true,
    color: "black",
    model: "DualSense",
    stock: "in stock",
    type: "accessory",
    brand: "Sony",
    url: "",
  },
  {
    image: product11,
    name: "phone",
    title: "MacBook Pro 13.3″ 16GB-512GB Silver",
    rating: 5,
    currentPrice: "1527.00",
    oldPrice: "1795.00",
    discount: "15",
    soldOut: false,
    hot: true,
    color: "silver",
    model: "Pro 13.3″",
    stock: "in stock",
    type: "laptop",
    brand: "Apple",
    url: "",
  },
  {
    image: product12,
    name: "watch",
    title: "MacBook Pro 13.3″ 16GB-512GB Silver",
    rating: 5,
    currentPrice: "1527.00",
    oldPrice: "1795.00",
    discount: "",
    soldOut: false,
    hot: true,
    color: "silver",
    model: "Pro 13.3″",
    stock: "in stock",
    type: "laptop",
    brand: "Apple",
    url: "",
  },
  {
    image: laptop4,
    name: "Laptops",
    title: "Laptop 14″ 8-core CPU, M2 2022, 8GB | 256GB, New",
    rating: "5",
    currentPrice: "1359.00",
    oldPrice: "1584.00",
    discount: "14",
    soldOut: false,
    hot: true,
    color: "silver",
    model: "M2 14″",
    stock: "in stock",
    type: "laptop",
    brand: "Apple",
    url: "",
  },
  {
    image: accessories0,
    name: "accessories",
    title: "Gold Plated DisplayPort to DisplayPort Cable 10 Feet",
    rating: "5",
    currentPrice: "16.62",
    oldPrice: "",
    discount: "",
    soldOut: false,
    hot: true,
    color: "gold",
    model: "DisplayPort Cable",
    stock: "in stock",
    type: "accessory",
    brand: "Generic",
    url: "",
  },
  {
    image: product15,
    name: "Playstation 4",
    title: "Sony Playstation 4 Dual Shock 4 Controller",
    rating: 0,
    currentPrice: "100.00",
    oldPrice: "",
    discount: "",
    soldOut: false,
    hot: false,
    color: "black",
    model: "Dual Shock 4",
    stock: "in stock",
    type: "accessory",
    brand: "Sony",
    url: "",
  },
  {
    image: product16,
    name: "Accessories",
    title: "Xbox One X Travel Carrying Case",
    rating: 5,
    currentPrice: "1527.00",
    oldPrice: "1795.00",
    discount: "",
    soldOut: false,
    hot: true,
    color: "black",
    model: "Xbox Carry Case",
    stock: "in stock",
    type: "accessory",
    brand: "Microsoft",
    url: "",
  },
  {
    image: product17,
    name: "Accessories",
    title: "Controller Keycap, Anti Wear-Out Letters, Easy Replacement",
    rating: 3,
    currentPrice: "52.89",
    oldPrice: "",
    discount: "",
    soldOut: false,
    hot: true,
    color: "black",
    model: "Keycap Replacement",
    stock: "in stock",
    type: "accessory",
    brand: "Generic",
    url: "",
  },
  {
    image: accessories7,
    name: "accessories",
    title: "USB-C Premium Multiport Adapter with HDMI",
    rating: "1",
    currentPrice: "79.77",
    oldPrice: "120.54",
    discount: "34",
    soldOut: false,
    hot: false,
    color: "black",
    model: "USB-C",
    stock: "out of stock",
    type: "accessory",
    brand: "Generic",
    url: "",
  },
];

function DynamicPcBuilder({ params }) {
  let searchId = params.slug.split("-").join(" ");
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "build your pc", href: "/pc_builder" },
    { label: searchId, href: "/" },
  ];

  return (
    <main>
      <section>
        <DynamicBreadcrumb breadcrumbItems={breadcrumbItems} />
      </section>
      <section>
        {/* <DynamicProductDetailsDisplay products={processors} /> */}
      </section>
    </main>
  );
}

export default DynamicPcBuilder;
