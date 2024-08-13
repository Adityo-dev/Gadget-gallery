import styles from "./newsletter.module.css";
import Image from "next/image";
// IMPORT IMAGE
import newsletter_bg from "../../../assets/images/home/newsletter/bg-newsletter.jpg";
const Newsletter = () => {
  return (
    <div className={styles.newsletterAllDataContainer}>
      <Image className={styles.newsletterBgImage} src={newsletter_bg} alt="" />
      <div className={styles.newsletterDataContainer}>
        <h2 className={styles.newsletterInfoText}>
          Sign Up For Newsletter & Get 20% Off
        </h2>
        <div className={styles.inputFieldContainer}>
          <input
            className={styles.emailField}
            type="email"
            id="email"
            name="email"
            placeholder="Your e-mail address"
          />
          <button className={styles.subscribeBtn}>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
