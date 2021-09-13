import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavBar } from "../../components/nav";

import { Items } from "./items";

export const Layout = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Router>
        <Switch>
          <Route path="/items">
            <Items />
          </Route>
          <Route path="/">
            <Items />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
