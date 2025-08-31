import { useState } from "react";
import React from "react";
import {
  FaGift,
  FaSpa,
  FaMoneyBillWave,
  FaLeaf,
  FaBoxOpen,
  FaRegHeart,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const categories = [
  { id: 1, name: "Chocolate Bouquet", icon: <FaGift size={28} /> },
  { id: 2, name: "Flower Bouquet", icon: <FaSpa size={28} /> },
  { id: 3, name: "Money Bouquet", icon: <FaMoneyBillWave size={28} /> },
  { id: 4, name: "Makeup Bouquet", icon: <FaLeaf size={28} /> },
  { id: 5, name: "Gift Basket", icon: <FaBoxOpen size={28} /> },
  { id: 6, name: "Fresh Flowers", icon: <FaRegHeart size={28} /> },
];

export default function CategoryGrid() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="px-4 pt-6 pb-8 bg-pink-50 rounded-2xl shadow-sm">
      {/* Heading with pink badge */}
      <div className="flex items-center gap-2 mb-4">
        <div className="bg-pink-500 w-2 h-6 rounded-sm"></div>
        <h2 className="text-xl font-bold text-pink-700">Categories</h2>
      </div>

      {/* Browse text */}
      <h1 className="text-2xl font-bold text-emerald-700 mb-6 tracking-tight">
        Browse by Category
      </h1>

      {/* Category grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-5">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => {
              setSelectedCategory(category.id);
              navigate(`/shop?category=${category.name.toLowerCase().split(" ")[0]}`);
            }}
            className={`flex flex-col items-center justify-center p-6 rounded-2xl border shadow-md
              text-sm font-semibold transition duration-300 ease-in-out transform hover:-translate-y-1
              ${
                selectedCategory === category.id
                  ? "bg-pink-500 text-white border-pink-500 shadow-lg"
                  : "bg-white text-pink-700 hover:bg-pink-100 border-pink-200"
              }`}
          >
            <div className="text-3xl mb-2">{category.icon}</div>
            <span className="text-center leading-tight">{category.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
