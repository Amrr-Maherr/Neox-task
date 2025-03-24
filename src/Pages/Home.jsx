import TopNavbar from "../Components/NavBar/TopNavbar"
import MainNav from "../Components/NavBar/MainNav";
import HeroSection from "../Components/Hero/HeroSection";
import Categories from "../Components/CategoriesSection/Categories";
import Taps from "../Components/TapsSection/Taps";
import ProductsGrid from "../Components/ProductsGridSection/ProductsGrid";
import RecentlyAdded from "../Components/RecentlyAddedSection/RecentlyAdded";
import Ad from "../Components/Banner/Ad"
import { Toaster } from "react-hot-toast";
export default function Home() {
  return (
    <>
      <TopNavbar />
      <MainNav />
      <HeroSection />
      <Categories />
      <Taps />
      <ProductsGrid />
      <RecentlyAdded />
      <Ad />
      <Toaster />
    </>
  );
}
