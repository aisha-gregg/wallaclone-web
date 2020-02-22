import React, { useState } from "react";
import { Form, Dropdown, Button } from "react-bootstrap";

export function AdForm({
  text,
  onSubmit,
  values = {
    name: "",
    description: "",
    price: 0,
    type: "selling",
    tag: "",
    image: ""
  }
}) {
  const [adName, setAdName] = useState(values.name);
  const [adDescription, setAdDescription] = useState(values.description);
  const [adPrice, setAdPrice] = useState(values.price);
  const [type, setType] = useState(values.type);

  const [tag, setTag] = useState(values.tag);
  const [image, setImage] = useState(values.image);
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
        value={adName}
        id="name"
        type="text"
        placeholder="Título"
      ></Form.Control>

      <Form.Control
        onChange={event => setAdDescription(event.target.value)}
        value={adDescription}
        id="description"
        type="text"
        placeholder="Descripción"
      ></Form.Control>

      <Form.Control
        onChange={event => setAdPrice(event.target.value)}
        value={adPrice}
        id="price"
        type="number"
        placeholder="Precio"
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
        label="Se compra"
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
