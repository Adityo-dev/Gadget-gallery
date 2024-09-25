import styles from "./arrowSlider.module.css";
import { IoIosArrowBack } from "react-icons/io";

const PrevArrow = ({ onClick }) => {
  return (
    <div>
      <IoIosArrowBack className={styles.prevArrowContainer} onClick={onClick} />
    </div>
  );
};

export default PrevArrow;
