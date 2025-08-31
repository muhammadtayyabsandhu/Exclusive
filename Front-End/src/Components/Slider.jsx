import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import hero1 from "../assets/Images/flower/f8.jpg";
import hero2 from "../assets/Images/flower/f7.jpg";
import hero3 from "../assets/Images/flower/f6.jpg";

const slidesData = [hero1, hero2, hero3];

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate(); 
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
        {slidesData.map((image, index) => (
          <div key={index} className="min-w-full h-full relative">
            <img
              src={image}
              alt={`slide-${index}`}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Right side line + button */}
      <div className="absolute right-6 bottom-12 text-right z-20">
        <p className="text-black md:text-lg font-semibold">
          🌸 Fresh Flowers, Fresh Smiles
        </p>
        <div className="flex justify-end pr-12">
              <button
            onClick={() => navigate("/shop")} // 👈 navigate to shop
            className="mt-2 bg-black text-white px-5 py-2 rounded-lg shadow-md hover:bg-gray-800 transition"
          >
            Shop Now
          </button>
        </div>
      </div>

      {/* Dots (Indicators) */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
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
