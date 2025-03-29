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
  const images = [product.image, Small, One, Small, One];
  return (
    <>
      <div className="grid grid-cols-4 gap-5 mx-auto">
        <div className="col-span-2">
          <ImageGallery images={images} />
        </div>
        <div className="col-span-2 ">
          <div>
            <p className="text-gray-300 mb-5">{product.category}</p>
          </div>
          <div>
            <p className="text-xl md:text-2xl lg:text-3xl mb-3">
              {product.title.slice(0, 30)}
            </p>
          </div>
          <div>
            <p className="text-sm md:text-base">
              {product.description.slice(0, 100)}
            </p>
          </div>
          <div className="my-5 flex items-center">
            <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
            <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
            <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
            <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
            <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
            <p className="ml-2 text-sm md:text-base">(3 customer reviews)</p>
          </div>
          <hr />
          <div className="flex items-center justify-start my-5 gap-3">
            <p>
              <Compare />
            </p>
            <p>
              <Wishlist />
            </p>
          </div>
          <div className="my-5">
            <ul className="list-disc text-sm md:text-base">
              <li>4.7 inch 720p Screen</li>
              <li>Android 6.0 OS</li>
              <li>2.4 GHz Quad Core™ Processor</li>
              <li>23 MP front Camera</li>
            </ul>
          </div>
          <div>
            <p className="text-2xl md:text-3xl lg:text-4xl">${product.price}</p>
          </div>
          <div className="my-5">
            <AddToCartWithQuantity product={product} />
          </div>
        </div>
      </div>
    </>
  );
}
