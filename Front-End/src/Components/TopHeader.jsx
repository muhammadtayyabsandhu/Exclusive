import { useState } from "react";
import React from "react";

export default function TopHeader() {
  const [language, setLanguage] = useState("English");
  const languages = ["English", "Urdu", "French", "Spanish"];

  return (
    <div className="bg-black text-white p-2 px-6 text-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        {/* Left Section: Empty on larger screens */}
        <div className="flex-1 hidden md:block"></div>

        {/* Center Section: Announcement Text */}
        <p className="flex-1 text-center">
          Celebrate Every Moment – Flat 50% OFF on Flowers & Gifts{" "}
          <a href="#" className="font-bold underline">
           Order Now!
          </a>
        </p>

        {/* Right Section: Language Dropdown */}
        <div className="flex-1 flex justify-center md:justify-end mt-2 md:mt-0">
          <div className="relative">
            <select
              className="bg-black text-white border-none outline-none cursor-pointer"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              {languages.map((lang) => (
                <option key={lang} value={lang} className="text-white">
                  {lang}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
