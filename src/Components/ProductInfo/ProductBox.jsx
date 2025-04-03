import React from "react";
import Compare from "../Product/ProductAction/Compare";
import Wishlist from "../Product/ProductAction/Wishlist";
import AddToCartWithQuantity from "./AddToCartWithQuantity";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import ImageGallery from "./ImageGallery";
import One from "../../Assets/360-camers.webp";
import Small from "../../Assets/1-100x100.webp";

export default function ProductBox({ product }) {
  console.log(product);
  const images = [product.image, Small, One, Small, One]
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto p-4">
        <div>
          <ImageGallery images={images} />
        </div>
        <div>
          <div>
            <p className="text-gray-400 text-sm md:text-base mb-2 md:mb-3">
              {product.category}
            </p>
          </div>
          <div>
            <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-3">
              {product.title}
            </h1>
          </div>
          <div>
            <p className="text-sm md:text-base text-gray-600 mb-4">
              {product.description}
            </p>
          </div>
          <div className="my-4 flex items-center">
            <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
            <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
            <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
            <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
            <FontAwesomeIcon icon={faStar} className="text-gray-300" />{" "}
            <p className="ml-2 text-xs md:text-sm text-gray-500">
              ({product.rating?.rate} rating) - ({product.rating?.count}{" "}
              reviews)
            </p>
          </div>
          <hr className="my-4" />
          <div className="flex items-center justify-start my-4 gap-4">
            <Compare product={product} /> 
            <Wishlist product={product} />
          </div>
          <div className="my-4 ml-1">
            {" "}
            <ul className="list-disc list-inside text-sm md:text-base text-gray-500 space-y-1">
              <li>4.7 inch 720p Screen</li>
              <li>Android 6.0 OS</li>
              <li>2.4 GHz Quad Core™ Processor</li>
              <li>23 MP front Camera</li>
            </ul>
          </div>
          <div className="my-4">
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-600">
              ${product.price}
            </p>
          </div>
          <div className="my-5">
            <AddToCartWithQuantity product={product} />
          </div>
        </div>
      </div>
    </>
  );
}
