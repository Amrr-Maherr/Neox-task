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

  return (
    <section className="py-8 w-[85%] mx-auto">
      <hr className="border-gray-300" />
      <div className="my-4">
        <Slider
          imageClassName="logo-image"
          slidesPerView={4}
          spaceBetween={30}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
          }}
        >
          {images.map((image, index) => (
            <figure className="relative pt-[83%]">
              <img
                src={image}
                alt={`Logo ${index + 1}`}
                className="logo-image inset-0 absolute h-full w-full object-contain"
              />
            </figure>
          ))}
        </Slider>
      </div>
      <hr className="border-gray-300" />
    </section>
  );
}
