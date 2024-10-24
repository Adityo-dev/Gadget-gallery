import styles from "./login.module.css";
import Link from "next/link";
import DynamicBreadcrumb from "@/components/dynamicBreadcrumb";

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "my account", href: "/my-account" },
  { label: "login", href: "/login" },
];

export default function Login() {
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

      <section className={styles.loginAllDataContainer}>
        <div className={styles.loginDataContainer}>
          <h1 className={styles.loginTitle}>Login</h1>
          <p className={styles.loginSubTitle}>
            Please login using account detail bellow.
          </p>

          <div className={styles.inputFieldContainer}>
            <input
              className={styles.inputField}
              type="Email"
              placeholder="Please Enter Your Email"
            />
            <input
              className={styles.inputField}
              type="Password"
              placeholder="Please Enter Your Password"
            />
          </div>

          <div className={styles.singInAndForgotPsContainer}>
            {handleFromBtn("sign in")}
            <p className={styles.createAccountText}>Forgot your password?</p>
          </div>

          <Link
            href={"/my-account/register"}
            className={styles.createAccountText}
          >
            Create account
          </Link>
        </div>
      </section>
    </>
  );
}
