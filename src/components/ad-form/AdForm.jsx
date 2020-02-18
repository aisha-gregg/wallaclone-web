import React, { useState } from "react";
import { Form, Dropdown, Button } from "react-bootstrap";
import styles from "./AdForm.module.css";

export function AdForm({ text, onSubmit }) {
  const [adName, setAdName] = useState("");
  const [adDescription, setAdDescription] = useState("");
  const [adPrice, setAdPrice] = useState("");
  const [type, setType] = useState("");

  const [tag, setTag] = useState("");
  const [image, setImage] = useState("");

  function getBase64(file, callback) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function() {
      callback(reader.result);
    };
  }

  return (
    <Form
      onSubmit={e => {
        console.log("hell");
        e.preventDefault();
        onSubmit({
          name: adName,
          description: adDescription,
          price: adPrice,
          tags: [tag],
          image,
          sell: type === "se compra" ? true : false
        });
      }}
    >
      <Form.Control
        onChange={event => setAdName(event.target.value)}
        id="name"
        type="text"
        placeholder="Título"
      ></Form.Control>

      <Form.Control
        onChange={event => setAdDescription(event.target.value)}
        id="description"
        type="text"
        placeholder="Descripción"
      ></Form.Control>

      <Form.Control
        onChange={event => setAdPrice(event.target.value)}
        id="price"
        type="number"
        placeholder="Precio"
      ></Form.Control>

      <Form.Check
        onChange={event => {
          setType(event.target.value);
        }}
        custom
        checked={type === "se compra"}
        value="buying"
        type="radio"
        id="buying"
        label="Se compra"
      ></Form.Check>
      <Form.Check
        onChange={event => {
          setType(event.target.value);
        }}
        checked={type === "se vende"}
        custom
        value="selling"
        type="radio"
        id="selling"
        label="Se vende"
      ></Form.Check>

      <input
        type="file"
        onChange={event => {
          getBase64(event.target.files[0], image => setImage(image));
        }}
      />

      <Dropdown>
        <Dropdown.Toggle variant="secondary">{tag}</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onSelect={event => setTag("lifestyle")} id="lifestyle">
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

      <Button type="submit">{text}</Button>
    </Form>
  );
}
