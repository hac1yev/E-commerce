import React from "react";

const ProductsFilterSelect = () => {
  return (
    <div className="filter-select-area">
      <div className="top-filter">
        <span>Showing 1–20 of 57 results</span>
      </div>
      <div className="nice-select-area-wrapper-and-button">
        <div className="nice-select-wrapper-1">
          <div className="single-select">
            <select>
              <option data-display="All Categories">All Categories</option>
              <option value={1}>Some option</option>
              <option value={2}>Another option</option>
              <option value={3} disabled>
                A disabled option
              </option>
              <option value={4}>Potato</option>
            </select>
          </div>
          <div className="single-select">
            <select>
              <option data-display="All Brands">All Brands</option>
              <option value={1}>Some option</option>
              <option value="2">Another option</option>
              <option value="3" disabled>
                A disabled option
              </option>
              <option value="4">Potato</option>
            </select>
          </div>
          <div className="single-select">
            <select>
              <option data-display="All Size">All Size </option>
              <option value={1}>Some option</option>
              <option value="2">Another option</option>
              <option value="3" disabled>
                A disabled option
              </option>
              <option value="4">Potato</option>
            </select>
          </div>
          <div className="single-select">
            <select>
              <option data-display="All Weight">All Weight</option>
              <option value={1}>Some option</option>
              <option value="2">Another option</option>
              <option value="3" disabled>
                A disabled option
              </option>
              <option value="4">Potato</option>
            </select>
          </div>
        </div>
        <div className="button-area">
          <button className="rts-btn">Filter</button>
          <button className="rts-btn">Reset Filter</button>
        </div>
      </div>
    </div>
  );
};

export default ProductsFilterSelect;
