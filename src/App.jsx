import React from "react";
import styles from "./App.module.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login } from "./Login";
import { Home } from "./Home";

function App() {
  return (
    <div className={styles.app}>
      <Router>
        <Switch>
          <Route path="/login">
            <Login></Login>
          </Route>

          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        <Route path="/create-add">
          <createAd></createAd>
        </Route>
      </Router>
    </div>
  );
}

export default App;