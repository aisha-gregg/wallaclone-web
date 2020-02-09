import React, { useState } from "react";
import { Form, Button, Dropdown } from "react-bootstrap";
import styles from "./createad.module.css";
import { http } from "./http";
import { useHistory } from "react-router-dom";
import { Header } from "./Header";

export function CreateAd() {
  const [adName, setAdName] = useState("");
  const [adDescription, setAdDescription] = useState("");
  const [adPrice, setAdPrice] = useState("");
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
      sell: false,
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
          id="Ad"
          type="text"
          placeholder="Ad Title"
        ></Form.Control>

        <Form.Control
          onChange={event => setAdDescription(event.target.value)}
          id="Description"
          type="text"
          placeholder="Ad Description"
        ></Form.Control>

        <Form.Control
          onChange={event => setAdPrice(event.target.value)}
          id="Ad"
          type="text"
          placeholder="Ad Price"
        ></Form.Control>
        <input
          type="file"
          onChange={event => {
            getBase64(event.target.files[0], image => setImage(image));
          }}
        />

        <Dropdown>
          <Dropdown.Toggle variant="outline-dark" id="dropdown">
            {tag}
          </Dropdown.Toggle>
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
          variant="outline-dark"
          onClick={() => onSubmit()}
        >
          Create Add
        </Button>
      </Form>
    </div>
  );
}
