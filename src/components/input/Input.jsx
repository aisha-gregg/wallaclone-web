import React from "react";
import styles from "./Input.module.css";

export function Input({ name, children }) {
  return (
    <label className={styles.wrapper}>
      <p className={styles.label}>{name}</p>
      {React.Children.map(children, child => modifyChild(child))}
    </label>
  );
}

function modifyChild(child) {
  const props = {
    className:
      child.props.className !== undefined
        ? styles.input + " " + child.props.className
        : styles.input
  };

  return React.cloneElement(child, props);
}
