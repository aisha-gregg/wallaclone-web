import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { Search } from "../search/Search";
import classNames from "classnames/bind";
import styles from "./Filter.module.css";
import { FilterButton } from "./FilterButton";

const cx = classNames.bind(styles);

export function Filter({ onApply }) {
  const [name, setName] = useState("");
  const [minPrice, setMinPrice] = useState(undefined);
  const [maxPrice, setMaxPrice] = useState(undefined);
  const [tags, setTags] = useState(undefined);
  const [isShown, setIsShown] = useState(true);

  useEffect(() => {
    onApply({
      name: name === "" ? undefined : name,
      minPrice,
      maxPrice,
      tags
    });
  }, [name, minPrice, maxPrice, tags]);

  return (
    <section className={cx("wrapper")}>
      <FilterButton
        icon="search"
        label="Buscar"
        className={cx("filter", "filter-one", { "is-shown": isShown })}
        onChange={value => setName(value)}
      ></FilterButton>
      <FilterButton
        icon="euro"
        label="Precio"
        className={cx("filter", "filter-two", { "is-shown": isShown })}
        as="price"
        onChange={value => setMinPrice(value)}
      ></FilterButton>
      <FilterButton
        icon="label"
        label="Etiquetas"
        className={cx("filter", "filter-three", { "is-shown": isShown })}
        onChange={value => setMaxPrice(value)}
      ></FilterButton>
      <FilterButton
        icon="calendar_today"
        label="Más reciente"
        className={cx("filter", "filter-four", { "is-shown": isShown })}
        onChange={value => setTags(value)}
      ></FilterButton>
      <Search
        className={cx("search")}
        onClick={() => setIsShown(!isShown)}
      ></Search>
    </section>
  );
}
