import React, { useState } from "react";
import styles from "./Filter.module.css";
import { Form, Button } from "react-bootstrap";

export function Filter({ onApply, className }) {
  const [name, setName] = useState("");
  const [minPrice, setMinPrice] = useState(undefined);
  const [maxPrice, setMaxPrice] = useState(undefined);
  const [tags, setTags] = useState(undefined);

  return (
    <Form
      className={styles.margin + " " + className + " " + styles.wrapper}
      onSubmit={e => {
        e.preventDefault();
        onApply({
          name: name === "" ? undefined : name,
          minPrice,
          maxPrice,
          tags
        });
      }}
    >
      <Form.Control
        placeholder="Nombre de anuncio"
        onChange={event => setName(event.target.value)}
      ></Form.Control>
      <Form.Control
        type="number"
        placeholder="Precio Mínimo"
        onChange={event => setMinPrice(event.target.value)}
      ></Form.Control>
      <Form.Control
        type="number"
        placeholder="Precio Máximo"
        onChange={event => setMaxPrice(event.target.value)}
      ></Form.Control>

      <Form.Control
        className={styles.input}
        placeholder="Tag"
        onChange={event => setTags(event.target.value)}
      ></Form.Control>

      <Button type="submit">Aplicar</Button>
    </Form>
  );
}
