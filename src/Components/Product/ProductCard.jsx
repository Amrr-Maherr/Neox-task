import React from "react";
import CardActions from "../Product/ProductAction/CardActions";
import AddToCartButton from "../Product/ProductAction/AddToCart/AddToCartButton";

function ProductCard({ product, cardType = "col" }) {
  const isHorizontal = cardType === "row";

  return (
    <div
      className={`
      flex 
      border rounded-lg hover:shadow-md bg-white overflow-hidden relative
      ${isHorizontal ? "flex-row h-auto" : "flex-col h-auto"}
    `}
    >
      <div className={isHorizontal ? `w-full my-4` : "order-2 w-full my-4 "}>
        <figure className="relative pt-[100%]">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src={product.image}
            alt={product.title}
          />
        </figure>
      </div>
      <div
        className={
          isHorizontal
            ? `text-center p-4 absolute right-0 top-0`
            : "order-1 py-2 px-4"
        }
      >
        <h3 className="font-medium text-lg">{product.title.slice(0, 10)}</h3>
        <p className="text-gray-600 text-sm">
          {product.description.slice(0, 10)}
        </p>
      </div>
      <div
        className={`
        ${isHorizontal ? "w-3/5 p-4" : "w-full p-4 order-3"}
        flex flex-col
      `}
      >
        <div
          className={`
          flex items-center mt-auto "flex-row justify-between w-full
        `}
        >
          <span className="font-bold">${product.price}</span>
          <AddToCartButton product={product} />
        </div>
        <div className="mt-2">
          <CardActions />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
