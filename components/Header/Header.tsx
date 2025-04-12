"use client";

import Image from "next/image";
import React, { useState } from "react";
import logo1 from "../../public/images/logo/logo-01.svg";
import Search from "./Search";
import MobileHeader from "./MobileHeader";
import { Heart, ShoppingCart, UserIcon } from "lucide-react";
import HeaderCartPopover from "../Popovers/HeaderCartPopover";
import Link from "next/link";

const Header = () => {
  const [openCartPopover,setOpenCartPopover] = useState(false);

  const handleOpenCartPopover = () => {
    setOpenCartPopover((prev) => !prev);
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
                  <Link href="/" className="btn-border-only account">
                    <div className="d-flex align-items-center h-100 gap-3 cart-button-wrap">
                      <UserIcon width={20} />
                      <span className="text">Account</span>
                    </div>
                  </Link>
                  <Link href="/" className="btn-border-only wishlist">
                    <div className="d-flex align-items-center h-100 gap-3 cart-button-wrap">
                      <div style={{ position: 'relative' }}>
                        <Heart width={20} />
                        <span className="number" style={{ position: 'absolute', left: '7px', top: '-11px' }}>2</span>
                      </div>
                      <span className="text">Wishlist</span>
                    </div>
                  </Link>
                  <div 
                    className={openCartPopover ? "btn-border-only cart category-hover-header" : "btn-border-only cart"} 
                    onClick={handleOpenCartPopover}
                  >
                    <div className="d-flex align-items-center h-100 gap-3 cart-button-wrap">
                      <div style={{ position: 'relative' }}>
                        <ShoppingCart 
                          style={{ flexShrink: 0 }} 
                          width={20} 
                        />
                        <span className="number" style={{ position: 'absolute', left: '7px', top: '-11px' }}>2</span>
                      </div>
                      <span className="text" style={{ flexShrink: 0 }}>My Cart</span>
                    </div>
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