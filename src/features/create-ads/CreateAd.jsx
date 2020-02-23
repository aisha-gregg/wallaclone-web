import React from "react";
import { http } from "../../core/http";
import { useHistory } from "react-router-dom";
import styles from "./createad.module.css";
import { AdForm } from "../../components/ad-form/AdForm";

export function CreateAd() {
  const route = useHistory();
  async function onSubmit(ad) {
    await http.post("/ads", {
      ...ad
    });
    route.push("/");
  }
  return (
    <div className={styles.wrapper}>
      <h1>¡Crea tu propio anuncio!</h1>
      <AdForm onSubmit={onSubmit} text="Crear"></AdForm>
    </div>
  );
}
