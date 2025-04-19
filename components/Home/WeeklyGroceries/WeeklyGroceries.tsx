"use client";

import CardItem from "@/components/Cards/CardItem";
import ProductDetailModal from "@/components/Modals/ProductDetailModal";
import { cards } from "@/public/demo/demoCardData";
import { useCallback, useState } from "react";

const categories = ["Frozen Foods","Diet Foods","Healthy Foods", "Vitamin Foods"]

const WeeklyGroceries = () => {
    const [isModalOpen,setIsModalOpen] = useState(false);
    const [modalData,setModalData] = useState<CardType>();
    const [tab,setTab] = useState("Frozen Foods");

    const handleOpenModal = useCallback((id: string) => {
        setIsModalOpen(true);
        const findedCard = cards.find((card) => card.id === id);
        setModalData(findedCard);
    }, []);
    
    const handleCloseModal = useCallback(() => {
        setIsModalOpen(false);
    }, []);

    const handleChangeTab = (tab: string) => {
        setTab(tab);
    };  

    return (
        <div className="weekly-best-selling-area rts-section-gap bg_light-1">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="title-area-between">
                            <h2 className="title-left">
                                Weekly Best Selling Groceries
                            </h2>
                            <ul className="nav best-selling-grocery">
                                {categories.map((category,index) => (
                                    <li 
                                        onClick={() => handleChangeTab(category)}
                                        className="nav-item" 
                                        key={index}
                                    >
                                        <button className={tab === category ? "active" : ""}>{category}</button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        {tab === 'Frozen Foods' && <div className="row g-4">
                            {cards.filter((card) => card.category === 'Frozen Foods').map((item) => (
                                <div key={item.id} className="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                                    <CardItem 
                                        {...item}
                                        componentType="weekly"
                                        handleOpenModal={handleOpenModal}
                                    />
                                </div>
                            ))}
                        </div>}
                        {tab === 'Diet Foods' && <div className="row g-4">
                            {cards.filter((card) => card.category === 'Diet Foods').map((item) => (
                                <div key={item.id} className="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                                    <CardItem 
                                        {...item}
                                        componentType="weekly"
                                        handleOpenModal={handleOpenModal}
                                    />
                                </div>
                            ))}
                        </div>}
                        {tab === 'Healthy Foods' && <div className="row g-4">
                            {cards.filter((card) => card.category === 'Healthy Foods').map((item) => (
                                <div key={item.id} className="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                                    <CardItem 
                                        {...item}
                                        componentType="weekly"
                                        handleOpenModal={handleOpenModal}
                                    />
                                </div>
                            ))}
                        </div>}
                        {tab === 'Vitamin Foods' && <div className="row g-4">
                            {cards.filter((card) => card.category === 'Vitamin Foods').map((item) => (
                                <div key={item.id} className="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                                    <CardItem 
                                        {...item}
                                        componentType="weekly"
                                        handleOpenModal={handleOpenModal}
                                    />
                                </div>
                            ))}
                        </div>}
                    </div>
                </div>
                {isModalOpen && modalData && 
                    <ProductDetailModal 
                        handleCloseModal={handleCloseModal}
                        {...modalData}
                    />
                }
            </div>
        </div>
    );
};

export default WeeklyGroceries;