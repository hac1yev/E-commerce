import React from "react";

const RatingStar = () => {
  return (
    <div className="rating-star-container">
      <div className="container__items">
        <input type="radio" name="stars" id="st5" />
        <label htmlFor="st5">
          <div className="star-stroke">
            <div className="star-fill"></div>
          </div>
        </label>
        <input type="radio" name="stars" id="st4" />
        <label htmlFor="st4">
          <div className="star-stroke">
            <div className="star-fill"></div>
          </div>
        </label>
        <input type="radio" name="stars" id="st3" />
        <label htmlFor="st3">
          <div className="star-stroke">
            <div className="star-fill"></div>
          </div>
        </label>
        <input type="radio" name="stars" id="st2" />
        <label htmlFor="st2">
          <div className="star-stroke">
            <div className="star-fill"></div>
          </div>
        </label>
        <input type="radio" name="stars" id="st1" />
        <label htmlFor="st1">
          <div className="star-stroke">
            <div className="star-fill"></div>
          </div>
        </label>
      </div>
    </div>
  );
};

export default RatingStar;