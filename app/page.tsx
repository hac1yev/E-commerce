import Navbar from "@/components/Navbar/Navbar";
import Header from "../components/Header/Header";
import Banner from "@/components/Home/Banner/Banner";
import RtsFeature from "@/components/Home/RtsFeature/RtsFeature";
import FeaturedCards from "@/components/Home/FeaturedCards/FeaturedCards";

export default function Home() {
  return (
    <div>
      <Header />
      <Navbar />  
      <Banner />  
      <RtsFeature />
      <FeaturedCards />
    </div>
  );
}