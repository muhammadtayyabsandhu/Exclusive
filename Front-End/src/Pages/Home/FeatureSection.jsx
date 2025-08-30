import { FaShippingFast, FaHeadset } from "react-icons/fa";
import { MdOutlineVerified } from "react-icons/md";
import React from "react";

const FeatureSection = () => {
  const features = [
    {
      icon: <FaShippingFast className="text-3xl text-white" />, 
      title: "FREE AND FAST DELIVERY", 
      description: "Free delivery for all orders over $140"
    },
    {
      icon: <FaHeadset className="text-3xl text-white" />, 
      title: "24/7 CUSTOMER SERVICE", 
      description: "Friendly 24/7 customer support"
    },
    {
      icon: <MdOutlineVerified className="text-3xl text-white" />, 
      title: "MONEY BACK GUARANTEE", 
      description: "We return money within 30 days"
    }
  ];

  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-10 py-10 mb-10">
      {features.map((feature, index) => (
        <div key={index} className="flex flex-col items-center text-center">
          <div className="w-16 h-16 flex items-center justify-center bg-pink-200 rounded-full ">
            {feature.icon}
          </div>
          <h3 className="font-bold mt-4">{feature.title}</h3>
          <p className="text-gray-600 text-sm">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FeatureSection;
