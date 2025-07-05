import React, { useState, useEffect } from "react"; 
import axios from "axios";
import { FaRegHeart, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link

const ProductSection = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products from the backend using Axios
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/products/explore%20our%20products"); // Backend API endpoint
        setProducts(response.data); // Set products data from API
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="bg-white px-4 py-8">
      {/* Header */}
      <div className="flex items-center gap-2">
        <div className="bg-red-500 w-2 h-6"></div>
        <h2 className="text-xl font-bold text-red-500">Our Products</h2>
      </div>

      <div className="flex justify-between items-center mt-2">
        <h1 className="text-3xl font-bold">Explore Our Products</h1>
        <button className="px-6 py-2 bg-red-500 text-white rounded-lg">
          View All
        </button>
      </div>

      {/* Product Grid */}
      {loading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          {products.map((product, index) => (
            <Link
              key={index}
              to={`/product/${product._id}`} // Add link to product detail page
              className="relative border p-3 rounded-lg group overflow-hidden"
            >
              {/* Wishlist Icon */}
              <div className="absolute top-2 right-2 text-gray-500 hover:text-red-500 cursor-pointer z-10">
                <FaRegHeart />
              </div>

              {/* Product Image */}
              <img
                src={product.image || undefined} // Fallback to dogfood if no image is found
                alt={product.name}
                className="h-32 object-contain mx-auto mb-2"
              />

              {/* Product Info */}
              <p className="font-bold">{product.title}</p>
              <p className="text-red-500 font-bold">{product.price}</p>
              <div className="flex items-center space-x-1 text-yellow-400 text-sm mt-1">
                {[...Array(Math.floor(product.rating))].map((_, i) => (
                  <FaStar key={i} />
                ))}
                <span className="text-gray-500">({product.reviews})</span>
              </div>

              {/* Hover Overlay (Add to Cart Button) */}
              <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <button className="bg-black text-white py-2 px-4 rounded">
                  Add To Cart
                </button>
              </div>

              {/* NEW Badge */}
              {product.tag && (
                <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                  {product.tag}
                </span>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductSection;
