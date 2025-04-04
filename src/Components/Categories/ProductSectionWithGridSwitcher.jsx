import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faList,
  faGrip,
  faTh,
  faThLarge,
  faSpinner,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";
import ProductCard from "../Product/ProductCard";
import {
  fetchProducts,
  selectAllProducts,
  selectProductsStatus,
  selectProductsError,
} from "../../Redux/products/productsSlice";
import {
  selectActiveCategory,
  selectMaxPrice,
} from "../../Redux/products/filtersSlice";

function ProductSectionWithGridSwitcher() {
  const [gridClass, setGridClass] = useState("grid-cols-4");
  const dispatch = useDispatch();

  const allProducts = useSelector(selectAllProducts);
  const status = useSelector(selectProductsStatus);
  const error = useSelector(selectProductsError);

  const activeCategory = useSelector(selectActiveCategory);
  const maxPrice = useSelector(selectMaxPrice);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  const handleGridChange = (newGridClass) => {
    setGridClass(newGridClass);
  };

  const gridOptions = [
    { class: "grid-cols-5", icon: faList, label: "View as list (1 column)" },
    { class: "grid-cols-2", icon: faGrip, label: "View 2 columns" },
    { class: "grid-cols-3", icon: faTh, label: "View 3 columns" },
    { class: "grid-cols-4", icon: faThLarge, label: "View 4 columns" },
  ];

  let content;

  if (status === "loading") {
    content = (
      <div className="text-center py-10">
        <FontAwesomeIcon
          icon={faSpinner}
          spin
          size="3x"
          className="text-indigo-500"
        />
        <p className="mt-2 text-gray-600">Loading Products...</p>
      </div>
    );
  } else if (status === "succeeded") {
    let filteredProducts = allProducts;
    if (activeCategory) {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === activeCategory
      );
    }

    filteredProducts = filteredProducts.filter(
      (product) => product.price <= maxPrice
    );

    if (filteredProducts.length > 0) {
      content = (
        <div className={`grid ${gridClass} gap-4 md:gap-6`}>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} cardType="col" />
          ))}
        </div>
      );
    } else {
      content = (
        <div className="text-center py-10 text-gray-500">
          {activeCategory
            ? `No products found in "${activeCategory}" up to $${maxPrice}.`
            : `No products found up to $${maxPrice}.`}
          <p className="mt-2">
            Try adjusting your filters or use 'Reset All Filters'.
          </p>
        </div>
      );
    }
  } else if (status === "failed") {
    content = (
      <div className="text-center py-10 text-red-600 bg-red-100 p-4 rounded border border-red-300">
        <FontAwesomeIcon
          icon={faExclamationTriangle}
          size="2x"
          className="mb-2"
        />
        <p className="font-semibold">Error!</p>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center bg-gray-200 p-5 rounded mb-4 gap-3">
        <div className="flex items-center gap-3">
          {gridOptions.map((option) => (
            <button
              key={option.class}
              type="button"
              onClick={() => handleGridChange(option.class)}
              aria-label={option.label}
              className={`p-2 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-500 ${
                gridClass === option.class
                  ? "bg-gray-300 text-indigo-700"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <FontAwesomeIcon icon={option.icon} />
            </button>
          ))}
        </div>
        <select className="p-2 border border-gray-300 bg-white rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm">
          <option value="">Sort by...</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="rating-desc">Rating: High to Low</option>
        </select>
      </div>
      {/* عرض المحتوى */}
      <div>{content}</div>
    </div>
  );
}

export default ProductSectionWithGridSwitcher;
