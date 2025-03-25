import React from "react";
import Slider from "../DynamicSlider/Slider";

import One from "../../Assets/themeforest1.webp";
import Two from "../../Assets/themeforest2.webp";
import Three from "../../Assets/themeforest3.webp";
import Four from "../../Assets/themeforest4.webp";
import Five from "../../Assets/themeforest5.webp";
import Six from "../../Assets/themeforest6.webp";

export default function LogoPrands() {
  const images = [One, Two, Three, Four, Five, Six];

  const slides = images.map((image, index) => ({
    image: image,
    title: `Logo ${index + 1}`,
  }));

  return (
    <>
      <section className="py-8 w-[85%] mx-auto">
        <hr className="border-gray-300" />
        <div>
          <Slider
            slides={slides}
            height={100}
            imageClassName="logo-image"
            slidesPerView={4} // عرض 4 صور
          />
        </div>
        <hr className="border-gray-300" />
      </section>
    </>
  );
}