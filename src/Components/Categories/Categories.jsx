import MainNav from "../NavBar/MainNav"
import TopNavbar from "../NavBar/TopNavbar"
import Banner from "../ProductInfo/Banner";
import Breadcrumb from "../ProductInfo/Breadcrumb"
import CatBox from "../ProductInfo/CatBox";
import LatestProducts from "../ProductInfo/LatestProducts";
import MegaMenu from "../ProductInfo/MegaMenu"
import RecentlyAdded from "../RecentlyAddedSection/RecentlyAdded";
import FooterIndex from "../Footer/FooterIndex"
export default function Categories() {
    return (
      <>
        <TopNavbar />
        <MainNav />
        <MegaMenu />
        <Breadcrumb />
        <section>
          <div className="grid grid-cols-1 md:grid-cols-4 w-[85%] mx-auto">
            <div className="col-span-1 hidden md:block">
              <div className="my-5">
                <CatBox />
              </div>
              <div className="my-5">
                <Banner />
              </div>
              <div className="my-5">
                <LatestProducts />
              </div>
            </div>
            <div className="col-span-3">
              <RecentlyAdded />
            </div>
          </div>
        </section>
        <FooterIndex/>
      </>
    );
}