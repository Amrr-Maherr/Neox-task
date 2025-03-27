import MainNav from "../NavBar/MainNav";
import MegaMenu from "../ProductInfo/MegaMenu";
import TopNavbar from "../NavBar/TopNavbar";
import Breadcrumb from "./Breadcrumb";
import CatBox from "./CatBox";
export default function ProductDetails() {
    return (
      <>
        <section>
          <TopNavbar />
          <MainNav />
          <MegaMenu />
          <Breadcrumb />
          <div className="grid grid-cols-4 w-[85%] mx-auto">
            <div className="grid-cols-1">
              <div>
                <CatBox />
              </div>
            </div>
          </div>
        </section>
      </>
    );
}