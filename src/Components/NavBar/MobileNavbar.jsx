import React, { useState } from "react";
import NavLogo from "./NavLogo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faHeart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export default function MobileNavbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <nav className="bg-yellow-500 border-gray-200 block md:hidden">
        <div className="flex justify-between items-center p-3">
          <div className="flex items-center gap-2">
            <button
              onClick={toggleSidebar}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-default"
              aria-expanded={isSidebarOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <NavLogo
              LogoText="elector"
              fontSize="text-3xl"
              fontWight="font-extrabold"
            />
          </div>
          <div className="flex gap-3">
            <div className="flex flex-col items-center">
              <FontAwesomeIcon
                icon={faShoppingCart}
                className="text-gray-700 text-xl"
              />
            </div>
            <div className="flex flex-col items-center">
              <FontAwesomeIcon
                icon={faHeart}
                className="text-red-500 text-xl"
              />
            </div>
            <div className="flex flex-col items-center">
              <FontAwesomeIcon
                icon={faUser}
                className="text-gray-700 text-xl"
              />
            </div>
          </div>
        </div>
      </nav>
      <div
        className={`fixed top-0 left-0 z-50 w-64 h-screen bg-white border-r border-gray-200 transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="ms-3">Dashboard</span>
              </a>
            </li>
            {/* يمكنك إضافة المزيد من عناصر القائمة هنا */}
          </ul>
        </div>
      </div>
    </>
  );
}
