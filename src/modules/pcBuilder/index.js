import styles from "./pcBuilder.module.css";
import Image from "next/image";
import Link from "next/link";
import DynamicBreadcrumb from "@/components/dynamicBreadcrumb";

// import image
import logo from "../../assets/icons/navBar/gadget-gallery-logo.png";
import cpu from "../../assets/icons/pc-builder-icon/cpu.png";
import cpu_cooler from "../../assets/icons/pc-builder-icon/cpu.png";
import motherboard from "../../assets/icons/pc-builder-icon//motherboard.png";
import ram from "../../assets/icons/pc-builder-icon/ram.png";
import storage from "../../assets/icons/pc-builder-icon/hard-disk.png";
import graphics_card from "../../assets/icons/pc-builder-icon/graphic-card.png";
import power_supply from "../../assets/icons/pc-builder-icon/power-supply.png";
import casing from "../../assets/icons/pc-builder-icon/computer-case.png";
import monitor from "../../assets/icons/pc-builder-icon/monitor.png";
import casing_cooler from "../../assets/icons/pc-builder-icon/cooler.png";
import keyboard from "../../assets/icons/pc-builder-icon/keyboard.png";
import mouse from "../../assets/icons/pc-builder-icon/mouse.png";
import anti_virus from "../../assets/icons/pc-builder-icon/security-check.png";
import headphone from "../../assets/icons/pc-builder-icon/headphones.png";
import ups from "../../assets/icons/pc-builder-icon/cpu.png";

// import icon
import { LuShoppingCart } from "react-icons/lu";
import { PiShareFatLight } from "react-icons/pi";
import { IoSaveOutline } from "react-icons/io5";
import { BsPrinter } from "react-icons/bs";
import { PiScreencast } from "react-icons/pi";

const actions = [
  {
    name: "Add to Cart",
    icon: <LuShoppingCart />,
  },
  {
    name: "Share",
    icon: <PiShareFatLight />,
  },
  {
    name: "Save PC",
    icon: <IoSaveOutline />,
  },
  {
    name: "Print",
    icon: <BsPrinter />,
  },
  {
    name: "Screenshot",
    icon: <PiScreencast />,
  },
];

const pcBuilderData = [
  {
    category: "Core Components",
    items: [
      {
        name: "Processor",
        product: "Intel Core i7 13700K",
        description: "16 Cores, 5.4GHz",
        logo: cpu,
        price: "45000",
        pathName: "processor",
      },
      {
        name: "Motherboard",
        product: "MSI Z790 Tomahawk",
        description: "ATX, LGA 1700",
        logo: motherboard,
        price: "40000",
        pathName: "motherboard",
      },
      {
        name: "Graphics Card",
        product: "NVIDIA GeForce RTX 4080",
        description: "16GB GDDR6X",
        logo: graphics_card,
        price: "150000",
        pathName: "graphics-card",
      },

      {
        name: "CPU Cooler",
        product: "Corsair H100i RGB",
        description: "240mm Liquid Cooler",
        logo: cpu_cooler,
        price: "12000",
        pathName: "cpu-cooler",
      },
      {
        name: "RAM-1",
        product: "Corsair Vengeance 16GB",
        description: "DDR5, 5200MHz",
        logo: ram,
        price: "8000",
        pathName: "ram",
      },
      {
        name: "RAM-2",
        product: "G.SKILL Trident Z 16GB",
        description: "DDR5, 6000MHz",
        logo: ram,
        price: "10000",
        pathName: "ram",
      },
      {
        name: "SSD",
        product: "Samsung 980 Pro 1TB",
        description: "NVMe M.2",
        logo: storage,
        price: "15000",
        pathName: "ssd",
      },
      {
        name: "HDD",
        product: "Seagate Barracuda 2TB",
        description: "7200RPM, SATA",
        logo: storage,
        price: "6000",
        pathName: "hdd",
      },
      {
        name: "Power Supply",
        product: "Corsair RM850x",
        description: "850W, 80+ Gold",
        logo: power_supply,
        price: "13000",
        pathName: "power-supply",
      },
      {
        name: "Casing",
        product: "NZXT H510",
        description: "Mid Tower ATX",
        logo: casing,
        price: "7000",
        pathName: "casing",
      },
    ],
  },
  {
    category: "Peripherals & Others",
    items: [
      {
        name: "Monitor",
        product: "LG UltraGear 27GL850",
        description: "144Hz, 1ms, 27-inch",
        logo: monitor,
        price: "35000",
        pathName: "monitor",
      },
      {
        name: "Case Fan",
        product: "Noctua NF-A12x25",
        description: "120mm PWM Fan",
        logo: casing_cooler,
        price: "2500",
        pathName: "case-fan",
      },
      {
        name: "UPS",
        product: "APC Back-UPS 600VA",
        description: "Battery Backup",
        logo: ups,
        price: "5000",
        pathName: "ups",
      },
      {
        name: "Antivirus",
        product: "Bitdefender Total Security",
        description: "1 Year License",
        logo: anti_virus,
        price: "2000",
        pathName: "antivirus",
      },
    ],
  },
  {
    category: "Accessories",
    items: [
      {
        name: "Mouse",
        product: "Logitech G502 Hero",
        description: "Wired, 25K DPI",
        logo: mouse,
        price: "4000",
        pathName: "mouse",
      },
      {
        name: "Keyboard",
        product: "Corsair K95 RGB",
        description: "Mechanical, Cherry MX Brown",
        logo: keyboard,
        price: "15000",
        pathName: "keyboard",
      },
      {
        name: "Headphone",
        product: "HyperX Cloud II",
        description: "7.1 Surround Sound",
        logo: headphone,
        price: "10000",
        pathName: "headphone",
      },
    ],
  },
];

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "build your pc", href: "/pc_builder" },
];

