import React, { useState, useEffect } from "react";

import hero1 from "../assets/Images/flower/f1.jpg";
import hero2 from "../assets/Images/flower/f2.jpg";
import hero3 from "../assets/Images/flower/f3.jpg";

const slidesData = [
  {
    id: 1,
   title: "Blooming Deals Just for You",
subtitle: "Get Up to 10% OFF on All Bouquets & Gifts",
    cta: "Shop Now",
    imageUrl: hero1,
    bgColor: "#000000",
  },
  {
    id: 2,
    title: "Fresh Flowers, Fresh Offers",
subtitle: "Enjoy 10% OFF – Limited Time Only!",
    cta: "Buy Now",
    imageUrl: hero2,
    bgColor: "#000000",
  },
  {
    id: 3,
   title: "Gifts That Speak from the Heart",
subtitle: "Up to 10% OFF on Personalized Floral Gifts",
    cta: "View Details",
    imageUrl: hero3,
    bgColor: "#000000",
  },
];

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-rotate every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-72 md:h-[450px] overflow-hidden">
      {/* Slides container */}
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slidesData.map((slide) => (
          <div
            key={slide.id}
            className="min-w-full flex items-center h-full"
            style={{ backgroundColor: slide.bgColor }}
          >
            {/* Left Text Section */}
            <div className="flex-1 text-white px-8 md:px-16 space-y-3 md:space-y-5">
              {/* Apple icon + Title */}
              <div className="flex items-center space-x-2 mt-4 md:mt-0">
               
                <h2 className="text-xl md:text-3xl font-semibold">
                  {slide.title}
                </h2>
              </div>
              {/* Subtitle */}
              <p className="text-lg md:text-2xl font-light">{slide.subtitle}</p>
              {/* CTA Button with underline on hover */}
              <button className="inline-flex items-center space-x-2 bg-black text-white py-2 px-4 rounded group transition">
                <span className="group-hover:underline">{slide.cta}</span>
                <span className="text-xl">&rarr;</span>
              </button>
            </div>

            {/* Right Image Section */}
            <div className="flex-1 flex justify-center items-center p-4">
              <img
                src={slide.imageUrl}
                alt={slide.title}
                className="object-contain h-56 md:h-72"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Dots (Indicators) */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-3">
        {slidesData.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              currentSlide === index ? "bg-red-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
