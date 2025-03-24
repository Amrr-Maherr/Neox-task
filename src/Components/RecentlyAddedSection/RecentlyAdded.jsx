import React, { useEffect } from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Title from "../SectionTitle/Title";
import ProductSlider from "../ProductSlider/Slider";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  selectAllProducts,
  selectProductsStatus,
  selectProductsError,
} from "../../Redux/products/productsSlice"; // Adjust the path as needed
import ImagOne from "../../Assets/GoldPhone-1-100x100.webp"; // Import default image

config.autoAddCss = false;

const RecentlyAdded = () => {
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
    content = <p>Loading...</p>;
  } else if (status === "succeeded") {
    // Modify the products array to ensure each product has an image URL
    const productsWithImages = products.map((product) => ({
      ...product,
      image: product.image || ImagOne, // Use product image if available, otherwise default image
    }));
    content = <ProductSlider products={productsWithImages} />;
  } else if (status === "failed") {
    content = <p>Error: {error}</p>;
  }

  return (
    <div className="bg-white my-10 py-10 mx-auto w-[85%]">
      <div className="px-4">
        <div className="flex justify-between items-center">
          <Title title="Recently Added" />
        </div>
        <hr className="mb-5" />
        <ProductSlider products={products} cardType="col"/>;
      </div>
    </div>
  );
};

export default RecentlyAdded;

