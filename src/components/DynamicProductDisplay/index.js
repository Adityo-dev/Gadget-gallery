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

const DynamicProductDetailsDisplay = ({ DynamicPageName, products }) => {
  const initialMinPrice = Math.min(
    ...products.map((product) => product.currentPrice)
  );
  const initialMaxPrice = Math.max(
    ...products.map((product) => product.currentPrice)
  );

  const [minPrice, setMinPrice] = useState(initialMinPrice);
  const [maxPrice, setMaxPrice] = useState(initialMaxPrice);
  const [filterData, setFilterData] = useState({});
  const [checkedItems, setCheckedItems] = useState({});

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
  ];

  const fetchFilterData = async (products) => {
    const colors = [...new Set(products.map((product) => product.color))];
    const models = [...new Set(products.map((product) => product.model))];
    const stock = [...new Set(products.map((product) => product.stock))];
    const types = [...new Set(products.map((product) => product.type))];
    const brands = [...new Set(products.map((product) => product.brand))];

    return {
      colors: colors.map((color) => ({ id: color, label: color })),
      brands: brands.map((brand) => ({ id: brand, label: brand })),
      models: models.map((model) => ({ id: model, label: model })),
      types: types.map((type) => ({ id: type, label: type })),
      stock: stock.map((stockItem) => ({ id: stockItem, label: stockItem })),
    };
  };

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchFilterData(products);
      setFilterData(data);

      const initialCheckedItems = {};
      Object.keys(data).forEach((key) => {
        initialCheckedItems[key] = [];
      });
      setCheckedItems(initialCheckedItems);
    };
    loadData();
  }, [products]);

  const handleToggle = (category, value) => {
    const currentChecked = checkedItems[category];
    const newChecked = currentChecked.includes(value)
      ? currentChecked.filter((item) => item !== value)
      : [...currentChecked, value];

    setCheckedItems({
      ...checkedItems,
      [category]: newChecked,
    });
  };

  const filterProducts = () => {
    return products.filter((product) => {
      const { currentPrice, color, model, stock, type, brand } = product;

      const isWithinPriceRange =
        currentPrice >= minPrice && currentPrice <= maxPrice;
      const selectedColors = checkedItems.colors || [];
      const matchesColor = selectedColors.length
        ? selectedColors.includes(color)
        : true;
      const selectedModels = checkedItems.models || [];
      const matchesModel = selectedModels.length
        ? selectedModels.includes(model)
        : true;
      const selectedStock = checkedItems.stock || [];
      const matchesStock = selectedStock.length
        ? selectedStock.includes(stock)
        : true;
      const selectedTypes = checkedItems.types || [];
      const matchesType = selectedTypes.length
        ? selectedTypes.includes(type)
        : true;
      const selectedBrands = checkedItems.brands || [];
      const matchesBrand = selectedBrands.length
        ? selectedBrands.includes(brand)
        : true; // Checking brand matches

      return (
        isWithinPriceRange &&
        matchesColor &&
        matchesModel &&
        matchesStock &&
        matchesType &&
        matchesBrand
      );
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
              <div className={styles.priceRangeInputContainer}>
                <input
                  className={styles.priceRangeInput}
                  type="number"
                  value={minPrice}
                  onChange={(e) => setMinPrice(Number(e.target.value))}
                />
                <input
                  className={styles.priceRangeInput}
                  type="number"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                />
              </div>
            </div>
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
              <ColumnCart key={ind} cartData={data} />
            ))}
          </div>
        </div>
      </section>

      <div className={styles.productPaginationContainer}>
        {products.length > 20 && (
          <Stack spacing={2}>
            <Pagination
              count={Math.ceil(products.length / 20)}
              variant="outlined"
              shape="rounded"
            />
          </Stack>
        )}
      </div>
    </>
  );
};

export default DynamicProductDetailsDisplay;
