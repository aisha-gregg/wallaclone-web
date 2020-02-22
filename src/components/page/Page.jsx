import React from "react";
import styles from "./Page.module.css";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export function Page({ children }) {
  return (
    <section className={cx("wrapper")}>
      <Header></Header>
      <main className={cx("page")}>{children}</main>
      <Footer></Footer>
    </section>
  );
}
