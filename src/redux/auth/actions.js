import { store } from "../store";
import { AuthActionTypes } from "./action-types";

export const login = (payload) => {
  const users = store.getState().user.users;
  const loggedInUser = users.find(
    (r) =>
      r.email.toLowerCase() === payload.email.toLowerCase() &&
      r.password === payload.password
  );
  return {
    type: AuthActionTypes.LOGIN,
    payload: loggedInUser,
  };
};

export const logout = () => {
  localStorage.removeItem("auth");
  return {
    type: AuthActionTypes.LOGOUT,
  };
};
