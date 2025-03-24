// Slider.js
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

function Slider({ slides, height }) {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full"
                style={{ height: height, objectFit: "cover" }}
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/3 -translate-y-1/2 text-left">
                <h2 className="text-[#A3DFF4] text-md font-bold mb-5">
                  {slide.subTitle}
                </h2>
                <h2 className="text-black text-5xl font-extralight mb-4">
                  {slide.title} <span className="font-bold">{slide.offer}</span>
                </h2>
                <button className="bg-yellow-500  text-black font-bold p-5  my-5 rounded-full hover:bg-yellow-400">
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
