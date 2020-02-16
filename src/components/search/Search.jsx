import React from "react";
import styles from "./search.module.css";
import { dropDownFilter } from "../dropdown/Dropdown";

const SearchPage = () => {
  return (
    <div className={styles.search}>
      <img
        onClick={() => dropDownFilter()}
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
};

export default SearchPage;
