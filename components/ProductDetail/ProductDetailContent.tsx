import React, { useMemo } from "react";
import StaticRatingStar from "../RatingStar/StaticRatingStar";
import { Forward, GitCompare, HeartIcon, Minus, Plus, ShoppingCart } from "lucide-react";
import Image from "next/image";
import moment from "moment";
import { getAverageRating, getReviewCount } from "@/app/lib/getRating";

const ProductDetailContent = ({ productContent }: { productContent: ProductDetailContentType }) => {
  const filteredRating = useMemo(() => {
    return productContent.ratingResult.filter((item) => item.count !== 0);
  }, [productContent.ratingResult]);

  const reviewCount = useMemo(() => {
    return getReviewCount(filteredRating);
  }, [filteredRating]);    

  const averageRating = useMemo(() => {
    return getAverageRating(filteredRating);
  }, [filteredRating]);

  return (
    <div className="product-details-popup-wrapper in-shopdetails">
      <div className="rts-product-details-section rts-product-details-section2 product-details-popup-section">
        <div className="product-details-popup">
          <div className="details-product-area">
            <div className="product-thumb-area">
              <div className="thumb-wrapper one filterd-items figure">
                <div
                  className="product-thumb zoom"
                >
                  <Image width={300} height={500} src={productContent.image} alt={productContent.brand} priority />
                </div>
              </div>
            
            </div>
            <div className="contents">
              <div className="product-status">
                <span className="product-catagory">{productContent.brand}</span>
                <div className="rating-stars-group">
                  {averageRating && <>
                    <StaticRatingStar filledStars={Math.round(averageRating)} />
                    <span>{reviewCount} Reviews</span>
                  </>}
                  {!averageRating && <span>No review</span>}
                </div>
              </div>
              <h2 className="product-title">
                {productContent.title}
              </h2>
              <p className="mt--20 mb--20">
                {productContent.description}
              </p>
              <span
                className="product-price mb--15 d-block"
                style={{ color: "#DC2626", fontWeight: "600" }}
              >
                {" "}
                ${productContent.price.toFixed(2)}
                <span className="old-price ml--15">${productContent.value.toFixed(2)}</span>
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
                  {productContent.categories.join(", ")}
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
                  {productContent.tags.join(", ")}
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
                  {moment(productContent.life).fromNow()}
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
                  {productContent.type_content}
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