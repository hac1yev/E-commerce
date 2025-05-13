import { getAvarageRating, getReviewCount } from "@/app/lib/getRating"
import RatingStar from "../RatingStar/RatingStar";
import StaticRatingStar from "../RatingStar/StaticRatingStar";
import { useMemo } from "react";

const TabCustomer = ({ productDetailRatingResult }: { productDetailRatingResult: ProductDetailRatingResultType }) => {
  const filteredRating = useMemo(() => {
    return productDetailRatingResult.ratingResult.filter((item) => item.count !== 0);
  }, [productDetailRatingResult.ratingResult]);

  const reviewCount = useMemo(() => {
    return getReviewCount(filteredRating);
  }, [filteredRating]);  

  const average = useMemo(() => {
    return getAvarageRating(filteredRating)?.toFixed(1);
  }, [filteredRating]);

  return (
    <div className="single-tab-content-shop-details">
      <div className="product-details-review-product-style">
        <div className="average-stars-area-left">
          <div className="top-stars-wrapper">
            <h4 className="review">{!average ? 'No Rating Yet' : average}</h4>
            {average && <div className="rating-disc">
              <span>Average Rating</span>
              <div className="stars">
                <StaticRatingStar filledStars={4} />
                <span>(1 Reviews & 0 Ratings)</span>
              </div>
            </div>}
          </div>
          {average && <div className="average-stars-area">
            <h4 className="average">66.7%</h4>
            <span>Recommended (2 of 3)</span>
          </div>}
          {average && <div className="review-charts-details">
            {Array.from({ length: 5 }, (_, i) => i + 1).toSorted((a,b) => b-a).map((item) => {
              const findedStar = filteredRating.find((el) => el.star === item);

              return (
                <div className="single-review" key={item}>
                  <div className="stars">
                    <StaticRatingStar filledStars={item} />
                    {findedStar ? (
                      <span className="pac">{(findedStar.count / reviewCount) * 100}%</span>
                    ) : (
                      <span className="pac">0%</span>
                    )}
                  </div>
                  <div className="single-progress-area-incard">
                    <div className="progress">
                      <div
                        className="progress-bar wow fadeInLeft"
                        role="progressbar"
                        style={{ width: findedStar ? `${(findedStar.count / reviewCount) * 100}%` : '0%' }}
                      ></div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>}
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
