// src/components/HeroBanner.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

import flower1 from "../../assets/Images/flower/f6.jpg";
import flower2 from "../../assets/Images/flower/f7.jpg";
import flower3 from "../../assets/Images/flower/f9.jpg";
import flower4 from "../../assets/Images/flower/f8.jpg";

const flowers = [flower1, flower2, flower3, flower4];

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
          delay: 1, // delay 1ms rakhna continuous banane ke liye
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        speed={4000} // jitna zyada utna smooth
      >
        {flowers.concat(flowers).map((flower, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center items-center">
              <img
                src={"https://res.cloudinary.com/dyfgyhy2v/image/upload/v1755573574/Adobe_Express_-_file_a86yxp.png"}
                alt={`flower-${index}`}
                className="w-48 h-48 object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
