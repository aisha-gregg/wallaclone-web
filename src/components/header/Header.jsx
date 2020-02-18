import React from "react";
import styles from "./header.module.css";

export function Header() {
  return (
    <div className={styles.header}>
      <h2>Wallaclone</h2>
      <img src="./logo4.png" alt="logo" className={styles.logo}></img>
    </div>
  );
}
