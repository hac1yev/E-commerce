"use client"

import { cards, settings } from "@/public/demo/demoCardData";
import Slider from "react-slick";
import CardItem from "../../Cards/CardItem";
import { useCallback, useState } from "react";
import ProductDetailModal from "../../Modals/ProductDetailModal";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const FeaturedCards = () => {
    const [isModalOpen,setIsModalOpen] = useState(false);
    const [modalData,setModalData] = useState<ProductType>();

    const handleOpenModal = useCallback((id: string) => {
        setIsModalOpen(true);
        const findedCard = cards.find((card) => card.id === parseInt(id));
        setModalData(findedCard);
    }, []);

    const handleCloseModal = useCallback(() => {
        setIsModalOpen(false);
    }, []);

    return (
        <div className="rts-grocery-feature-area rts-section-gapBottom">
            <div className="category-area-main-wrapper-one">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-area-between">
                                <h2 className="title-left">
                                    Featured Grocery
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <Slider {...settings}>
                            {cards.map((card) => (
                                <CardItem 
                                    key={card.id}
                                    handleOpenModal={handleOpenModal}
                                    {...card}
                                />
                            ))}
                        </Slider>
                    </div>
                </div>
                {isModalOpen && modalData && 
                    <ProductDetailModal 
                        handleCloseModal={handleCloseModal}
                        {...modalData}
                    />}
            </div>
        </div>
    );
};

export default FeaturedCards;