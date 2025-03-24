// CategoriesBox.js
import React from "react";

export default function CategoriesBox({ data }) {
  return (
    <>
      <div className=" flex items-center justify-evenly bg-[#EAEAEA] px-2 m-2 rounded-md">
        {" "}
        {/* إضافة m-2 و rounded-md */}
        <div>
          <figure>
            <img
              src={data.Image}
              alt={data.title}
              className="w-36 h-36 object-cover rounded-md"
            />
          </figure>
        </div>
        <div className="p-2">
          <h3 className="text-sm font-semibold my-2">{data.title.slice(0, 15)}</h3>
          <a href="#" className="text-blue-500 hover:underline text-sm">
            {data.Link}
          </a>
          <a href="" className="p-1 rounded-full mx-2 bg-yellow-500">{data.icon}</a>
        </div>
      </div>
    </>
  );
}