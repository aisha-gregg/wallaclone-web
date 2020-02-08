import React from "react";
import styles from "./App.module.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login } from "./Login";
import { Home } from "./Home";

import { CreateAd } from "./CreateAd";

function App() {
  return (
    <div className={styles.app}>
      <Router>
        <Switch>
          <Route path="/login">
            <Login></Login>
          </Route>

          <Route path="/create-ad">
            <CreateAd></CreateAd>
          </Route>

          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
