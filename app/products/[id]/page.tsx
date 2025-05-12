import ProductDetailContainer from "@/components/ProductDetail/ProductDetailContainer";
import { ChevronRight } from "lucide-react";
import Link from "next/link";


const ProductDetail = ({ params }: { params: { id: string } }) => {
  const { id } = params;

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

      <ProductDetailContainer id={id} />
    </>
  );
};

export default ProductDetail;