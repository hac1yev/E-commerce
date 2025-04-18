import { discountProducts } from "@/public/demo/discountProductsData";
import DiscountCardItem from "./DiscountCardItem";

const DiscountProducts = () => {
    return (
        <div className="rts-grocery-feature-area rts-section-gapBottom">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="title-area-between">
                        <h2 className="title-left">
                            Products With Discounts
                        </h2>
                        <div className="countdown">
                            <div className="countDown">10/05/2025 10:20:00</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="product-with-discount">
                        <div className="row g-5">
                            <div className="col-xl-4 col-lg-12">
                                <a href="shop-details.html" className="single-discount-with-bg">
                                    <div className="inner-content">
                                        <h4 className="title">Alpro Organic Flavored <br />
                                            Fresh Juice</h4>
                                        <div className="price-area">
                                            <span>Only</span>
                                            <h4 className="title">
                                                $15.00
                                            </h4>
                                        </div>
                                    </div>
                                </a>
                                <a href="shop-details.html" className="single-discount-with-bg bg-2">
                                    <div className="inner-content">
                                        <h4 className="title">Alpro Organic Flavored <br />
                                            Fresh Juice</h4>
                                        <div className="price-area">
                                            <span>Only</span>
                                            <h4 className="title">
                                                $15.00
                                            </h4>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-xl-8 col-lg-12">
                                <div className="row">
                                    {Array.from( { length: 2 } ).map((_,index) => (
                                        <div className="col-lg-6" key={index}>
                                            {discountProducts.slice(index * 2, (index + 1) * 2).map((product) => (
                                                <DiscountCardItem 
                                                    key={product.id}
                                                    {...product}
                                                />
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default DiscountProducts;