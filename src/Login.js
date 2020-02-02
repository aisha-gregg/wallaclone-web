import React, { useState } from "react";
import styles from "./App.module.css";
import { Button, Form } from "react-bootstrap";
import { http } from "./http";
import { useHistory } from "react-router-dom";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const route = useHistory();

  async function submit() {
    await http.put("/users", {
      email,
      password
    });
    route.push("/");
  }
  return (
    <div className={styles.login}>
      <Form>
        <Form.Label>Login to Wallaclone</Form.Label>
        <Form.Control
          onChange={event => setEmail(event.target.value)}
          id="email"
          type="email"
          placeholder="Email"
        />
        <Form.Label></Form.Label>
        <Form.Control
          onChange={event => setPassword(event.target.value)}
          id="password"
          type="password"
          placeholder="Password"
        />

        <Button
          className={styles.button}
          onClick={() => submit()}
          id="submit"
          variant="outline-dark"
        >
          Login
        </Button>
      </Form>
    </div>
  );
}
