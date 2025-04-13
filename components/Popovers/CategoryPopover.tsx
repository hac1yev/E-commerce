import { CookingPot, Croissant, EthernetPort, Fish, Ham, HeartPulse, Plus, Popcorn, ShoppingBasket, Soup, Utensils, UtensilsCrossed } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type CategoryName = "breakfast" | "meats" | "chips";

const CategoryPopover = () => {
  const [dropdown, setDropdown] = useState<Record<CategoryName, boolean>>({
    breakfast: false,
    meats: false,
    chips: false,
  });

  const handleOpenDropdown = (categoryName: CategoryName) => {
    setDropdown((prev) => ({
      ...prev,
      [categoryName]: !prev[categoryName],
    }));
  };

  return (
    <ul className="category-sub-menu" id="category-active-four">
      <li onClick={() => handleOpenDropdown("breakfast")}>
        <div className="menu-item">
          <Utensils width={18} height={18} />
          <span>Breakfast &amp; Dairy</span>
          <div className="plus-icon">
            <Plus style={{ width: "15px" }} />
          </div>
        </div>
        {dropdown.breakfast && (
          <ul className="submenu mm-collapse">
            <li>
              <Link className="mobile-menu-link" href="/">
                <UtensilsCrossed width={18} />
                Breakfast
              </Link>
            </li>
            <li>
              <Link className="mobile-menu-link" href="/">
                <CookingPot width={18} />
                Dinner
              </Link>
            </li>
            <li>
              <Link className="mobile-menu-link" href="/">
                <ShoppingBasket width={18} />
                Pumking
              </Link>
            </li>
          </ul>
        )}
      </li>
      <li onClick={() => handleOpenDropdown("meats")}>
        <div className="menu-item">
          <Ham width={18} height={18} />
          <span>Meats &amp; Seafood</span>
          <div className="plus-icon">
            <Plus style={{ width: "15px" }} />
          </div>
        </div>
        {dropdown.meats && (
          <ul className="submenu mm-collapse">
            <li>
              <Link className="mobile-menu-link" href="/">
                <UtensilsCrossed width={18} />
                Breakfast
              </Link>
            </li>
            <li>
              <Link className="mobile-menu-link" href="/">
                <CookingPot width={18} />
                Dinner
              </Link>
            </li>
            <li>
              <Link className="mobile-menu-link" href="/">
                <ShoppingBasket width={18} />
                Pumking
              </Link>
            </li>
          </ul>
        )}
      </li>
      <li>
        <Link href="/" className="menu-item">
          <Croissant width={18} height={18} />
          <span>Breads &amp; Bakery</span>
        </Link>
      </li>
      <li onClick={() => handleOpenDropdown("chips")}>
        <div className="menu-item">
          <Popcorn width={18} height={18} />
          <span>Chips &amp; Snacks</span>
          <div className="plus-icon">
            <Plus style={{ width: "15px" }} />
          </div>
        </div>
        {dropdown.chips && (
          <ul className="submenu mm-collapse">
            <li>
              <Link className="mobile-menu-link" href="/">
                <UtensilsCrossed width={18} />
                Breakfast
              </Link>
            </li>
            <li>
              <Link className="mobile-menu-link" href="/">
                <CookingPot width={18} />
                Dinner
              </Link>
            </li>
            <li>
              <Link className="mobile-menu-link" href="/">
                <ShoppingBasket width={18} />
                Pumking
              </Link>
            </li>
          </ul>
        )}
      </li>
      <li>
        <Link href="/" className="menu-item">
          <HeartPulse width={18} height={18} />
          <span>Medical Healthcare</span>
        </Link>
      </li>
      <li>
        <Link href="/" className="menu-item">
          <Fish width={18} height={18} />
          <span>Frozen Foods</span>
        </Link>
      </li>
      <li>
        <Link href="/" className="menu-item">
          <Soup width={18} height={18} />
          <span>Grocery &amp; Staples</span>
        </Link>
      </li>
      <li>
        <Link href="/" className="menu-item">
          <EthernetPort width={18} height={18} />
          <span>Other Items</span>
        </Link>
      </li>
    </ul>
  );
};

export default CategoryPopover;