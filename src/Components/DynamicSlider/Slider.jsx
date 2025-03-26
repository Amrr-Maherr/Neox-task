import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Slider({
  children,
  height = "400px",
  slidesPerView = 1,
  autoplay = true,
  loop = true,
  withControls = false,
  withPagination = true,
}) {
  return (
    <div className="relative">
      <Swiper
        modules={[
          ...(withControls ? [Navigation] : []),
          ...(withPagination ? [Pagination] : []),
          Autoplay,
        ]}
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
                clickable: true,
                dynamicBullets: true,
                el: ".swiper-pagination",
                type: "bullets",
              }
            : false
        }
      >
        {React.Children.map(children, (child, index) => (
          <SwiperSlide key={index}>{child}</SwiperSlide>
        ))}
        {withPagination && (
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
