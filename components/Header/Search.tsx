"use client";

import { AlignLeft, SearchIcon } from "lucide-react";
import CategoryPopover from "../Popovers/CategoryPopover";
import { useState } from "react";

const Search = () => {
  const [openCategoryPopover,setOpenCartPopover] = useState(false);

  const handleOpenCategoryPopover = () => {
    setOpenCartPopover((prev) => !prev);
  };

  return (
    <>
      <div 
        className="category-btn category-hover-header"
      >
        <div className="d-flex align-items-center h-100 gap-3 cart-button-wrap" onClick={handleOpenCategoryPopover}>
          <AlignLeft
            width={18}
            height={18}
            className="parent"
          />
          <span>Categories</span>
        </div>
        {openCategoryPopover && <CategoryPopover />}
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
