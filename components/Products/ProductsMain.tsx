"use client";

import ProductsFilterSelect from "./ProductsFilterSelect";
import CardItem from "../Cards/CardItem";
import { useTypedProductSelector } from "@/store/products-slice";

const ProductsMain = () => {
  const products = useTypedProductSelector((state) => state.productReducer.products);
  // const [isModalOpen,setIsModalOpen] = useState(false);
  // const [modalData,setModalData] = useState<ProductType>();
  
  // const handleOpenModal = useCallback((id: string) => {
  //     setIsModalOpen(true);
  //     const findedProduct = products.find((product) => product.id === parseInt(id));
  //     setModalData(findedProduct);
  // }, [products]);

  // const handleCloseModal = useCallback(() => {
  //     setIsModalOpen(false);
  // }, []);


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