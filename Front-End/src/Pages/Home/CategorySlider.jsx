import { useRef, useState } from "react";
import { FaMobileAlt, FaLaptop, FaHeadphones, FaCamera, FaGamepad, FaClock, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import React from "react";

// ✅ Proper unique IDs diye hain (Duplicate hata diye)
const categories = [
  { id: 1, name: "Phones", icon: <FaMobileAlt size={30} /> },
  { id: 2, name: "Computers", icon: <FaLaptop size={30} /> },
  { id: 3, name: "SmartWatch", icon: <FaClock size={30} /> },
  { id: 4, name: "Camera", icon: <FaCamera size={30} /> },
  { id: 5, name: "HeadPhones", icon: <FaHeadphones size={30} /> },
  { id: 6, name: "Gaming", icon: <FaGamepad size={30} /> },
  { id: 7, name: "VR Headset", icon: <FaGamepad size={30} /> },
  { id: 8, name: "Speakers", icon: <FaGamepad size={30} /> },
  { id: 9, name: "Drones", icon: <FaGamepad size={30} /> },
  { id: 10, name: "Smart Home", icon: <FaGamepad size={30} /> },
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
    <div className="p-6 bg-white relative">
      {/* 🔴 Categories Heading with Small Red Box */}
     
      <div className="flex items-center gap-2">
        <div className="bg-red-500 w-2 h-6"></div>
        <h2 className="text-xl font-bold text-red-500">Categories</h2>
      </div>

      {/* 🏷️ Browse By Category & Next/Prev Buttons */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Browse By Category</h1>
        <div className="flex gap-2">
          <button
            onClick={scrollLeft}
            className="p-3 bg-gray-200 rounded-full shadow hover:bg-gray-300 transition"
          >
            <FaArrowLeft size={16} />
          </button>
          <button
            onClick={scrollRight}
            className="p-3 bg-gray-200 rounded-full shadow hover:bg-gray-300 transition"
          >
            <FaArrowRight size={16} />
          </button>
        </div>
      </div>

      {/* 🖼️ Category List with Icons */}
      <div className="relative mt-6">
      <div ref={scrollRef} className="flex overflow-x-auto gap-6" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>

          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`p-6 border rounded-lg w-36 flex flex-col items-center text-lg font-semibold ${
                selectedCategory === category.id ? "bg-red-500 text-white" : "hover:bg-gray-100"
              } transition`}
            >
              {category.icon}
              <span className="mt-2">{category.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
