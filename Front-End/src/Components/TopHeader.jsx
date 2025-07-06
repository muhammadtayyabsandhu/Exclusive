import React,{ useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function TopHeader() {
  const [language, setLanguage] = useState("English");
  const languages = ["English", "Urdu", "French", "Spanish"];

  return (
    <div className="bg-gradient-to-r from-pink-200 via-pink-100 to-pink-200 backdrop-blur-md py-2 px-6 text-sm shadow">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 text-gray-800">
        {/* Left Spacer for future logo or info */}
        <div className="flex-1 hidden md:block" />

        {/* Center Announcement */}
        <p className="flex-1 text-center font-medium">
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

        {/* Right Language Selector */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative flex items-center space-x-1 bg-white rounded-full px-3 py-1 shadow border border-pink-300">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-transparent outline-none cursor-pointer text-sm text-gray-700 appearance-none pr-4"
            >
              {languages.map((lang) => (
                <option key={lang} value={lang}>
                  {lang}
                </option>
              ))}
            </select>
            <FaChevronDown className="text-gray-500 text-xs" />
          </div>
        </div>
      </div>
    </div>
  );
}
