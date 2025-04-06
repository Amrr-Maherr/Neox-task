import TopNavbar from "../NavBar/TopNavbar"
import MainNav from "../NavBar/MainNav";
import MegaMenu from "../ProductInfo/MegaMenu"
import LogoPrands from "../LogoBannar/LogoBrands";
import AllCat from "../AllCategories/AllCat";
import FooterIndex from "../Footer/FooterIndex"
import LostPasswordForm from "./LostPasswordForm";
export default function Reset() {
    return (
        <>
        <TopNavbar/>
            <MainNav />
            <MegaMenu/>
        <section className="w-[85%] mx-auto">
            <LostPasswordForm/>
            </section>
            <LogoPrands />
            <AllCat />
            <FooterIndex/>
        </>
    )
}