import Link from "next/link";
import styles from "./button.module.css";

const DynamicButton = ({ btnName, btnUrl }) => {
  return (
    <div>
      <Link className={styles.shopNowBtn} href={btnUrl}>
        {btnName}
      </Link>
    </div>
  );
};

export default DynamicButton;
