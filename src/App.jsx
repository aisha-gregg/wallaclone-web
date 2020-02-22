import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login } from "./features/login/Login";
import { Home } from "./features/home/Home";
import { CreateAd } from "./features/create-ads/CreateAd";
import { DetailAd } from "./features/detail-ad/DetailAd";
import { Page } from "./components/page/Page";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Page>
            <Login></Login>
          </Page>
        </Route>

        <Route path="/create-ad">
          <Page>
            <CreateAd></CreateAd>
          </Page>
        </Route>

        <Route path="/ads/:seoId">
          <Page>
            <DetailAd></DetailAd>
          </Page>
        </Route>

        <Route exact path="/">
          <Page>
            <Home />
          </Page>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
