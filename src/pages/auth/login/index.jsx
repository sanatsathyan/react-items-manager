import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { login } from "../../../redux/auth/actions";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const handleLogin = (event) => {
    event.preventDefault();
    dispatch(login({ email, password }));
  };

  useEffect(() => {
    if (email && password) {
      if (email && password && auth.isLoggedIn) {
        localStorage.setItem("auth", JSON.stringify(auth));
        history.push("/");
      } else {
        localStorage.removeItem("auth");
        setPassword("");
        alert("Invalid email or password");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth]);

  return (
    <form
      className="col-lg-4 mx-auto mt-5"
      onSubmit={handleLogin}
      autoComplete="off"
    >
      <div className="form-floating mb-3">
        <input
          type="email"
          className="form-control"
          id="floatingInput"
          placeholder="name@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Email address</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="password"
          className="form-control"
          id="floatingPassword"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <label>Password</label>
      </div>
      <button type="submit" className="btn btn-primary w-100 p-3">
        Login
      </button>
      <hr />
      <button
        type="button"
        onClick={() => history.push("/signup")}
        className="btn btn-primary w-100 p-3"
      >
        New User?
      </button>
    </form>
  );
};
