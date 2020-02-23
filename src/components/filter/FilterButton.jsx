import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./FilterButton.module.css";
import { Button } from "react-bootstrap";

const cx = classNames.bind(styles);

export function FilterButton({ icon, onChange, label, className, as }) {
  const [isShown, setIsShown] = useState(false);
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
        <span onClick={() => setIsShown(!isShown)} className={cx("label")}>
          {label}
        </span>
      )}

      {as === "price" && isShown && (
        <div className={cx("dropdown")}>
          <input type="range" />
          <div className={cx("buttons")}>
            <Button>Cancelar</Button>
            <Button>Aplicar</Button>
          </div>
        </div>
      )}
    </div>
  );
}
