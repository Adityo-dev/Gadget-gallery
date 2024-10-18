"use client";
import styles from "./navigationBar.module.css";
import Image from "next/image";
import Link from "next/link";

// mui
import * as React from "react";
import Badge from "@mui/material/Badge";

// import icon
import ggLogo from "../../assets/icons/navBar/gadget-gallery-logo.png";

// import react icon
import { FcElectricity } from "react-icons/fc";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { FaRegUser } from "react-icons/fa6";
import { LuShoppingCart } from "react-icons/lu";
import { TfiAngleDown } from "react-icons/tfi";
import { TfiAngleRight } from "react-icons/tfi";
import { LuAlignJustify } from "react-icons/lu";
import { TfiHeart } from "react-icons/tfi";

import { RiSmartphoneLine } from "react-icons/ri";
import { MdOutlineLaptopMac } from "react-icons/md";
import { CiCamera } from "react-icons/ci";
import { PiHeadphonesThin } from "react-icons/pi";
import { PiGameController } from "react-icons/pi";
import { PiTelevisionSimpleThin } from "react-icons/pi";
import { IoWatchOutline } from "react-icons/io5";
import { PiSpeakerHifi } from "react-icons/pi";
import { TbAperture } from "react-icons/tb";
import { GoGift } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import { useCartContext } from "@/components/context/CartContext";
import { useWishlist } from "@/components/context/WishlistContext";

