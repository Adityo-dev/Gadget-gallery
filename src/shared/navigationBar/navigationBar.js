import styles from "./navigationBar.module.css";
import Image from "next/image";
import Link from "next/link";

// import icon
import ggLogo from "../../assets/icons/navBar/gadget-gallery-logo.png";

// import react icon
import { FcElectricity } from "react-icons/fc";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { FaRegUser } from "react-icons/fa6";
import { LuShoppingCart } from "react-icons/lu";
import { TfiAngleDown } from "react-icons/tfi";
import { LuAlignJustify } from "react-icons/lu";
import { TfiHeart } from "react-icons/tfi";

const navData = [
  {
    topNavData: {
      language: ["english", "bangla"],
      typeOfMoney: ["BDT", "USD", "EUR"],
      navCategoryList: [
        { name: "flash sale", pathName: "" },
        { name: "track order", pathName: "" },
        { name: "about", pathName: "" },
        { name: "contact", pathName: "" },
        { name: "blog", pathName: "" },
      ],
    },

    centerNavData: [
      {
        info: {
          icon: <TfiHeadphoneAlt />,
          title: "need help?",
          helpNumber: "+8801770365981",
        },
      },
      {
        info: { icon: <FaRegUser />, title: "my account" },
      },
      {
        info: { icon: <LuShoppingCart />, title: "my cart" },
      },
    ],

    bottomNavData: {
      shopCategories: [
        {
          categoryName: "Smartphone",
          url: "",
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
          url: "",
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
          url: "",
        },
        {
          categoryName: "Headphones",
          url: "",
        },
        {
          categoryName: "PC Gaming",
          url: "",
        },
        {
          categoryName: "Tablets",
          url: "",
        },
        {
          categoryName: "Television",
          url: "",
        },
        {
          categoryName: "Smartwatches",
          url: "",
        },
        {
          categoryName: "Speakers",
          url: "",
        },
        {
          categoryName: " Kid Electronic",
          url: "",
        },
        {
          categoryName: "Tech Gift",
          url: "",
        },
      ],

      navListItems: [
        {
          categoryName: "Home",
          url: "",
        },

        {
          categoryName: "laptop",
          url: "",
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
          url: "",
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
          url: "",
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
          url: "",
        },
      ],
    },
  },
];

const NavigationBar = () => {
  return (
    <main className={styles.navigationBarAllDataContainer}>
      {/* Navigation bar Top section data */}
      <section className={styles.topNavAllDataContainer}>
        <div className={styles.topNavDataContainer}>
          {navData.map((item, ind) => (
            <div className={styles.topNavInfoContainer} key={ind}>
              <div className={styles.topNavInfoContainer}>
                <p>{item?.topNavData?.language?.[0]}</p>
                <p>{item?.topNavData?.typeOfMoney?.[0]}</p>
                <p>Free Shipping On All Orders Over $100</p>
              </div>

              <div className={styles.topNavInfoContainer}>
                <FcElectricity className={styles.electricIcon} />

                {item?.topNavData?.navCategoryList?.map((categoryList, ind) => (
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
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Navigation bar Center section data */}
      <section>
        <div className={styles.centerNavAllDataContainer}>
          <Image className={styles.gadgetGalleryLogo} src={ggLogo} alt="" />
          <div className={styles.searchFieldContainer}>
            <p className={styles.allCategories}>
              <span>all categories</span>{" "}
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
                  <div
                    className={styles.centerNavRightDataInfoContainer}
                    key={ind}
                  >
                    <p className={styles.centerNavRightDataIcon}>
                      {item?.info?.icon}
                    </p>
                    <p className={styles.centerNavRightDataText}>
                      <span>{item?.info?.title}</span>
                      <br />
                      <span className={styles.centerNavHelpNumber}>
                        {item?.info?.helpNumber}
                      </span>
                    </p>
                  </div>
                ))}
                <p></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.bottomNavHrLine}>
        <div className={styles.bottomNavAllDataContainer}>
          <div className={styles.shopCategoriesALlDataContainer}>
            <div className={styles.shopCategoriesAllTextContainer}>
              <div className={styles.shopCategoriesTextAndIconContainer}>
                <LuAlignJustify className={styles.alignJustifyIcon} />
                <p>Shop Categories</p>
              </div>
              <TfiAngleDown className={styles.arrowDownIcon} />
            </div>

            <div className={styles.shopCategoriesALlDataInfoContainer}>
              {navData.map((bottomNav, ind) => (
                <div key={ind}>
                  <div className={styles.navCategoryListItemContainer}>
                    {bottomNav?.bottomNavData?.shopCategories.map(
                      (categoryData, ind) => (
                        <div
                          className={styles.navCategoryListHrLineAndCategory}
                          key={ind}
                        >
                          <p className={styles.navCategoryListItemHrLine}></p>

                          <Link
                            className={styles.navCategoryListItem}
                            href={categoryData.url}
                          >
                            {categoryData?.categoryName}
                          </Link>
                        </div>
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div>
              {navData?.map((bottomNav, ind) => (
                <div className={styles.bottomNavListAllDataContainer} key={ind}>
                  {bottomNav?.bottomNavData?.navListItems.map(
                    (navListData, ind) => (
                      <div key={ind}>
                        <p>{navListData?.categoryName}</p>
                      </div>
                    )
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className={styles.navCategoryRightList}>
            <TfiHeart className={styles.bottomNavRightHeartIcon} />
            <p className={styles.navCategoryListRightItemHrLine}></p>
            <Link className={styles.bottomNavRightTodayDealText} href={""}>
              Today's Deal
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default NavigationBar;
