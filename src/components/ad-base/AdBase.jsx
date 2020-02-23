import React from "react";
import styles from "./AdBase.module.css";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

export function AdBase({
  ad,
  onClick,
  action,
  price,
  name,
  type,
  description,
  tags,
  image,
  onImageClick,
  isSold
}) {
  return (
    <article className={cx("card")} onClick={onClick}>
      <div className={cx("image-wrapper")}>
        {image}

        <img
          className={cx("image", { sold: ad.isSold })}
          alt="image of product"
          src={ad.image}
        />

        {ad.isSold && <h2 className={cx("sold-text")}>Vendido</h2>}
        <div onClick={onImageClick} className={cx("image-shadow")}></div>
      </div>
      <div className={cx("price")}>{price}</div>
      <section className={cx("information")}>
        <header className={cx("header")}>
          <h5>
            <Link to={`/users/${ad.userId}`}>{ad.user.email}</Link>
          </h5>
          <h5>{new Intl.DateTimeFormat().format(ad.date)}</h5>
        </header>
        <div className={cx("name")}>
          {name}
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
        {description}
        {tags}
        <div className={cx("tags")}>
          {ad.tags?.map(tag => (
            <span key={ad._id + tag} className={cx("tag", `tag-${tag}`)}>
              {tag}
            </span>
          ))}
        </div>
        {type}
        {isSold}
      </section>
      {action}
    </article>
  );
}
