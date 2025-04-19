import Banner from "@/components/Home/Banner/Banner";
import RtsFeature from "@/components/Home/RtsFeature/RtsFeature";
import FeaturedCards from "@/components/Home/FeaturedCards/FeaturedCards";
import DiscountProducts from "@/components/Home/DiscountProducts/DiscountProducts";
import WeeklyGroceries from "@/components/Home/WeeklyGroceries/WeeklyGroceries";
import TrendingProducts from "@/components/Home/TrendingProducts/TrendingProducts";

export default function Home() {
  return (
    <div>
      <Banner />  
      <RtsFeature />
      <FeaturedCards />
      <DiscountProducts />
      <WeeklyGroceries />
      <TrendingProducts />
    </div>
  );
}