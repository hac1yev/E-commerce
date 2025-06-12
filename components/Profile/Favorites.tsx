import useAxiosPrivate from "@/hooks/useAxiosPrivate";
import { FavoriteProductsAction, useTypedFavoriteSelector } from "@/store/favorites-slice";
import { LinearProgress, Stack } from "@mui/material";
import { ChevronDown, ChevronUp, ShoppingCartIcon, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const Favorites = () => {
  const [count,setCount] = useState<Record<string,number>>({});
  const favorites = useTypedFavoriteSelector((state) => state.favoriteReducer.favoriteProducts);
  const isLoading = useTypedFavoriteSelector((state) => state.favoriteReducer.isLoading);
  const axiosPrivate = useAxiosPrivate();
  const dispatch = useDispatch();

  const handleIncreaseCount = (id: string) => {    
    setCount((prev) => {
      return {
        ...prev,
        [id]: (prev[id] || 1) + 1
      }
    });
  }  

  const handleDecreaseCount = (id: string) => {
    if(count[id] === 1) return;
    else setCount((prev) => {
      return {
        ...prev,
        [id]: prev[id] - 1
      }
    });
  }

  const handleDeleteFavoriteItem = async (id: number) => {
    try {
      const response = await axiosPrivate.delete(`/api/products/favorites/${id}`);
      if(response.status === 200) {
        dispatch(FavoriteProductsAction.deleteFavoriteItem(id));
      }
    } catch (error) {
      console.log(error); 
    }
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
            {isLoading && (
              <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
                <LinearProgress color="success" />
              </Stack>
            )}
            {!isLoading && favorites.length === 0 && (
              <div className="single-cart-area-list main item-parent">
                <h3>There is no favorite product!</h3>
              </div>
            )}
            {favorites.map((item) => (
              <div className="single-cart-area-list main item-parent" key={item.id}>
                <div className="product-main-cart">
                  <div className="close section-activation" onClick={handleDeleteFavoriteItem.bind(null, item.id)}>
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
                    <span>{count[`SKU${item.id}`] || 1}</span>
                    <div className="button-wrapper-action">
                      <button className="button" onClick={handleIncreaseCount.bind(null, `SKU${item.id}`)}>
                        <ChevronUp width={16} />
                      </button>
                      <button className="button" onClick={handleDecreaseCount.bind(null, `SKU${item.id}`)}>
                        <ChevronDown width={16} />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="subtotal">
                  <p>${(item.price * (count[`SKU${item.id}`] || 1)).toFixed(2)}</p>
                </div>
                <div className="button-area">
                  <Link
                    href="/"
                    className="rts-btn btn-primary radious-sm with-icon"
                  >
                    <div className="btn-text">Add To Cart</div>
                    <ShoppingCartIcon width={18} />
                  </Link>
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