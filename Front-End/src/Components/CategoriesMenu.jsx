import React from "react";

export default function CategoriesMenu() {
  const categories = [
    "Chocolate Bouquet",
    "Flower Bouquet",
    "Money Bouquet",
    "Makeup Bouquet",
    "Gift Basket",
    "Eid Basket",
    "Fresh Flowers",
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
              <a
                href="#"
                className="
                  block w-full py-3 text-black font-medium
                  hover:bg-white/40 hover:text-pink-700
                  transition duration-300 text-center
                "
              >
                {cat}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
