import React, { useState } from "react";
import ImagOne from "../../Assets/GoldPhone-1-100x100.webp";
import ImagTwo from "../../Assets/GoldPhone-1-100x100.webp";
import ImagThree from "../../Assets/GoldPhone-1-100x100.webp";
import SpecialOfferCard from "../TapsSection/specialOfferProducts";
import ProductCard from "../Product/ProductCard";

const products = [
  {
    id: 1,
    category: "Special Offer",
    title: "Game Console Controller + USB 3.0 Cable",
    price: 99.0,
    image: ImagOne,
    isSpecial: true,
    description: "وصف المنتج 1",
  },
  {
    id: 2,
    category: "Featured",
    title: "Wireless Audio System Multiroom 360",
    price: 2100.0,
    image: ImagTwo,
    description: "وصف المنتج 2",
  },
  {
    id: 3,
    category: "Featured",
    title: "Tablet Elitebook Revolve 810 G2",
    price: 1050.0,
    image: ImagThree,
    description: "وصف المنتج 3",
  },
  {
    id: 4,
    category: "On Sale",
    title: "White Solo 2 Wireless",
    price: 248.99,
    image: ImagOne,
    description: "وصف المنتج 4",
  },
  {
    id: 5,
    category: "Top Rated",
    title: "Smartphone GS 32GB LTE",
    price: 1100.0,
    image: ImagTwo,
    description: "وصف المنتج 5",
  },
  {
    id: 6,
    category: "Featured",
    title: "Cameras & Photography",
    price: 550.0,
    image: ImagThree,
    description: "وصف المنتج 6",
  },
  {
    id: 7,
    category: "Featured",
    title: "Printers & Ink",
    price: 1050.0,
    image: ImagOne,
    description: "وصف المنتج 7",
  },
];

const Taps = () => {
  const categories = ["Special Offer", "Featured", "On Sale", "Top Rated"];
  const [selectedCategory, setSelectedCategory] = useState("Special Offer");
  const filteredProducts =
    selectedCategory === "Special Offer"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 w-[85%] mx-auto items-start my-5">
        <div className="col-span-1 h-full">
          <SpecialOfferCard />
        </div>
        <div className="p-5 font-sans col-span-2">
          <div className="flex justify-center mb-5 border-b-2">
            {categories.map((category) => (
              <span
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 cursor-pointer text-xl ${
                  selectedCategory === category
                    ? "border-b-2 border-yellow-400 font-bold text-black"
                    : "text-gray-600"
                }`}
              >
                {category}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
            <div
              className={`${
                selectedCategory === "Special Offer"
                  ? "lg:col-span-4"
                  : "lg:col-span-4"
              } grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5`}
            >
              {filteredProducts
                .filter(
                  (product) =>
                    selectedCategory !== "Special Offer" || !product.isSpecial
                )
                .map((product) => (
                  <ProductCard key={product.id} product={product} cardType="col" />
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Taps;
