"use client"

import { cards, settings } from "@/public/demo/demoCardData";
import Slider from "react-slick";
import CardItem from "./CardItem";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { useCallback, useState } from "react";
import ProductDetailModal from "../Modals/ProductDetailModal";

const Cards = () => {
    const [isModalOpen,setIsModalOpen] = useState(false);
    const [modalData,setModalData] = useState<CardType>();

    const handleOpenModal = useCallback((id: string) => {
        setIsModalOpen(true);
        const findedCard = cards.find((card) => card.id === id);
        setModalData(findedCard);
    }, []);

    const handleCloseModal = useCallback(() => {
        setIsModalOpen(false);
    }, []);

    return (
        <div className="category-area-main-wrapper-one">
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
            {isModalOpen && modalData && <ProductDetailModal 
                image={modalData.image}
                category={modalData.category}
                price={modalData.price}
                value={modalData.value}
                count={modalData.count}
                tags={modalData.tags}
                title={modalData.title}
                reviewCount={modalData.reviewCount}
                description={modalData.description}
                handleCloseModal={handleCloseModal}
            />}
        </div>
    );
};

export default Cards;