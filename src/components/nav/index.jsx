import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { logout } from "../../redux/auth/actions";

/***
 * referred https://getbootstrap.com/docs/5.1/components/navbar/
 ***/
export const NavBar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const auth = useSelector((state) => state.auth);

  const handleLogout = (event) => {
    event.preventDefault();
    dispatch(logout());
    history.push("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {`Hello, ${auth.session.name}`}
        </a>
        <button className="navbar-toggler" type="button">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* 
            // If we have more pages after login
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li> */}
          </ul>
          <form className="d-flex" onSubmit={handleLogout}>
            <button className="btn btn-outline-success" type="submit">
              Logout
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};
