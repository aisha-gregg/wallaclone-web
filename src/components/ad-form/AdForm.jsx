import React, { useState, useRef } from "react";
import { Form, Dropdown, Button, InputGroup } from "react-bootstrap";
import { AdBase } from "../ad-base/AdBase";
import styles from "./AdForm.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export function AdForm({
  text,
  onSubmit,
  values = {
    name: "",
    description: "",
    price: 0,
    type: "selling",
    tag: "",
    image: "",
    isSold: false
  }
}) {
  const [name, setName] = useState(values.name);
  const [description, setDescription] = useState(values.description);
  const [price, setPrice] = useState(values.price);
  const [type, setType] = useState(values.type);
  const [isSold, setIsSold] = useState(values.isSold);
  const [tag, setTag] = useState(values.tag);
  const [image, setImage] = useState(values.image);

  const imageInput = useRef(null);

  function getBase64(file, callback) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function() {
      callback(reader.result);
    };
  }

  function toggleInputFile() {
    const clickEvent = new MouseEvent("click", {
      view: window,
      bubbles: true,
      cancelable: false
    });
    imageInput.current.dispatchEvent(clickEvent);
  }

  const ad = {
    name,
    description,
    price,
    type,
    isSold,
    tag,
    image,
    date: values.date,
    user: values.user
  };

  return (
    <Form
      onSubmit={e => {
        e.preventDefault();
        onSubmit({
          name: name,
          description: description,
          price: price,
          tags: [tag],
          image,
          isSold,
          sell: type === "se compra" ? true : false
        });
      }}
    >
      <AdBase
        ad={ad}
        name={
          <Form.Control
            onChange={event => setName(event.target.value)}
            value={name}
            id="name"
            type="text"
            placeholder="Título"
          ></Form.Control>
        }
        description={
          <Form.Control
            onChange={event => setDescription(event.target.value)}
            value={description}
            as="textarea"
            id="description"
            placeholder="Descripción"
          ></Form.Control>
        }
        price={
          <Form.Control
            onChange={event => setPrice(event.target.value)}
            value={price}
            id="price"
            type="number"
            placeholder="Precio"
          ></Form.Control>
        }
        type={
          <>
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
          </>
        }
        onImageClick={toggleInputFile}
        tags={
          <Dropdown>
            <Dropdown.Toggle variant="secondary">{tag}</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item
                onSelect={() => setTag("lifestyle")}
                id="lifestyle"
              >
                Lifestyle
              </Dropdown.Item>
              <Dropdown.Item onSelect={() => setTag("mobile")} id="mobile">
                Mobile
              </Dropdown.Item>
              <Dropdown.Item onSelect={() => setTag("work")} id="work">
                Work
              </Dropdown.Item>
              <Dropdown.Item onSelect={() => setTag("personal")} id="personal">
                Personal
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        }
        isSold={
          <Form.Check
            type="checkbox"
            onClick={() => setIsSold(!isSold)}
            checked={isSold}
            label="Vendido"
          />
        }
        action={<Button type="submit">{text}</Button>}
      ></AdBase>
      <input
        aria-label="Foto del artículo"
        className={cx("image-input")}
        ref={imageInput}
        type="file"
        onChange={event => {
          getBase64(event.target.files[0], image => setImage(image));
        }}
      />
    </Form>
  );
}
