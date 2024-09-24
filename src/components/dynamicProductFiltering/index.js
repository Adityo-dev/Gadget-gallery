"use client";
import styles from "./dynamicProductFiltering.module.css";
import * as React from "react";
import { useState, useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";

const fetchFilterData = async () => {
  return {
    colors: [
      { id: "red", label: "Red" },
      { id: "blue", label: "Blue" },
      { id: "green", label: "Green" },
      { id: "red", label: "Red" },
      { id: "blue", label: "Blue" },
      { id: "green", label: "Green" },
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

function DynamicProductFiltering() {
  const [filterData, setFilterData] = useState({});
  const [checkedItems, setCheckedItems] = useState({});

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
    <main>
      <div>
        {Object.keys(filterData).map((key) =>
          renderFilterSection(key, key.charAt(0).toUpperCase() + key.slice(1))
        )}
      </div>
    </main>
  );
}

export default DynamicProductFiltering;
