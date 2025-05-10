"use client";

import ProductDetailContent from "@/components/ProductDetail/ProductDetailContent";
import ProductDetailOffers from "@/components/ProductDetail/ProductDetailOffers";
import ProductDetailTabs from "@/components/ProductDetail/ProductDetailTabs";
import useAxiosPrivate from "@/hooks/useAxiosPrivate";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

const ProductDetail = ({ params }: { params: { id: string } }) => {
    const axiosPrivate = useAxiosPrivate();
    const { id } = params;

    useEffect(() => {
        (async function() {
            try {
                const response = await axiosPrivate.get(`/api/products/${id}`);
                console.log(response);
                
            } catch (error) {
                console.log(error);
            }
        })();
    }, [id,axiosPrivate]);

  return (
    <>
      <div className="rts-navigation-area-breadcrumb bg_light-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="navigator-breadcrumb-wrapper">
                <Link href="/">Home</Link>
                <ChevronRight width={18} />
                <Link className="current" href="/login">
                  Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rts-chop-details-area rts-section-gap bg_light-1">
        <div className="container">
          <div className="shopdetails-style-1-wrapper">
            <div className="row g-5">
              <div className="col-xl-8 col-lg-8 col-md-12">
                <ProductDetailContent />
                <ProductDetailTabs />
              </div>
              <div className="col-xl-3 col-lg-4 col-md-12 offset-xl-1  rts-sticky-column-item">
                <ProductDetailOffers />
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;