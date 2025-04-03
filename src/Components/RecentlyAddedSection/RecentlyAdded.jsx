import React, { useEffect } from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Title from "../SectionTitle/Title";
import ProductCard from "../Product/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  selectAllProducts,
  selectProductsStatus,
  selectProductsError,
} from "../../Redux/products/productsSlice";
import ImagOne from "../../Assets/GoldPhone-1-100x100.webp";
import Slider from "../DynamicSlider/Slider";

config.autoAddCss = false;

const RecentlyAdded = ({width}) => {
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);
  const status = useSelector(selectProductsStatus);
  const error = useSelector(selectProductsError);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  let content;

  if (status === "loading") {
    content = <div className="text-center py-10">Loading...</div>;
  } else if (status === "succeeded") {
    const slides = products.map((product) => ({
      image: product.image || ImagOne,
      title: product.name,
    }));
    content = <Slider slides={slides} slidesPerView={4} height="300px" />;
    content = (
      <Slider slidesPerView={4} height="auto">
        {products.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            cardType="column" 
          />
        ))}
      </Slider>
    );
  
  } else if (status === "failed") {
    content = <div className="text-red-500 text-center">Error: {error}</div>;
  }

  return (
    <div className={`bg-white my-5 py-10 mx-auto ${width}`}>
      <div className="px-4">
        <div className="flex justify-between items-center">
          <Title title="Recently Added" />
        </div>
        <hr className="mb-5 flex" />
        {content}
      </div>
    </div>
  );
};

export default RecentlyAdded;
