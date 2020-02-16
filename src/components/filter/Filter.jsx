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
      className={styles.margin + " " + className}
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
        name="Nombre de anuncio"
        value={name}
        onValueChange={value => setName(value)}
      ></Form.Control>
      <Form.Control
        type="number"
        name="Precio Mínimo"
        value={minPrice}
        onValueChange={value => setMinPrice(value)}
      ></Form.Control>
      <Form.Control
        type="number"
        name="Precio Máximo"
        value={maxPrice}
        onValueChange={value => setMaxPrice(value)}
      ></Form.Control>

      <Form.Control
        className={styles.input}
        name="Tag"
        value={tags}
        onValueChange={value => setTags(value)}
      ></Form.Control>

      <Button>Aplicar</Button>
    </Form>
  );
}
