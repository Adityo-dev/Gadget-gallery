import styles from "./pcBuilder.module.css";
import Image from "next/image";
import Link from "next/link";

// import image
import logo from "../../assets/icons/navBar/gadget-gallery-logo.png";

// import icon
import { FaSave } from "react-icons/fa";
import { BsPrinter } from "react-icons/bs";
import { IoIosShareAlt } from "react-icons/io";

const actions = [
  {
    name: "Add to Cart",
    icon: <FaSave />,
  },
  {
    name: "Share",
    icon: <IoIosShareAlt />,
  },
  {
    name: "Save PC",
    icon: <FaSave />,
  },
  {
    name: "Print",
    icon: <BsPrinter />,
  },
  {
    name: "Screenshot",
    icon: <FaSave />,
  },
];

const PcBuilderPage = () => {
  return (
    <main className={styles.allDataContainer}>
      <section className={styles.pcBuilderSection}>
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
              PC Builder - Build Your Own Computer - Star Tech
            </p>
            <div className={styles.hideUnselectedItems}>
              <input type="checkbox" id="vehicle" name="vehicle" value="hide" />
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
      </section>
    </main>
  );
};

export default PcBuilderPage;
