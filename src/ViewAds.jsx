import React, { useState, useEffect } from "react";
import styles from "./viewAds.module.css";

import { http } from "./http";

export function ViewAds() {
  const [ads, setAds] = useState([]);

  useEffect(() => {
    http.get("/ads").then(response => {
      setAds(response.data);
    });
  }, []);

  return (
    <div>
      {ads.map(ad => (
        <section className={styles.ad} key={ad._id}>
          <h2>{ad.name}</h2>
          <p>{ad.description}</p>
          <p>{ad.price}</p>
          <img src={ad.image} />
          <p>
            {ad.tags.map(tag => (
              <span key={ad._id + tag}>{tag}</span>
            ))}
          </p>
        </section>
      ))}
    </div>
  );
}
