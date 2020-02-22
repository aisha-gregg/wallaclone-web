import React from "react";
import styles from "./Footer.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export function Footer() {
  return (
    <footer className={cx("footer")}>
      <div className={cx("wrapper")}>
        <h2>Wallaclone</h2>
        <span>
          Copyright © {new Date().getFullYear()} Wallaclone © de sus respectivos
          propietarios
        </span>
      </div>
    </footer>
  );
}