const PcBuilderPage = () => {
  return (
    <>
      <section>
        <DynamicBreadcrumb breadcrumbItems={breadcrumbItems} />
      </section>

      <section className={styles.pcBuilderAllDataContainer}>
        <div className={styles.pcBuilderSection}>
          <div className={styles.headerLogoAndActionsContainer}>
            <Image className={styles.logo} src={logo} alt="" />

            <div className={styles.allActions}>
              {actions.map((data, ind) => (
                <div className={styles.actionsNameAndIcon} key={ind}>
                  <span className={styles.actionsIcon}>{data?.icon}</span>
                  <span className={styles.actionsName}>{data?.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.pcBuilderContainer2}>
            <div className={styles.pcBuilderHeader2}>
              <p className={styles.pcBuilderTitle}>
                PC Builder - Build Your Own Computer - gadget gallery
              </p>
              <div className={styles.hideUnselectedItems}>
                <input
                  type="checkbox"
                  id="vehicle"
                  name="vehicle"
                  value="hide"
                />
                <label for="vehicle">Hide those that are not selected</label>
              </div>
            </div>
            <div className={styles.wattageAndPriceContainer}>
              <button className={styles.wattageInfo}>
                <p className={styles.totalWattage}>
                  <span>150</span>W
                </p>
                <p className={styles.estimatedWattage}>Estimated Wattage</p>

                <span className={styles.betaTag}>BETA</span>
              </button>
              <button className={styles.priceInfo}>
                <p className={styles.totalPrice}>
                  <span>103,250</span> ৳
                </p>
                <p className={styles.totalItems}>
                  <span>3</span> Items
                </p>
              </button>
            </div>
          </div>

          <div className={styles.pcBuilderItemsALlDataContainer}>
            {pcBuilderData.map((data, ind) => (
              <div key={ind}>
                <p className={styles.categoryName}>{data?.category}</p>
                {data.items.map((item, ind) => (
                  <div className={styles.pcBuilderItemsDataContainer} key={ind}>
                    <div className={styles.pcBuilderItemsContainer}>
                      <div className={styles.pcBuilderItemsLogoContainer}>
                        <Image
                          className={styles.pcBuilderItemsLogo}
                          src={item.logo}
                          alt=""
                        />
                      </div>

                      <p className={styles.itemsNameAndProductName}>
                        <span>{item.name}</span>
                        <span>{item.product}</span>
                      </p>
                    </div>

                    <div className={styles.chooseBtnAndPriceContainer}>
                      <p className={styles.itemsPrice}>{item?.price}৳</p>
                      <Link href={`pc_builder/${item?.pathName}`}>
                        <button className={styles.chooseBtn}>choose</button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PcBuilderPage;
