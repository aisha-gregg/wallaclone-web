import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./FilterButton.module.css";
import { Button, Dropdown } from "react-bootstrap";

const cx = classNames.bind(styles);

export function FilterButton({
  icon,
  onChange,
  label,
  className,
  as,
  onApply,
  onToggle
}) {
  const [isShown, setIsShown] = useState(false);
  const [tag, setTag] = useState(undefined);
  const [minPrice, setMinPrice] = useState(undefined);
  const [maxPrice, setMaxPrice] = useState(undefined);
  return (
    <div className={cx(className, "wrapper")}>
      <i className={cx("icon", "input-icon")}>{icon}</i>

      {as === undefined ? (
        <input
          onChange={event => onChange(event.target.value)}
          className={cx("input")}
          placeholder={label}
        ></input>
      ) : (
        <span
          onClick={() => {
            setIsShown(!isShown);
            onToggle && onToggle();
          }}
          className={cx("label")}
        >
          {label}
        </span>
      )}

      {as === "price" && isShown && (
        <div className={cx("dropdown")}>
          <label>
            Desde
            <input
              type="number"
              value={minPrice}
              onChange={event => setMinPrice(event.target.value)}
            />
          </label>
          <label>
            Hasta
            <input
              type="number"
              value={maxPrice}
              onChange={event => setMaxPrice(event.target.value)}
            />
          </label>
          <div className={cx("buttons")}>
            <Button
              onClick={() => {
                setMinPrice(undefined);
                setMaxPrice(undefined);
                onApply({ minPrice: undefined, maxPrice: undefined });
              }}
            >
              Limpiar
            </Button>
            <Button onClick={() => setIsShown(false)}>Cancelar</Button>
            <Button onClick={() => onApply({ minPrice, maxPrice })}>
              Aplicar
            </Button>
          </div>
        </div>
      )}

      {as === "tags" && isShown && (
        <div className={cx("dropdown")}>
          <Dropdown>
            <Dropdown.Toggle variant="secondary">{tag}</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item
                onSelect={() => setTag("lifestyle")}
                id="lifestyle"
              >
                Lifestyle
              </Dropdown.Item>
              <Dropdown.Item onSelect={() => setTag("mobile")} id="mobile">
                Mobile
              </Dropdown.Item>
              <Dropdown.Item onSelect={() => setTag("work")} id="work">
                Work
              </Dropdown.Item>
              <Dropdown.Item onSelect={() => setTag("personal")} id="personal">
                Personal
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <div className={cx("buttons")}>
            <Button
              onClick={() => {
                setTag(undefined);
                onApply();
              }}
            >
              Limpiar
            </Button>
            <Button onClick={() => setIsShown(false)}>Cancelar</Button>
            <Button onClick={() => onApply(tag)}>Aplicar</Button>
          </div>
        </div>
      )}
    </div>
  );
}
