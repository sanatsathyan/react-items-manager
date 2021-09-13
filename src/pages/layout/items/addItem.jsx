import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewItem } from "../../../redux/items/actions";

export const AddItem = () => {
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const nameControl = useRef(null);

  const userId = useSelector((state) => state.auth.session.id);

  const dispatch = useDispatch();

  const addItem = (event) => {
    event.preventDefault();
    if (itemName && itemPrice) {
      const payload = {
        itemName,
        itemPrice,
        createdBy: userId,
      };
      dispatch(addNewItem(payload));
      setItemName("");
      setItemPrice("");
      nameControl.current.focus();
    }
  };

  return (
    <>
      <form className="col-lg-12" onSubmit={addItem} autoComplete="off">
        <h3 className="mb-3">Add Item</h3>
        <div className="form-floating mb-3">
          <input
            ref={nameControl}
            type="text"
            className="form-control"
            id="floatingInput"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            required
          />
          <label>Item Name</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="number"
            className="form-control"
            id="floatingPassword"
            value={itemPrice}
            onChange={(e) => setItemPrice(e.target.value)}
            required
          />
          <label>Item Price (Rs.)</label>
        </div>
        <button type="submit" className="btn btn-primary w-100 p-3">
          Add
        </button>
      </form>
    </>
  );
};
