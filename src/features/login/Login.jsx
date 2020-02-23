import React, { useState, useContext } from "react";
import styles from "./login.module.css";
import { Button, Form } from "react-bootstrap";
import { http } from "../../core/http";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../core/UserContext";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const route = useHistory();
  const { setUser, setIsLoggedIn } = useContext(UserContext);

  async function submit() {
    const response = await http.put("/users", {
      email,
      password
    });
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("id", response.data.id);
    setUser({ id: response.data.id });
    setIsLoggedIn(true);
    route.push("/");
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.login}>
        <Form>
          <Form.Control
            onChange={event => setEmail(event.target.value)}
            id="email"
            type="email"
            placeholder="Email"
          />

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
            variant="warning"
          >
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
}
