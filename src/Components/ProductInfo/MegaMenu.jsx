import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import ActiveMenu from "./ActiveMenu";

config.autoAddCss = false;

const MegaMenu = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const MenuLinks = [
    {
      title: "Home",
      content: (
        <div className="mega-menu-content p-4">
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="list-none">
            <li className="mb-1">
              <a href="#" className="text-gray-700 hover:text-blue-500">
                About Us
              </a>
            </li>
            <li className="mb-1">
              <a href="#" className="text-gray-700 hover:text-blue-500">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-500">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "TV & Audio",
      content: (
        <div className="mega-menu-content p-4">
          <h3 className="text-lg font-semibold mb-2">Televisions</h3>
          <ul className="list-none">
            <li className="mb-1">
              <a href="#" className="text-gray-700 hover:text-blue-500">
                Smart TV
              </a>
            </li>
            <li className="mb-1">
              <a href="#" className="text-gray-700 hover:text-blue-500">
                OLED TV
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-500">
                LED TV
              </a>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Smart Phones",
      content: (
        <div className="mega-menu-content p-4">
          <h3 className="text-lg font-semibold mb-2">Android</h3>
          <ul className="list-none">
            <li className="mb-1">
              <a href="#" className="text-gray-700 hover:text-blue-500">
                Samsung
              </a>
            </li>
            <li className="mb-1">
              <a href="#" className="text-gray-700 hover:text-blue-500">
                Xiaomi
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-500">
                Google Pixel
              </a>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Laptops & Desktops",
      content: (
        <div className="mega-menu-content p-4">
          <h3 className="text-lg font-semibold mb-2">Laptops</h3>
          <ul className="list-none">
            <li className="mb-1">
              <a href="#" className="text-gray-700 hover:text-blue-500">
                Gaming Laptops
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-500">
                Ultrabooks
              </a>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Gadgets",
      content: (
        <div className="mega-menu-content p-4">
          <h3 className="text-lg font-semibold mb-2">Wearable Tech</h3>
          <ul className="list-none">
            <li className="mb-1">
              <a href="#" className="text-gray-700 hover:text-blue-500">
                Smartwatches
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-500">
                Fitness Trackers
              </a>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "GPS & Car",
      content: (
        <div className="mega-menu-content p-4">
          <h3 className="text-lg font-semibold mb-2">GPS Navigation</h3>
          <ul className="list-none">
            <li className="mb-1">
              <a href="#" className="text-gray-700 hover:text-blue-500">
                Car GPS
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-500">
                Handheld GPS
              </a>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Cameras & Accessories",
      content: (
        <div className="mega-menu-content p-4">
          <h3 className="text-lg font-semibold mb-2">Cameras</h3>
          <ul className="list-none">
            <li className="mb-1">
              <a href="#" className="text-gray-700 hover:text-blue-500">
                DSLR Cameras
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-500">
                Mirrorless Cameras
              </a>
            </li>
          </ul>
        </div>
      ),
    },
  ];

  const handleMouseEnter = (index) => {
    setActiveMenu(index);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  return (
    <nav className="bg-yellow-400 w-full">
      <div className="container w-[85%]  mx-auto flex items-center justify-between p-4">
        {MenuLinks.map((link, index) => (
          <div
            key={index}
            className="relative"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <p className="text-black font-semibold hover:text-gray-700 cursor-pointer flex items-center">
              {link.title}  
              <FontAwesomeIcon icon={faCaretDown} className="text-gray-600" />
            </p>
            {activeMenu === index && (
                <ActiveMenu link={link} />
            )}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default MegaMenu;
