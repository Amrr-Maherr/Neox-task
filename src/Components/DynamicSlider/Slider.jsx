import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Slider({
  slides = [],
  children,
  height = "400px",
  imageClassName = "",
  slidesPerView = 1,
  autoplay = true,
  loop = true,
  withControls = false,
  withPagination = true, // استخدمها فقط للتحقق من وجود Pagination
}) {
  // تحديد مصدر المحتوى (إما slides أو children)
  const content = children
    ? React.Children.toArray(children)
    : slides.map((slide, index) => (
        <img
          key={index}
          src={slide.image}
          alt={slide.title || `Slide ${index}`}
          className={`w-full ${imageClassName}`}
          style={{ height, objectFit: "contain" }}
        />
      ));

  return (
    <div className="relative">
      <Swiper
        modules={[
          ...(withControls ? [Navigation] : []),
          ...(withPagination ? [Pagination] : []),
          Autoplay,
        ]} // اضافة Pagination الى modules بشكل شرطي
        spaceBetween={30}
        slidesPerView={slidesPerView}
        loop={loop}
        autoplay={
          autoplay ? { delay: 2500, disableOnInteraction: false } : false
        }
        navigation={withControls}
        pagination={
          withPagination
            ? {
                // تمرير الـ pagination object بشكل شرطي
                clickable: true,
                dynamicBullets: true,
                el: ".swiper-pagination",
                type: "bullets",
              }
            : false
        }
      >
        {content.map((item, index) => (
          <SwiperSlide key={index}>{item}</SwiperSlide>
        ))}
        {withPagination && ( // عرض الـ div الخاص بالـ pagination بشكل شرطي
          <div
            className="swiper-pagination"
            style={{ position: "absolute", bottom: "5px" }}
          />
        )}
      </Swiper>
    </div>
  );
}

export default Slider;
