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

// import image
import Logo from "../../assets/icons/navBar/gadget-gallery-logo.png";

export default function Footer() {
  const footerData = [
    {
      name: "about us",
      items: [
        { itemsName: "about us", utl: "/" },
        { itemsName: "news & blog", utl: "/" },
        { itemsName: "brands", utl: "/" },
        { itemsName: "press center", utl: "/" },
        { itemsName: "advertising", utl: "/" },
        { itemsName: "investors", utl: "/" },
      ],
    },
    {
      name: "support",
      items: [
        { itemsName: "Support Center", utl: "/" },
        { itemsName: "Manage", utl: "/" },
        { itemsName: "Service", utl: "/" },
        { itemsName: "Haul Away", utl: "/" },
        { itemsName: "Security Center", utl: "/" },
        { itemsName: "Contact", utl: "/" },
      ],
    },
    {
      name: "order",
      items: [
        { itemsName: "Check Order", utl: "/" },
        { itemsName: "Delivery & Pickup", utl: "/" },
        { itemsName: "Returns", utl: "/" },
        { itemsName: "Exchanges", utl: "/" },
        { itemsName: "Developers", utl: "/" },
        { itemsName: "Gift Cards", utl: "/" },
      ],
    },
  ];

  const contactIcons = [
    {
      icon: <BiLogoFacebook />,
      url: "https://www.facebook.com/mmrecoybot",
    },
    {
      icon: <RiLinkedinLine />,
      url: "https://www.linkedin.com/in/mmrecoybot/",
    },
    { icon: <IoLogoGithub />, url: "https://github.com" },
    {
      icon: <FaUpwork />,
      url: "https://www.upwork.com/freelancers/~01278000880483ffa5",
    },
    {
      icon: <PiInstagramLogoLight />,
      url: "https://www.instagram.com",
    },
  ];
  return (
    <section className={styles.footerAllDataContainer}>
      <div className={styles.footerDataContainer}>
        <div className={styles.footerAboutContainer}>
          <div>
            <Image src={Logo} alt="nav logo" />
          </div>
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
