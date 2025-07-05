import { useState, useEffect, useRef } from "react";
import {
  FaHeart,
  FaEye,
  FaShoppingCart,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import React from "react";
import { Link } from "react-router-dom"; // Import Link component

export default function FlashSales() {
  const [timeLeft, setTimeLeft] = useState(259200);
  const [products, setProducts] = useState([]);
  const scrollRef = useRef(null);

  // Fetch products from the backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/products/flash%20sales"
        );
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();

    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds) => {
    const days = Math.floor(seconds / (3600 * 24));
    const hours = Math.floor((seconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const sec = seconds % 60;
    return { days, hours, minutes, sec };
  };

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  const { days, hours, minutes, sec } = formatTime(timeLeft);

  return (
    <div className="p-6 bg-white relative">
      <div className="flex items-center gap-2">
        <div className="bg-red-500 w-2 h-6"></div>
        <h2 className="text-xl font-bold text-red-500">Today's</h2>
      </div>

      <div className="flex justify-between items-center mt-2">
        <h1 className="text-3xl font-bold">Flash Sales</h1>
        <div className="flex gap-2 text-lg font-semibold text-gray-700">
          <div className="flex flex-col items-center">
            <span className="text-xl font-bold">{days}</span>
            <span className="text-sm">Days</span>
          </div>
          <span className="text-xl font-bold">:</span>
          <div className="flex flex-col items-center">
            <span className="text-xl font-bold">{hours}</span>
            <span className="text-sm">Hours</span>
          </div>
          <span className="text-xl font-bold">:</span>
          <div className="flex flex-col items-center">
            <span className="text-xl font-bold">{minutes}</span>
            <span className="text-sm">Minutes</span>
          </div>
          <span className="text-xl font-bold">:</span>
          <div className="flex flex-col items-center">
            <span className="text-xl font-bold">{sec}</span>
            <span className="text-sm">Seconds</span>
          </div>
        </div>
      </div>

      <div className="relative mt-6">
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow"
        >
          <FaArrowLeft />
        </button>
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-6"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {products.map((product) => (
            <Link
              key={product._id}
              to={`/product/${product._id}`} // Add the link to the detailed product page
              className="relative p-4 bg-gray-100 rounded-lg w-64 flex-shrink-0 group"
            >
              <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs rounded">
                -{product.discount}%
              </span>
              <div className="w-full h-40 flex items-center justify-center">
                <img
                  src={product.image || undefined}
                  alt={product.title}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="absolute top-2 right-2 flex flex-col gap-2">
                <button className="p-2 bg-white rounded-full shadow hover:text-red-500">
                  <FaHeart />
                </button>
                <button className="p-2 bg-white rounded-full shadow hover:text-gray-500">
                  <FaEye />
                </button>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold">{product.title}</h3>
                <div className="flex items-center gap-2">
                  <span className="text-red-500 text-xl font-bold">
                    ${product.price}
                  </span>
                  <span className="text-gray-400 line-through">
                    ${product.originalPrice}
                  </span>
                </div>
                <div className="text-yellow-500 text-sm">
                  ⭐ {product.rating}
                </div>
              </div>
              <button className="absolute inset-x-0 bottom-0 bg-black text-white py-2 opacity-0 group-hover:opacity-100 transition">
                <FaShoppingCart className="inline mr-2" /> Add to Cart
              </button>
            </Link>
          ))}
        </div>
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow"
        >
          <FaArrowRight />
        </button>
      </div>

      <button className="mt-6 px-6 py-2 bg-red-500 text-white rounded-lg mx-auto block">
        View All Products
      </button>
    </div>
  );
}
