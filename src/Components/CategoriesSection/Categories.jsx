// Categories.js
import React from "react";
import ImagOne from "../../Assets/Smartphones.webp";
import ImagTwo from "../../Assets/Smartphones.webp";
import ImagThree from "../../Assets/Smartphones.webp";
import CategoriesBox from "./CategoriesBox";

export default function Categories() {
  const CategoriesData = [
    {
      title: "CATCH BIG DEALS ON THE CAMERAS",
      Image: ImagOne,
      Link: "Shop now",
      icon: ">",
    },
    {
      title: "CATCH BIG DEALS ON THE CAMERAS",
      Image: ImagTwo, // استخدم صورة مختلفة هنا
      Link: "Shop now",
      icon: ">",
    },
    {
      title: "CATCH BIG DEALS ON THE CAMERAS",
      Image: ImagThree, // استخدم صورة مختلفة هنا
      Link: "Shop now",
      icon: ">",
    },
  ];

  return (
    <>
      <section className="w-[85%] mx-auto">
        <div className="container grid grid-col-1 md:grid-cols-3 gap-4 my-5">
          {CategoriesData?.map(
            (
              item,
              index
            ) => (
              <CategoriesBox key={index} data={item} />
            )
          )}
        </div>
      </section>
    </>
  );
}
