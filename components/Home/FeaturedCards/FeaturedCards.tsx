"use client"

import { settings } from "@/public/demo/demoCardData";
import Slider from "react-slick";
import CardItem from "../../Cards/CardItem";
// import { useCallback, useState } from "react";
// import ProductDetailModal from "../../Modals/ProductDetailModal";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { useTypedHomeSelector } from "@/store/home-slice";
// import axios from "axios";

const FeaturedCards = () => {  
    const featuredProducts = useTypedHomeSelector((state) => state.homePageReducer.homePageData).featuredProducts;  
    // const [isModalOpen,setIsModalOpen] = useState(false);
    // const [modalData,setModalData] = useState<ProductCardModalType>();

    // useEffect(() => {
    //     (async function() {
    //         try {
    //             const response = await axios.get('/api/products/featured');
    //             console.log(response.data);
                
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     })()
    // }, []);

    // const handleOpenModal = useCallback((id: string) => {
    //     setIsModalOpen(true);
    //     const findedCard = cards.find((card) => card.id === parseInt(id)) as ProductType;
    //     setModalData({
    //         image: findedCard?.image,
    //         title: findedCard?.title,
    //         description: findedCard?.description,
    //         price: findedCard?.price,
    //         value: findedCard?.value,
    //         reviewCount: findedCard?.reviewCount,
    //         categories: findedCard?.category,
    //         tags: findedCard?.tags
    //     });
    // }, []);

    // const handleCloseModal = useCallback(() => {
    //     setIsModalOpen(false);
    // }, []);    

    if(featuredProducts?.length === 0) {
        return <p>Loading...</p>
    }

    return (
        <div className="rts-grocery-feature-area rts-section-gapBottom">
            <div className="category-area-main-wrapper-one">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-area-between">
                                <h2 className="title-left">
                                    Most Viewed Products
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <Slider {...settings}>
                            {featuredProducts?.map((card) => (
                                <CardItem 
                                    key={card.id}
                                    componentType="featured"
                                    // handleOpenModal={handleOpenModal}
                                    liked={card.liked}
                                    id={card.id}
                                    discount={card.discount}
                                    image={card.image}
                                    title={card.title}
                                    price={card.price}
                                    value={card.value}
                                    brand={card.brand}
                                />
                            ))}
                        </Slider>
                    </div>
                </div>
                {/* {isModalOpen && modalData && 
                    <ProductDetailModal 
                        handleCloseModal={handleCloseModal}
                        {...modalData}
                    />} */}
            </div>
        </div>
    );
};

export default FeaturedCards;