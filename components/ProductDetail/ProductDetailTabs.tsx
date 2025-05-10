import React from "react";

const ProductDetailTabs = () => {
  return (
    <div className="product-discription-tab-shop mt--50">
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#home-tab-pane"
            type="button"
            role="tab"
            aria-controls="home-tab-pane"
            aria-selected="true"
          >
            Product Details
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#profile-tab-pane"
            type="button"
            role="tab"
            aria-controls="profile-tab-pane"
            aria-selected="false"
          >
            Additional Information
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="profile-tabt"
            data-bs-toggle="tab"
            data-bs-target="#profile-tab-panes"
            type="button"
            role="tab"
            aria-controls="profile-tab-panes"
            aria-selected="false"
          >
            Customer Reviews (01)
          </button>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade   show active"
          id="home-tab-pane"
          role="tabpanel"
          aria-labelledby="home-tab"
          tabIndex={0}
        >
          <div className="single-tab-content-shop-details">
            <p className="disc">
              Uninhibited carnally hired played in whimpered dear gorilla koala
              depending and much yikes off far quetzal goodness and from for
              grimaced goodness unaccountably and meadowlark near unblushingly
              crucial scallop tightly neurotic hungrily some and dear furiously
              this apart.
            </p>
            <div className="details-row-2">
              <div className="left-area">
                {/* <img src="assets/images/shop/06.jpg" alt="shop" /> */}
              </div>
              <div className="right">
                <h4 className="title">
                  All Natural Italian-Style Chicken Meatballs
                </h4>
                <p className="mb--25">
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas Vestibulum tortor quam,
                  feugiat vitae, ultricies eget, tempor sit amet, ante. ibero
                  sit amet quam egestas semperAenean ultricies mi vitae est
                  Mauris placerat eleifend.
                </p>
                <ul className="bottom-ul">
                  <li>Elementum sociis rhoncus aptent auctor urna justo</li>
                  <li>
                    Habitasse venenatis gravida nisl, sollicitudin posuere
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="profile-tab-pane"
          role="tabpanel"
          aria-labelledby="profile-tab"
          tabIndex={0}
        >
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
        </div>
        <div
          className="tab-pane fade"
          id="profile-tab-panes"
          role="tabpanel"
          aria-labelledby="profile-tabt"
          tabIndex={0}
        >
          <div className="single-tab-content-shop-details">
            <div className="product-details-review-product-style">
              <div className="average-stars-area-left">
                <div className="top-stars-wrapper">
                  <h4 className="review">5.0</h4>
                  <div className="rating-disc">
                    <span>Average Rating</span>
                    <div className="stars">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
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
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <div className="single-progress-area-incard">
                      <div className="progress">
                        <div
                          className="progress-bar wow fadeInLeft"
                          role="progressbar"
                          style={{ width: "80%" }}
                        ></div>
                      </div>
                    </div>
                    <span className="pac">100%</span>
                  </div>
                  <div className="single-review">
                    <div className="stars">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                    </div>
                    <div className="single-progress-area-incard">
                      <div className="progress">
                        <div
                          className="progress-bar wow fadeInLeft"
                          role="progressbar"
                          style={{ width: "80%" }}
                        ></div>
                      </div>
                    </div>
                    <span className="pac">80%</span>
                  </div>
                  <div className="single-review">
                    <div className="stars">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                    </div>
                    <div className="single-progress-area-incard">
                      <div className="progress">
                        <div
                          className="progress-bar wow fadeInLeft"
                          role="progressbar"
                          style={{ width: "60%" }}
                        ></div>
                      </div>
                    </div>
                    <span className="pac">60%</span>
                  </div>
                  <div className="single-review">
                    <div className="stars">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                    </div>
                    <div className="single-progress-area-incard">
                      <div className="progress">
                        <div
                          className="progress-bar wow fadeInLeft"
                          role="progressbar"
                          style={{ width: "80%" }}
                        ></div>
                      </div>
                    </div>
                    <span className="pac">40%</span>
                  </div>
                  <div className="single-review">
                    <div className="stars">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                    </div>
                    <div className="single-progress-area-incard">
                      <div className="progress">
                        <div
                          className="progress-bar wow fadeInLeft"
                          role="progressbar"
                          style={{ width: "80%" }}
                        ></div>
                      </div>
                    </div>
                    <span className="pac">30%</span>
                  </div>
                </div>
              </div>
              <div className="submit-review-area">
                <form action="#" className="submit-review-area">
                  <h5 className="title">Submit Your Review</h5>
                  <div className="your-rating">
                    <span>Your Rating Of This Product :</span>
                    <div className="stars">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
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
        </div>
      </div>
    </div>
  );
};

export default ProductDetailTabs;
