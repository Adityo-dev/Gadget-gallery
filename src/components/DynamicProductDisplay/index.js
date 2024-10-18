"use client";
import styles from "./dynamicProductDisplay.module.css";
import { useState, useEffect, useMemo } from "react";

// Import components
import ColumnCart from "../products-cart/columnCart";
import DynamicBreadcrumb from "../dynamicBreadcrumb";
import ArrowSlider from "../arrowSlider";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";

// Import icons
import games_icon from "../../assets/icons/product-category-icon/icon-games.png";
import headphone_icon from "../../assets/icons/product-category-icon/icon-headphone.png";
import laptops_icon from "../../assets/icons/product-category-icon/icon-laptops.png";
import phone_icon from "../../assets/icons/product-category-icon/icon-phone.png";
import speaker_icon from "../../assets/icons/product-category-icon/icon-speaker.png";
import television_icon from "../../assets/icons/product-category-icon/icon-television.png";

// Sample product categories
const productCategory = [
  { icon: laptops_icon, title: "Laptops", backgroundColor: "#DAEBE9" },
  { icon: games_icon, title: "Games", backgroundColor: "#EBDDE8" },
  { icon: phone_icon, title: "Smartphones", backgroundColor: "#F2E1D7" },
  { icon: television_icon, title: "Television", backgroundColor: "#E9E5EF" },
  { icon: headphone_icon, title: "Headphones", backgroundColor: "#EEEAE0" },
  { icon: speaker_icon, title: "Speakers", backgroundColor: "#F2F5DE" },
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
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
  ];

  const fetchFilterData = async (products) => {
    const colors = [
      ...new Set(
        products.flatMap((product) =>
          product.filters
            .filter((f) => f.filterName === "color")
            .map((f) => f.value)
        )
      ),
    ];
    const models = [
      ...new Set(
        products.flatMap((product) =>
          product.filters
            .filter((f) => f.filterName === "model")
            .map((f) => f.value)
        )
      ),
    ];
    const stocks = [
      ...new Set(
        products.flatMap((product) =>
          product.filters
            .filter((f) => f.filterName === "stock")
            .map((f) => f.value)
        )
      ),
    ];
    const types = [
      ...new Set(
        products.flatMap((product) =>
          product.filters
            .filter((f) => f.filterName === "type")
            .map((f) => f.value)
        )
      ),
    ];
    const brands = [
      ...new Set(
        products.flatMap((product) =>
          product.filters
            .filter((f) => f.filterName === "brand")
            .map((f) => f.value)
        )
      ),
    ];

    return {
      colors: colors.map((color) => ({ id: color, label: color })),
      brands: brands.map((brand) => ({ id: brand, label: brand })),
      models: models.map((model) => ({ id: model, label: model })),
      types: types.map((type) => ({ id: type, label: type })),
      stocks: stocks.map((stockItem) => ({ id: stockItem, label: stockItem })),
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
    const currentChecked = checkedItems[category] || [];
    const newChecked = currentChecked.includes(value)
      ? currentChecked.filter((item) => item !== value)
      : [...currentChecked, value];

    setCheckedItems({
      ...checkedItems,
      [category]: newChecked,
    });
  };

  const filterProducts = useMemo(() => {
    return products.filter((product) => {
      const { currentPrice } = product;
      const isWithinPriceRange =
        currentPrice >= minPrice && currentPrice <= maxPrice;

      const matchesColor =
        !checkedItems.colors ||
        checkedItems.colors.length === 0 ||
        product.filters.some(
          (f) =>
            f.filterName === "color" && checkedItems.colors.includes(f.value)
        );

      const matchesModel =
        !checkedItems.models ||
        checkedItems.models.length === 0 ||
        product.filters.some(
          (f) =>
            f.filterName === "model" && checkedItems.models.includes(f.value)
        );

      const matchesStock =
        !checkedItems.stocks ||
        checkedItems.stocks.length === 0 ||
        product.filters.some(
          (f) =>
            f.filterName === "stock" && checkedItems.stocks.includes(f.value)
        );

      const matchesType =
        !checkedItems.types ||
        checkedItems.types.length === 0 ||
        product.filters.some(
          (f) => f.filterName === "type" && checkedItems.types.includes(f.value)
        );

      const matchesBrand =
        !checkedItems.brands ||
        checkedItems.brands.length === 0 ||
        product.filters.some(
          (f) =>
            f.filterName === "brand" && checkedItems.brands.includes(f.value)
        );

      return (
        isWithinPriceRange &&
        matchesColor &&
        matchesModel &&
        matchesStock &&
        matchesType &&
        matchesBrand
      );
    });
  }, [products, minPrice, maxPrice, checkedItems]);

  // Paginate products
  const totalPages = Math.ceil(filterProducts.length / itemsPerPage);
  const displayedProducts = filterProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <DynamicBreadcrumb breadcrumbItems={breadcrumbItems} />
      <section className={styles.productCategoryDetailsAllDataContainer}>
        <div className={styles.productCategoryDetailsCartAndAsideContainer}>
          <div className={styles.productCategoryDetailsAsideContainer}>
            <h3>Filters</h3>
            {Object.entries(filterData).map(([key, values]) => (
              <Accordion key={key}>
                <AccordionSummary>
                  <Typography>
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </Typography>
                </AccordionSummary>
                <List>
                  {values.map((item) => (
                    <ListItemButton
                      key={item.id}
                      role={undefined}
                      onClick={() => handleToggle(key, item.id)}
                      dense
                    >
                      <ListItemIcon>
                        <Checkbox
                          edge="start"
                          checked={
                            checkedItems[key]?.includes(item.id) || false
                          }
                          tabIndex={-1}
                          disableRipple
                        />
                      </ListItemIcon>
                      <ListItemText primary={item.label} />
                    </ListItemButton>
                  ))}
                </List>
              </Accordion>
            ))}
          </div>
          <div className={styles.productCategoryDetailsCartContainer}>
            {displayedProducts.map((product, index) => (
              <ColumnCart key={index} cartData={product} />
            ))}
          </div>
        </div>
      </section>
      <Stack spacing={2}>
        <Pagination
          count={totalPages}
          variant="outlined"
          color="primary"
          onChange={(event, value) => setCurrentPage(value)}
        />
      </Stack>
    </>
  );
};

export default DynamicProductDetailsDisplay;
