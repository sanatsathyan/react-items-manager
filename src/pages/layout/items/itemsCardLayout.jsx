import React from "react";
import { useSelector } from "react-redux";
import { ItemCard } from "./itemCard";

import "./style.css";

export const ItemsCardLayout = () => {
  const items = useSelector((state) => state.item.items);
  return (
    <>
      <h3 className="mb-3">
        Total Items {items && items.length > 0 && `(${items.length})`}
      </h3>
      <div className="item-card-container">
        {items &&
          items.length > 0 &&
          items.map((item, key) => <ItemCard key={key} item={item} />)}
        {(!items || items.length === 0) && <span>No items added!</span>}
      </div>
    </>
  );
};
