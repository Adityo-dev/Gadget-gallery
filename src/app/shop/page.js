// import components
import DynamicProductDetailsDisplay from "@/components/DynamicProductDisplay";

// import image
import product5 from "../../assets/images/products/games/4.png";
import product7 from "../../assets/images/products/games/6.png";
import product9 from "../../assets/images/products/games/8.png";
import product10 from "../../assets/images/products/games/19.png";
import product11 from "../../assets/images/products/games/10.png";
import product12 from "../../assets/images/products/games/11.png";
import product15 from "../../assets/images/products/games/14.png";
import product16 from "../../assets/images/products/games/15.png";
import product17 from "../../assets/images/products/games/16.png";

// smart Phone
import smartPhone0 from "../../assets/images/products/smart-phone/0.png";
import smartPhone3 from "../../assets/images/products/smart-phone/3.png";

// laptop;
import laptop2 from "../../assets/images/products/laptop/2.png";
import laptop4 from "../../assets/images/products/laptop/4.png";

// watch
import watch3 from "../../assets/images/products/watch/3.png";
import watch6 from "../../assets/images/products/watch/6.png";
// accessories
import accessories0 from "../../assets/images/products/accessories/0.png";
import accessories1 from "../../assets/images/products/accessories/1.png";
import accessories2 from "../../assets/images/products/accessories/11.png";
import accessories7 from "../../assets/images/products/accessories/7.png";

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
    filters: [
      { filterName: "model", value: "S23 Ultra" },
      { filterName: "stock", value: "in stock" },
      { filterName: "type", value: "smartphone" },
      { filterName: "brand", value: "Samsung" },
    ],
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
    filters: [
      { filterName: "model", value: "Air 13″" },
      { filterName: "stock", value: "in stock" },
      { filterName: "type", value: "laptop" },
      { filterName: "brand", value: "Apple" },
    ],
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
    filters: [
      { filterName: "model", value: "11 Pro Max" },
      { filterName: "stock", value: "in stock" },
      { filterName: "type", value: "smartphone" },
      { filterName: "brand", value: "Apple" },
    ],
    url: "",
  },
  {
    image: watch3,
    name: "iWatch",
    title: "Samsung Galaxy Watch, Factory Unlocked, 512GB",
    rating: "4",
    currentPrice: "950.00",
    oldPrice: "",
    discount: "",
    soldOut: false,
    hot: true,
    filters: [
      { filterName: "model", value: "Galaxy Watch" },
      { filterName: "stock", value: "in stock" },
      { filterName: "type", value: "smartwatch" },
      { filterName: "brand", value: "Samsung" },
    ],
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
    filters: [
      { filterName: "model", value: "Series S" },
      { filterName: "stock", value: "in stock" },
      { filterName: "type", value: "console" },
      { filterName: "brand", value: "Microsoft" },
    ],
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
    filters: [
      { filterName: "model", value: "4.4mm Jack" },
      { filterName: "stock", value: "in stock" },
      { filterName: "type", value: "accessory" },
      { filterName: "brand", value: "Generic" },
    ],
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
    filters: [
      { filterName: "model", value: "PS5 Digital" },
      { filterName: "stock", value: "in stock" },
      { filterName: "type", value: "console" },
      { filterName: "brand", value: "Sony" },
    ],
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
    filters: [
      { filterName: "model", value: "ROG Sheath" },
      { filterName: "stock", value: "in stock" },
      { filterName: "type", value: "accessory" },
      { filterName: "brand", value: "ASUS" },
    ],
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
    filters: [
      { filterName: "model", value: "PS4 Spider-Man" },
      { filterName: "stock", value: "in stock" },
      { filterName: "type", value: "console" },
      { filterName: "brand", value: "Sony" },
    ],
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
    filters: [
      { filterName: "model", value: "DualSense" },
      { filterName: "stock", value: "in stock" },
      { filterName: "type", value: "accessory" },
      { filterName: "brand", value: "Sony" },
    ],
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
    filters: [
      { filterName: "model", value: "Pro 13.3″" },
      { filterName: "stock", value: "in stock" },
      { filterName: "type", value: "laptop" },
      { filterName: "brand", value: "Apple" },
    ],
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
    filters: [
      { filterName: "color", value: "silver" },
      { filterName: "model", value: "Pro 13.3″" },
      { filterName: "stock", value: "in stock" },
      { filterName: "type", value: "laptop" },
      { filterName: "brand", value: "Apple" },
      { filterName: "size", value: "Apple" },
    ],
    url: "",
  },
];

const Shop = () => {
  return (
    <div>
      <DynamicProductDetailsDisplay products={shop} />
    </div>
  );
};

export default Shop;
