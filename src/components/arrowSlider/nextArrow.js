import styles from "./arrowSlider.module.css";
import { IoIosArrowForward } from "react-icons/io";

const NextArrow = ({ onClick }) => {
  return (
    <div>
      <IoIosArrowForward
        className={styles.nextArrowContainer}
        onClick={onClick}
      />
    </div>
  );
};

export default NextArrow;
