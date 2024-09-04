import styles from "./serviceType.module.css";

// import icon
import { CiDeliveryTruck } from "react-icons/ci";
import { CiDollar } from "react-icons/ci";
import { PiHeadphonesThin } from "react-icons/pi";
import { PiBriefcaseThin } from "react-icons/pi";

const ServiceType = () => {
  const serviceData = [
    {
      icon: <CiDeliveryTruck />,
      title: "Free Delivery",
      subTitle: "Free shipping on all order",
    },
    {
      icon: <CiDollar />,
      title: "Returns",
      subTitle: "Back guarantee under 7 days",
    },
    {
      icon: <PiHeadphonesThin />,
      title: "Support 24/7",
      subTitle: "Support online 24 hours a day",
    },
    {
      icon: <PiBriefcaseThin />,
      title: "payments",
      subTitle: "100% payment security",
    },
  ];
  return (
    <div className={styles.serviceAllDataContainer}>
      {serviceData.map((service, ind) => (
        <div className={styles.serviceDataContainer} key={ind}>
          <p className={styles.serviceIcon}>{service.icon}</p>
          <p>
            <span className={styles.serviceTitle}>{service.title}</span>
            <br />
            <span className={styles.serviceSubTitle}>{service.subTitle}</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default ServiceType;
