import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getItems } from "../../../redux/items/actions";
import { AddItem } from "./addItem";
import { ItemsCardLayout } from "./itemsCardLayout";
import { ItemsTableLayout } from "./itemsTableLayout";

export const Items = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getItems({
        pageNumber: 1,
        searchText: "",
        sort: "itemName",
        sortOrder: "asc",
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <AddItem />
          <hr className="mt-5" />
          <ItemsCardLayout />
        </div>
        <div className="col-6">
          <ItemsTableLayout />
        </div>
      </div>
    </div>
  );
};
