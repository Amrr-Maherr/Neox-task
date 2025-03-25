import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

function Slider({ slides, height, imageClassName, slidesPerView = 1 }) {
  // قيمة افتراضية لـ slidesPerView
  return (
    <div>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={slidesPerView} // استخدام الـ prop slidesPerView
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <img
              src={slide.image}
              alt={slide.title}
              className={`w-full ${imageClassName}`}
              style={{ height: height, objectFit: "contain" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
