import React from "react";
import styles from "./AdList.module.css";

export function AdList({ ads }) {
  return (
    <div className={styles.border}>
      {ads.map(ad => (
        <section className={styles.ad} key={ad._id}>
          <h2 className={styles.header}>{ad.name}</h2>
          <p className={styles.adinfo}>{ad.description}</p>
          <p className={styles.adprice}>{ad.price}</p>
          <img className={styles.adimage} src={ad.image} />
          <p className={styles.tags}>
            {ad.tags.map(tag => (
              <span key={ad._id + tag}>{tag}</span>
            ))}
          </p>
        </section>
      ))}
    </div>
  );
}
