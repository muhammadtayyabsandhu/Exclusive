// src/components/HeroBanner.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

// direct links use karo
const flowers = [
  "https://res.cloudinary.com/dyfgyhy2v/image/upload/v1756621556/Adobe_Express_-_file_2_vrvb2i.png",
  "https://res.cloudinary.com/dyfgyhy2v/image/upload/v1756621423/Remove_background_project_1_qfi2xi.png",
  "https://res.cloudinary.com/dyfgyhy2v/image/upload/v1755573574/Adobe_Express_-_file_a86yxp.png",

];

export default function HeroBanner() {
  return (
    <div className="w-full bg-white py-6">
      <Swiper
        modules={[Autoplay, FreeMode]}
        slidesPerView={5}
        spaceBetween={20}
        loop={true}
        freeMode={true}
        allowTouchMove={false}
        autoplay={{
          delay: 1, // continuous
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        speed={4000} // smooth
      >
        {flowers.concat(flowers).map((flower, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center items-center">
              <img
                src={flower}
                alt={`flower-${index}`}
                className="w-48 h-48 object-contain rounded-xl"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
