import styles from "./register.module.css";
import Link from "next/link";
import DynamicBreadcrumb from "@/components/dynamicBreadcrumb";

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "my account", href: "/my-account" },
  { label: "register", href: "/register" },
];

export default function Register() {
  const handleFromBtn = (btnName) => {
    return (
      <>
        <button className={styles.handleFromBtnStyle}>{btnName}</button>
      </>
    );
  };

  return (
    <>
      <section>
        <DynamicBreadcrumb breadcrumbItems={breadcrumbItems} />
      </section>

      <section className={styles.regAllDataContainer}>
        <div className={styles.regDataContainer}>
          <h1 className={styles.regText}>Create Account</h1>
          <p className={styles.regSubText}>
            Please Register using account detail below.
          </p>

          <div className={styles.inputFieldContainer}>
            <input
              className={styles.inputField}
              type="text"
              placeholder="Please Enter Your First Name"
            />
            <input
              className={styles.inputField}
              type="text"
              placeholder="Please Enter Your Last Name"
            />
            <input
              className={styles.inputField}
              type="email"
              placeholder="Please Enter Your Email"
            />
            <input
              className={styles.inputField}
              type="Password"
              placeholder="Please Enter Your Password"
            />
          </div>

          <div className={styles.singInAndForgotPsContainer}>
            {handleFromBtn("Create Now")}
          </div>

          <Link href={"/"} className={styles.createAccountText}>
            Return to Store
          </Link>
        </div>
      </section>
    </>
  );
}
