import React from "react";
import styles from "./EditAd.module.css";
import { AdForm } from "../../components/ad-form/AdForm";
import { useHistory } from "react-router-dom";
import { http } from "../../core/http";

export function EditAd({ ad }) {
  const route = useHistory();
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
      <AdForm values={ad} onSubmit={onSubmit} text="Finalizar"></AdForm>
    </div>
  );
}
