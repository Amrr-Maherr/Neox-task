import React, { useState, useRef, useEffect } from "react";
import Slider from "../DynamicSlider/Slider"; // استيراد مكون السلايدر
import ImagOne from "../../Assets/Smartphones.webp";
import ImagTwo from "../../Assets/Sounddevice.webp";
import ImagThree from "../../Assets/WirelessSound-300x300.webp";

export default function HeroSection() {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [dropdownWidth, setDropdownWidth] = useState(10);
  const departmentsButtonRef = useRef(null);

  const sliderImages = [
    {
      image: ImagOne,
      title: "ELEGANT WATCHES FOR EVERY OCCASION",
      subTitle: "DISCOVER STYLES THAT SUIT YOU",
      buttonText: "Shop now",
      offer: "50% OFF",
    },
    {
      image: ImagTwo,
      title: "LUXURY TIMEPIECES WITH GREAT DEALS",
      subTitle: "FIND THE PERFECT GIFT TODAY",
      buttonText: "View collection",
      offer: "30% OFF",
    },
  ];

  const departments = [
    {
      name: "Watches",
      subCategories: ["Men's Watches", "Women's Watches", "Smart Watches"],
    },
    {
      name: "Accessories",
      subCategories: ["Straps", "Chains", "Covers"],
    },
    {
      name: "Brands",
      subCategories: ["Rolex", "Casio", "Seiko"],
    },
    {
      name: "Watches",
      subCategories: ["Men's Watches", "Women's Watches", "Smart Watches"],
    },
    {
      name: "Accessories",
      subCategories: ["Straps", "Chains", "Covers"],
    },
    {
      name: "Brands",
      subCategories: ["Rolex", "Casio", "Seiko"],
    },
    {
      name: "Brands",
      subCategories: ["Rolex", "Casio", "Seiko"],
    },
  ];

  const updateDropdownWidth = () => {
    if (departmentsButtonRef.current) {
      setDropdownWidth(departmentsButtonRef.current.offsetWidth);
    }
  };

  useEffect(() => {
    updateDropdownWidth();
    window.addEventListener("resize", updateDropdownWidth);

    return () => {
      window.removeEventListener("resize", updateDropdownWidth);
    };
  }, []);

  const sliderHeight = "70dvh"; // تعريف الارتفاع هنا

  return (
    <>
      <div className="w-[85%] mx-auto mt-5">
        <div>
          <div className="hidden md:flex justify-between items-center flex-wrap md:flex-nowrap md:items-center">
            <div className="w-full md:w-1/5 mb-2 md:mb-0 relative">
              <button
                className="text-sm flex items-center bg-yellow-500 text-black font-bold py-2 px-4 rounded-md w-full cursor-default"
                ref={departmentsButtonRef}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                All Departments
              </button>

              <div
                className="absolute top-full left-0 bg-white border rounded-md shadow-lg z-10"
                style={{ width: `${dropdownWidth}px` }}
              >
                <ul className="py-2">
                  {departments.map((department, index) => (
                    <li key={index} className="group">
                      <button className="w-full text-left p-2 hover:bg-gray-100 flex justify-between items-center">
                        <span>{department.name}</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 transform group-hover:rotate-180 transition-transform"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                      <ul className="pl-4 hidden group-hover:block">
                        {department.subCategories.map(
                          (subCategory, subIndex) => (
                            <li key={subIndex}>
                              <a
                                href="#"
                                className="block p-2 hover:bg-gray-100 rounded-lg"
                              >
                                {subCategory}
                              </a>
                            </li>
                          )
                        )}
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-col items-center flex-wrap md:flex-row md:space-x-6 w-full md:w-auto mb-2 md:mb-0">
              <div
                className="relative"
                onMouseEnter={() => setIsMegaMenuOpen(true)}
                onMouseLeave={() => setIsMegaMenuOpen(false)}
              >
                <button className="text-gray-700 hover:text-gray-900 font-semibold text-sm">
                  All Pages
                </button>
                {isMegaMenuOpen && (
                  <div className="absolute left-0 top-full mt-1 w-auto bg-white border rounded-md shadow-lg z-10">
                    <div className="flex">
                      <div className="py-4 px-6 w-64">
                        <h3 className="font-semibold text-gray-700 mb-2">
                          Category 1
                        </h3>
                        <ul>
                          <li className="mb-1">
                            <a
                              href="#"
                              className="text-sm text-gray-500 hover:text-gray-700 block py-2"
                            >
                              Link 1
                            </a>
                          </li>
                          <li className="mb-1">
                            <a
                              href="#"
                              className="text-sm text-gray-500 hover:text-gray-700 block py-2"
                            >
                              Link 2
                            </a>
                          </li>
                          <li className="mb-1">
                            <a
                              href="#"
                              className="text-sm text-gray-500 hover:text-gray-700 block py-2"
                            >
                              Link 3
                            </a>
                          </li>
                          <li className="mb-1">
                            <a
                              href="#"
                              className="text-sm text-gray-500 hover:text-gray-700 block py-2"
                            >
                              Link 4
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="py-4 px-6 w-64">
                        <h3 className="font-semibold text-gray-700 mb-2">
                          Category 2
                        </h3>
                        <ul>
                          <li className="mb-1">
                            <a
                              href="#"
                              className="text-sm text-gray-500 hover:text-gray-700 block py-2"
                            >
                              Link 1
                            </a>
                          </li>
                          <li className="mb-1">
                            <a
                              href="#"
                              className="text-sm text-gray-500 hover:text-gray-700 block py-2"
                            >
                              Link 2
                            </a>
                          </li>
                          <li className="mb-1">
                            <a
                              href="#"
                              className="text-sm text-gray-500 hover:text-gray-700 block py-2"
                            >
                              Link 3
                            </a>
                          </li>
                          <li className="mb-1">
                            <a
                              href="#"
                              className="text-sm text-gray-500 hover:text-gray-700 block py-2"
                            >
                              Link 4
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="py-4 px-6 w-64">
                        <h3 className="font-semibold text-gray-700 mb-2">
                          Category 3
                        </h3>
                        <ul>
                          <li className="mb-1">
                            <a
                              href="#"
                              className="text-sm text-gray-500 hover:text-gray-700 block py-2"
                            >
                              Link 1
                            </a>
                          </li>
                          <li className="mb-1">
                            <a
                              href="#"
                              className="text-sm text-gray-500 hover:text-gray-700 block py-2"
                            >
                              Link 2
                            </a>
                          </li>
                          <li className="mb-1">
                            <a
                              href="#"
                              className="text-sm text-gray-500 hover:text-gray-700 block py-2"
                            >
                              Link 3
                            </a>
                          </li>
                          <li className="mb-1">
                            <a
                              href="#"
                              className="text-sm text-gray-500 hover:text-gray-700 block py-2"
                            >
                              Link 4
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="py-4 px-6 w-64">
                        <h3 className="font-semibold text-gray-700 mb-2">
                          Category 4
                        </h3>
                        <ul>
                          <li className="mb-1">
                            <a
                              href="#"
                              className="text-sm text-gray-500 hover:text-gray-700 block py-2"
                            >
                              Link 1
                            </a>
                          </li>
                          <li className="mb-1">
                            <a
                              href="#"
                              className="text-sm text-gray-500 hover:text-gray-700 block py-2"
                            >
                              Link 2
                            </a>
                          </li>
                          <li className="mb-1">
                            <a
                              href="#"
                              className="text-sm text-gray-500 hover:text-gray-700 block py-2"
                            >
                              Link 3
                            </a>
                          </li>
                          <li className="mb-1">
                            <a
                              href="#"
                              className="text-sm text-gray-500 hover:text-gray-700 block py-2"
                            >
                              Link 4
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 font-semibold text-sm mb-2 md:mb-0"
              >
                Featured Brands
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 font-semibold text-sm mb-2 md:mb-0"
              >
                Trending Styles
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 font-semibold text-sm mb-2 md:mb-0"
              >
                Gift Cards
              </a>
            </div>

            <div className="text-gray-700 my-3 md:my-0 w-full md:w-fit font-bold text-sm text-center md:text-left">
              Free Shipping on Orders $50+
            </div>
          </div>
        </div>
      </div>
      <Slider>
        {sliderImages.map((slide, index) => (
          <div
            key={index}
            className="relative h-[50dvh] flex items-center justify-between flex-row-reverse w-[85%] mx-auto"
          >
            <div className="w-1/2 h-full flex justify-end items-center">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-[400px] h-full object-contain"
              />
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-start text-black z-10">
              <h2 className="text-3xl font-bold">{slide.title}</h2>
              <p className="text-lg">{slide.subTitle}</p>
              <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full mt-4">
                {slide.buttonText}
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
}
