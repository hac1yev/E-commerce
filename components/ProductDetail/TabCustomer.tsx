import RatingStar from "../RatingStar/RatingStar";
import StaticRatingStar from "../RatingStar/StaticRatingStar";

const TabCustomer = () => {
  return (
    <div className="single-tab-content-shop-details">
      <div className="product-details-review-product-style">
        <div className="average-stars-area-left">
          <div className="top-stars-wrapper">
            <h4 className="review">5.0</h4>
            <div className="rating-disc">
              <span>Average Rating</span>
              <div className="stars">
                <StaticRatingStar filledStars={4} />
                <span>(1 Reviews & 0 Ratings)</span>
              </div>
            </div>
          </div>
          <div className="average-stars-area">
            <h4 className="average">66.7%</h4>
            <span>Recommended (2 of 3)</span>
          </div>
          <div className="review-charts-details">
            <div className="single-review">
              <div className="stars">
                <StaticRatingStar filledStars={5} />
                <span className="pac">100%</span>
              </div>
              <div className="single-progress-area-incard">
                <div className="progress">
                  <div
                    className="progress-bar wow fadeInLeft"
                    role="progressbar"
                  ></div>
                </div>
              </div>
            </div>
            <div className="single-review">
              <div className="stars">
                <StaticRatingStar filledStars={4} />
                <span className="pac">80%</span>
              </div>
              <div className="single-progress-area-incard">
                <div className="progress">
                  <div
                    className="progress-bar wow fadeInLeft"
                    role="progressbar"
                  ></div>
                </div>
              </div>
            </div>
            <div className="single-review">
              <div className="stars">
                <StaticRatingStar filledStars={3} />
                <span className="pac">60%</span>
              </div>
              <div className="single-progress-area-incard">
                <div className="progress">
                  <div
                    className="progress-bar wow fadeInLeft"
                    role="progressbar"
                  ></div>
                </div>
              </div>
            </div>
            <div className="single-review">
              <div className="stars">
                <StaticRatingStar filledStars={2} />
                <span className="pac">40%</span>
              </div>
              <div className="single-progress-area-incard">
                <div className="progress">
                  <div
                    className="progress-bar wow fadeInLeft"
                    role="progressbar"
                  ></div>
                </div>
              </div>
            </div>
            <div className="single-review">
              <div className="stars">
                <StaticRatingStar filledStars={1} />
                <span className="pac">20%</span>
              </div>
              <div className="single-progress-area-incard">
                <div className="progress">
                  <div
                    className="progress-bar wow fadeInLeft"
                    role="progressbar"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="submit-review-area" style={{ width: '100%' }}>
          <form action="#" className="submit-review-area">
            <h5 className="title">Submit Your Review</h5>
            <div className="your-rating">
              <span>Rating Product:</span>
              <RatingStar />
            </div>
            <textarea
              name="#"
              id="#"
              placeholder="Write Your Review"
              required
            ></textarea>
            <button className="rts-btn btn-primary">SUBMIT REVIEW</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TabCustomer;
