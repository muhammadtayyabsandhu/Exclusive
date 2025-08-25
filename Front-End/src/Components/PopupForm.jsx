import React, { useState, useEffect } from "react";

const PopupForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsOpen(true);
    }, 1000);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white/30 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl w-[90%] max-w-md p-6 relative border border-gray-200">
        
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
          onClick={() => setIsOpen(false)}
        >
          ✕
        </button>

        {/* Heading */}
        <h2 className="text-xl font-bold text-center mb-2">
          Welcome to Flower Bouquet! 🌸
        </h2>
        <p className="text-gray-700 text-center mb-4">
          Complete the form to get your <span className="font-semibold">5% Off</span> coupon
        </p>

        {/* Form */}
        <form className="space-y-3">
          <input type="text" placeholder="First name" className="w-full border rounded-md px-3 py-2 bg-white/70 backdrop-blur-sm" />
          <input type="email" placeholder="Email" className="w-full border rounded-md px-3 py-2 bg-white/70 backdrop-blur-sm" />
          <input type="text" placeholder="Occasion" className="w-full border rounded-md px-3 py-2 bg-white/70 backdrop-blur-sm" />

          <div className="flex">
            <span className="px-3 flex items-center bg-gray-100/70 backdrop-blur-sm border rounded-l-md">+92</span>
            <input type="tel" placeholder="Phone" className="w-full border rounded-r-md px-3 py-2 bg-white/70 backdrop-blur-sm" />
          </div>

          <div className="flex gap-2">
            <input type="text" placeholder="DD" className="w-1/3 border rounded-md px-3 py-2 bg-white/70 backdrop-blur-sm" />
            <input type="text" placeholder="MM" className="w-1/3 border rounded-md px-3 py-2 bg-white/70 backdrop-blur-sm" />
            <input type="text" placeholder="YYYY" className="w-1/3 border rounded-md px-3 py-2 bg-white/70 backdrop-blur-sm" />
          </div>

          <button type="submit" className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition">
            Get My Coupon
          </button>
        </form>

        <p className="text-xs text-gray-600 text-center mt-3">
          By filling form, you agree to receive marketing emails and text messages.
        </p>
      </div>
    </div>
  );
};

export default PopupForm;
