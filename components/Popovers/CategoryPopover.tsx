import { Croissant, EthernetPort, Fish, Ham, HeartPulse, Plus, Popcorn, Soup, Utensils } from "lucide-react";

const CategoryPopover = () => {
  return (
    <ul className="category-sub-menu" id="category-active-four">
      <li>
        <a href="#" className="menu-item">
          <Utensils width={18} height={18} />
          <span>Breakfast &amp; Dairy</span>
          <div className="plus-icon">
            <Plus style={{ width: "15px" }} />
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
          <Ham width={18} height={18} />
          <span>Meats &amp; Seafood</span>
          <div className="plus-icon">
            <Plus style={{ width: "15px" }} />
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
          <Croissant width={18} height={18} />
          <span>Breads &amp; Bakery</span>
        </a>
      </li>
      <li>
        <a href="#" className="menu-item">
          <Popcorn width={18} height={18} />
          <span>Chips &amp; Snacks</span>
          <div className="plus-icon">
            <Plus style={{ width: "15px" }} />
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
          <HeartPulse width={18} height={18} />
          <span>Medical Healthcare</span>
        </a>
      </li>
      <li>
        <a href="#" className="menu-item">
          <Fish width={18} height={18} />
          <span>Frozen Foods</span>
        </a>
      </li>
      <li>
        <a href="#" className="menu-item">
          <Soup width={18} height={18} />
          <span>Grocery &amp; Staples</span>
        </a>
      </li>
      <li>
        <a href="#" className="menu-item">
          <EthernetPort width={18} height={18} />
          <span>Other Items</span>
        </a>
      </li>
    </ul>
  );
};

export default CategoryPopover;
