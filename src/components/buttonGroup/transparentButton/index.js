import styles from "./transparentButton.module.css";
import Link from "next/link";

function TransparentButton({ btnName, btnUrl }) {
  return (
    <Link href={btnUrl}>
      <button className={styles.transparentButton}>{btnName}</button>
    </Link>
  );
}

export default TransparentButton;
