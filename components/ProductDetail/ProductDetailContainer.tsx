"use client";

import { useEffect, useMemo } from "react";
import useAxiosPrivate from "@/hooks/useAxiosPrivate";
import ProductDetailOffers from "./ProductDetailOffers";
import productDetailSlice, { useTypedProductDetailSelector } from "@/store/product-detail-slice";
import { useDispatch } from "react-redux";
import dynamic from "next/dynamic";

const DynamicProductDetailContent = dynamic(
  () => import("./ProductDetailContent"),
  {
    loading: () => <p>Loading...</p>,
  }
);

const DynamicProductDetailTabs = dynamic(() => import("./ProductDetailTabs"), {
  loading: () => <p>Loading...</p>,
});

const ProductDetailContainer = ({ id }: { id: string }) => {
  const product = useTypedProductDetailSelector(
    (state) => state.productDetailReducer.product
  );
  const axiosPrivate = useAxiosPrivate();
  const dispatch = useDispatch();

  const productContent = useMemo(() => {
    return {
      brand: product?.brand ?? "",
      title: product?.title ?? "",
      category: product?.category ?? [],
      tags: product?.tags ?? [],
      description: product?.description ?? "",
      price: product?.price ?? 0,
      value: product?.value ?? 0,
      life: product?.life ?? new Date(),
      type: product?.type ?? 0,
      image: product?.image ?? null,
      ratingStars: product?.ratingStars ?? { average: 0, total: 0 }
    };
  }, [product]);

  const productDetailTabContent = useMemo(() => {
    return {
      id: product?.id ?? 0,
      additionalInfo: product?.additionalInfo ?? "",
      brand: product?.brand ?? "",
      type: product?.type ?? 0,
      ratingStars: product?.ratingStars ?? { average: 0, total: 0 }
    };
  }, [product]);

  useEffect(() => {
    (async function () {
      try {
        const response = await axiosPrivate.get(`/api/products/${id}`);
        dispatch(productDetailSlice.actions.getAllProductItems(response.data.product));
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id, axiosPrivate, dispatch]);

  console.log(product);

  return (
    <div className="rts-chop-details-area rts-section-gap bg_light-1">
      <div className="container">
        <div className="shopdetails-style-1-wrapper">
          <div className="row g-5">
            <div className="col-xl-8 col-lg-8 col-md-12">
              <DynamicProductDetailContent productContent={productContent} />
            </div>
            <div className="col-xl-3 col-lg-4 col-md-12 offset-xl-1  rts-sticky-column-item">
              <ProductDetailOffers />
            </div>
            <div className="col-md-12">
              <DynamicProductDetailTabs productDetailTabContent={productDetailTabContent} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailContainer;