import React from "react";

function ProductCard({ product }) {
  return (
    <div className="rounded-lg p-4 mb-4 flex items-center">
      <div className="relative w-20 h-20 rounded-md mr-4 overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="absolute top-0 left-0 w-full h-full object-contain"
        />
      </div>

      <div className="w-2/3 pl-4">
        <h3 className="text-sm font-semibold mb-1 text-[#116CC1]">
          {product.name}
        </h3>
        <div className="text-yellow-500">★★★★★</div>{" "}
        <p className="text-gray-300 font-light">{product.price}</p>
        {product.originalPrice && (
          <p className="text-gray-400 line-through">{product.originalPrice}</p>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
