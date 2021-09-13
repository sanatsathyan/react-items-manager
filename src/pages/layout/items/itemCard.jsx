import React from "react";

export const ItemCard = ({ item }) => {
  return (
    <div className="card col-12 item-card my-2">
      <div className="card-body">
        <div className="d-flex bd-highlight">
          <div className="flex-grow-1 bd-highlight">{item.itemName}</div>
          <div className="bd-highlight">Rs. {item.itemPrice}</div>
        </div>
      </div>
    </div>
  );
};
