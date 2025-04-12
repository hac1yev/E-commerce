"use client";

import Image from "next/image";
import logo1 from "../../public/images/logo/logo-01.svg";
import { Heart, Menu, SearchIcon, ShoppingCart, UserIcon } from "lucide-react";
import { useState } from "react";
import Sidebar from "../Navbar/Sidebar";
import HeaderCartPopover from "../Popovers/HeaderCartPopover";
import Link from "next/link";

const MobileHeader = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [openCategoryPopover,serOpenCategoryPopover] = useState(false);

  const handleShowMobileMenu = () => {    
    setShowMobileMenu(true);
  };

  const handleOpenCategoryPopover = () => {
    serOpenCategoryPopover((prev) => !prev);
  };

  return (
    <>
      <div className="logo-search-category-wrapper after-md-device-header">
        <Link href="index.html" className="logo-area">
          <Image width={181} height={47} src={logo1} alt="logo-main" className="logo" />
        </Link>
        <div className="category-search-wrapper">
          <div className="category-btn category-hover-header">
            {/* <img className="parent" src="assets/images/icons/bar-1.svg" alt="icons"> */}
            <span>Categories</span>
            <ul className="category-sub-menu">
              <li>
                <Link href="/" className="menu-item">
                  {/* <img src="assets/images/icons/01.svg" alt="icons"> */}
                  <span>Breakfast & Dairy</span>
                  <i className="fa-regular fa-plus"></i>
                </Link>
              </li>
              <li>
                <Link href="/" className="menu-item">
                  {/* <img src="assets/images/icons/02.svg" alt="icons"> */}
                  <span>Meats & Seafood</span>
                  <i className="fa-regular fa-plus"></i>
                </Link>
              </li>
              <li>
                <Link href="/" className="menu-item">
                  {/* <img src="assets/images/icons/03.svg" alt="icons"> */}
                  <span>Breads & Bakery</span>
                </Link>
              </li>
              <li>
                <Link href="/" className="menu-item">
                  {/* <img src="assets/images/icons/04.svg" alt="icons"> */}
                  <span>Chips & Snacks</span>
                  <i className="fa-regular fa-plus"></i>
                </Link>
              </li>
              <li>
                <Link href="/" className="menu-item">
                  {/* <img src="assets/images/icons/05.svg" alt="icons"> */}
                  <span>Medical Healthcare</span>
                </Link>
              </li>
              <li>
                <Link href="/" className="menu-item">
                  {/* <img src="assets/images/icons/06.svg" alt="icons"> */}
                  <span>Breads & Bakery</span>
                </Link>
              </li>
              <li>
                <Link href="/" className="menu-item">
                  {/* <img src="assets/images/icons/07.svg" alt="icons"> */}
                  <span>Biscuits & Snacks</span>
                  <i className="fa-regular fa-plus"></i>
                </Link>
              </li>
              <li>
                <Link href="/" className="menu-item">
                  {/* <img src="assets/images/icons/08.svg" alt="icons"> */}
                  <span>Frozen Foods</span>
                </Link>
              </li>
              <li>
                <Link href="/" className="menu-item">
                  {/* <img src="assets/images/icons/09.svg" alt="icons"> */}
                  <span>Grocery & Staples</span>
                </Link>
              </li>
              <li>
                <Link href="/" className="menu-item">
                  {/* <img src="assets/images/icons/10.svg" alt="icons"> */}
                  <span>Other Items</span>
                </Link>
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
            <Link href="/" className="btn-border-only account">
              <UserIcon width={20} />
              <span className="text">Account</span>
            </Link>
            <Link href="/" className="btn-border-only wishlist">
              <Heart width={20} />
              <span className="text">Wishlist</span>
            </Link>
            <div className="btn-border-only cart category-hover-header" onClick={handleOpenCategoryPopover}>
              <ShoppingCart width={20} />
              <span className="text">My Cart</span>
              {openCategoryPopover && <HeaderCartPopover />}
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
      {showMobileMenu && <Sidebar showMobileMenu={showMobileMenu} setShowMobileMenu={setShowMobileMenu} />}
    </>
  );
};

export default MobileHeader;