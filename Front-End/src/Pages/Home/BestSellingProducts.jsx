import { useRef, useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import { FaHeart, FaEye, FaShoppingCart, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // ← add this

// Redux Imports
import { useDispatch } from "react-redux";
import { addToCart } from "../../Features/cartSlice";

export default function BestSellingProducts() {
  const scrollRef = useRef(null);
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // ← init navigate

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart({ ...product, quantity: 1 }));
  };

  const handleProductClick = (id) => {
    navigate(`/product/${id}`); // ← navigate to detail page with product ID
  };

  useEffect(() => {
    axios.get("http://localhost:5000/api/products/best%20selling")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6 bg-white relative">
      <div className="flex items-center gap-2">
        <div className="bg-red-500 w-2 h-6"></div>
        <h2 className="text-xl font-bold text-red-500">This Month</h2>
      </div>

      <div className="flex justify-between items-center mt-2">
        <h1 className="text-3xl font-bold">Bouquets</h1>
        <button className="px-6 py-2 bg-red-500 text-white rounded-lg">
          View All
        </button>
      </div>

      <div className="relative mt-6">
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-00 p-2 rounded-full shadow"
        >
          <FaArrowLeft />
        </button>

        <div ref={scrollRef} className="flex overflow-x-auto gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              onClick={() => handleProductClick(product._id)}
              className="relative p-4 bg-gray-100 rounded-lg w-64 flex-shrink-0 group cursor-pointer"
            >
              <div className="w-full h-40 flex items-center justify-center">
                <img src={product.image || undefined} alt={product.title} className="max-h-full max-w-full object-contain" />
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
                  <span className="text-red-500 text-xl font-bold">${product.price}</span>
                  <span className="text-gray-400 line-through">${product.originalPrice}</span>
                </div>
                <div className="text-yellow-500 text-sm">⭐ {product.rating}</div>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation(); // ← stop bubbling to prevent navigation
                  handleAddToCart(product);
                }}
                className="absolute inset-x-0 bottom-0 bg-black text-white py-2 opacity-0 group-hover:opacity-100 transition"
              >
                <FaShoppingCart className="inline mr-2" /> Add to Cart
              </button>
            </div>
          ))}
        </div>

        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}
