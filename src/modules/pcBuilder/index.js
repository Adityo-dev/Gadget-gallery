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
      <section>
        <div className={styles.headerLogoAndActionsContainer}>
          <div>
            <Image src={logo} alt="" />
          </div>
          <div className={styles.allActions}>
            {actions.map((data, ind) => (
              <div className={styles.actionsNameAndIcon} key={ind}>
                <span className={styles.actionsIcon}>{data?.icon}</span>
                <span className={styles.actionsName}>{data?.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default PcBuilderPage;
