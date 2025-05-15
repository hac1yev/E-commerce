import useAxiosPrivate from "@/hooks/useAxiosPrivate";
import { ProductSliceActions } from "@/store/products-slice";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Select from "react-select";

const ProductsFilterSelect = ({ page }: { page: number }) => {
  const [selectData,setSelectData] = useState<AddProductSelectType>({});
  const dispatch = useDispatch();  
  const searchParams = useSearchParams();
  const navigate = useRouter();
  const axiosPrivate = useAxiosPrivate();
  const [filterItems, setFilterItems] = useState<{
    category: number | null;
    tag: number | null;
    type: number | null;
  }>({
    category: null,
    tag: null,
    type: null
  });

  useEffect(() => {
    (async function() {
      try {
        const response = await axiosPrivate.get("/api/products/meta");
        setSelectData({
          categories: response.data.categories,
          tags: response.data.tags,
          types: response.data.types
        });            
      } catch (error) {
        console.log(error);
      }
    })();
  }, [axiosPrivate]);

  useEffect(() => {
    (async function() {
      try {
        const obj = Object.fromEntries(Array.from(searchParams.entries()));
        const allParams: Record<string, string | number> = {
          ...obj,
          page: page
        }
        const url = new URL(window.location.href);

        for(const key in allParams) {
          if(allParams[key]) {
            if(!url.searchParams.has(key)) {
              url.searchParams.append(key, allParams[key].toString());
            }else{
              url.searchParams.set(key, allParams[key].toString());
            }
          }
        }

        navigate.push(`/products${url.search}`);
        const response = await axiosPrivate.get(`/api/products${url.search}`);
        dispatch(ProductSliceActions.getAllProducts(response.data.products)); 
      } catch (error) {
        console.log(error);
      }
    })();
  }, [axiosPrivate,dispatch,searchParams,page,navigate]);

  const handleFilter = () => {
    const filterItemsArr = Object.entries(filterItems).filter((item) => {
      if(!item.includes(null)) {
        return item;
      }
    });
    const url = new URL(window.location.href);
    const obj = Object.fromEntries(filterItemsArr);
    obj['page'] = page;

    for(const key in obj) {
      if(obj[key]) {
        if(!url.searchParams.has(key)) {
          url.searchParams.append(key, obj[key].toString());
        }else{
          url.searchParams.set(key, obj[key].toString());
        }
      }
    }
        
    navigate.push(`/products${url.search}`);
  };      

  const handleResetFilter = () => {
    navigate.push(`/products?page=${page}`);
    setFilterItems({ category: null, tag: null, type: null }); 
  }

  return (
    <div className="filter-select-area">
      <div className="top-filter">
        <span>Showing 1–20 of 57 results</span>
      </div>
      <div className="nice-select-area-wrapper-and-button">
        <div className="nice-select-wrapper-1">
          <div className="single-input">
            <Select
              id="categories"
              options={selectData.categories}
              className="basic-multi-select"
              classNamePrefix="select"
              placeholder="Select categories:"
              value={selectData.categories?.find(opt => opt.value === filterItems.category) || null}
              onChange={(selectedOption) => setFilterItems((prev) => {                 
                return {
                  ...prev,
                  category: selectedOption?.value || null
                }
              })}
            />
          </div>
          <div className="single-input">
            <Select
              options={selectData.tags}
              id="tags"
              className="basic-multi-select"
              classNamePrefix="select"
              placeholder="Select tags:"
              value={selectData.tags?.find(opt => opt.value === filterItems.tag) || null}
              onChange={(selectedOption) => setFilterItems((prev) => {               
                return {
                  ...prev,
                  tag: selectedOption?.value || null
                }
              })}
            />
          </div>
          <div className="single-input">
            <Select
              options={selectData.types}
              id="type"
              className="basic-multi-select"
              classNamePrefix="select"
              placeholder="Select type:"
              value={selectData.types?.find(opt => opt.value === filterItems.type) || null}
              onChange={(selectedOption) => {          
                if(selectedOption) {
                  setFilterItems((prev) => {
                    return {
                      ...prev,
                      type: selectedOption?.value || null
                    }
                  })
                }
              }}
            />
          </div>
        </div>
        <div className="button-area">
          <button className="rts-btn" onClick={handleFilter}>Filter</button>
          <button className="rts-btn" onClick={handleResetFilter}>Reset Filter</button>
        </div>
      </div>
    </div>
  );
};

export default ProductsFilterSelect;