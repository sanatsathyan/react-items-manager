import { UserActionTypes } from "./action-types";

const INITIAL_STATE = {
  users: [],
};

export const UserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.GET_USERS:
      state.users = action.payload;
      return state;
    case UserActionTypes.ADD_USER:
      state.users = [
        ...state.users,
        { ...action.payload, id: state.users.length + 1 },
      ];
      return state;
    default:
      return state;
  }
};
