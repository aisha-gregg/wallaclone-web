import React from "react";
import styles from "./AdList.module.css";

//const AdsList = [];

//for (let i = 0; (i = 10); i++) {
//AdsList.push([i]);
//}
export function AdList({ ads }) {
  return (
    <div className={styles.border}>
      {ads.map(ad => (
        <section className={styles.ad} key={ad._id}>
          <h2 className={styles.header}>{ad.name}</h2>
          <img className={styles.image} src={ad.image} />
          <footer className={styles.footer}>
            <p className={styles.info}>{ad.description}</p>
            <p className={styles.price}>{ad.price}</p>
            <p className={styles.id}>
              {ad.sell === false ? "buying" : "selling"}
            </p>
            <div className={styles.tags}>
              {ad.tags.map(tag => (
                <span
                  key={ad._id + tag}
                  className={styles.tag + " " + styles[`tag-${tag}`]}
                >
                  {tag}
                </span>
              ))}
            </div>
          </footer>
        </section>
      ))}
    </div>
  );
}
