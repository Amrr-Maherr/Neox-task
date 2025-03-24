import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import CardActions from "../Product/CardActions"; // استيراد الكومبوننت

function ProductCard({ product, cardType }) {
  const isHorizontal = cardType === "col";

  return (
    <div
      className={`
        ${isHorizontal ? "flex-row" : "flex-col"}
        flex 
        border rounded-lg hover:shadow-md group relative
        ${isHorizontal ? "max-w-xl" : "max-w-sm"}
      `}
    >
      {isHorizontal ? (
        <>
          <img
            className="w-1/2 h-auto object-contain"
            src={product.image}
            alt={product.title}
          />
          <div className="w-1/2 p-1 flex flex-col justify-around">
            <div>
              <h3 className="text-lg font-semibold">
                {product.title.slice(0, 10)}
              </h3>
              <p className="mt-2 text-gray-600">{product.description}</p>
            </div>
            <div>
              <div className="flex justify-between items-center">
                <span className="font-bold text-gray-800">
                  ${product.price}
                </span>
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  className="text-blue-500 hover:text-yellow-500 text-md cursor-pointer bg-gray-500 hover:bg-white p-1 rounded-full transition-colors duration-200"
                />
              </div>
              <div className="transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                <CardActions />
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="p-4">
            <h3 className="text-lg font-semibold">
              {product.title.slice(0, 10)}
            </h3>
            <p className="mt-2 text-gray-600">{product.description}</p>
          </div>
          <img
            className="w-full h-auto object-cover"
            src={product.image}
            alt={product.title}
          />
          <div className="flex justify-between items-center p-4">
            <span className="font-bold text-gray-800">${product.price}</span>
            <FontAwesomeIcon
              icon={faShoppingCart}
              className="text-white hover:text-yellow-500 text-md cursor-pointer bg-gray-500 hover:bg-white p-2 rounded-full transition-colors duration-200"
            />
          </div>
          <div className="transition-opacity duration-300 opacity-0 group-hover:opacity-100">
            <CardActions />
          </div>
        </>
      )}
    </div>
  );
}

export default ProductCard;
