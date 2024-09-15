import styles from "./cart.module.css";
import Image from "next/image";
import Link from "next/link";
import DynamicBreadcrumb from "@/components/dynamicBreadcrumb";

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Shopping cart", href: "/cart" },
];

const Cart = () => {
  return (
    <div>
      <section>
        <DynamicBreadcrumb breadcrumbItems={breadcrumbItems} />
      </section>
    </div>
  );
};

export default Cart;
