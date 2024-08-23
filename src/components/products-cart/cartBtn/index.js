import styles from "./cartBtn.module.css";
import Link from "next/link";

// import icon
import { GiShoppingCart } from "react-icons/gi";
import { CiHeart } from "react-icons/ci";
import { MdOutlineSearch } from "react-icons/md";
import { MdCompareArrows } from "react-icons/md";

// import mui tooltip
import * as React from "react";
import Tooltip from "@mui/material/Tooltip";

export default function CartButton() {
  const cartBtnData = [
    { icon: <GiShoppingCart />, name: "Add to cart" },
    { icon: <CiHeart />, name: "wishlist" },
    { icon: <MdOutlineSearch />, name: "Quick view" },
    { icon: <MdCompareArrows />, name: "compare" },
  ];

  return (
    <div>
      {cartBtnData.map((data, ind) => (
        <Tooltip key={ind} title={data?.name} placement="left" arrow>
          <p className={styles.cartBtn}>{data?.icon}</p>
        </Tooltip>
      ))}
    </div>
  );
}
