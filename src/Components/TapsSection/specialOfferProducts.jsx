import React from "react";
import ImagOne from "../../Assets/360-camers.webp"; // أو المسار الصحيح للصورة

const specialOfferProducts = [
  {
    id: 1,
    name: "Game Console Controller + USB 3.0 Cable",
    price: "$99.00",
    image: ImagOne,
  },
];

const SpecialOfferCard = () => {
  return (
    <div className="h-full">
      {specialOfferProducts.map((product) => (
        <div
          key={product.id}
          className="border-2 border-yellow-400 p-4 rounded-xl text-center hover:scale-105 transition-transform duration-300 flex flex-col h-full"
        >
          <div className="product-info flex flex-col h-full">
            <h4 className="text-xl text-start font-medium text-black mb-5">
              SPECIAL OFFER
            </h4>
            <div className="relative w-full pt-[150px] flex-grow">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain absolute top-0 left-0"
              />
            </div>
            <div className="mt-auto">
              <h3 className="text-sm font-medium text-[#0062BD] my-2">
                {product.name}
              </h3>
              <p className="text-lg font-bold text-black mb-2">
                {product.price}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SpecialOfferCard;
