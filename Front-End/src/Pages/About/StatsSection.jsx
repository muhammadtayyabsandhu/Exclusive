import React from "react";
import { FaStore, FaDollarSign, FaShoppingBag, FaCoins } from "react-icons/fa";

const stats = [
  {
    id: 1,
    icon: <FaStore />,
    value: "10.5k",
    label: "Sellers active on our site",
  },
  {
    id: 2,
    icon: <FaDollarSign />,
    value: "33k",
    label: "Monthly Product Sale",
  },
  {
    id: 3,
    icon: <FaShoppingBag />,
    value: "45.5k",
    label: "Customers active on our site",
  },
  {
    id: 4,
    icon: <FaCoins />,
    value: "25k",
    label: "Annual gross sale on our site",
  },
];

const StatsSection = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="
              group 
              border border-pink-200 
              rounded-2xl p-6 
              flex flex-col items-center text-center
              bg-gradient-to-b from-pink-50 to-white
              shadow-md
              transition-all duration-500
              hover:bg-gradient-to-tr hover:from-pink-500 hover:to-rose-400 
              hover:text-white hover:shadow-xl hover:scale-105
            "
          >
            {/* Icon Circle */}
            <div
              className="
                w-16 h-16 
                flex items-center justify-center 
                bg-pink-500 text-white 
                rounded-full mb-4 text-2xl
                transition-all duration-500
                group-hover:bg-white group-hover:text-pink-600
                shadow-md
              "
            >
              {stat.icon}
            </div>

            {/* Stat Value */}
            <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
            {/* Label */}
            <p className="text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
