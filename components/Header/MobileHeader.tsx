"use client";

import Image from "next/image";
import logo1 from "../../public/images/logo/logo-01.svg";
import { Heart, Menu, SearchIcon, ShoppingCart, UserIcon } from "lucide-react";
import { useState } from "react";
import Sidebar from "../Navbar/Sidebar";

const MobileHeader = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleShowMobileMenu = () => {    
    setShowMobileMenu(true);
  };

  return (
    <>
      <div className="logo-search-category-wrapper after-md-device-header">
        <a href="index.html" className="logo-area">
          <Image width={181} height={47} src={logo1} alt="logo-main" className="logo" />
        </a>
        <div className="category-search-wrapper">
          <div className="category-btn category-hover-header">
            {/* <img className="parent" src="assets/images/icons/bar-1.svg" alt="icons"> */}
            <span>Categories</span>
            <ul className="category-sub-menu">
              <li>
                <a href="#" className="menu-item">
                  {/* <img src="assets/images/icons/01.svg" alt="icons"> */}
                  <span>Breakfast & Dairy</span>
                  <i className="fa-regular fa-plus"></i>
                </a>
              </li>
              <li>
                <a href="#" className="menu-item">
                  {/* <img src="assets/images/icons/02.svg" alt="icons"> */}
                  <span>Meats & Seafood</span>
                  <i className="fa-regular fa-plus"></i>
                </a>
              </li>
              <li>
                <a href="#" className="menu-item">
                  {/* <img src="assets/images/icons/03.svg" alt="icons"> */}
                  <span>Breads & Bakery</span>
                </a>
              </li>
              <li>
                <a href="#" className="menu-item">
                  {/* <img src="assets/images/icons/04.svg" alt="icons"> */}
                  <span>Chips & Snacks</span>
                  <i className="fa-regular fa-plus"></i>
                </a>
              </li>
              <li>
                <a href="#" className="menu-item">
                  {/* <img src="assets/images/icons/05.svg" alt="icons"> */}
                  <span>Medical Healthcare</span>
                </a>
              </li>
              <li>
                <a href="#" className="menu-item">
                  {/* <img src="assets/images/icons/06.svg" alt="icons"> */}
                  <span>Breads & Bakery</span>
                </a>
              </li>
              <li>
                <a href="#" className="menu-item">
                  {/* <img src="assets/images/icons/07.svg" alt="icons"> */}
                  <span>Biscuits & Snacks</span>
                  <i className="fa-regular fa-plus"></i>
                </a>
              </li>
              <li>
                <a href="#" className="menu-item">
                  {/* <img src="assets/images/icons/08.svg" alt="icons"> */}
                  <span>Frozen Foods</span>
                </a>
              </li>
              <li>
                <a href="#" className="menu-item">
                  {/* <img src="assets/images/icons/09.svg" alt="icons"> */}
                  <span>Grocery & Staples</span>
                </a>
              </li>
              <li>
                <a href="#" className="menu-item">
                  {/* <img src="assets/images/icons/10.svg" alt="icons"> */}
                  <span>Other Items</span>
                </a>
              </li>
            </ul>
          </div>
          <form action="#" className="search-header">
            <input
              type="text"
              placeholder="Search for products, categories or brands"
              required
            />
            <button className="rts-btn btn-primary radious-sm with-icon">
              <span className="btn-text">Search</span>
              <span className="arrow-icon">
                <i className="fa-light fa-magnifying-glass"></i>
              </span>
              <span className="arrow-icon">
                <i className="fa-light fa-magnifying-glass"></i>
              </span>
            </button>
          </form>
        </div>
        <div className="main-wrapper-action-2 d-flex">
          <div className="accont-wishlist-cart-area-header">
            <a href="account.html" className="btn-border-only account">
              <UserIcon width={20} />
              Account
            </a>
            <a href="wishlist.html" className="btn-border-only wishlist">
              <Heart width={20} />
              Wishlist
            </a>
            <div className="btn-border-only cart category-hover-header">
              <ShoppingCart width={20} />
              <span className="text">My Cart</span>
              <div className="category-sub-menu card-number-show">
                <h5 className="shopping-cart-number">Shopping Cart (03)</h5>
                <div className="cart-item-1 border-top">
                  <div className="img-name">
                    <div className="thumbanil">
                      {/* <img src="assets/images/shop/cart-1.png" alt=""> */}
                    </div>
                    <div className="details">
                      <a href="shop-details.html">
                        <h5 className="title">
                          Foster Farms Breast Nuggets Shaped Chicken
                        </h5>
                      </a>
                      <div className="number">
                        1 <i className="fa-regular fa-x"></i>
                        <span>$36.00</span>
                      </div>
                    </div>
                  </div>
                  <div className="close-c1">
                    <i className="fa-regular fa-x"></i>
                  </div>
                </div>
                <div className="cart-item-1">
                  <div className="img-name">
                    <div className="thumbanil">
                      {/* <img src="assets/images/shop/05.png" alt=""> */}
                    </div>
                    <div className="details">
                      <a href="shop-details.html">
                        <h5 className="title">
                          Foster Farms Breast Nuggets Shaped Chicken
                        </h5>
                      </a>
                      <div className="number">
                        1 <i className="fa-regular fa-x"></i>
                        <span>$36.00</span>
                      </div>
                    </div>
                  </div>
                  <div className="close-c1">
                    <i className="fa-regular fa-x"></i>
                  </div>
                </div>
                <div className="cart-item-1">
                  <div className="img-name">
                    <div className="thumbanil">
                      {/* <img src="assets/images/shop/04.png" alt=""> */}
                    </div>
                    <div className="details">
                      <a href="shop-details.html">
                        <h5 className="title">
                          Foster Farms Breast Nuggets Shaped Chicken
                        </h5>
                      </a>
                      <div className="number">
                        1 <i className="fa-regular fa-x"></i>
                        <span>$36.00</span>
                      </div>
                    </div>
                  </div>
                  <div className="close-c1">
                    <i className="fa-regular fa-x"></i>
                  </div>
                </div>
                <div className="sub-total-cart-balance">
                  <div className="bottom-content-deals mt--10">
                    <div className="top">
                      <span>Sub Total:</span>
                      <span className="number-c">$108.00</span>
                    </div>
                    <div className="single-progress-area-incard">
                      <div className="progress">
                        <div
                          className="progress-bar wow fadeInLeft"
                          role="progressbar"
                          style={{ width: "80%" }}
                          aria-valuenow={25}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        ></div>
                      </div>
                    </div>
                    <p>
                      Spend More <span>$125.00</span> to reach{" "}
                      <span>Free Shipping</span>
                    </p>
                  </div>
                  <div className="button-wrapper d-flex align-items-center justify-content-between">
                    <a href="cart.html" className="rts-btn btn-primary ">
                      View Cart
                    </a>
                    <a
                      href="checkout.html"
                      className="rts-btn btn-primary border-only"
                    >
                      CheckOut
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="actions-area">
            <div className="search-btn" id="search">
              <SearchIcon width={20} />
            </div>
            <div className="menu-btn" onClick={handleShowMobileMenu}>
              <Menu width={20} />
            </div>
          </div>
        </div>
      </div>
      <Sidebar showMobileMenu={showMobileMenu} setShowMobileMenu={setShowMobileMenu} />
    </>
  );
};

export default MobileHeader;