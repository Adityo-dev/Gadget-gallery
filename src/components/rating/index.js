import styles from "./rating.module.css";
// import rating mui
import * as React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

export default function DynamicRating({ rating }) {
  return (
    <Stack>
      <Rating
        className={styles.rating}
        name="half-rating-read"
        defaultValue={rating}
        precision={0.5}
        readOnly
      />
    </Stack>
  );
}
