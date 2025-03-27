import MainNav from "../NavBar/MainNav";
import MegaMenu from "../ProductInfo/MegaMenu";
import TopNavbar from "../NavBar/TopNavbar";
import Breadcrumb from "./Breadcrumb";
import CatBox from "./CatBox";
import Banner from "./Banner";
import LatestProducts from "./LatestProducts";
import LogoPrands from "../LogoBannar/LogoBrands";
import FooterIndex from "../Footer/FooterIndex"
export default function ProductDetails() {
    return (
      <>
        <section>
          <TopNavbar />
          <MainNav />
          <MegaMenu />
          <Breadcrumb />
          <div className="grid grid-cols-4 w-[85%] mx-auto">
            <div className="col-span-1 hidden md:block">
              <div className="mb-[20px]">
                <CatBox />
              </div>
              <div>
                <Banner />
              </div>
              <div className="my-[20px]">
                <LatestProducts />
              </div>
            </div>
            <div className="col-span-3 w-full bg-red-500"></div>
          </div>
          <LogoPrands />
          <FooterIndex />
        </section>
      </>
    );
}