import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import OrDivider from "./OrDivider"; // <-- قم باستيراد كومبونانت الفاصل
import TopNavbar from "../NavBar/TopNavbar";
import MainNav from "../NavBar/MainNav";
import MegaMenu from "../ProductInfo/MegaMenu";
import LogoPrands from "../LogoBannar/LogoBrands";
import FooterIndex from "../Footer/FooterIndex";
import AllCat from "../AllCategories/AllCat";
import Breadcrumb from "../ProductInfo/Breadcrumb"
export default function Account() {
  return (
    <>
      <TopNavbar />
      <MainNav />
      <MegaMenu />
      <Breadcrumb/>
      <section className="w-[85%] mx-auto py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 md:gap-12 items-stretch">
          <div className="flex">
            <LoginForm />
          </div>
          <div className="hidden md:flex">
            <OrDivider />
          </div>
          <div className="flex">
            <RegisterForm />
          </div>
        </div>
      </section>
      <AllCat />
      <LogoPrands />
      <FooterIndex />
    </>
  );
}
