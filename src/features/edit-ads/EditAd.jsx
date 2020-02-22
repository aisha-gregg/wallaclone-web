import React, { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import styles from "./EditAd.module.css";
import { AdForm } from "../../components/ad-form/AdForm";
import { useHistory } from "react-router-dom";
import { http } from "../../core/http";

export function EditAd({ ad }) {
  const route = useHistory();
  const [isSold, setIsSold] = useState(ad.isSold);
  async function onSubmit({
    name,
    description,
    price,
    tags,
    sell,
    image,
    isSold
  }) {
    await http.put(`/ads/${ad._id}`, {
      name,
      description,
      sell,
      price,
      image,
      tags,
      isSold
    });
    route.push("/");
  }
  return (
    <div className={styles.wrapper}>
      <Form.Label>¡Editar tu anuncio!</Form.Label>

      <InputGroup className={styles.checkbox}>
        <InputGroup.Checkbox
          label="Checkbox"
          onClick={() => setIsSold(!isSold)}
          checked={isSold}
        />
        Vendido
      </InputGroup>
      <AdForm values={ad} onSubmit={onSubmit} text="Finalizar"></AdForm>
    </div>
  );
}
