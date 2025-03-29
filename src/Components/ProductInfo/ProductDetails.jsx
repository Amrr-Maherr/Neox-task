import MainNav from "../NavBar/MainNav";
import MegaMenu from "../ProductInfo/MegaMenu";
import TopNavbar from "../NavBar/TopNavbar";
import Breadcrumb from "./Breadcrumb";
import CatBox from "./CatBox";
import Banner from "./Banner";
import LatestProducts from "./LatestProducts";
import LogoPrands from "../LogoBannar/LogoBrands";
import FooterIndex from "../Footer/FooterIndex";
import ProductBox from "./ProductBox";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Outlet, useParams } from "react-router-dom";
import Loader from "../Spinner/Loader";

export default function ProductDetails() {
  const { id } = useParams();
  const {
    data: product,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["Product", id],
    queryFn: async () => {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      return response.data;
    },
  });

  if (isLoading) {
    return (
      <>
        <div className="h-dvh flex items-center justify-center">
          <Loader />
        </div>
      </>
    );
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <section>
        <TopNavbar />
        <MainNav />
        <MegaMenu />
        <Breadcrumb />
        <div className="grid grid-cols-4 w-[85%] mx-auto">
          <div className="col-span-1 hidden md:block pr-10">
            <div className="mb-[50px]">
              <CatBox id={product.id} />
            </div>
            <div>
              <Banner />
            </div>
            <div className="my-[50px]">
              <LatestProducts />
            </div>
          </div>
          <div className="col-span-3 w-full">
            <ProductBox product={product} key={product.id} />
            <div>
              <Outlet/>
            </div>
          </div>
        </div>
        <LogoPrands />
        <FooterIndex />
      </section>
    </>
  );
}
