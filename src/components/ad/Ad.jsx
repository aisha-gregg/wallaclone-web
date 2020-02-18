import React from "react";
import styles from "./ad.module.css";

export function Ad({ ad }) {
  return (
    <article>
      <h2 className={styles.header}>{ad.name}</h2>
      <img className={styles.image} alt="image of product" src={ad.image} />
      <footer className={styles.footer}>
        <p className={styles.info}>{ad.description}</p>
        <p className={styles.price}>{ad.price}</p>
        <p>{ad.user.email}</p>
        <p>{ad.isSold === false ? "" : "Sold"}</p>
        <p className={styles.id}>{ad.sell === false ? "buying" : "selling"}</p>
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
    </article>
  );
}
