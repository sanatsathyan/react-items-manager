import { combineReducers, createStore } from "redux";
import { AuthReducer } from "./auth/reducers";
import { ItemReducer } from "./items/reducers";
import { UserReducer } from "./users/reducers";

const rootReducer = combineReducers({
  user: UserReducer,
  auth: AuthReducer,
  item: ItemReducer,
});

export const store = createStore(rootReducer);
