import { UserActionTypes } from "./action-types";
import Users from "../../mock/users.json";

export const getUsers = () => ({
  type: UserActionTypes.GET_USERS,
  payload: Users,
});

export const addUser = (payload) => ({
  type: UserActionTypes.ADD_USER,
  payload,
});
