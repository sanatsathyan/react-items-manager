import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { addUser } from "../../../redux/users/actions";

export const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const history = useHistory();
  const dispatch = useDispatch();

  const handleSignUp = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Password and Confirm password do not match");
      return;
    }
    const payload = {
      name,
      email,
      password,
    };
    dispatch(addUser(payload));
    alert("User added! Please login.");
    history.push({
      pathname: "/login",
      state: {
        email: "tes@test.com",
      },
    });
  };

  return (
    <form
      className="col-lg-4 mx-auto mt-5"
      onSubmit={handleSignUp}
      autoComplete="off"
    >
      <div className="form-floating mb-3">
        <input
          type="name"
          className="form-control"
          id="floatingName"
          placeholder="John Doe"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Name</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="email"
          className="form-control"
          id="floatingInput"
          placeholder="name@example.com"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Email address</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="password"
          className="form-control"
          id="floatingPassword"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>Password</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="password"
          className="form-control"
          id="floatingConfirmPassword"
          placeholder="Password"
          required
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <label>Confirm Password</label>
      </div>
      <button type="submit" className="btn btn-primary w-100 p-3">
        Signup
      </button>
      <hr />
      <button
        type="button"
        onClick={() => history.push("/login")}
        className="btn btn-primary w-100 p-3"
      >
        Already have an account?
      </button>
    </form>
  );
};
