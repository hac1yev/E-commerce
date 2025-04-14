import Navbar from "@/components/Navbar/Navbar";
import Header from "../components/Header/Header";
import Banner from "@/components/Home/Banner/Banner";
import RtsFeature from "@/components/Home/RtsFeature/RtsFeature";
import Cards from "@/components/Cards/Cards";

export default function Home() {
  return (
    <div>
      <Header />
      <Navbar />  
      <Banner />  
      <RtsFeature />
      <Cards />
    </div>
  );
}