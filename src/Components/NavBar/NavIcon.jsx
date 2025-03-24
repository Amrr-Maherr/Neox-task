import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCodeCompare,
  faHeart,
  faUser,
  faCartShopping,
  faTrash, // Import trash icon
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux"; // Import useDispatch and useSelector
import { removeItem } from "../../Redux/products/cartSlice"; // Import removeItem action
import toast from "react-hot-toast"; // Import toast

function NavIcon() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items); // Get cart items from Redux state
  const cartTotal = useSelector((state) => state.cart.total);

  // حساب العدد الكلي للمنتجات في العربة (مع مراعاة الكميات)
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id)); // Dispatch removeItem action
    toast.success("Item removed from cart!", {
      duration: 2000,
      position: "bottom-right",
    });
  };


  return (
    <>
      <div className="col-span-1 flex items-center justify-end gap-5">
        <FontAwesomeIcon
          icon={faCodeCompare}
          className="text-xl p-2 cursor-pointer"
        />
        <FontAwesomeIcon
          icon={faHeart}
          className="text-xl text-red-500 p-2 cursor-pointer"
        />
        <FontAwesomeIcon icon={faUser} className="text-xl p-2 cursor-pointer" />
        <div className="relative">
          <FontAwesomeIcon
            data-drawer-target="drawer-backdrop"
            data-drawer-show="drawer-backdrop"
            data-drawer-backdrop="true"
            aria-controls="drawer-backdrop"
            icon={faCartShopping}
            className="text-xl text-yellow-500 p-2 cursor-pointer"
          />
          {cartCount > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs px-2 py-1/2">
              {cartCount}
            </span>
          )}
        </div>
      </div>

      {/* <!-- drawer component --> */}
      <div
        id="drawer-backdrop"
        className="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white w-80"
        tabIndex="-1"
        aria-labelledby="drawer-backdrop-label"
      >
        <div className="flex items-center justify-between">
          <h5
            id="drawer-backdrop-label"
            className="text-base font-semibold text-gray-900 uppercase"
          >
            Cart
          </h5>
          <button
            type="button"
            data-drawer-hide="drawer-backdrop"
            aria-controls="drawer-backdrop"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close menu</span>
          </button>
        </div>
        <div className="py-4 overflow-y-auto">
          {cartItems && cartItems.length > 0 ? ( // إضافة فحص لـ cartItems
            <ul>
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between py-2 border-b"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-contain"
                  />
                  <span className="text-sm font-medium text-gray-900">
                    {item.title.slice(0, 20)}
                  </span>
                  <span className="text-sm text-gray-500">${item.price}</span>
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">Your cart is empty.</p>
          )}
          <div className="mt-4">
            <span className="text-base font-semibold text-gray-900">
              Total: ${cartTotal}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavIcon;
