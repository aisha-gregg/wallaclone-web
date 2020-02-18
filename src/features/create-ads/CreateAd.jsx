import React from "react";
import { http } from "../../core/http";
import { useHistory } from "react-router-dom";
import { Form } from "react-bootstrap";
import styles from "./createad.module.css";
import { Header } from "../../components/header/Header";
import { AdForm } from "../../components/ad-form/AdForm";

export function CreateAd() {
  const route = useHistory();
  async function onSubmit({ name, description, price, tags, sell, image }) {
    await http.post("/ads", {
      name,
      description,
      sell,
      price,
      image,
      tags
    });
    route.push("/");
  }
  return (
    <div className={styles.wrapper}>
      <Header></Header>
      <Form.Label> !Crear tu propio anuncio!</Form.Label>
      <AdForm onSubmit={onSubmit} text="Crear"></AdForm>
    </div>
  );
}
