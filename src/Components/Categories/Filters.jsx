import React, { useState } from "react"; // استيراد useState

function Filters() {
  // حالة لتتبع قيمة السعر المحددة بواسطة المنزلق (range input)
  // القيمة الافتراضية يمكن أن تكون القيمة القصوى أو أي قيمة أخرى
  const minPossiblePrice = 50; // الحد الأدنى الثابت للمقياس
  const maxPossiblePrice = 3490; // الحد الأقصى الثابت للمقياس
  const [selectedPrice, setSelectedPrice] = useState(maxPossiblePrice); // ابدأ بالقيمة القصوى

  return (
    <div className="p-4 rounded-lg shadow-sm bg-white w-full max-w-xs">
      <h3 className="text-lg font-semibold mb-4 pb-2">Filters</h3>

      {/* قسم العلامات التجارية */}
      <div className="mb-5">
        <h4 className="text-md font-medium mb-2">Brands</h4>
        <ul className="space-y-1">
          <li className="flex items-center justify-between text-sm">
            <label
              htmlFor="brand-placeholder-1"
              className="flex items-center cursor-pointer"
            >
              <input
                type="checkbox"
                id="brand-placeholder-1"
                name="brand"
                className="mr-2 h-4 w-4 rounded text-indigo-600 focus:ring-indigo-500"
              />
              Brand Example 1
            </label>
            <span className="text-xs text-gray-500">(?)</span>
          </li>
          <li className="flex items-center justify-between text-sm">
            <label
              htmlFor="brand-placeholder-2"
              className="flex items-center cursor-pointer"
            >
              <input
                type="checkbox"
                id="brand-placeholder-2"
                name="brand"
                className="mr-2 h-4 w-4 rounded text-indigo-600 focus:ring-indigo-500"
              />
              Brand Example 2
            </label>
            <span className="text-xs text-gray-500">(?)</span>
          </li>
          <li className="flex items-center justify-between text-sm">
            <label
              htmlFor="brand-placeholder-3"
              className="flex items-center cursor-pointer"
            >
              <input
                type="checkbox"
                id="brand-placeholder-3"
                name="brand"
                className="mr-2 h-4 w-4 rounded text-indigo-600 focus:ring-indigo-500"
              />
              Brand Example 3
            </label>
            <span className="text-xs text-gray-500">(?)</span>
          </li>
        </ul>
      </div>

      {/* قسم اللون */}
      <div className="mb-5">
        <h4 className="text-md font-medium mb-2">Color</h4>
        <ul className="space-y-1">
          <li className="flex items-center justify-between text-sm">
            <label
              htmlFor="color-placeholder-1"
              className="flex items-center cursor-pointer"
            >
              <input
                type="checkbox"
                id="color-placeholder-1"
                name="color"
                className="mr-2 h-4 w-4 rounded text-indigo-600 focus:ring-indigo-500"
              />
              Color Example 1
            </label>
            <span className="text-xs text-gray-500">(?)</span>
          </li>
          <li className="flex items-center justify-between text-sm">
            <label
              htmlFor="color-placeholder-2"
              className="flex items-center cursor-pointer"
            >
              <input
                type="checkbox"
                id="color-placeholder-2"
                name="color"
                className="mr-2 h-4 w-4 rounded text-indigo-600 focus:ring-indigo-500"
              />
              Color Example 2
            </label>
            <span className="text-xs text-gray-500">(?)</span>
          </li>
        </ul>
      </div>

      {/* قسم السعر - الآن مع input range */}
      <div>
        <h4 className="text-md font-medium mb-2">Price</h4>
        <div className="mb-2">
          <input
            type="range"
            id="priceRange"
            name="priceRange"
            min={minPossiblePrice} // الحد الأدنى للمنزلق
            max={maxPossiblePrice} // الحد الأقصى للمنزلق
            value={selectedPrice} // ربط القيمة بالحالة
            onChange={(e) => setSelectedPrice(Number(e.target.value))} // تحديث الحالة عند التغيير
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 accent-indigo-600" // تنسيق المنزلق
            step="10" // اختياري: تحديد مقدار القفزة في كل خطوة
          />
        </div>
        {/* عرض السعر المحدد */}
        <p className="text-sm text-gray-600 text-center">
          Up to: ${selectedPrice}
        </p>
        {/* أو يمكنك عرض النطاق الكامل إذا كان ذلك هو المطلوب */}
        {/* <p className="text-sm text-gray-600 text-center">
          Price: ${minPossiblePrice} — ${selectedPrice}
        </p> */}
      </div>
    </div>
  );
}

export default Filters;
