import Image from "next/image";
import bar1 from "../../public/images/icons/bar-1.svg";
import icon1 from "../../public/images/icons/01.svg";
import icon2 from "../../public/images/icons/02.svg";
import icon3 from "../../public/images/icons/03.svg";
import icon4 from "../../public/images/icons/04.svg";
import icon5 from "../../public/images/icons/05.svg";
import icon6 from "../../public/images/icons/06.svg";
import icon7 from "../../public/images/icons/07.svg";
import icon8 from "../../public/images/icons/08.svg";
import icon9 from "../../public/images/icons/09.svg";
import icon10 from "../../public/images/icons/10.svg";
import { Plus, SearchIcon } from "lucide-react";

const Search = () => {
  return (
    <>
      <div className="category-btn category-hover-header">
        <Image
          width={18}
          height={18}
          className="parent"
          src={bar1}
          alt="icons"
        />
        <span>Categories</span>
        <ul className="category-sub-menu" id="category-active-four">
          <li>
            <a href="#" className="menu-item">
              <Image width={18} height={18} src={icon1} alt="icons" />
              <span>Breakfast &amp; Dairy</span>
              <div className="plus-icon">
                <Plus style={{ width: '15px' }} />
              </div>
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
              <Image width={18} height={18} src={icon2} alt="icons" />
              <span>Meats &amp; Seafood</span>
              <div className="plus-icon">
                <Plus style={{ width: '15px' }} />
              </div>
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
              <Image width={18} height={18} src={icon3} alt="icons" />
              <span>Breads &amp; Bakery</span>
            </a>
          </li>
          <li>
            <a href="#" className="menu-item">
              <Image width={18} height={18} src={icon4} alt="icons" />
              <span>Chips &amp; Snacks</span>
              <div className="plus-icon">
                <Plus style={{ width: '15px' }} />
              </div>
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
              <Image width={18} height={18} src={icon5} alt="icons" />
              <span>Medical Healthcare</span>
            </a>
          </li>
          <li>
            <a href="#" className="menu-item">
              <Image width={18} height={18} src={icon6} alt="icons" />
              <span>Breads &amp; Bakery</span>
            </a>
          </li>
          <li>
            <a href="#" className="menu-item">
              <Image width={18} height={18} src={icon7} alt="icons" />
              <span>Biscuits &amp; Snacks</span>
              <div className="plus-icon">
                <Plus style={{ width: '15px' }} />
              </div>
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
              <Image width={18} height={18} src={icon8} alt="icons" />
              <span>Frozen Foods</span>
            </a>
          </li>
          <li>
            <a href="#" className="menu-item">
              <Image width={18} height={18} src={icon9} alt="icons" />
              <span>Grocery &amp; Staples</span>
            </a>
          </li>
          <li>
            <a href="#" className="menu-item">
              <Image width={18} height={18} src={icon10} alt="icons" />
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
          Search
          <SearchIcon width={20} />
        </button>
      </form>
    </>
  );
};

export default Search;
