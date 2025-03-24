// ProductCard.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faCodeCompare,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white p-4 flex flex-col mb-2 card group hover:shadow-xl">
      <div className="mb-2">
        <h3 className="text-sm text-gray-600 my-3">{product.category}</h3>
        <h2 className="text-blue-500 font-semibold">{product.name.slice(0,10)}</h2>
      </div>
      <div className="flex-grow flex items-center justify-center">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="h-[200px] w-full object-contain"
        />
      </div>
      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center">
          {product.originalPrice && (
            <p className="text-gray-500 line-through mr-2">
              ${product.originalPrice.toFixed(2)}
            </p>
          )}
          <p className="text-red-500 font-semibold">
            $
            {product.discountedPrice
              ? product.discountedPrice.toFixed(2)
              : product.discountPrice.toFixed(2)}
          </p>
        </div>
        <div className="bg-gray-300 w-[35px] h-[35px] rounded-full flex items-center justify-center hover:bg-[#FED700] hover:w-[30px] hover:h-[30px] transition-all duration-300">
          <FontAwesomeIcon
            icon={faShoppingCart}
            className="text-white cursor-pointer group-hover:text-white transition-colors duration-300"
          />
        </div>
      </div>

      {/* الخط والإضافات في الأسفل (يظهر عند الهوفر) */}
      <div className="border-t  border-gray-300 mt-4 pt-2 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
    </div>
  );
};

export default ProductCard;
