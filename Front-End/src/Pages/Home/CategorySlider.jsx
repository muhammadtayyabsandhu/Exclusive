import { useRef, useState } from "react";
import React from "react";
import {
  FaGift,
  FaSpa,
  FaMoneyBillWave,
  FaLeaf,
  FaBoxOpen,
  FaBirthdayCake,
  FaSmile,
  FaRegHeart,
  FaHandHoldingHeart,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";

const categories = [
  { id: 1, name: "Chocolate Bouquet", icon: <FaGift size={24} /> },
  { id: 2, name: "Flower Bouquet", icon: <FaSpa size={24} /> },
  { id: 3, name: "Money Bouquet", icon: <FaMoneyBillWave size={24} /> },
  { id: 4, name: "Makeup Bouquet", icon: <FaLeaf size={24} /> },
  { id: 5, name: "Eidi Bouquet", icon: <FaSmile size={24} /> },
  { id: 6, name: "Gift Basket", icon: <FaBoxOpen size={24} /> },
  { id: 7, name: "Eid Basket", icon: <FaBirthdayCake size={24} /> },
  { id: 8, name: "Fresh Flowers", icon: <FaRegHeart size={24} /> },
  { id: 9, name: "Custom Gifts", icon: <FaHandHoldingHeart size={24} /> },
];

export default function CategorySlider() {
  const scrollRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
    <div className="p-6 bg-pink-50 rounded-xl">
      {/* Heading with pink badge */}
      <div className="flex items-center gap-2 mb-3">
        <div className="bg-pink-500 w-2 h-6 rounded-sm"></div>
        <h2 className="text-xl font-bold text-pink-700">Categories</h2>
      </div>

      {/* Browse text + buttons */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-emerald-700">
          Browse by Category
        </h1>
        <div className="flex gap-2">
          <button
            onClick={scrollLeft}
            className="p-2 bg-pink-200 rounded-full hover:bg-pink-300 transition"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={scrollRight}
            className="p-2 bg-pink-200 rounded-full hover:bg-pink-300 transition"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Category scroll area */}
      <div className="overflow-hidden">
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex flex-col items-center justify-center w-36 p-5 rounded-xl border
                text-sm font-semibold transition duration-300
                ${
                  selectedCategory === category.id
                    ? "bg-pink-500 text-white border-pink-500"
                    : "bg-white text-pink-700 hover:bg-pink-100 border-pink-200"
                }`}
            >
              {category.icon}
              <span className="mt-2 text-center">{category.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
