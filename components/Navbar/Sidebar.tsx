import { X } from "lucide-react";
import React from "react";

const Sidebar = ({ showMobileMenu, setShowMobileMenu }: { showMobileMenu: boolean, setShowMobileMenu: (value: boolean) => void }) => {  
  return (
    <div className={showMobileMenu ? "sidebarmenu-overlay show-overlay" : "sidebarmenu-overlay close-overlay"}>
      <div id="side-bar" className={showMobileMenu ? "side-bar header-two show" : "side-bar header-two close"}>
        <button className="close-icon-menu">
          <X onClick={() => setShowMobileMenu(false)} />
        </button>

        <form action="#" className="search-input-area-menu mt--30">
          <input type="text" placeholder="Search..." required />
          <button>
            <i className="fa-light fa-magnifying-glass"></i>
          </button>
        </form>

        <div className="mobile-menu-nav-area tab-nav-btn mt--20">
          <nav>
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
              <button
                className="nav-link active"
                id="nav-home-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-home"
                type="button"
                role="tab"
                aria-controls="nav-home"
                aria-selected="true"
              >
                Menu
              </button>
              <button
                className="nav-link"
                id="nav-profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-profile"
                type="button"
                role="tab"
                aria-controls="nav-profile"
                aria-selected="false"
              >
                Category
              </button>
            </div>
          </nav>

          <div className="tab-content" id="nav-tabContent">
            <div
              className="tab-pane fade show active"
              id="nav-home"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
              tab-index={0}
            >
              <div className="mobile-menu-main">
                <nav className="nav-main mainmenu-nav mt--30">
                  <ul className="mainmenu metismenu" id="mobile-menu-active">
                    <li className="has-droupdown">
                      <a href="#" className="main">
                        Home
                      </a>
                      <ul className="submenu mm-collapse">
                        <li>
                          <a className="mobile-menu-link" href="index.html">
                            Home One
                          </a>
                        </li>
                        <li>
                          <a className="mobile-menu-link" href="index-two.html">
                            Home Two
                          </a>
                        </li>
                        <li>
                          <a
                            className="mobile-menu-link"
                            href="index-three.html"
                          >
                            Home Three
                          </a>
                        </li>
                        <li>
                          <a
                            className="mobile-menu-link"
                            href="index-four.html"
                          >
                            Home Four
                          </a>
                        </li>
                        <li>
                          <a
                            className="mobile-menu-link"
                            href="index-five.html"
                          >
                            {" "}
                            Home Five
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="about.html" className="main">
                        About
                      </a>
                    </li>
                    <li className="has-droupdown">
                      <a href="#" className="main">
                        Pages
                      </a>
                      <ul className="submenu mm-collapse">
                        <li>
                          <a className="mobile-menu-link" href="about.html">
                            About
                          </a>
                        </li>
                        <li>
                          <a className="mobile-menu-link" href="faq.html">
                            Faqs
                          </a>
                        </li>
                        <li>
                          <a className="mobile-menu-link" href="invoice.html">
                            Invoice
                          </a>
                        </li>
                        <li>
                          <a className="mobile-menu-link" href="contact.html">
                            Contact
                          </a>
                        </li>
                        <li>
                          <a className="mobile-menu-link" href="register.html">
                            Register
                          </a>
                        </li>
                        <li>
                          <a className="mobile-menu-link" href="login.html">
                            Login
                          </a>
                        </li>
                        <li>
                          <a
                            className="mobile-menu-link"
                            href="privacy-policy.html"
                          >
                            Privacy Policy
                          </a>
                        </li>
                        <li>
                          <a
                            className="mobile-menu-link"
                            href="cookies-policy.html"
                          >
                            Cookies Policy
                          </a>
                        </li>
                        <li>
                          <a
                            className="mobile-menu-link"
                            href="terms-condition.html"
                          >
                            Terms Condition
                          </a>
                        </li>
                        <li>
                          <a className="mobile-menu-link" href="404.html">
                            Error Page
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="has-droupdown">
                      <a href="#" className="main">
                        Shop
                      </a>
                      <ul className="submenu mm-collapse">
                        <li className="has-droupdown third-lvl">
                          <a className="main" href="#">
                            Shop Layout
                          </a>
                          <ul className="submenu-third-lvl mm-collapse">
                            <li>
                              <a href="shop-grid-sidebar.html"></a>Shop Grid
                              Sidebar
                            </li>
                            <li>
                              <a href="shop-list-sidebar.html"></a>Shop List
                              Sidebar
                            </li>
                            <li>
                              <a href="shop-grid-top-filter.html"></a>Shop Grid
                              Top Filter
                            </li>
                            <li>
                              <a href="shop-list-top-filter.html"></a>Shop List
                              Top Filter
                            </li>
                          </ul>
                        </li>
                        <li className="has-droupdown third-lvl">
                          <a className="main" href="#">
                            Shop Details
                          </a>
                          <ul className="submenu-third-lvl mm-collapse">
                            <li>
                              <a href="shop-details.html"></a>Shop Details
                            </li>
                            <li>
                              <a href="shop-details-2.html"></a>Shop Details 2
                            </li>
                            <li>
                              <a href="shop-grid-top-filter.html"></a>Shop Grid
                              Top Filter
                            </li>
                            <li>
                              <a href="shop-list-top-filter.html"></a>Shop List
                              Top Filter
                            </li>
                          </ul>
                        </li>
                        <li className="has-droupdown third-lvl">
                          <a className="main" href="#">
                            Product Feature
                          </a>
                          <ul className="submenu-third-lvl mm-collapse">
                            <li>
                              <a href="shop-details-variable.html"></a>Shop
                              Details Variable
                            </li>
                            <li>
                              <a href="shop-details-affiliats.html"></a>Shop
                              Details Affiliats
                            </li>
                            <li>
                              <a href="shop-details-group.html"></a>Shop Details
                              Group
                            </li>
                            <li>
                              <a href="shop-compare.html"></a>Shop Compare
                            </li>
                          </ul>
                        </li>
                        <li className="has-droupdown third-lvl">
                          <a className="main" href="#">
                            Shop Others
                          </a>
                          <ul className="submenu-third-lvl mm-collapse">
                            <li>
                              <a href="cart.html"></a>Cart
                            </li>
                            <li>
                              <a href="checkout.html"></a>Checkout
                            </li>
                            <li>
                              <a href="trackorder.html"></a>Trackorder
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="has-droupdown">
                      <a href="#" className="main">
                        Blog
                      </a>
                      <ul className="submenu mm-collapse">
                        <li>
                          <a className="mobile-menu-link" href="blog.html">
                            Blog
                          </a>
                        </li>
                        <li>
                          <a
                            className="mobile-menu-link"
                            href="blog-list-left-sidebar.html"
                          >
                            Blog Left Sidebar
                          </a>
                        </li>
                        <li>
                          <a
                            className="mobile-menu-link"
                            href="blog-list-right-sidebar.html"
                          >
                            Blog List Right Sidebar
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="contact.html" className="main">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="nav-profile"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
              tab-index={0}
            >
              <div className="category-btn category-hover-header menu-category">
                <ul className="category-sub-menu" id="category-active-menu">
                  <li>
                    <a href="#" className="menu-item">
                      {/* <img src="assets/images/icons/01.svg" alt="icons"> */}
                      <span>Breakfast &amp; Dairy</span>
                      <i className="fa-regular fa-plus"></i>
                    </a>
                    <ul className="submenu mm-collapse">
                      <li>
                        <a className="mobile-menu-link" href="#">
                          Breakfast
                        </a>
                      </li>
                      <li>
                        <a className="mobile-menu-link" href="#">
                          Dinner
                        </a>
                      </li>
                      <li>
                        <a className="mobile-menu-link" href="#">
                          {" "}
                          Pumking
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#" className="menu-item">
                      {/* <img src="assets/images/icons/02.svg" alt="icons"> */}
                      <span>Meats &amp; Seafood</span>
                      <i className="fa-regular fa-plus"></i>
                    </a>
                    <ul className="submenu mm-collapse">
                      <li>
                        <a className="mobile-menu-link" href="#">
                          Breakfast
                        </a>
                      </li>
                      <li>
                        <a className="mobile-menu-link" href="#">
                          Dinner
                        </a>
                      </li>
                      <li>
                        <a className="mobile-menu-link" href="#">
                          {" "}
                          Pumking
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#" className="menu-item">
                      {/* <img src="assets/images/icons/03.svg" alt="icons"> */}
                      <span>Breads &amp; Bakery</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="menu-item">
                      {/* <img src="assets/images/icons/04.svg" alt="icons"> */}
                      <span>Chips &amp; Snacks</span>
                      <i className="fa-regular fa-plus"></i>
                    </a>
                    <ul className="submenu mm-collapse">
                      <li>
                        <a className="mobile-menu-link" href="#">
                          Breakfast
                        </a>
                      </li>
                      <li>
                        <a className="mobile-menu-link" href="#">
                          Dinner
                        </a>
                      </li>
                      <li>
                        <a className="mobile-menu-link" href="#">
                          {" "}
                          Pumking
                        </a>
                      </li>
                    </ul>
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
                      <span>Breads &amp; Bakery</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="menu-item">
                      {/* <img src="assets/images/icons/07.svg" alt="icons"> */}
                      <span>Biscuits &amp; Snacks</span>
                      <i className="fa-regular fa-plus"></i>
                    </a>
                    <ul className="submenu mm-collapse">
                      <li>
                        <a className="mobile-menu-link" href="#">
                          Breakfast
                        </a>
                      </li>
                      <li>
                        <a className="mobile-menu-link" href="#">
                          Dinner
                        </a>
                      </li>
                      <li>
                        <a className="mobile-menu-link" href="#">
                          {" "}
                          Pumking
                        </a>
                      </li>
                    </ul>
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
                      <span>Grocery &amp; Staples</span>
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
            </div>
          </div>
        </div>

        <div className="button-area-main-wrapper-menuy-sidebar mt--50">
          <div className="contact-area">
            <div className="phone">
              <i className="fa-light fa-headset"></i>
              <a href="#">02345697871</a>
            </div>
            <div className="phone">
              <i className="fa-light fa-envelope"></i>
              <a href="#">02345697871</a>
            </div>
          </div>
          <div className="buton-area-bottom">
            <a href="login.html" className="rts-btn btn-primary">
              Sign In
            </a>
            <a href="register.html" className="rts-btn btn-primary">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
