import Link from "next/link";
import React from "react";

const MobileCategory = () => {
    console.log("asdasda");
    
  return (
    <div className="category-btn category-hover-header menu-category">
      <ul className="category-sub-menu" id="category-active-menu">
        <li>
          <Link href="/" className="menu-item">
            <span>Breakfast &amp; Dairy</span>
            <i className="fa-regular fa-plus"></i>
          </Link>
          <ul className="submenu mm-collapse">
            <li>
              <Link className="mobile-menu-link" href="/">
                Breakfast
              </Link>
            </li>
            <li>
              <Link className="mobile-menu-link" href="/">
                Dinner
              </Link>
            </li>
            <li>
              <Link className="mobile-menu-link" href="/">
                {" "}
                Pumking
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/" className="menu-item">
            {/* <img src="assets/images/icons/02.svg" alt="icons"> */}
            <span>Meats &amp; Seafood</span>
            <i className="fa-regular fa-plus"></i>
          </Link>
          <ul className="submenu mm-collapse">
            <li>
              <Link className="mobile-menu-link" href="/">
                Breakfast
              </Link>
            </li>
            <li>
              <Link className="mobile-menu-link" href="/">
                Dinner
              </Link>
            </li>
            <li>
              <Link className="mobile-menu-link" href="/">
                {" "}
                Pumking
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/" className="menu-item">
            {/* <img src="assets/images/icons/03.svg" alt="icons"> */}
            <span>Breads &amp; Bakery</span>
          </Link>
        </li>
        <li>
          <Link href="/" className="menu-item">
            {/* <img src="assets/images/icons/04.svg" alt="icons"> */}
            <span>Chips &amp; Snacks</span>
            <i className="fa-regular fa-plus"></i>
          </Link>
          <ul className="submenu mm-collapse">
            <li>
              <Link className="mobile-menu-link" href="/">
                Breakfast
              </Link>
            </li>
            <li>
              <Link className="mobile-menu-link" href="/">
                Dinner
              </Link>
            </li>
            <li>
              <Link className="mobile-menu-link" href="/">
                {" "}
                Pumking
              </Link>
            </li>
          </ul>
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
            <span>Breads &amp; Bakery</span>
          </Link>
        </li>
        <li>
          <Link href="/" className="menu-item">
            {/* <img src="assets/images/icons/07.svg" alt="icons"> */}
            <span>Biscuits &amp; Snacks</span>
            <i className="fa-regular fa-plus"></i>
          </Link>
          <ul className="submenu mm-collapse">
            <li>
              <Link className="mobile-menu-link" href="/">
                Breakfast
              </Link>
            </li>
            <li>
              <Link className="mobile-menu-link" href="/">
                Dinner
              </Link>
            </li>
            <li>
              <Link className="mobile-menu-link" href="/">
                {" "}
                Pumking
              </Link>
            </li>
          </ul>
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
            <span>Grocery &amp; Staples</span>
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
  );
};

export default MobileCategory;
