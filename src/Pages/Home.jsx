import TopNavbar from "../Components/NavBar/TopNavbar"
import MainNav from "../Components/NavBar/MainNav";
import HeroSection from "../Components/Hero/HeroSection";
import Categories from "../Components/CategoriesSection/Categories";
import Taps from "../Components/TapsSection/Taps";
import ProductsGrid from "../Components/ProductsGridSection/ProductsGrid";
import RecentlyAdded from "../Components/RecentlyAddedSection/RecentlyAdded";
import Ad from "../Components/Banner/Ad"
import { Toaster } from "react-hot-toast";
import BestSellers from "../Components/BestSellersSection/BestSellers";
import AllCat from "../Components/AllCategories/AllCat";
import LogoBrands from "../Components/LogoBannar/LogoBrands"
import FooterIndex from "../Components/Footer/FooterIndex"
export default function Home() {
  return (
    <>
      <TopNavbar />
      <MainNav />
      <HeroSection />
      <Categories />
      <Taps />
      <ProductsGrid />
      <BestSellers />
      <Ad />
      <AllCat />
      <RecentlyAdded />
      <LogoBrands />
      <FooterIndex/>
      <Toaster />
    </>
  );
}
