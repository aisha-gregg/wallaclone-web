import React from "react";
import styles from "./ad.module.css";
import classNames from "classnames/bind";
import { AdBase } from "../ad-base/AdBase";

const cx = classNames.bind(styles);

export function Ad({ ad, onClick, action }) {
  return (
    <AdBase
      ad={ad}
      onClick={onClick}
      price={<h2 className={cx("no-margin")}>{ad.price}€</h2>}
      name={<h2 className={cx("no-margin")}>{ad.name}</h2>}
      description={<p className={cx("no-margin")}>{ad.description}</p>}
      action={action}
    ></AdBase>
  );
}
