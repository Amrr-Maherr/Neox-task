import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchProducts,
  selectAllProducts,
  selectProductsStatus,
  selectProductsError,
} from "../../Redux/products/productsSlice";
import ProductCard from "../Product/ProductCard";
import { Toaster } from "react-hot-toast";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import SectionTitle from "../SectionTitle/Title";
import ImagOne from "../../Assets/GoldPhone-1-100x100.webp";

config.autoAddCss = false;

const BestSellers = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);
  const status = useSelector(selectProductsStatus);
  const error = useSelector(selectProductsError);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  const topLinks = [
    { name: "Top 20", href: "#top20" },
    { name: "Smart Phones & Tablets", href: "#smartphones-tablets" },
    { name: "Laptops & Computers", href: "#laptops-computers" },
    { name: "Video Cameras", href: "#video-cameras" },
  ];

  let content;

  if (status === "loading") {
    content = <div>Loading...</div>;
  } else if (status === "succeeded") {
    const productsWithImages = products.map((product) => ({
      ...product,
      image: product.image || ImagOne,
    }));
    content = (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {productsWithImages.map((product) => (
          <ProductCard product={product} key={product.id} cardType="row" />
        ))}
      </div>
    );
  } else {
    content = <div>Error: {error}</div>;
  }

  return (
    <>
      <div className="bg-white py-4 w-[85%] mx-auto my-5">
        <div className="container mx-auto">
          <div className="flex justify-between items-center  overflow-auto">
            <SectionTitle title="Best Sellers " />
            <div className="flex space-x-4 text-gray-600 my-3">
              {topLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-gray-500 rounded-full px-3 py-1 text-sm ${
                    index === 0 ? "border-2  border-yellow-400" : ""
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <hr />
          {content}
        </div>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};

export default BestSellers;