const navData = [
  {
    topNavData: {
      language: ["english", "bangla"],
      typeOfMoney: ["BDT", "USD", "EUR"],
      navCategoryList: [
        { name: "flash sale", pathName: "/flash-sale" },
        { name: "track order", pathName: "/track-order" },
        { name: "about", pathName: "/about" },
        { name: "contact", pathName: "/contact" },
        { name: "blog", pathName: "/blog" },
      ],
    },

    centerNavData: [
      {
        info: {
          icon: <TfiHeadphoneAlt />,
          title: "need help?",
          helpNumber: "+8801770******",
          url: "/",
        },
      },
      {
        info: {
          icon: <IoSearchOutline />,
          title: "search",
          url: "",
        },
      },

      {
        info: { icon: <FaRegUser />, title: "my account", url: "/" },
      },
      {
        info: { icon: <LuShoppingCart />, title: "my cart", url: "/cart" },
      },
      {
        info: { icon: <LuAlignJustify />, title: "my cart", url: "" },
      },
    ],

    bottomNavData: {
      shopCategories: [
        {
          categoryName: "Smartphone",
          icon: <RiSmartphoneLine />,
          url: "smartphone",
          subCategories: [
            {
              subCategoriesName: "Computers & Tablets",
              subCategoriesList: [
                { list: "Laptops & Desktops", url: "" },
                { list: "Tablets", url: "" },
                { list: "Monitors", url: "" },
                { list: "Laptops", url: "" },
                { list: "Accessories", url: "" },
                { list: "Drones", url: "" },
              ],
            },
            {
              subCategoriesName: "Cell Phone",
              subCategoriesList: [
                { list: "Smartphone", url: "" },
                { list: "AT&T", url: "" },
                { list: "iPhone", url: "" },
                { list: "Prepaid Phones", url: "" },
                { list: "Samsung Galaxy", url: "" },
                { list: "Unlocked Phones", url: "" },
              ],
            },
            {
              subCategoriesName: "TV & Home Theater",
              subCategoriesList: [
                { list: "Television", url: "" },
                { list: '55" TVs', url: "" },
                { list: '65" TVs', url: "" },
                { list: "OLED TVs", url: "" },
              ],
            },

            {
              subCategoriesName: "Camera",
              subCategoriesList: [
                { list: "Camera", url: "" },
                { list: "Accessories", url: "" },
                { list: "Camera & Lenses", url: "" },
                { list: "Drones", url: "" },
              ],
            },
          ],
        },

        {
          categoryName: "Laptops",
          icon: <MdOutlineLaptopMac />,
          url: "laptops",
          subCategories: [
            {
              subCategoriesList: [
                { list: "Laptops & Desktops", url: "" },
                { list: "Accessories", url: "" },
                { list: "Chromebook", url: "" },
                { list: "Computer Component", url: "" },
                { list: "Desktops", url: "" },
                { list: "iMac", url: "" },
                { list: "Laptops", url: "" },
                { list: "Macbook", url: "" },
                { list: "Monitors", url: "" },
                { list: "PC Gaming", url: "" },
                { list: "Printers & Ink", url: "" },
                { list: "Restored Computers", url: "" },
                { list: "Windows Laptops", url: "" },
              ],
            },
          ],
        },

        {
          categoryName: "Camera",
          icon: <CiCamera />,
          url: "camera",
        },
        {
          categoryName: "Headphones",
          icon: <PiHeadphonesThin />,
          url: "headphones",
        },
        {
          categoryName: "PC Gaming",
          icon: <PiGameController />,
          url: "gaming",
        },
        {
          categoryName: "Tablets",
          icon: <RiSmartphoneLine />,
          url: "tablets",
        },
        {
          categoryName: "Television",
          icon: <PiTelevisionSimpleThin />,
          url: "television",
        },
        {
          categoryName: "Smartwatches",
          icon: <IoWatchOutline />,
          url: "watches",
        },
        {
          categoryName: "Speakers",
          icon: <PiSpeakerHifi />,
          url: "speakers",
        },
        {
          categoryName: "accessories",
          icon: <TbAperture />,
          url: "accessories",
        },
        {
          categoryName: "Tech Gift",
          icon: <GoGift />,
          url: "shop",
        },
      ],

      navListItems: [
        {
          categoryName: "Home",
          url: "/",
        },

        {
          categoryName: "laptop",
          url: "laptops",
          subCategories: [
            {
              subCategoriesName: "Computers & Tablets",
              subCategoriesList: [
                { list: "Laptops & Desktops", url: "" },
                { list: "Tablets", url: "" },
                { list: "Monitors", url: "" },
                { list: "Laptops", url: "" },
                { list: "Accessories", url: "" },
                { list: "Drones", url: "" },
              ],
            },
            {
              subCategoriesName: "Cell Phone",
              subCategoriesList: [
                { list: "Smartphone", url: "" },
                { list: "AT&T", url: "" },
                { list: "iPhone", url: "" },
                { list: "Prepaid Phones", url: "" },
                { list: "Samsung Galaxy", url: "" },
                { list: "Unlocked Phones", url: "" },
              ],
            },
            {
              subCategoriesName: "TV & Home Theater",
              subCategoriesList: [
                { list: "Television", url: "" },
                { list: '55" TVs', url: "" },
                { list: '65" TVs', url: "" },
                { list: "OLED TVs", url: "" },
              ],
            },

            {
              subCategoriesName: "Camera",
              subCategoriesList: [
                { list: "Camera", url: "" },
                { list: "Accessories", url: "" },
                { list: "Camera & Lenses", url: "" },
                { list: "Drones", url: "" },
              ],
            },
          ],
        },
        {
          categoryName: "Smartphone",
          url: "smartphone",
          subCategories: [
            {
              subCategoriesName: "Computers & Tablets",
              subCategoriesList: [
                { list: "Laptops & Desktops", url: "" },
                { list: "Tablets", url: "" },
                { list: "Monitors", url: "" },
                { list: "Laptops", url: "" },
                { list: "Accessories", url: "" },
                { list: "Drones", url: "" },
              ],
            },
            {
              subCategoriesName: "Cell Phone",
              subCategoriesList: [
                { list: "Smartphone", url: "" },
                { list: "AT&T", url: "" },
                { list: "iPhone", url: "" },
                { list: "Prepaid Phones", url: "" },
                { list: "Samsung Galaxy", url: "" },
                { list: "Unlocked Phones", url: "" },
              ],
            },
          ],
        },
        {
          categoryName: "Headphones",
          url: "headphones",
          subCategories: [
            {
              subCategoriesName: "Computers & Tablets",
              subCategoriesList: [
                { list: "Laptops & Desktops", url: "" },
                { list: "Tablets", url: "" },
                { list: "Monitors", url: "" },
                { list: "Laptops", url: "" },
                { list: "Accessories", url: "" },
                { list: "Drones", url: "" },
              ],
            },
            {
              subCategoriesName: "Cell Phone",
              subCategoriesList: [
                { list: "Smartphone", url: "" },
                { list: "AT&T", url: "" },
                { list: "iPhone", url: "" },
                { list: "Prepaid Phones", url: "" },
                { list: "Samsung Galaxy", url: "" },
                { list: "Unlocked Phones", url: "" },
              ],
            },
            {
              subCategoriesName: "Cell Phone",
              subCategoriesList: [
                { list: "Smartphone", url: "" },
                { list: "AT&T", url: "" },
                { list: "iPhone", url: "" },
                { list: "Prepaid Phones", url: "" },
                { list: "Samsung Galaxy", url: "" },
                { list: "Unlocked Phones", url: "" },
              ],
            },
            {
              subCategoriesName: "Cell Phone",
              subCategoriesList: [
                { list: "Smartphone", url: "" },
                { list: "AT&T", url: "" },
                { list: "iPhone", url: "" },
                { list: "Prepaid Phones", url: "" },
                { list: "Samsung Galaxy", url: "" },
                { list: "Unlocked Phones", url: "" },
              ],
            },
          ],
        },
        {
          categoryName: "Camera",
          url: "camera",
        },
      ],
    },
  },
];

