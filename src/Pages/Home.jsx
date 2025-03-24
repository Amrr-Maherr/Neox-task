import TopNavbar from "../Components/NavBar/TopNavbar"
import MainNav from "../Components/NavBar/MainNav";
import HeroSection from "../Components/Hero/HeroSection";
import Categories from "../Components/CategoriesSection/Categories";
import Taps from "../Components/TapsSection/Taps";
export default function Home() {
  return (
    <>
      <TopNavbar />
          <MainNav />
      <HeroSection />
      <Categories />
      <Taps/>
    </>
  );
}
