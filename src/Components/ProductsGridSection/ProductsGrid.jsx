import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import "@fortawesome/fontawesome-svg-core/styles.css";


import ImagOne from "../../Assets/GoldPhone-1-150x150.webp";
import ImagTwo from "../../Assets/GoldPhone-1-150x150.webp";
import ImagThree from "../../Assets/GoldPhone-1-150x150.webp";

import TopLinks from "../ProductsGridSection/TopLinks";
import ProductCard from "../ProductsGridSection/ProductCard";
import MainCard from "../ProductsGridSection/MainCard";

const ProductGridTwo = () => {
  const products = [
    {
      id: 1,
      category: "Accessories, Power Banks",
      name: "Powerbank 1130 mAh Blue",
      imageUrl: ImagOne,
      originalPrice: 210.0,
      discountedPrice: 200.0,
      cartButtonType: "icon",
    },
    {
      id: 2,
      category: "Laptops, Laptops & Computers",
      name: 'Laptop Screener CX70 2QF-621XPL 17.3" 4210',
      imageUrl: ImagTwo,
      discountedPrice: 2399.0,
      cartButtonType: "arrow",
      link: "/laptop-details",
    },
    {
      id: 3,
      category: "Game Consoles, Video Games & Consoles",
      name: "Game Console Controller + USB 3.0 Cable",
      imageUrl: ImagThree,
      discountPrice: 99.0,
      cartButtonType: "add-to-cart",
    },
    {
      id: 4,
      category: "Computer Cases, Computer",
      name: "Aerocool EN52377 Dead Silence Gaming Cube Case",
      imageUrl: ImagOne,
      originalPrice: 180.0,
      discountPrice: 150.0,
      cartButtonType: "icon",
    },
    {
      id: 5,
      category: "Home Entertainment, TVs",
      name: "Widescreen 4K SUHD TV",
      imageUrl: ImagOne,
      discountPrice: 3299.0,
      cartButtonType: "icon",
    },
    {
      id: 6,
      category: "Game Consoles, Video Games &",
      name: "GameConsole Destiny Special Edition",
      imageUrl: ImagOne,
      discountPrice: 789.0,
      cartButtonType: "icon",
    },
    {
      id: 7,
      category: "Accessories, Power Banks",
      name: "Powerbank 1130 mAh Blue",
      imageUrl: ImagOne,
      originalPrice: 210.0,
      discountedPrice: 200.0,
      cartButtonType: "icon",
    },
    {
      id: 8,
      category: "Laptops, Laptops & Computers",
      name: 'Laptop Screener CX70 2QF-621XPL 17.3" 4210',
      imageUrl: ImagTwo,
      discountedPrice: 2399.0,
      cartButtonType: "arrow",
      link: "/laptop-details",
    },
    {
      id: 9,
      category: "Game Consoles, Video Games & Consoles",
      name: "Game Console Controller + USB 3.0 Cable",
      imageUrl: ImagThree,
      discountPrice: 99.0,
      cartButtonType: "add-to-cart",
    },
    {
      id: 10,
      category: "Computer Cases, Computer",
      name: "Aerocool EN52377 Dead Silence Gaming Cube Case",
      imageUrl: ImagOne,
      originalPrice: 180.0,
      discountPrice: 150.0,
      cartButtonType: "icon",
    },
    {
      id: 11,
      category: "Home Entertainment, TVs",
      name: "Widescreen 4K SUHD TV",
      imageUrl: ImagOne,
      discountPrice: 3299.0,
      cartButtonType: "icon",
    },
    {
      id: 12,
      category: "Game Consoles, Video Games &",
      name: "GameConsole Destiny Special Edition",
      imageUrl: ImagOne,
      discountPrice: 789.0,
      cartButtonType: "icon",
    },
    {
      id: 13,
      category: "Accessories, Power Banks",
      name: "Powerbank 1130 mAh Blue",
      imageUrl: ImagOne,
      originalPrice: 210.0,
      discountedPrice: 200.0,
      cartButtonType: "icon",
    },
    {
      id: 14,
      category: "Laptops, Laptops & Computers",
      name: 'Laptop Screener CX70 2QF-621XPL 17.3" 4210',
      imageUrl: ImagTwo,
      discountedPrice: 2399.0,
      cartButtonType: "arrow",
      link: "/laptop-details",
    },
    {
      id: 15,
      category: "Game Consoles, Video Games & Consoles",
      name: "Game Console Controller + USB 3.0 Cable",
      imageUrl: ImagThree,
      discountPrice: 99.0,
      cartButtonType: "add-to-cart",
    },
    {
      id: 16,
      category: "Computer Cases, Computer",
      name: "Aerocool EN52377 Dead Silence Gaming Cube Case",
      imageUrl: ImagOne,
      originalPrice: 180.0,
      discountPrice: 150.0,
      cartButtonType: "icon",
    },
    {
      id: 17,
      category: "Home Entertainment, TVs",
      name: "Widescreen 4K SUHD TV",
      imageUrl: ImagOne,
      discountPrice: 3299.0,
      cartButtonType: "icon",
    },
    {
      id: 18,
      category: "Game Consoles, Video Games &",
      name: "GameConsole Destiny Special Edition",
      imageUrl: ImagOne,
      discountPrice: 789.0,
      cartButtonType: "icon",
    },
  ];

  const topLinks = [
    { name: "Best Deals", href: "#best-deals" },
    { name: "TV & Audio", href: "#tv-audio" },
    { name: "Cameras", href: "#cameras" },
    { name: "Audio", href: "#audio" },
    { name: "Smartphones", href: "#smartphones" },
    { name: "GPS & Navi", href: "#gps-navi" },
    { name: "Computers", href: "#computers" },
    { name: "Portable Audio", href: "#portable-audio" },
    { name: "Accessories", href: "#accessories" },
  ];

  const slider1Products = products.slice(0, 6);
  const slider2Products = products.slice(6, 12);
  const slider3Products = products.slice(12, 18);

  return (
    <div className="bg-gray-100 py-8 my-5">
      <div className="mx-auto px-4 w-[85%]">
        <TopLinks links={topLinks} />

        <hr className="border-gray-300 mb-8" />

        <Swiper
          modules={[Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          {[slider1Products, slider2Products, slider3Products].map(
            (sliderProducts, index) => (
              <SwiperSlide key={index}>
                <div className="grid  md:grid-cols-3 grid-cols-1 gap-2 ">
                  <div
                    className="md:col-span-1 col-span-1"
                    style={{ gridRow: "auto" }}
                  >
                    {sliderProducts[0] && (
                      <ProductCard
                        product={sliderProducts[0]}
                        key={sliderProducts[0].id}
                      />
                    )}
                    {sliderProducts[3] && (
                      <ProductCard
                        product={sliderProducts[3]}
                        key={sliderProducts[3].id}
                      />
                    )}
                  </div>

                  <div className="bg-white p-2 flex flex-col items-center mb-2 card group">
                    {sliderProducts[1] && (
                      <MainCard
                        product={sliderProducts[1]}
                        key={sliderProducts[1].id}
                      />
                    )}
                  </div>

                  <div
                    className="md:col-span-1 col-span-1"
                    style={{ gridRow: "auto" }}
                  >
                    {sliderProducts[4] && (
                      <ProductCard
                        product={sliderProducts[4]}
                        key={sliderProducts[4].id}
                      />
                    )}
                    {sliderProducts[5] && (
                      <ProductCard
                        product={sliderProducts[5]}
                        key={sliderProducts[5].id}
                      />
                    )}
                  </div>
                </div>
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductGridTwo;
