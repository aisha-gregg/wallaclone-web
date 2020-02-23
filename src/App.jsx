import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login } from "./features/login/Login";
import { Home } from "./features/home/Home";
import { CreateAd } from "./features/create-ads/CreateAd";
import { DetailAd } from "./features/detail-ad/DetailAd";
import { Page } from "./components/page/Page";
import { UserContext } from "./core/UserContext";
import { PersonalArea } from "./features/personal-area/PersonalArea";
import { User } from "./features/user/User";

export function App() {
  const [user, setUser] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("token") !== null;
    setIsLoggedIn(isLoggedIn);
    const id = localStorage.getItem("id");
    setUser({ id });
  }, []);

  const changeUser = user => {
    setUser(user);
  };

  return (
    <UserContext.Provider
      value={{ user, isLoggedIn, setIsLoggedIn, setUser: changeUser }}
    >
      <Router>
        <Switch>
          <Route path="/login">
            <Login></Login>
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

          <Route path="/users/:id">
            <Page>
              <User></User>
            </Page>
          </Route>

          <Route path="/personal-area">
            <Page>
              <PersonalArea></PersonalArea>
            </Page>
          </Route>

          <Route exact path="/">
            <Page>
              <Home />
            </Page>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}
