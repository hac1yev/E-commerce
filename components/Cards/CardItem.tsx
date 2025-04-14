import Image from "next/image";
import bookmark from '../../public/images/bookmark.png';
import { EyeIcon, Heart } from "lucide-react";

type CardItemProps = Pick<CardType, "image" | "discount" | "title" | "kg" | "price" | "count" | "value">;

const CardItem = ({ image,discount,title,kg,price,count,value }: CardItemProps) => {
  return (
    <div className="single-shopping-card-one">
      {" "}
      <div className="image-and-action-area-wrapper">
        <a href="shop-details.html" className="thumbnail-preview">
          <div className="badge">
            <span>
              {discount}% <br />
              Off
            </span>
            <Image src={bookmark} width={50} height={50} alt="bookmark" />
          </div>
          <Image src={image} width={300} height={200} alt={title} />
        </a>
        <div className="action-share-option">
          <div
            className="single-action openuptip message-show-action"
            data-flow="up"
            title="Add To Wishlist"
          >
            <Heart width={17} style={{ color: '#fff' }} />
          </div>
          <div
            className="single-action openuptip cta-quickview product-details-popup-btn"
            data-flow="up"
            title="Quick View"
          >
            <EyeIcon width={17} style={{ color: '#fff' }} />
          </div>
        </div>
      </div>
      <div className="body-content">
        <a href="shop-details.html">
          <h4 className="title">
            {title}
          </h4>
        </a>
        <span className="availability">{kg * 1000}g Pack</span>
        <div className="price-area">
          <span className="current">${price.toFixed(2)}</span>
          <div className="previous">${value.toFixed(2)}</div>
        </div>
        <div className="cart-counter-action">
          <div className="quantity-edit">
            <input type="text" className="input" value={count} />
            <div className="button-wrapper-action">
              <button className="button">
                <i className="fa-regular fa-chevron-down"></i>
              </button>
              <button className="button plus">
                +<i className="fa-regular fa-chevron-up"></i>
              </button>
            </div>
          </div>
          <button className="rts-btn btn-primary radious-sm with-icon">
            <div className="btn-text">Add</div>
            <div className="arrow-icon">
              <i className="fa-regular fa-cart-shopping"></i>
            </div>
            <div className="arrow-icon">
              <i className="fa-regular fa-cart-shopping"></i>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
