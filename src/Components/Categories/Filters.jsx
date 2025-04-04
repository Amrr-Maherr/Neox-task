import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setActiveCategory,
  setMaxPrice,
  selectAvailableCategories,
  selectActiveCategory,
  selectMaxPrice,
  resetFilters,
} from "../../Redux/products/filtersSlice";

function Filters() {
  const dispatch = useDispatch();

  const availableCategories = useSelector(selectAvailableCategories);
  const activeCategory = useSelector(selectActiveCategory);
  const currentMaxPrice = useSelector(selectMaxPrice);

  const sliderMinPrice = 0;
  const sliderMaxPrice = 3500;

  const handleCategoryChange = (category) => {
    dispatch(setActiveCategory(category));
  };

  const handlePriceChange = (event) => {
    dispatch(setMaxPrice(Number(event.target.value)));
  };

  return (
    <div className="p-4 rounded-lg shadow-sm bg-white w-full max-w-xs">
      <h3 className="text-3xl font-semibold mb-4 pb-2 border-b text-yellow-500">Filters</h3>
      <div className="mb-5">
        <h4 className="text-md font-medium mb-2">Categories</h4>
        {availableCategories.length > 0 ? (
          <ul className="space-y-1 max-h-48 overflow-y-auto">
            {availableCategories.map((category) => (
              <li
                key={category}
                className="flex items-center justify-between text-sm"
              >
                <label
                  htmlFor={`category-${category}`}
                  className="flex items-center cursor-pointer capitalize"
                >
                  <input
                    type="radio"
                    id={`category-${category}`}
                    name="category"
                    value={category}
                    checked={activeCategory === category}
                    onChange={() => handleCategoryChange(category)}
                    className="mr-2 h-4 w-4 rounded text-indigo-600 focus:ring-indigo-500 border-gray-300"
                  />
                  {category}
                </label>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-gray-500">Loading categories...</p>
        )}
      </div>
      <div className="border-t pt-4">
        <h4 className="text-md font-medium mb-2">Price</h4>
        <div className="mb-2">
          <input
            type="range"
            id="priceRange"
            name="priceRange"
            min={sliderMinPrice}
            max={sliderMaxPrice}
            value={currentMaxPrice}
            onChange={handlePriceChange}
            className="w-full h-2 rounded-lg appearance-none cursor-pointer  bg-yellow-500"
            step="10"
          />
        </div>
        <p className="text-sm text-gray-600 text-center">
          Up to: ${currentMaxPrice}
        </p>
      </div>
      <div className="mt-6 text-center">
        <button
          onClick={() => dispatch(resetFilters())}
          className="text-sm text-indigo-600 hover:text-indigo-800 px-3 py-1 rounded hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-500"
        >
          Reset All Filters
        </button>
      </div>
    </div>
  );
}

export default Filters;
