import React from "react";
import StaticRatingStar from "../RatingStar/StaticRatingStar";
import { Forward, GitCompare, HeartIcon, Minus, Plus, ShoppingCart } from "lucide-react";

const ProductDetailContent = () => {
  return (
    <div className="product-details-popup-wrapper in-shopdetails">
      <div className="rts-product-details-section rts-product-details-section2 product-details-popup-section">
        <div className="product-details-popup">
          <div className="details-product-area">
            <div className="product-thumb-area">
              <div className="cursor"></div>
              <div className="thumb-wrapper one filterd-items figure">
                <div
                  className="product-thumb zoom"
                  style={{
                    backgroundImage: "url(assets/images/shop/01.jpg)",
                  }}
                >
                  {/* <img src="assets/images/shop/01.jpg" alt="product-thumb" /> */}
                </div>
              </div>
              <div className="thumb-wrapper two filterd-items hide">
                <div
                  className="product-thumb zoom"
                  style={{
                    backgroundImage: "url(assets/images/shop/02.jpg)",
                  }}
                >
                  {/* <img src="assets/images/shop/02.jpg" alt="product-thumb" /> */}
                </div>
              </div>
              <div className="thumb-wrapper three filterd-items hide">
                <div
                  className="product-thumb zoom"
                  style={{
                    backgroundImage: "url(assets/images/shop/03.jpg)",
                  }}
                >
                  {/* <img src="assets/images/shop/03.jpg" alt="product-thumb" /> */}
                </div>
              </div>
              <div className="thumb-wrapper four filterd-items hide">
                <div
                  className="product-thumb zoom"
                  style={{
                    backgroundImage: "url(assets/images/shop/04.jpg)",
                  }}
                >
                  {/* <img src="assets/images/shop/04.jpg" alt="product-thumb" /> */}
                </div>
              </div>
              <div className="thumb-wrapper five filterd-items hide">
                <div
                  className="product-thumb zoom"
                  style={{
                    backgroundImage: "url(assets/images/shop/05.jpg)",
                  }}
                >
                  {/* <img src="assets/images/shop/05.jpg" alt="product-thumb" /> */}
                </div>
              </div>
              <div className="product-thumb-filter-group">
                <div
                  className="thumb-filter filter-btn active"
                  data-show=".one"
                >
                  {/* <img src="assets/images/shop/01.jpg" alt="product-thumb-filter" /> */}
                </div>
                <div className="thumb-filter filter-btn" data-show=".two">
                  {/* <img src="assets/images/shop/02.jpg" alt="product-thumb-filter" /> */}
                </div>
                <div className="thumb-filter filter-btn" data-show=".three">
                  {/* <img src="assets/images/shop/03.jpg" alt="product-thumb-filter" /> */}
                </div>
                <div className="thumb-filter filter-btn" data-show=".four">
                  {/* <img src="assets/images/shop/04.jpg" alt="product-thumb-filter" /> */}
                </div>
                <div className="thumb-filter filter-btn" data-show=".five">
                  {/* <img src="assets/images/shop/05.jpg" alt="product-thumb-filter" /> */}
                </div>
              </div>
            </div>
            <div className="contents">
              <div className="product-status">
                <span className="product-catagory">Dress</span>
                <div className="rating-stars-group">
                  <StaticRatingStar filledStars={3} />
                  <span>10 Reviews</span>
                </div>
              </div>
              <h2 className="product-title">
                Kitchen Fade Defy PLUG Air Freshener
              </h2>
              <p className="mt--20 mb--20">
                Priyoshop has brought to you the Hijab 3 Pieces Combo Pack PS23.
                It is a completely modern design and you feel comfortable to put
                on this hijab. Buy it at the best price.
              </p>
              <span
                className="product-price mb--15 d-block"
                style={{ color: "#DC2626", fontWeight: "600" }}
              >
                {" "}
                $36.25
                <span className="old-price ml--15">$69.35</span>
              </span>
              <div className="product-bottom-action">
                <div className="cart-edits">
                  <div className="quantity-edit action-item">
                    <button className="button">
                      <Minus width={18} />
                    </button>
                    <input type="text" className="input" value={1} />
                    <button className="button plus">
                      <Plus width={18} />
                    </button>
                  </div>
                </div>
                <a
                  href="#"
                  className="rts-btn btn-primary radious-sm with-icon"
                >
                  <div className="btn-text">Add To Cart</div>
                  <div className="arrow-icon">
                    <ShoppingCart width={20} />
                  </div>
                </a>
              </div>
              <div className="product-uniques">
                <span className="sku product-unipue mb--10">
                  <span
                    style={{
                      fontWeight: "400",
                      marginRight: "10px",
                    }}
                  >
                    Sku:{" "}
                  </span>{" "}
                  BO1D0MX8SJ
                </span>
                <span className="catagorys product-unipue mb--10">
                  <span
                    style={{
                      fontWeight: "400",
                      marginRight: "10px",
                    }}
                  >
                    Categories:{" "}
                  </span>{" "}
                  T-Shirts, Tops, Mens
                </span>
                <span className="tags product-unipue mb--10">
                  <span
                    style={{
                      fontWeight: "400",
                      marginRight: "10px",
                    }}
                  >
                    Tags:{" "}
                  </span>{" "}
                  fashion, t-shirts, Men
                </span>
                <span className="tags product-unipue mb--10">
                  <span
                    style={{
                      fontWeight: "400",
                      marginRight: "10px",
                    }}
                  >
                    Life:{" "}
                  </span>{" "}
                  6 Months
                </span>
                <span className="tags product-unipue mb--10">
                  <span
                    style={{
                      fontWeight: "400",
                      marginRight: "10px",
                    }}
                  >
                    Type:{" "}
                  </span>{" "}
                  original
                </span>
                <span className="tags product-unipue mb--10">
                  <span
                    style={{
                      fontWeight: "400",
                      marginRight: "10px",
                    }}
                  >
                    Category:{" "}
                  </span>{" "}
                  Beverages, Dairy & Bakery
                </span>
              </div>
              <div className="share-option-shop-details">
                <div className="single-share-option">
                  <div className="icon">
                    <HeartIcon width={20} />
                  </div>
                  <span>Add To Wishlist</span>
                </div>
                <div className="single-share-option">
                  <div className="icon">
                    <Forward />
                  </div>
                  <span>Share On social</span>
                </div>
                <div className="single-share-option">
                  <div className="icon">
                    <GitCompare />
                  </div>
                  <span>Compare</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailContent;
