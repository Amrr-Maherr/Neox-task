import RecentlyAdded from "../RecentlyAddedSection/RecentlyAdded"
export default function Accessories() {
    return (
      <>
        <div className="grid grid-cols-4">
          <div className="col-span-3">
            <RecentlyAdded />
          </div>
          <div className="col-span-1 flex items-center justify-center flex-col">
            <div>
              <p className="text-red-700 text-5xl mb-5">$2,559.00</p>
              <p className="text-1xl text-gray-500 mb-5">for 3 item(s)</p>
            </div>
            <div>
              <button className="bg-gray-500 px-10 py-2 rounded-full text-white hover:bg-black flex items-center">
                Add All To Cart
              </button>
            </div>
          </div>
        </div>
        <div className="p-5">
          <div>
            <div class="flex items-center mb-4">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="default-checkbox"
                class="ms-2 text-xl font-medium text-gray-900 dark:text-gray-300"
              >
                This product: Smartphone 6S 32GB LTE -{" "}
                <span className="text-red-600"> $1,100.00</span>
              </label>
            </div>
            <div class="flex items-center mb-4">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="default-checkbox"
                class="ms-2 text-xl font-medium text-blue-500"
              >
                Universal Headphones Case in Black -{" "}
                <span className="text-red-600">$159.00</span>
              </label>
            </div>
            <div class="flex items-center mb-4">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="default-checkbox"
                class="ms-2 text-xl font-medium text-blue-500"
              >
                Tablet White EliteBook Revolve 810 G2 -{" "}
                <span className="text-red-600">$1,300.00</span>
              </label>
            </div>
          </div>
        </div>
      </>
    );
}