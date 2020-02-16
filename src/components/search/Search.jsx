import React from "react";
import styles from "./search.module.css";

export function Search() {
  return (
    <div className={styles.search}>
      <img
        src="./images/filter.png"
        className={styles.filter}
        alt="image of a filter"
      />

      <input
        type="text"
        placeholder="Search"
        aria-label="Search"
        className={styles.searchbar}
      />
    </div>
  );
}
