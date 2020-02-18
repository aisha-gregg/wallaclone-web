import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login } from "./features/login/Login";
import { Home } from "./features/home/Home";
import { CreateAd } from "./features/create-ads/CreateAd";
import { DetailAd } from "./features/detail-ad/DetailAd";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login></Login>
        </Route>

        <Route path="/create-ad">
          <CreateAd></CreateAd>
        </Route>

        <Route path="/ads/:seoId">
          <DetailAd></DetailAd>
        </Route>

        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
