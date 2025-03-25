// ProductCard.js
import React from "react";
import CardActions from "../Product/CardActions";
import { useDispatch } from "react-redux";
import AddToCartButton from "./AddToCart/AddToCartButton"; // استيراد الكومبوننت الجديد

function ProductCard({ product, cardType }) {
  const dispatch = useDispatch();
  const isHorizontal = cardType === "row";

  return (
    <div
      className={`
        ${isHorizontal ? "flex-row" : "flex-col"}
        flex 
        rounded-lg hover:shadow-xl group relative my-5
        ${isHorizontal ? "max-w-xl" : "max-w-sm"}
      `}
    >
      {isHorizontal ? (
        <>
          <img
            className="w-1/2 h-[150px] object-contain"
            src={product.image}
            alt={product.title}
          />
          <div className="w-1/2 p-1 flex flex-col justify-around">
            <div>
              <h3 className="text-md text-gray-400 font-light">
                {product.title.slice(0, 10)}
              </h3>
              <p className="mt-2 text-gray-600">
                {product.description.slice(0, 10)}
              </p>
            </div>
            <div>
              <div className="flex justify-between items-center">
                <span className="font-bold text-gray-800">
                  ${product.price}
                </span>
                <AddToCartButton product={product} />{" "}
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
            <h3 className="text-md font-semibold text-gray-400">
              {product.title.slice(0, 10)}
            </h3>
            <p className="mt-2 text-[#0163BD]">
              {product.description.slice(0, 10)}
            </p>
          </div>
          <img
            className="w-full h-[200px] object-contain"
            src={product.image}
            alt={product.title}
          />
          <div className="flex justify-between items-center p-4">
            <span className="font-bold text-gray-800">${product.price}</span>
            <AddToCartButton product={product} iconColor="text-white" />{" "}
            {/* استخدام الكومبوننت الجديد */}
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
