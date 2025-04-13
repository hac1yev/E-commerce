"use client";

import Image from "next/image";
import logo1 from "../../public/images/logo/logo-01.svg";
import { Heart, Menu, ShoppingCart, UserIcon } from "lucide-react";
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