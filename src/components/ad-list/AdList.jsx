import React from "react";
import styles from "./AdList.module.css";
import { Ad } from "../ad/Ad";

export function AdList({ ads, onAdClick }) {
  return (
    <div className={styles.grid}>
      {ads.map(ad => (
        <section key={ad._id}>
          <Ad onClick={() => onAdClick(ad.url)} ad={ad}></Ad>
        </section>
      ))}
    </div>
  );
}
