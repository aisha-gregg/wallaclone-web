import React, { useState, useEffect } from "react";
import { Search } from "../search/Search";
import classNames from "classnames/bind";
import styles from "./Filter.module.css";
import { FilterButton } from "./FilterButton";

const cx = classNames.bind(styles);

export function Filter({ onApply }) {
  const [name, setName] = useState("");
  const [minPrice, setMinPrice] = useState(undefined);
  const [maxPrice, setMaxPrice] = useState(undefined);
  const [tag, setTag] = useState(undefined);
  const [isRecent, setIsRecent] = useState(true);
  const [isShown, setIsShown] = useState(true);

  useEffect(() => {
    onApply({
      name: name === "" ? undefined : name,
      minPrice,
      maxPrice,
      tags: tag === undefined ? undefined : [tag],
      sortByDate: isRecent ? "most-recent" : "oldest"
    });
  }, [name, minPrice, maxPrice, tag, isRecent]);

  const onApplyTag = tag => {
    setTag(tag);
  };

  const onApplyPrice = ({ minPrice, maxPrice }) => {
    setMinPrice(minPrice);
    setMaxPrice(maxPrice);
  };

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
        onApply={onApplyPrice}
      ></FilterButton>
      <FilterButton
        icon="label"
        label="Etiquetas"
        className={cx("filter", "filter-three", { "is-shown": isShown })}
        as="tags"
        onApply={onApplyTag}
      ></FilterButton>
      <FilterButton
        icon="calendar_today"
        label={isRecent ? "Más reciente" : "Más antiguo"}
        as="toggle"
        className={cx("filter", "filter-four", { "is-shown": isShown })}
        onToggle={() => setIsRecent(!isRecent)}
      ></FilterButton>
      <Search
        className={cx("search")}
        onClick={() => setIsShown(!isShown)}
      ></Search>
    </section>
  );
}
