import { isJson } from "../../helpers/util";
import { AuthActionTypes } from "./action-types";

const INITIAL_STATE =
  localStorage.getItem("auth") && isJson(localStorage.getItem("auth"))
    ? JSON.parse(localStorage.getItem("auth"))
    : {
        isLoggedIn: false,
        session: {},
      };

export const AuthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthActionTypes.LOGIN:
      if (action.payload)
        return {
          ...state,
          isLoggedIn: true,
          session: action.payload,
        };
      else return { ...state, isLoggedIn: false, session: {} };
    case AuthActionTypes.LOGOUT:
      return { ...state, isLoggedIn: false, session: {} };
    default:
      return state;
  }
};
