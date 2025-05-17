"use client";

import { useSearchParams } from "next/navigation";
import { ChangeEvent, FormEvent, useRef, useState } from "react";

const WidgetPriceFilter = () => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(150);
  const [rangeValue, setRangeValue] = useState(0);
  const debounceTimeout = useRef<NodeJS.Timeout | null>(null);
  const searchParams = useSearchParams();

  const handleFilter = async (e: FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams);
    console.log(Array.from(params.entries()));
  }

  const handleChangePrice = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setRangeValue(value); 

    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }

    debounceTimeout.current = setTimeout(() => {
      const calculatedPrice = Math.round((value / 100) * maxPrice);
      setMinPrice(Math.floor(calculatedPrice));
    }, 500);
  };

  return (
    <div className="single-filter-box">
      <h5 className="title">Widget Price Filter</h5>
      <div className="filterbox-body">
        <form className="price-input-area" onSubmit={handleFilter}>
          <div className="half-input-wrapper">
            <div className="single">
              <label htmlFor="min">Min price</label>
              <input
                id="min"
                type="number"
                value={minPrice}
                onChange={(e) => setMinPrice(parseInt(e.target.value))}
              />
            </div>
            <div className="single">
              <label htmlFor="max">Max price</label>
              <input
                id="max"
                type="number"
                value={maxPrice}
                onChange={(e) => setMaxPrice(parseInt(e.target.value))}
              />
            </div>
          </div>
          <input
            type="range"
            className="range"
            min={0}
            max={100}
            value={rangeValue}
            onChange={handleChangePrice}
          />
          <div className="filter-value-min-max">
            <span>Price: ${minPrice || 0} — ${maxPrice || 0}</span>
            <button className="rts-btn btn-primary">Filter</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WidgetPriceFilter;