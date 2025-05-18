// import useAxiosPrivate from "@/hooks/useAxiosPrivate";
// import { ProductSliceActions } from "@/store/products-slice";
// import { useRouter, useSearchParams } from "next/navigation";
// import React, { useState } from "react";
// import { useDispatch } from "react-redux";

const ProductStatus = () => {
  // const dispatch = useDispatch();
  // const searchParams = useSearchParams();
  // const axiosPrivate = useAxiosPrivate();
  // const navigate = useRouter();
  // const [status,setStatus] = useState({
  //   inStock: false,
  //   onSale: false
  // });

  // const handleChangeStatus = async (sts: string) => {
  //   const params = new URLSearchParams(searchParams);
  //   params.set("status", `${brand}`);
  //   params.delete("page");
  //   params.set("page", "1");
  //   const obj = Object.fromEntries(params.entries());

  //   for(const key in obj) {      
  //     if(obj[key]) {
  //       params.set(key, obj[key].toString());        
  //     }
  //   }

  //   console.log(obj);
    
  //   const response = await axiosPrivate.get(`/api/products?${params}`);
  //   dispatch(ProductSliceActions.getAllProducts({
  //     ...response.data
  //   })); 
  //   navigate.push(`/products?${params}`);
  // };

  return (
    <div className="single-filter-box">
      <h5 className="title">Product Status</h5>
      <div className="filterbox-body">
        <div className="category-wrapper">
          <div className="single-category single-category-checkbox">
            <input id="cat11" type="checkbox" />
            <label htmlFor="cat11">In Stock</label>
          </div>
          <div className="single-category single-category-checkbox">
            <input id="cat12" type="checkbox" />
            <label htmlFor="cat12">On Sale</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductStatus;
