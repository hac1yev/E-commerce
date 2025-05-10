import React, { useState } from "react";
import RatingStar from "../RatingStar/RatingStar";
import StaticRatingStar from "../RatingStar/StaticRatingStar";

const ProductDetailTabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleChangeTab = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="product-discription-tab-shop mt--50">
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        {["Product Details", "Customer Reviews"].map((tab, index) => (
          <li
            className="nav-item"
            key={index}
            onClick={handleChangeTab.bind(null, `tab${index + 1}`)}
          >
            <button className={activeTab === `tab${index + 1}` ? "nav-link active" : "nav-link"}>{tab}</button>
          </li>
        ))}
      </ul>
      <div className="tab-content" id="myTabContent">
        {activeTab === "tab1" && (
          <div className="single-tab-content-shop-details">
            <p className="disc">
              Uninhibited carnally hired played in whimpered dear gorilla koala
              depending and much yikes off far quetzal goodness and from for
              grimaced goodness unaccountably and meadowlark near unblushingly
              crucial scallop tightly neurotic hungrily some and dear furiously
              this apart.
            </p>
            <div className="table-responsive table-shop-details-pd">
              <table className="table">
                <thead>
                  <tr>
                    <th>Kitchen Fade Defy</th>
                    <th>5KG</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>PRAN Full Cream Milk Powder</td>
                    <td>3KG</td>
                  </tr>
                  <tr>
                    <td>Net weight</td>
                    <td>8KG</td>
                  </tr>
                  <tr>
                    <td>Brand</td>
                    <td>Reactheme</td>
                  </tr>
                  <tr>
                    <td>Item code</td>
                    <td>4000000005</td>
                  </tr>
                  <tr>
                    <td>Product type</td>
                    <td>Powder milk</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="cansellation mt--20">
              <span> Return/cancellation:</span> No change will be applicable
              which are already delivered to customer. If product quality or
              quantity problem found then customer can return/cancel their order
              on delivery time with presence of delivery person.
            </p>
            <p className="note">
              <span>Note:</span> Product delivery duration may vary due to
              product availability in stock.
            </p>
          </div>
        )}
        {activeTab === "tab2" && (
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
              <div className="submit-review-area">
                <form action="#" className="submit-review-area">
                  <h5 className="title">Submit Your Review</h5>
                  <div className="your-rating">
                    <span>Rating Product:</span>
                    <RatingStar />
                  </div>
                  <div className="half-input-wrapper">
                    <div className="half-input">
                      <input type="text" placeholder="Your Name*" />
                    </div>
                    <div className="half-input">
                      <input type="text" placeholder="Your Email *" />
                    </div>
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
        )}
      </div>
    </div>
  );
};

export default ProductDetailTabs;
