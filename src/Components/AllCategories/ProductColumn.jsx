// ProductColumn.jsx
import React from "react";
import ProductCard from "../AllCategories/ProductCard";

function ProductColumn({ title, products }) {
  return (
    <div className="mt-5">
      <h2 className="text-xl font-light border-b-2 border-yellow-500 pb-3 mb-5">
        {title}
      </h2>
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
}

export default ProductColumn;
