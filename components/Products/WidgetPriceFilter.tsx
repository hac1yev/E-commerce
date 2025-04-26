import React from "react";

const WidgetPriceFilter = () => {
  return (
    <div className="single-filter-box">
      <h5 className="title">Widget Price Filter</h5>
      <div className="filterbox-body">
        <form action="#" className="price-input-area">
          <div className="half-input-wrapper">
            <div className="single">
              <label htmlFor="min">Min price</label>
              <input id="min" type="text" value="0" />
            </div>
            <div className="single">
              <label htmlFor="max">Max price</label>
              <input id="max" type="text" value="150" />
            </div>
          </div>
          <input type="range" className="range" />
          <div className="filter-value-min-max">
            <span>Price: $10 — $90</span>
            <button className="rts-btn btn-primary">Filter</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WidgetPriceFilter;
