import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { getUsers } from "../redux/users/actions";
import { Login, SignUp } from "./auth";

import { Layout } from "./layout";

export const AppTest = () => {
  const dispatch = useDispatch();
  const auth = localStorage.getItem("auth");

  useEffect(() => {
    initializeMockData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const initializeMockData = () => {
    dispatch(getUsers());
  };

  return (
    <div>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route
            path="/"
            render={(props) => (auth ? <Layout /> : <Redirect to="/login" />)}
          />
        </Switch>
      </Router>
    </div>
  );
};
