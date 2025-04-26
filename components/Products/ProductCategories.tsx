import React from "react";

const ProductCategories = () => {
  return (
    <div className="single-filter-box">
      <h5 className="title">Product Categories</h5>
      <div className="filterbox-body">
        <div className="category-wrapper ">
          <div className="single-category">
            <input id="cat1" type="checkbox" />
            <label htmlFor="cat1">Beverages</label>
          </div>
          <div className="single-category">
            <input id="cat2" type="checkbox" />
            <label htmlFor="cat2">Biscuits & Snacks</label>
          </div>
          <div className="single-category">
            <input id="cat3" type="checkbox" />
            <label htmlFor="cat3">Breads & Bakery</label>
          </div>
          <div className="single-category">
            <input id="cat4" type="checkbox" />
            <label htmlFor="cat4">Breakfast & Dairy</label>
          </div>
          <div className="single-category">
            <input id="cat7" type="checkbox" />
            <label htmlFor="cat7">Grocery & Staples</label>
          </div>
          <div className="single-category">
            <input id="cat6" type="checkbox" />
            <label htmlFor="cat6">Fruits & Vegetables</label>
          </div>
          <div className="single-category">
            <input id="cat8" type="checkbox" />
            <label htmlFor="cat8">Household Needs</label>
          </div>
          <div className="single-category">
            <input id="cat10" type="checkbox" />
            <label htmlFor="cat10">Meats & Seafood</label>
          </div>
          <div className="single-category">
            <input id="cat80" type="checkbox" />
            <label htmlFor="cat80">Grocery & Staples</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCategories;
