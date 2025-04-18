import Navbar from "@/components/Navbar/Navbar";
import Header from "../components/Header/Header";
import Banner from "@/components/Home/Banner/Banner";
import RtsFeature from "@/components/Home/RtsFeature/RtsFeature";
import FeaturedCards from "@/components/Home/FeaturedCards/FeaturedCards";
import DiscountProducts from "@/components/Home/DiscountProducts/DiscountProducts";

export default function Home() {
  return (
    <div>
      <Header />
      <Navbar />  
      <Banner />  
      <RtsFeature />
      <FeaturedCards />
      <DiscountProducts />
    </div>
  );
}