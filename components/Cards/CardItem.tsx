import Image from "next/image";
import bookmark from "../../public/images/bookmark.png";
import { ChevronDown, ChevronUp, EyeIcon, Heart, ShoppingCart } from "lucide-react";

const CardItem = (props: Pick<CardType, keyof CardType> & { componentType: string; handleOpenModal: (id: string) => void }) => {
  return (
    <div className={props.componentType === 'weekly' ? "single-shopping-card-one weekly-grocery-height" : "single-shopping-card-one featured-grocery-height"}>
      {" "}
      <div className="image-and-action-area-wrapper">
        <a href="shop-details.html" className="thumbnail-preview">
          <div className="badge">
            <span>
              {props.discount}% <br />
              Off
            </span>
            <Image src={bookmark} width={50} height={50} alt="bookmark" />
          </div>
          <Image src={props.image} width={300} height={200} alt={props.category} />
        </a>
        <div className="action-share-option">
          <div
            className="single-action openuptip message-show-action"
            data-flow="up"
            title="Add To Wishlist"
          >
            <Heart width={17} style={{ color: "#fff" }} />
          </div>
          <div
            className="single-action openuptip cta-quickview product-details-popup-btn"
            data-flow="up"
            title="Quick View"
            onClick={() => props.handleOpenModal(props.id)}
          >
            <EyeIcon width={17} style={{ color: "#fff" }} />
          </div>
        </div>
      </div>
      <div className="body-content">
        <a href="shop-details.html">
          <h4 className="title">{props.title}</h4>
        </a>
        <span className="availability">{props.kg * 1000}g Pack</span>
        <div className="price-area">
          <span className="current">${props.price.toFixed(2)}</span>
          <div className="previous">${props.value.toFixed(2)}</div>
        </div>
        <div className="cart-counter-action">
          <div className="quantity-edit">
            <input type="text" className="input" value={props.count} />
            <div className="button-wrapper-action">
              <button className="button">
                <ChevronUp width={16} />
              </button>
              <button className="button">
                <ChevronDown width={16} />
              </button>
            </div>
          </div>
          <button className="rts-btn btn-primary radious-sm with-icon">
            <div className="btn-text d-flex align-items-center gap-2">
              <span>Add</span>
              <ShoppingCart width={17} />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardItem;