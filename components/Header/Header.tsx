"use client";

import Image from "next/image";
import React, { useState } from "react";
import logo1 from "../../public/images/logo/logo-01.svg";
import Search from "./Search";
import MobileHeader from "./MobileHeader";
import { Heart, ShoppingCart, UserIcon } from "lucide-react";
import HeaderCartPopover from "../Popovers/HeaderCartPopover";

const Header = () => {
  const [openCartPopover,setOpenCartPopover] = useState(false);

  const handleOpenCartPopover = () => {
    setOpenCartPopover(true);
  };

  return (
    <>
      <div className="search-header-area-main">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="logo-search-category-wrapper">
                <a href="index.html" className="logo-area">
                  <Image
                    width={181}
                    height={47}
                    src={logo1}
                    alt="logo-main"
                    className="logo"
                  />
                </a>
                <div className="category-search-wrapper">
                  <Search />
                </div>
                <div className="accont-wishlist-cart-area-header">
                  <a href="account.html" className="btn-border-only account">
                    <UserIcon width={20} />
                    <span>Account</span>
                  </a>
                  <a href="wishlist.html" className="btn-border-only wishlist">
                    <div style={{ position: 'relative' }}>
                      <Heart width={20} />
                      <span className="number" style={{ position: 'absolute', left: '7px', top: '-11px' }}>2</span>
                    </div>
                    <span className="text">Wishlist</span>
                  </a>
                  <div className="btn-border-only cart category-hover-header">
                    <div style={{ position: 'relative' }}>
                      <ShoppingCart 
                        style={{ flexShrink: 0 }} 
                        onClick={handleOpenCartPopover}
                        width={20} 
                      />
                      <span className="number" style={{ position: 'absolute', left: '7px', top: '-11px' }}>2</span>
                    </div>
                    <span className="text" style={{ flexShrink: 0 }}>My Cart</span>
                    {openCartPopover && <HeaderCartPopover />}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MobileHeader />
    </>
  );
};

export default Header;