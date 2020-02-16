import React, { useState } from "react";
import { InputText } from "../input-text/InputText";
import { InputNumber } from "../input-number/InputNumber";
import { Button } from "../../components/button/Button";
import styles from "./Filter.module.css";
import { Form } from "react-bootstrap";

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
      <InputText
        name="Nombre de anuncio"
        value={name}
        onValueChange={value => setName(value)}
      ></InputText>
      <InputNumber
        name="Precio Mínimo"
        value={minPrice}
        onValueChange={value => setMinPrice(value)}
      ></InputNumber>
      <InputNumber
        name="Precio Máximo"
        value={maxPrice}
        onValueChange={value => setMaxPrice(value)}
      ></InputNumber>

      <InputText
        className={styles.input}
        name="Tag"
        value={tags}
        onValueChange={value => setTags(value)}
      ></InputText>

      <Button className={styles.button}>Aplicar</Button>
    </Form>
  );
}
