import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faCodeCompare,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

const MainProductCard = ({ product }) => {
  return (
    <div className="bg-white h-full p-4 flex flex-col items-center mb-2 card group">
      {product && (
        <>
          <div className="mb-2 w-full">
            <h3 className="text-sm text-gray-600 my-3">{product.category}</h3>
            <h2 className="text-blue-500 font-semibold">{product.name.slice(0,10)}</h2>
          </div>
          <figure
            className="flex-grow flex items-center justify-center overflow-hidden"
            style={{ height: "100%" }}
          >
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-full object-contain"
            />
          </figure>
          <div className="flex items-center justify-between mt-2 w-full">
            <div className="flex items-center">
              <p className="text-red-500 font-semibold">
                $
                {product.discountedPrice
                  ? product.discountedPrice.toFixed(2)
                  : product.discountPrice.toFixed(2)}
              </p>
            </div>
            <button className="bg-yellow-400 px-10 py-2 rounded-full text-white hover:bg-gray-500 flex items-center">
              <FontAwesomeIcon icon={faShoppingCart} className="mr-2" /> add to
              cart
            </button>
          </div>
          <div className="border-t w-full border-gray-300 mt-4 pt-2 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex gap-2 w-full text-sm justify-around">
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faHeart}
                  className="text-gray-500 hover:text-red-500 cursor-pointer mr-1"
                />
                WishList
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faCodeCompare}
                  className="text-gray-500 hover:text-blue-500 cursor-pointer mr-1"
                />
                Compare
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MainProductCard;
