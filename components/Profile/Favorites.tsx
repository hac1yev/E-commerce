import useAxiosPrivate from "@/hooks/useAxiosPrivate";
import { FavoriteProductsAction, useTypedFavoriteSelector } from "@/store/favorites-slice";
import { ChevronDown, ChevronUp, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const Favorites = () => {
  const [count,setCount] = useState(1);
  const favorites = useTypedFavoriteSelector(
    (state) => state.favoriteReducer.favoriteProducts
  );
  const axiosPrivate = useAxiosPrivate();
  const dispatch = useDispatch();

  const handleIncreaseCount = () => {
    setCount((prev) => prev + 1);
  }

  const handleDecreaseCount = () => {
    if(count === 1) return;
    else setCount((prev) => prev - 1);
  }

  useEffect(() => {
    (async function () {
      try {
        dispatch(FavoriteProductsAction.toggleLoading(true));
        const response = await axiosPrivate.get("/api/products/favorites");
        dispatch(
          FavoriteProductsAction.getFavoriteProducts(response.data.favorites)
        );
      } catch (error) {
        console.log(error);
      } finally {
        dispatch(FavoriteProductsAction.toggleLoading(false));
      }
    })();
  }, [axiosPrivate, dispatch]);

  return (
    <div className="container">
      <div className="row g-5">
        <div className="col-lg-12">
          <div className="rts-cart-list-area wishlist">
            <div className="single-cart-area-list head">
              <div className="product-main">
                <p>Products</p>
              </div>
              <div className="price">
                <p>Price</p>
              </div>
              <div className="quantity">
                <p>Quantity</p>
              </div>
              <div className="subtotal">
                <p>SubTotal</p>
              </div>
              <div className="button-area"></div>
            </div>
            {favorites.map((item) => (
              <div className="single-cart-area-list main  item-parent" key={item.id}>
                <div className="product-main-cart">
                  <div className="close section-activation">
                    <X />
                  </div>
                  <div className="thumbnail">
                    <Image width={200} height={200} src={item.image} alt={item.title} />
                  </div>
                  <div className="information">
                    <h6 className="title">
                      {item.title}
                    </h6>
                    <span>SKU:BG-{1000 + item.id}</span>
                  </div>
                </div>
                <div className="price">
                  <p>${item.price.toFixed(2)}</p>
                </div>
                <div className="quantity mr--10">
                  <div className="quantity-edit">
                    <span>{count}</span>
                    <div className="button-wrapper-action">
                      <button className="button" onClick={handleIncreaseCount}>
                        <ChevronUp width={16} />
                      </button>
                      <button className="button" onClick={handleDecreaseCount}>
                        <ChevronDown width={16} />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="subtotal">
                  <p>${(item.price * count).toFixed(2)}</p>
                </div>
                <div className="button-area">
                  <a
                    href="#"
                    className="rts-btn btn-primary radious-sm with-icon"
                  >
                    <div className="btn-text">Add To Cart</div>
                    <div className="arrow-icon">
                      <i className="fa-regular fa-cart-shopping"></i>
                    </div>
                    <div className="arrow-icon">
                      <i className="fa-regular fa-cart-shopping"></i>
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorites;
