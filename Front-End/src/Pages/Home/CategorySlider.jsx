import { useRef, useState } from "react";
import React from "react";
import {
  FaGift,
  FaSpa,
  FaMoneyBillWave,
  FaLeaf,
  FaBoxOpen,
  FaRegHeart,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // navigation hook

const categories = [
  { id: 1, name: "Chocolate Bouquet", icon: <FaGift size={24} />, path: "/chocolate-bouquet" },
  { id: 2, name: "Flower Bouquet", icon: <FaSpa size={24} />, path: "/flower-bouquet" },
  { id: 3, name: "Money Bouquet", icon: <FaMoneyBillWave size={24} />, path: "/money-bouquet" },
  { id: 4, name: "Makeup Bouquet", icon: <FaLeaf size={24} />, path: "/makeup-bouquet" },
  { id: 5, name: "Gift Basket", icon: <FaBoxOpen size={24} />, path: "/gift-basket" },
  { id: 6, name: "Fresh Flowers", icon: <FaRegHeart size={24} />, path: "/fresh-flowers" },
];

export default function CategorySlider() {
  const scrollRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate();

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
    <div className="px-4 pt-4 bg-pink-50">
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
          style={{ scrollSnapType: "x mandatory" }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setSelectedCategory(category.id);
                navigate(category.path); // navigate to product page
              }}
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
