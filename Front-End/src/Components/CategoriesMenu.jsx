import React from "react";
import { Link } from "react-router-dom";

export default function CategoriesMenu() {
  const categories = [
    { name: "Chocolate Bouquet", path: "/chocolate-bouquet" },
    { name: "Flower Bouquet", path: "/flower-bouquet" },
    { name: "Money Bouquet", path: "/money-bouquet" },
    { name: "Makeup Bouquet", path: "/makeup-bouquet" },
    { name: "Gift Basket", path: "/gift-basket" },
    { name: "Fresh Flowers", path: "/fresh-flowers" },
  ];

  return (
    <div className="w-full md:w-64 p-4">
      <div
        className="
          bg-pink-100/30 backdrop-blur-lg
          border border-pink-200/40 
          rounded-2xl p-5
        "
      >
        <h2 className="text-2xl font-bold text-black mb-4 text-center">
          Categories
        </h2>
        <ul className="divide-y divide-pink-300/40">
          {categories.map((cat, idx) => (
            <li key={idx}>
              <Link
                to={cat.path}
                className="
                  block w-full py-3 text-black font-medium
                  hover:bg-white/40 hover:text-pink-700
                  transition duration-300 text-center
                "
              >
                {cat.name}
              </Link>
            
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
