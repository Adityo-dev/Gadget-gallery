import styles from "./footer.module.css";
import Link from "next/link";
import Image from "next/image";

// Import React icons
import { BiLogoFacebook } from "react-icons/bi";
import { IoLogoGithub } from "react-icons/io";
import { RiLinkedinLine } from "react-icons/ri";
import { FaUpwork } from "react-icons/fa6";
import { PiInstagramLogoLight } from "react-icons/pi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function Footer() {
  const footerData = [
    {
      name: "Quick Link",
      items: [
        { itemsName: " My Account", utl: "/" },
        { itemsName: "My Cart", utl: "/" },
        { itemsName: " Wishlist", utl: "/" },
        { itemsName: "Gift Card", utl: "/" },
        { itemsName: "Need Help?", utl: "/" },
      ],
    },
    {
      name: "Information",
      items: [
        { itemsName: " About us", utl: "/" },
        { itemsName: "contact", utl: "/" },
        { itemsName: " blogs", utl: "/" },
        { itemsName: "size chart", utl: "/" },
        { itemsName: "FAQ", utl: "/" },
      ],
    },
    {
      name: "Quick Link",
      items: [
        { itemsName: "Privacy Policy", utl: "/" },
        { itemsName: "Refund Policy", utl: "/" },
        { itemsName: "Terms of Service", utl: "/" },
        { itemsName: "Shipping Policy", utl: "/" },
        { itemsName: "Contact Information", utl: "/" },
      ],
    },
  ];

  const contactIcons = [
    {
      icon: <BiLogoFacebook />,
      url: "https://www.facebook.com/koushik.barmon.79",
    },
    {
      icon: <RiLinkedinLine />,
      url: "https://www.linkedin.com/in/koushik-barmon/",
    },
    { icon: <IoLogoGithub />, url: "https://github.com/Adityo-dev" },
    {
      icon: <FaUpwork />,
      url: "https://www.upwork.com/freelancers/~0112b624003cbb514f",
    },
    {
      icon: <PiInstagramLogoLight />,
      url: "https://www.instagram.com/adittyo_dev/",
    },
  ];
  return (
    <section className={styles.footerAllDataContainer}>
      <div className={styles.footerDataContainer}>
        <div className={styles.footerAboutContainer}>
          <h2 className={styles.footerHeaderText}>About Us.</h2>
          <p className={styles.footerAboutSubText}>
            Gadgets gallery E-Commerce is a dynamic and innovative online retail
            platform that offers a wide range of products to customers
            worldwide.
          </p>

          <div className={styles.contactIconsContainer}>
            {contactIcons.map((icon, ind) => (
              <Link
                target="_blank"
                className={styles.contactIcons}
                href={icon.url}
                key={ind}
              >
                {icon.icon}
              </Link>
            ))}
          </div>

          <div className={styles.footerCheckoutContainer}>
            <p>Guaranteed safe checkout</p>
            <p>coming soon...</p>
          </div>
        </div>

        <div className={styles.footerDataItemsContainer}>
          {footerData.map((data, ind) => (
            <div key={ind}>
              <h2 className={styles.footerHeaderText}>{data.name}</h2>

              <div className={styles.footerItemsDataContainer}>
                {data.items.map((itName, ind) => (
                  <div className={styles.footerItemsDataAndArrow} key={ind}>
                    <MdOutlineKeyboardArrowRight />
                    <Link className={styles.footerItemsData} href={itName.utl}>
                      {itName.itemsName}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <p className={styles.footerCopyRightTextContainer}>
        <span className={styles.footerCopyRightText}>
          © 2024 Gadgets gallery. All rights reserved.
        </span>
      </p>
    </section>
  );
}
