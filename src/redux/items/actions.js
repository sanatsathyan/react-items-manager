import { store } from "../store";
import { ItemActionTypes } from "./action-types";

export const getItems = (payload) => {
  const userId = store.getState().auth.session.id;
  payload.id = userId;
  return {
    type: ItemActionTypes.SORT_FILTER_ITEMS,
    payload,
  };
};

export const addNewItem = (payload) => ({
  type: ItemActionTypes.ADD_ITEM,
  payload,
});

export const deleteItem = (payload) => ({
  type: ItemActionTypes.DELETE_ITEM,
  payload,
});
