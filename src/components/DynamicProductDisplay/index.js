"use client";
import styles from "./dynamicProductDisplay.module.css";
import { useState, useEffect } from "react";

// import components
import ColumnCart from "../products-cart/columnCart";
import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import DynamicBreadcrumb from "../dynamicBreadcrumb";
import ArrowSlider from "../arrowSlider";

// import icons
import games_icon from "../../assets/icons/product-category-icon/icon-games.png";
import headphone_icon from "../../assets/icons/product-category-icon/icon-headphone.png";
import laptops_icon from "../../assets/icons/product-category-icon/icon-laptops.png";
import phone_icon from "../../assets/icons/product-category-icon/icon-phone.png";
import speaker_icon from "../../assets/icons/product-category-icon/icon-speaker.png";
import television_icon from "../../assets/icons/product-category-icon/icon-television.png";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";

// Sample product categories
const productCategory = [
  {
    icon: laptops_icon,
    title: "laptops",
    backgroundColor: "#DAEBE9",
  },
  {
    icon: games_icon,
    title: "games",
    backgroundColor: "#EBDDE8",
  },
  {
    icon: phone_icon,
    title: "smartphones",
    backgroundColor: "#F2E1D7",
  },
  {
    icon: television_icon,
    title: "television",
    backgroundColor: "#E9E5EF",
  },
  {
    icon: headphone_icon,
    title: "headphone",
    backgroundColor: "#EEEAE0",
  },
  {
    icon: speaker_icon,
    title: "speakers",
    backgroundColor: "#F2F5DE",
  },
];

// Sample filter data fetch function
const fetchFilterData = async () => {
  return {
    colors: [
      { id: "red", label: "Red" },
      { id: "blue", label: "Blue" },
      { id: "green", label: "Green" },
    ],
    models: [
      { id: "model1", label: "Model 1" },
      { id: "model2", label: "Model 2" },
    ],
    stock: [
      { id: "inStock", label: "In Stock" },
      { id: "outOfStock", label: "Out of Stock" },
    ],
  };
};

const DynamicProductDetailsDisplay = ({ DynamicPageName, products }) => {
  // Calculate min and max prices from products array
  const initialMinPrice = Math.min(
    ...products.map((product) => product.currentPrice)
  );
  const initialMaxPrice = Math.max(
    ...products.map((product) => product.currentPrice)
  );

  // Set initial min and max price states
  const [minPrice, setMinPrice] = useState(initialMinPrice);
  const [maxPrice, setMaxPrice] = useState(initialMaxPrice);
  const [filterData, setFilterData] = useState({});
  const [checkedItems, setCheckedItems] = useState({});

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
  ];

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchFilterData();
      setFilterData(data);

      const initialCheckedItems = {};
      Object.keys(data).forEach((key) => {
        initialCheckedItems[key] = [];
      });
      setCheckedItems(initialCheckedItems);
    };
    loadData();
  }, []);

  const handleToggle = (category, value) => {
    const currentChecked = checkedItems[category];
    const currentIndex = currentChecked.indexOf(value);
    const newChecked = [...currentChecked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setCheckedItems({
      ...checkedItems,
      [category]: newChecked,
    });
  };

  // Function to filter products based on the selected filters
  const filterProducts = () => {
    return products.filter((product) => {
      const { currentPrice, color, model, stock } = product;

      // Filter by price range
      const isWithinPriceRange =
        currentPrice >= minPrice && currentPrice <= maxPrice;

      // Filter by selected colors
      const selectedColors = checkedItems.colors || [];
      const matchesColor = selectedColors.length
        ? selectedColors.includes(color)
        : true;

      // Filter by selected models
      const selectedModels = checkedItems.models || [];
      const matchesModel = selectedModels.length
        ? selectedModels.includes(model)
        : true;

      // Filter by stock status
      const selectedStock = checkedItems.stock || [];
      const matchesStock = selectedStock.length
        ? selectedStock.includes(stock)
        : true;

      // Return product if all conditions match
      return isWithinPriceRange && matchesColor && matchesModel && matchesStock;
    });
  };

  const renderFilterSection = (filterKey, filterTitle) => {
    if (!filterData[filterKey]) return null;

    return (
      <Accordion className={styles.filteringDataContainer} defaultExpanded>
        <AccordionSummary>
          <Typography>{filterTitle}</Typography>
        </AccordionSummary>
        <div>
          <List className={styles.filteringInfoContainer} dense>
            {filterData[filterKey].map((item) => {
              const labelId = `${filterKey}-filter-${item.id}-label`;

              return (
                <ListItemButton
                  key={item.id}
                  role="listitem"
                  onClick={() => handleToggle(filterKey, item.id)}
                >
                  <ListItemIcon>
                    <Checkbox
                      checked={checkedItems[filterKey]?.includes(item.id)}
                      tabIndex={-1}
                      disableRipple
                      inputProps={{ "aria-labelledby": labelId }}
                    />
                  </ListItemIcon>
                  <ListItemText id={labelId} primary={item.label} />
                </ListItemButton>
              );
            })}
          </List>
        </div>
      </Accordion>
    );
  };

  return (
    <>
      <section>
        <DynamicBreadcrumb breadcrumbItems={breadcrumbItems} />
      </section>

      <section className={styles.productCategoryDetailsAllDataContainer}>
        <h1 className={styles.pageName}>{DynamicPageName}</h1>
        <div>
          <ArrowSlider categoryData={productCategory} />
        </div>

        <div className={styles.productCategoryDetailsCartAndAsideContainer}>
          <div className={styles.productCategoryDetailsAsideContainer}>
            <div className={styles.priceRangeContainer}>
              <p className={styles.priceRangeTitle}>Price Range</p>
              <p className={styles.hrLine} />
              <div className={styles.priceRangeInputContainer}>
                <input
                  className={styles.priceRangeInput}
                  type="text"
                  value={minPrice}
                  onChange={(e) => setMinPrice(Number(e.target.value))}
                />
                <input
                  className={styles.priceRangeInput}
                  type="text"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                />
              </div>
            </div>
            <br />
            <main>
              <div>
                {Object.keys(filterData).map((key) =>
                  renderFilterSection(
                    key,
                    key.charAt(0).toUpperCase() + key.slice(1)
                  )
                )}
              </div>
            </main>
          </div>

          <div className={styles.productCategoryDetailsCartContainer}>
            {filterProducts().map((data, ind) => (
              <div key={ind}>
                <ColumnCart cartData={data} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className={styles.productPaginationContainer}>
        {products.length < 20 ? (
          <div>
            <Stack spacing={2}>
              <Pagination count={5} variant="outlined" shape="rounded" />
            </Stack>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default DynamicProductDetailsDisplay;
