// AllCat.jsx
import React from "react";
import ImagOne from "../../Assets/360-camers.webp";
import MainImg from "../../Assets/footer-widget-img-01-275x300.webp";
import ProductColumn from "../AllCategories/ProductColumn";

export default function AllCat() {
  const products = [
    {
      category: "Laptops, Laptops &",
      name: "Notebook Widescreen Y700-",
      price: "$1,299.00",
      imageUrl: ImagOne,
    },
    {
      category: "Laptops, Laptops &",
      name: 'Laptop WiFi CX61 2QF 15.6" 4210M',
      price: "$2,299.00",
      imageUrl: ImagOne,
    },
    {
      category: "Laptops, Laptops &",
      name: "Laptop Screener CX70 2QF-621XPL",
      price: "$2,399.00",
      imageUrl: ImagOne,
    },
    {
      category: "Computer Cases,",
      name: "Aerocool EN52377 Dead Silence",
      price: "$150.00",
      originalPrice: "$180.00",
      imageUrl: ImagOne,
    },
    {
      category: "Printers, Printers & Ink",
      name: "Full Color LaserJet Pro M452dn",
      price: "$1,050.00",
      imageUrl: ImagOne,
    },
    {
      category: "Cameras, Cameras &",
      name: "White NX Mini F1 SMART NX",
      price: "$559.00",
      imageUrl: ImagOne,
    },
  ];

  const firstColumn = products.slice(0, 3);
  const secondColumn = products.slice(3, 6);
  const thirdColumn = products.slice(0, 3); // Duplicate the first column for demonstration

  return (
    <>
      <section className="mt-[30px]">
        <div className="w-[85%] mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Column 1 */}
          <ProductColumn title="Featured Products" products={firstColumn} />

          {/* Column 2 */}
          <ProductColumn title="Top Selling Products" products={secondColumn} />

          {/* Column 3 */}
          <ProductColumn title="On-sale Products" products={thirdColumn} />

          {/* Column 4 (Empty) */}
          <div className="mt-5">
            <figure className="relative pt-[91%]">
              <img
                className="absolute top-0 left-0 bottom-0 right-0 w-full h-full object-cover"
                src={MainImg}
                alt=""
              />
            </figure>
          </div>
        </div>
      </section>
    </>
  );
}
