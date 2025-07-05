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
    label: "Annual gross sale in our site",
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
              border border-gray-200 
              rounded-lg p-6 
              flex flex-col items-center text-center
              transition-colors duration-300
              hover:bg-red-500 hover:text-white
            "
          >
            {/* Icon Circle */}
            <div
              className="
                w-16 h-16 
                flex items-center justify-center 
                bg-black text-white 
                rounded-full mb-4
                transition-colors duration-300
                group-hover:bg-white group-hover:text-black
              "
            >
              {stat.icon}
            </div>

            {/* Stat Value */}
            <h3 className="text-2xl font-bold mb-2">{stat.value}</h3>
            {/* Label */}
            <p className="text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
