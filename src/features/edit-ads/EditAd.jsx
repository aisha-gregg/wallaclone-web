import React from "react";
import { Form } from "react-bootstrap";
import styles from "./Editad.module.css";
import { Header } from "../../components/header/Header";
import { AdForm } from "../../components/ad-form/AdForm";
import { useHistory } from "react-router-dom";

export function EditAd() {
  const route = useHistory();
  async function onSubmit({ name, description, price, tags, sell, image }) {
    await http.put(`/ads/${route.location.pathname}`, {
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

      <Form.Label> Edit your Ad!</Form.Label>
      <AdForm onSubmit={onSubmit} text="Edit"></AdForm>
    </div>
  );
}
