import DynamicButton from "@/components/buttonGroup/normalButton";
import styles from "./trackOrder.module.css";
import DynamicBreadcrumb from "@/components/dynamicBreadcrumb";

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "track order", href: "/track-order" },
];

const TrackOrder = () => {
  return (
    <>
      <section>
        <DynamicBreadcrumb breadcrumbItems={breadcrumbItems} />
      </section>

      <section className={styles.allDataContainer}>
        <h2 className={styles.trackOrder}>Track Order</h2>

        <div className={styles.allInfoContainer}>
          <p className={styles.infoSubTitle}>
            To track your order please enter your Order ID in the box below and
            press the Track button. This was given to you on your receipt and in
            the confirmation email you should have received.
          </p>

          <div className={styles.inputFieldContainer}>
            <div>
              <p>order iD</p>
              <input
                className={styles.inputField}
                type="text"
                placeholder="Found id your order confirmation email."
              />
            </div>
            <div>
              <p>Billing email</p>
              <input
                className={styles.inputField}
                type="text"
                placeholder="Email you used during checkout."
              />
            </div>

            <div className={styles.btn}>
              <DynamicButton btnName={"Track"} btnUrl={""} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrackOrder;
