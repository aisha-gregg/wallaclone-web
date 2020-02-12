import React from "react";
import styles from "./header.module.css";
import SearchPage from "../search/Search";

export function Header() {
  return (
    <div>
      <h2 className={styles.header}>Wallaclone</h2>
    </div>
  );
}
