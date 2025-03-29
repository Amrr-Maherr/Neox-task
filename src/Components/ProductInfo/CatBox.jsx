import React, { useState } from "react";

export default function CatBox({id}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="w-[270px] h-fit border rounded-lg">
        <ul>
          <li className="py-3 px-3 border-b-2 relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center justify-between w-full"
            >
              Show All Categories
              <span>▾</span>
            </button>
            {isOpen && (
              <ul className="absolute left-0 w-full bg-white shadow-md rounded mt-1 z-10">
                <li className="py-3 px-3 border-b-2 hover:bg-gray-100">
                  Sub-category 1
                </li>
                <li className="py-3 px-3 border-b-2 hover:bg-gray-100">
                  Sub-category 2
                </li>
                <li className="py-3 px-3 hover:bg-gray-100">Sub-category 3</li>
              </ul>
            )}
          </li>
          <li className="py-3 px-3 border-b-2">
            TV & Audio <span className="text-gray-300 font-light">({id})</span>
          </li>
          <li className="py-3 px-10 font-bold">
            Audio Speakers{" "}
            <span className="text-gray-300 font-light">({id})</span>
          </li>
        </ul>
      </div>
    </>
  );
}
