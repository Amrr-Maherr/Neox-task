import RecentlyAdded from "../RecentlyAddedSection/RecentlyAdded";

export default function Accessories() {
  return (
    <>
      {/* Grid section: Stacks on small screens, becomes grid on medium+ */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 p-4 md:p-0">
        {" "}
        {/* Added gap and padding for mobile */}
        {/* Recently Added Section */}
        <div className="md:col-span-3">
          {" "}
          {/* Takes full width on mobile, 3 cols on md+ */}
          <RecentlyAdded />
        </div>
        {/* Price and Button Section */}
        <div className="md:col-span-1 flex items-center justify-center flex-col text-center mt-6 md:mt-0">
          {" "}
          {/* Added margin top for mobile spacing, text-center for mobile */}
          <div>
            {/* Responsive Price Font Size */}
            <p className="text-red-700 text-3xl sm:text-4xl lg:text-5xl mb-3 md:mb-5">
              $2,559.00
            </p>
            {/* Responsive Item Count Font Size */}
            <p className="text-base sm:text-lg text-gray-500 mb-4 md:mb-5">
              for 3 item(s)
            </p>
          </div>
          <div>
            {/* Responsive Button Padding */}
            <button className="bg-gray-500 px-6 md:px-10 py-2 rounded-full text-white hover:bg-black flex items-center w-full md:w-auto justify-center">
              {" "}
              {/* Full width button on small screens */}
              Add All To Cart
            </button>
          </div>
        </div>
      </div>

      {/* Checkbox Section */}
      <div className="p-4 md:p-6">
        {" "}
        {/* Responsive Padding */}
        <div>
          <div className="flex items-center mb-4">
            <input
              id="product-checkbox-1" // Use unique IDs
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 flex-shrink-0" // Added flex-shrink-0
            />
            {/* Responsive Label Font Size */}
            <label
              htmlFor="product-checkbox-1" // Use htmlFor with corresponding ID
              className="ms-2 text-base md:text-lg lg:text-xl font-medium text-gray-900 dark:text-gray-300"
            >
              This product: Smartphone 6S 32GB LTE -{" "}
              <span className="text-red-600 whitespace-nowrap">$1,100.00</span>{" "}
              {/* Prevent price wrapping */}
            </label>
          </div>

          <div className="flex items-center mb-4">
            <input
              id="product-checkbox-2"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 flex-shrink-0"
            />
            <label
              htmlFor="product-checkbox-2"
              className="ms-2 text-base md:text-lg lg:text-xl font-medium text-blue-500"
            >
              Universal Headphones Case in Black -{" "}
              <span className="text-red-600 whitespace-nowrap">$159.00</span>
            </label>
          </div>

          <div className="flex items-center mb-4">
            <input
              id="product-checkbox-3"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 flex-shrink-0"
            />
            <label
              htmlFor="product-checkbox-3"
              className="ms-2 text-base md:text-lg lg:text-xl font-medium text-blue-500"
            >
              Tablet White EliteBook Revolve 810 G2 -{" "}
              <span className="text-red-600 whitespace-nowrap">$1,300.00</span>
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
