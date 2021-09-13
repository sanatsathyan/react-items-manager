import React, { useEffect, useState } from "react";
import { CSVLink } from "react-csv";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Pagination } from "../../../components/pagination";
import { deleteItem, getItems } from "../../../redux/items/actions";
import "./style.css";

export const ItemsTableLayout = () => {
  const userId = useSelector((state) => state.auth.session.id);
  const userName = useSelector((state) => state.auth.session.name);

  const state = useSelector((state) => state.item);
  const allItems = state.items.filter((item) => item.createdBy === userId);
  const items = state.filteredItems;
  const stateSearchText = state.searchText;
  const pageNumber = state.pageNumber;
  const pageSize = state.pageSize;
  const dispatch = useDispatch();

  const [searchText, setSearchText] = useState(stateSearchText);

  const handleSort = (sort) => {
    const payload = { sort };
    dispatch(getItems(payload));
  };

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchText(event.target.value);
    const payload = { searchText: event.target.value };
    dispatch(getItems(payload));
  };

  useEffect(() => {
    setSearchText(stateSearchText);
  }, [stateSearchText]);

  const handleDelete = (event, item) => {
    event.preventDefault();
    dispatch(deleteItem(item));
  };

  const handlePageChange = (pageNumber) => {
    const payload = { pageNumber };
    dispatch(getItems(payload));
  };

  return (
    <React.Fragment>
      <h3 className="mb-3"> Table View</h3>
      <input
        type="search"
        className="form-control mb-2"
        value={searchText}
        onChange={handleSearch}
        placeholder="Search by item name or price..."
      ></input>
      {items && items.length > 0 ? (
        <React.Fragment>
          <CSVLink
            data={allItems}
            filename={`Items_Created_by_${userName}.csv`}
          >
            Download CSV
          </CSVLink>
          <table id="items" className="table">
            <thead>
              <tr>
                <th style={{ width: "15%" }}>Sno</th>
                <th
                  style={{ width: "55%", cursor: "pointer" }}
                  onClick={() => handleSort("itemName")}
                >
                  Item Name{" "}
                  <i
                    className={
                      (state.sort === "itemName" &&
                        (state.sortOrder === "asc"
                          ? "sort-asc"
                          : "sort-desc")) ||
                      ""
                    }
                  ></i>
                </th>
                <th
                  style={{ width: "30%", cursor: "pointer" }}
                  onClick={() => handleSort("itemPrice")}
                >
                  Item Price{" "}
                  <i
                    className={
                      (state.sort === "itemPrice" &&
                        (state.sortOrder === "asc"
                          ? "sort-asc"
                          : "sort-desc")) ||
                      ""
                    }
                  ></i>
                </th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, key) => (
                <tr key={key}>
                  <td>{(pageNumber - 1) * pageSize + (key + 1)}</td>
                  <td>{item.itemName}</td>
                  <td>Rs. {item.itemPrice}</td>
                  <td>
                    <a href="/#" onClick={(event) => handleDelete(event, item)}>
                      Delete
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination
            totalPages={Math.ceil(allItems.length / pageSize)}
            currentPage={pageNumber}
            onPageChange={handlePageChange}
          />
        </React.Fragment>
      ) : (
        <span>No items added!</span>
      )}
    </React.Fragment>
  );
};
