import React from "react";

const ProductStatus = () => {
  return (
    <div className="single-filter-box">
      <h5 className="title">Product Status</h5>
      <div className="filterbox-body">
        <div className="category-wrapper">
          <div className="single-category">
            <input id="cat11" type="checkbox" />
            <label htmlFor="cat11">In Stock</label>
          </div>
          <div className="single-category">
            <input id="cat12" type="checkbox" />
            <label htmlFor="cat12">On Sale</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductStatus;
