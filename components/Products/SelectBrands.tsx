import React from "react";

const SelectBrands = () => {
  return (
    <div className="single-filter-box">
      <h5 className="title">Select Brands</h5>
      <div className="filterbox-body">
        <div className="category-wrapper">
          <div className="single-category">
            <input id="cat13" type="checkbox" />
            <label htmlFor="cat13">Frito Lay</label>
          </div>
          <div className="single-category">
            <input id="cat14" type="checkbox" />
            <label htmlFor="cat14">Nespresso</label>
          </div>
          <div className="single-category">
            <input id="cat15" type="checkbox" />
            <label htmlFor="cat15">Oreo</label>
          </div>
          <div className="single-category">
            <input id="cat16" type="checkbox" />
            <label htmlFor="cat16">Quaker</label>
          </div>
          <div className="single-category">
            <input id="cat17" type="checkbox" />
            <label htmlFor="cat17">{`Welch's`}</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectBrands;
