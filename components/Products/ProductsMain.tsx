"use client";

import ProductsFilterSelect from "./ProductsFilterSelect";
import CardItem from "../Cards/CardItem";
import { useEffect } from "react";
import useAxiosPrivate from "@/hooks/useAxiosPrivate";
import { ProductSliceActions, useTypedProductSelector } from "@/store/products-slice";
import { useDispatch } from "react-redux";

const ProductsMain = () => {
  const products = useTypedProductSelector((state) => state.productReducer.products);
  const dispatch = useDispatch();
  // const [isModalOpen,setIsModalOpen] = useState(false);
  // const [modalData,setModalData] = useState<ProductType>();
  const axiosPrivate = useAxiosPrivate();
  
  // const handleOpenModal = useCallback((id: string) => {
  //     setIsModalOpen(true);
  //     const findedProduct = products.find((product) => product.id === parseInt(id));
  //     setModalData(findedProduct);
  // }, [products]);

  // const handleCloseModal = useCallback(() => {
  //     setIsModalOpen(false);
  // }, []);

  useEffect(() => {
    if(products.length === 0) {
      (async function() {
        try {
          const response = await axiosPrivate.get("/api/products");
          dispatch(ProductSliceActions.getAllProducts(response.data.products));          
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [axiosPrivate, dispatch, products.length]);

  return (
    <div className="col-xl-9 col-lg-12">
      <ProductsFilterSelect />
      <div
        className="product-area-wrapper-shopgrid-list mt--20 tab-pane fade show active"
        id="home-tab-pane"
      >
        <div className="row g-4">
          {products.map((product) => (
            <div
              className="col-lg-3 col-md-6 col-sm-6 col-12"
              key={product.id}
            >
              <CardItem 
                key={product.id}
                // handleOpenModal={handleOpenModal}
                {...product}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsMain;