"use client";

import ProductsFilterSelect from "./ProductsFilterSelect";
import { cards } from "@/public/demo/demoCardData";
import CardItem from "../Cards/CardItem";

const ProductsMain = () => {
    // const [isModalOpen,setIsModalOpen] = useState(false);
    // const [modalData,setModalData] = useState<CardType>();

    // const handleOpenModal = useCallback((id: string) => {
    //     setIsModalOpen(true);
    //     const findedCard = cards.find((card) => card.id === id);
    //     setModalData(findedCard);
    // }, []);

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
          {cards.map((card) => (
            <div
              className="col-lg-3 col-md-6 col-sm-6 col-12"
              key={card.id}
            >
              <CardItem 
                    key={card.id}
                    // handleOpenModal={handleOpenModal}
                    {...card}
                />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsMain;