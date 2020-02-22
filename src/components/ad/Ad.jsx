import React from "react";
import styles from "./ad.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export function Ad({ ad, onClick }) {
  return (
    <article className={cx("card")} onClick={onClick}>
      <div className={cx("image-wrapper")}>
        <img
          className={cx("image", { sold: ad.isSold })}
          alt="image of product"
          src={ad.image}
        />
        {ad.isSold && <h2 className={cx("sold-text")}>Vendido</h2>}
      </div>
      <h2 className={cx("price")}>{ad.price}€</h2>
      <section className={cx("information")}>
        <header className={cx("header")}>
          <h5>{ad.user.email}</h5>
          <h5>{new Intl.DateTimeFormat().format(new Date(ad.date))}</h5>
        </header>
        <div className={cx("name")}>
          <h2>{ad.name}</h2>
          <p
            className={cx("id", "type")}
            title={ad.sell ? "Vender" : "Comprar"}
          >
            <span
              className={cx("first-letter", { sell: ad.sell, buy: !ad.sell })}
            >
              {ad.sell ? "V" : "C"}
            </span>
          </p>
        </div>
        <p className={cx("info")}>{ad.description}</p>

        <div className={cx("tags")}>
          {ad.tags.map(tag => (
            <span key={ad._id + tag} className={cx("tag", `tag-${tag}`)}>
              {tag}
            </span>
          ))}
        </div>
      </section>
    </article>
  );
}
