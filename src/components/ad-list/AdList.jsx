import React from "react";
import styles from "./AdList.module.css";
import { Button } from "react-bootstrap";
import { Ad } from "../ad/Ad";

export function AdList({ ads, onAdClick }) {
  return (
    <div className={styles.border}>
      {ads.map(ad => (
        <section className={styles.ad} key={ad._id}>
          <Ad ad={ad}></Ad>
          <Button
            onClick={() => onAdClick(ad.url)}
            className={styles.AdlistButton}
          >
            Ver
          </Button>
        </section>
      ))}
    </div>
  );
}