const NavigationBar = () => {
  const { cart } = useCartContext();
  const { wishlistItems } = useWishlist();
  return (
    <>
      {/* data phone 750px  */}

      {/* data 750px up */}
      <main className={styles.navigationBarAllDataContainer}>
        {/* Navigation bar Top section data */}
        <section className={styles.topNavAllDataContainer}>
          <div className={styles.topNavDataContainer}>
            {navData.map((item, ind) => (
              <div className={styles.topNavInfoContainer} key={ind}>
                <div className={styles.topNavInfoContainer}>
                  <p>{item?.topNavData?.language?.[0]}</p>
                  <p>{item?.topNavData?.typeOfMoney?.[0]}</p>
                  <p className={styles.topNavFreeShipping}>
                    Free Shipping On All Orders Over $100
                  </p>
                </div>

                <div className={styles.topNavInfoContainer}>
                  <FcElectricity className={styles.electricIcon} />

                  {item?.topNavData?.navCategoryList?.map(
                    (categoryList, ind) => (
                      <Link
                        key={ind}
                        href={categoryList?.pathName}
                        className={`${
                          ind === 0
                            ? styles.categoryListHighlightText
                            : styles.categoryListText
                        }`}
                      >
                        {categoryList?.name}
                      </Link>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Navigation bar Center section data */}
        <section>
          <div className={styles.centerNavAllDataContainer}>
            <Link href={"/"}>
              <Image
                className={styles.gadgetGalleryLogo}
                src={ggLogo}
                alt="gadgets gallery logo"
              />
            </Link>
            <div className={styles.searchFieldContainer}>
              <p className={styles.allCategories}>
                <span>all categories</span>
                <TfiAngleDown className={styles.angleDownIcon} />
              </p>
              <input
                className={styles.searchField}
                type="search"
                id="search"
                name="search"
                placeholder="Search for products"
              />
              <button className={styles.searchButton}>search</button>
            </div>
            <div>
              {navData.map((data, ind) => (
                <div className={styles.centerNavRightDataContainer} key={ind}>
                  {data?.centerNavData?.map((item, ind) => (
                    <Link
                      href={item?.info?.url}
                      className={`${
                        ind > 0
                          ? styles.centerNavRightDataInfoContainer
                          : styles.centerNavRightDataInfoContainerNone
                      } ${
                        ind === 1 || ind === 4
                          ? styles.centerNavRightDataInfoContainerLgNone
                          : ""
                      }`}
                      key={ind}
                    >
                      {ind === 3 ? (
                        <Badge badgeContent={cart.length} color="primary">
                          <p className={styles.centerNavRightDataIcon}>
                            {item?.info?.icon}
                          </p>
                        </Badge>
                      ) : (
                        <p className={styles.centerNavRightDataIcon}>
                          {item?.info?.icon}
                        </p>
                      )}

                      <p className={styles.centerNavRightDataText}>
                        <span
                          className={`${
                            ind > 0 ? styles.centerNavRightText : ""
                          }`}
                        >
                          {item?.info?.title}
                        </span>
                        <br />

                        <span className={styles.centerNavHelpNumber}>
                          {item?.info?.helpNumber}
                        </span>
                      </p>
                    </Link>
                  ))}
                  <p></p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* nav bar bottom section data */}
        <section className={styles.bottomNavHrLine}>
          <div className={styles.bottomNavAllDataContainer}>
            <div className={styles.shopCategoriesALlDataContainer}>
              <div className={styles.shopCategoriesAllTextContainer}>
                <div className={styles.shopCategoriesTextAndIconContainer}>
                  <LuAlignJustify className={styles.alignJustifyIcon} />
                  <p className={styles.shopCategoriesText}>Shop Categories</p>
                </div>
                <TfiAngleDown className={styles.arrowDownIcon} />
                {/* shop categories Data  */}
                <div className={styles.shopCategoriesALlDataInfoContainer}>
                  {navData.map((bottomNav, ind) => (
                    <div key={ind}>
                      {bottomNav?.bottomNavData?.shopCategories.map(
                        (categoryData, ind) => (
                          <Link
                            href={`${
                              categoryData?.url === "shop"
                                ? "/"
                                : /product-category/
                            }${categoryData?.url}`}
                            className={styles.navCategoryListHrLineAndCategory}
                            key={ind}
                          >
                            <div
                              className={
                                styles.navCategoryListItemAllDataContainer
                              }
                            >
                              <p
                                className={styles.navCategoryListItemContainer}
                              >
                                <span className={styles.categoryDataIcon}>
                                  {categoryData?.icon}
                                </span>
                                <span className={styles.categoryDataName}>
                                  {categoryData?.categoryName}
                                </span>
                              </p>

                              <TfiAngleRight
                                className={styles.angleRightIcon}
                              />
                            </div>
                          </Link>
                        )
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {navData?.map((bottomNav, ind) => (
                  <div
                    className={styles.bottomNavListAllDataContainer}
                    key={ind}
                  >
                    {bottomNav?.bottomNavData?.navListItems.map(
                      (navListData, ind) => (
                        <Link
                          key={ind}
                          href={`${ind > 0 ? /product-category/ : ""}${
                            navListData?.url
                          }`}
                        >
                          <p>{navListData?.categoryName}</p>
                        </Link>
                      )
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.navCategoryRightList}>
              <Badge badgeContent={wishlistItems.length} color="primary">
                <Link href={"/wishlist"}>
                  <TfiHeart className={styles.bottomNavRightHeartIcon} />
                </Link>
              </Badge>
              <p className={styles.navCategoryListRightItemHrLine}></p>
              <Link
                className={styles.bottomNavRightPcBuilder}
                href={"/pc_builder"}
              >
                Pc Builder
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default NavigationBar;
