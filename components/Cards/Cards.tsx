"use client"

import { cards, settings } from "@/public/demo/demoCardData";
import Slider from "react-slick";
import CardItem from "./CardItem";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const Cards = () => {
    return (
        <div className="category-area-main-wrapper-one">
            <div className="container">
                <div className="row">
                    <Slider {...settings}>
                        {cards.map((card) => (
                            <CardItem 
                                key={card.id}
                                image={card.image}
                                discount={card.discount}
                                title={card.title}
                                kg={card.kg}
                                price={card.price}
                                count={card.count}
                                value={card.value}
                            />
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Cards;