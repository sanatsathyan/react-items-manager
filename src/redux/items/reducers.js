import { ItemActionTypes } from "./action-types";

const INITIAL_STATE = {
  sort: "itemName",
  sortOrder: "asc",
  searchText: "",
  items: [],
  filteredItems: [],
  pageSize: 5,
  pageNumber: 1,
};

export const ItemReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ItemActionTypes.SORT_FILTER_ITEMS:
      if (action.payload.sort) {
        if (state.sort === action.payload.sort) {
          state.sortOrder = state.sortOrder === "asc" ? "desc" : "asc";
        } else {
          state.sortOrder = "asc";
        }
        state.sort = action.payload.sort;
      }
      state.searchText =
        action.payload.searchText == null
          ? state.searchText
          : action.payload.searchText;
      state.pageNumber =
        action.payload.pageNumber == null
          ? state.pageNumber
          : action.payload.pageNumber;

      const items = getFilteredItems(state, action.payload.id);
      return { ...state, sort: state.sort, filteredItems: items };
    case ItemActionTypes.ADD_ITEM:
      state = {
        ...state,
        searchText: "",
        items: [
          ...state.items,
          { ...action.payload, id: state.items.length + 1 },
        ],
      };
      state.filteredItems = getFilteredItems(state, action.payload.createdBy);
      return state;
    case ItemActionTypes.DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
        filteredItems: state.filteredItems.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

const getFilteredItems = (state, userId) => {
  return state.items
    .filter(
      (r) =>
        r.createdBy === userId &&
        (r.itemName
          .toLowerCase()
          .includes(state.searchText ? state.searchText.toLowerCase() : "") ||
          r.itemPrice
            .toString()
            .includes(state.searchText ? state.searchText : ""))
    )
    .sort(function (a, b) {
      if (state.sortOrder === "desc") {
        if (state.sort === "itemPrice")
          return parseFloat(b[state.sort]) > parseFloat(a[state.sort]) ? 1 : -1;
        else
          return b[state.sort].toLowerCase() > a[state.sort].toLowerCase()
            ? 1
            : -1;
      } else {
        if (state.sort === "itemPrice")
          return parseFloat(a[state.sort]) > parseFloat(b[state.sort]) ? 1 : -1;
        else
          return a[state.sort].toLowerCase() > b[state.sort].toLowerCase()
            ? 1
            : -1;
      }
    })
    .slice(
      (state.pageNumber - 1) * state.pageSize,
      state.pageNumber * state.pageSize
    );
};
