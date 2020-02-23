import React from "react";
import styles from "./search.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export function Search({ onClick, className }) {
  return (
    <div className={cx("search", className)} onClick={onClick}>
      <i className="icon">filter_list</i>
    </div>
  );
}
