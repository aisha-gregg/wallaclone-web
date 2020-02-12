import React, { useState } from "react";
import { Form, Button, Dropdown } from "react-bootstrap";
import styles from "./createad.module.css";
import { http } from "../../core/http";
import { useHistory } from "react-router-dom";
import { Header } from "../../components/header/Header";

export function CreateAd() {
  const [adName, setAdName] = useState("");
  const [adDescription, setAdDescription] = useState("");
  const [adPrice, setAdPrice] = useState("");
  const [type, setType] = useState("");

  const [tag, setTag] = useState("");
  const [image, setImage] = useState("");

  const route = useHistory();

  function getBase64(file, callback) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function() {
      callback(reader.result);
    };
  }

  async function onSubmit() {
    await http.post("/ads", {
      name: adName,
      description: adDescription,
      sell: type === "selling" ? true : false,
      price: adPrice,
      image,
      tags: [tag]
    });
    route.push("/");
  }

  return (
    <div className={styles.wrapper}>
      <Header></Header>
      <Form.Label> Create your own Ad!</Form.Label>

      <Form className={styles.form}>
        <Form.Control
          onChange={event => setAdName(event.target.value)}
          id="name"
          type="text"
          placeholder="Title"
        ></Form.Control>

        <Form.Control
          onChange={event => setAdDescription(event.target.value)}
          id="description"
          type="text"
          placeholder="Description"
        ></Form.Control>

        <Form.Control
          onChange={event => setAdPrice(event.target.value)}
          id="price"
          type="number"
          placeholder="Price"
        ></Form.Control>

        <Form.Check
          onChange={event => {
            setType(event.target.value);
          }}
          custom
          checked={type === "buying"}
          value="buying"
          type="radio"
          id="buying"
          label="Buying"
        ></Form.Check>
        <Form.Check
          onChange={event => {
            setType(event.target.value);
          }}
          checked={type === "selling"}
          custom
          value="selling"
          type="radio"
          id="selling"
          label="Selling"
        ></Form.Check>

        <input
          type="file"
          onChange={event => {
            getBase64(event.target.files[0], image => setImage(image));
          }}
        />

        <Dropdown className={styles.dropdown}>
          <Dropdown.Toggle variant="secondary">{tag}</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item
              onSelect={event => setTag("lifestyle")}
              id="lifestyle"
            >
              Lifestyle
            </Dropdown.Item>
            <Dropdown.Item onSelect={event => setTag("mobile")} id="mobile">
              Mobile
            </Dropdown.Item>
            <Dropdown.Item onSelect={event => setTag("work")} id="work">
              Work
            </Dropdown.Item>
            <Dropdown.Item onSelect={event => setTag("personal")} id="personal">
              Personal
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Button
          className={styles.button}
          id="submit"
          variant="secondary"
          onClick={() => onSubmit()}
        >
          Create Add
        </Button>
      </Form>
    </div>
  );
}
