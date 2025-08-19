import React from "react";

export default function TopHeader() {
  return (
    <div className="bg-gradient-to-r from-pink-200 via-pink-100 to-pink-200 backdrop-blur-md py-2 px-6 text-sm shadow">
      <div className="max-w-7xl mx-auto flex items-center justify-center text-gray-800">
        {/* Center Announcement */}
        <p className="text-center font-medium">
          Celebrate Every Moment –
          <span className="text-pink-600 font-semibold px-1">Flat 50% OFF</span>
          on Flowers & Gifts
          <a
            href="#"
            className="ml-2 text-pink-700 font-bold underline hover:text-pink-900 transition"
          >
            Order Now!
          </a>
        </p>
      </div>
    </div>
  );
}
