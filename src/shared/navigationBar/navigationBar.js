"use client";
import styles from "./navigationBar.module.css";
import Image from "next/image";
import Link from "next/link";

// mui
import * as React from "react";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

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
import { RxCross1 } from "react-icons/rx";
// import components
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
                { list: "Laptops & Desktops", url: "laptops&desktops" },
                { list: "Tablets", url: "tablets" },
                { list: "Monitors", url: "" },
                { list: "Laptops", url: "laptops" },
                { list: "Accessories", url: "accessories" },
                { list: "Drones", url: "drones" },
              ],
            },
            {
              subCategoriesName: "Cell Phone",
              subCategoriesList: [
                { list: "Smartphone", url: "smartphone" },
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
                { list: "Television", url: "television" },
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
                { list: "Accessories", url: "accessories" },
                { list: "Chromebook", url: "" },
                { list: "Computer Component", url: "" },
                { list: "Desktops", url: "" },
                { list: "iMac", url: "" },
                { list: "Laptops", url: "laptops" },
                { list: "Macbook", url: "" },
                { list: "Monitors", url: "" },
                { list: "PC Gaming", url: "gaming" },
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

const SearchField = () => (
  <div className={styles.searchFieldContainer}>
    <div className={styles.allCategories}>
      <span>all categories</span>
      <TfiAngleDown className={styles.angleDownIcon} />
    </div>

    <div className={styles.searchFieldAndButton}>
      <input
        className={styles.searchField}
        type="search"
        id="search"
        name="search"
        placeholder="Search for products"
      />
      <button className={styles.searchButton}>
        <span className={styles.searchButtonSearchText}>search</span>
        <IoSearchOutline className={styles.searchButtonSearchIcon} />
      </button>
    </div>
  </div>
);

const TopNavSection = ({ navData }) => (
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
            {item?.topNavData?.navCategoryList?.map((categoryList, index) => (
              <Link
                key={index}
                href={categoryList?.pathName}
                className={`${
                  index === 0
                    ? styles.categoryListHighlightText
                    : styles.categoryListText
                }`}
              >
                {categoryList?.name}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

const CenterNavSection = ({
  navData,
  toggleSearchDrawer,
  toggleMenuDrawer,
  open,
  open1,
  cart,
}) => (
  <section>
    <div className={styles.centerNavAllDataContainer}>
      <Link href="/">
        <Image
          className={styles.gadgetGalleryLogo}
          src={ggLogo}
          alt="gadgets gallery logo"
        />
      </Link>

      <div className={styles.centerSearchFieldContainer}>
        <SearchField />
      </div>

      <div>
        {navData.map((data, ind) => (
          <div className={styles.centerNavRightDataContainer} key={ind}>
            <div>
              <Drawer anchor="right" open={open}>
                <Box
                  className={styles.searchDrawerContainer}
                  role="presentation"
                >
                  <div className={styles.DrawerCrossBtn}>
                    <RxCross1 onClick={toggleSearchDrawer(false)} />
                  </div>
                  <SearchField />
                </Box>
              </Drawer>
            </div>

            <Drawer
              anchor="right"
              open={open1}
              onClose={toggleMenuDrawer(false)}
            >
              <Box
                sx={{ width: 500, height: 300 }}
                role="presentation"
                onClick={toggleMenuDrawer(false)}
              >
                <div className={styles.shopCategoriesAllTextContainer}>
                  <div className={styles.shopCategoriesTextAndIconContainer}>
                    <LuAlignJustify className={styles.alignJustifyIcon} />
                    <p className={styles.shopCategoriesText}>Shop Categories</p>
                  </div>

                  <TfiAngleDown className={styles.arrowDownIcon} />
                  <div className={styles.shopCategoriesALlDataInfoContainer}>
                    {navData.map((bottomNav, ind) => (
                      <div key={ind}>
                        {bottomNav?.bottomNavData?.shopCategories.map(
                          (categoryData, index) => (
                            <Link
                              href={`${
                                categoryData?.url === "shop"
                                  ? "/"
                                  : `/product-category/${categoryData?.url}`
                              }`}
                              className={
                                styles.navCategoryListHrLineAndCategory
                              }
                              key={index}
                            >
                              <div
                                className={
                                  styles.navCategoryListItemAllDataContainer
                                }
                              >
                                <p
                                  className={
                                    styles.navCategoryListItemContainer
                                  }
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
              </Box>
            </Drawer>

            {data?.centerNavData?.map((item, index) => (
              <Link
                href={item?.info?.url}
                className={`${
                  index > 0
                    ? styles.centerNavRightDataInfoContainer
                    : styles.centerNavRightDataInfoContainerNone
                } ${
                  index === 1 || index === 4
                    ? styles.centerNavRightDataInfoContainerLgNone
                    : ""
                }`}
                key={index}
              >
                {index === 3 ? (
                  <Badge badgeContent={cart.length} color="primary">
                    <p className={styles.centerNavRightDataIcon}>
                      {item?.info?.icon}
                    </p>
                  </Badge>
                ) : (
                  <p className={styles.centerNavRightDataIcon}>
                    {index === 1 ? (
                      <span onClick={toggleSearchDrawer(true)}>
                        {item?.info?.icon}
                      </span>
                    ) : (
                      <span className={styles.centerNavRightDataIcon}>
                        {index === 4 ? (
                          <span onClick={toggleMenuDrawer(true)}>
                            {item?.info?.icon}
                          </span>
                        ) : (
                          <span>{item?.info?.icon}</span>
                        )}
                      </span>
                    )}
                  </p>
                )}
                <p className={styles.centerNavRightDataText}>
                  <span
                    className={`${index > 0 ? styles.centerNavRightText : ""}`}
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
);

const BottomNavSection = ({ navData, wishlistItems }) => (
  <section className={styles.bottomNavHrLine}>
    <div className={styles.bottomNavAllDataContainer}>
      <div className={styles.shopCategoriesALlDataContainer}>
        <div className={styles.shopCategoriesAllTextContainer}>
          <div className={styles.shopCategoriesTextAndIconContainer}>
            <LuAlignJustify className={styles.alignJustifyIcon} />
            <p className={styles.shopCategoriesText}>Shop Categories</p>
          </div>
          <TfiAngleDown className={styles.arrowDownIcon} />
          <div className={styles.shopCategoriesALlDataInfoContainer}>
            {navData.map((bottomNav, ind) => (
              <div key={ind}>
                {bottomNav?.bottomNavData?.shopCategories.map(
                  (categoryData, index) => (
                    <div
                      key={index}
                      className={styles.navCategoryListHrLineAndCategory}
                    >
                      <Link
                        href={`${
                          categoryData?.url === "shop"
                            ? "/shop"
                            : `/product-category/${categoryData?.url}`
                        }`}
                      >
                        <div
                          className={styles.navCategoryListItemAllDataContainer}
                        >
                          <p className={styles.navCategoryListItemContainer}>
                            <span className={styles.categoryDataIcon}>
                              {categoryData?.icon}
                            </span>
                            <span className={styles.categoryDataName}>
                              {categoryData?.categoryName}
                            </span>
                          </p>
                          {categoryData?.subCategories && (
                            <TfiAngleRight className={styles.angleRightIcon} />
                          )}
                        </div>
                      </Link>

                      {categoryData?.subCategories && (
                        <div className={styles.subCategoriesAllDataContainer}>
                          <div className={styles.subCategoriesAllInfoContainer}>
                            {categoryData?.subCategories?.map(
                              (subCategoryData, index) => (
                                <div key={index}>
                                  <p className={styles.subCategoriesName}>
                                    {subCategoryData?.subCategoriesName}
                                  </p>

                                  <div
                                    className={
                                      styles.subCategoriesListContainer
                                    }
                                  >
                                    {subCategoryData?.subCategoriesList.map(
                                      (list, index) => (
                                        <Link
                                          href={`/product-category/${list.url}`}
                                          className={styles.subCategoriesList}
                                          key={index}
                                        >
                                          {list.list}
                                        </Link>
                                      )
                                    )}
                                  </div>
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  )
                )}
              </div>
            ))}
          </div>
        </div>
        <div>
          {navData.map((bottomNav, ind) => (
            <div className={styles.bottomNavListAllDataContainer} key={ind}>
              {bottomNav?.bottomNavData?.navListItems.map(
                (navListData, index) => (
                  <Link
                    key={index}
                    href={`${index > 0 ? "/product-category/" : ""}${
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
          <Link href="/wishlist">
            <TfiHeart className={styles.bottomNavRightHeartIcon} />
          </Link>
        </Badge>
        <p className={styles.navCategoryListRightItemHrLine}></p>
        <Link className={styles.bottomNavRightPcBuilder} href="/pc_builder">
          Pc Builder
        </Link>
      </div>
    </div>
  </section>
);

const NavigationBar = () => {
  const { cart } = useCartContext();
  const { wishlistItems } = useWishlist();
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);

  const toggleSearchDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const toggleMenuDrawer = (newOpen1) => () => {
    setOpen1(newOpen1);
  };

  return (
    <>
      <main className={styles.navigationBarAllDataContainer}>
        <TopNavSection navData={navData} />
        <CenterNavSection
          navData={navData}
          toggleSearchDrawer={toggleSearchDrawer}
          toggleMenuDrawer={toggleMenuDrawer}
          open={open}
          open1={open1}
          cart={cart}
        />
        <BottomNavSection navData={navData} wishlistItems={wishlistItems} />
      </main>
    </>
  );
};

export default NavigationBar;
