import NavLogo from "../NavBar/NavLogo"
import CategoriesDrawer from "./CategoriesDrawer";
import MobileNavbar from "./MobileNavbar";
import NavIcons from "./NavIcon";
import NavSearchBar from "./NavSearchBar";
export default function MainNav() {
    return (
      <>
        <section className="w-[85%] mx-auto my-5 hidden xl:block">
          <div className="grid grid-cols-4">
            <NavLogo
              LogoText="elector"
              fontSize="text-5xl"
              fontWight="font-extrabold"
            />
            <NavSearchBar />
            {/* <CategoriesDrawer/> */}
            <NavIcons />
          </div>
        </section>
        <MobileNavbar />
      </>
    );
}