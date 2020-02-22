import React from "react";
import classNames from "classnames/bind";
import styles from "./header.module.css";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

export function Header() {
  return (
    <div className={cx("header")}>
      <Link to="/" className={cx("link")}>
        <h2 className={cx("title")}>Wallaclone</h2>
      </Link>
      <img src="/logo4.png" alt="logo" className={cx("logo")}></img>
    </div>
  );
}
