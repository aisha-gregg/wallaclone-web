import React, { useState } from "react";
import { Form } from "react-bootstrap";

//const [display, setDisplay] = useState("false");
//if (display === false) setDisplay === true;

export function dropDownFilter() {
  //const [adName, setAdName] = useState("");
  //const [adPrice, setAdPrice] = useState("");
  //const [tag, setTag] = useState("");
  return (
    <Form>
      <Form.Label> Find Ads</Form.Label>

      <Form.Control
        // onChange={event => setAdName(event.target.value)}
        id="name"
        type="text"
        placeholder="Title"
      ></Form.Control>

      <Form.Control
        // onChange={event => setAdPrice(event.target.value)}
        id="price"
        type="number"
        placeholder="Price"
      ></Form.Control>
    </Form>
  );
}
