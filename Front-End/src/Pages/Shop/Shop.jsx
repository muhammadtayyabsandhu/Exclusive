import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useSearch } from "../Search/SearchContext";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Features/cartSlice";
import { toast } from "react-toastify";
const categories = ["chocolate", "money", "flower", "makeup", "gift", "fresh"];

const products = [
  {
    id: 1,
    name: "Luxury Chocolate Bouquet",
    price: 50,
    image:
      "https://res.cloudinary.com/dyfgyhy2v/image/upload/v1756619247/IMG-20250819-WA0025_kcqzqu.jpg",
    category: "chocolate",
  },
  {
    id: 2,
    name: "Ferrero Rocher Bouquet",
    price: 65,
    image:
      "https://res.cloudinary.com/dyfgyhy2v/image/upload/v1756619288/IMG-20250819-WA0028_vs1dt9.jpg",
    category: "chocolate",
  },
  {
    id: 3,
    name: "Mixed Chocolate Surprise",
    price: 40,
    image:
      "https://res.cloudinary.com/dyfgyhy2v/image/upload/v1756619206/IMG-20250819-WA0000_yko1nn.jpg",
    category: "chocolate",
  },
  {
    id: 4,
    name: "Premium Money Bouquet",
    price: 120,
    image:
      "https://res.cloudinary.com/dyfgyhy2v/image/upload/v1756619207/IMG-20250819-WA0007_z1rd5r.jpg",
    category: "money",
  },
  {
    id: 5,
    name: "Elegant Cash Flower",
    price: 100,
    image:
      "https://res.cloudinary.com/dyfgyhy2v/image/upload/v1756619207/IMG-20250819-WA0005_xb5lyx.jpg",
    category: "money",
  },
  {
    id: 6,
    name: "Red Rose Bouquet",
    price: 35,
    image:
      "https://res.cloudinary.com/dyfgyhy2v/image/upload/v1756619212/IMG-20250819-WA0016_jljfs1.jpg",
    category: "flower",
  },
  {
    id: 7,
    name: "Tulip Fresh Blooms",
    price: 45,
    image:
      "https://res.cloudinary.com/dyfgyhy2v/image/upload/v1756619221/IMG-20250819-WA0020_jrcfun.jpg",
    category: "flower",
  },
  {
    id: 8,
    name: "Luxury Makeup Kit",
    price: 80,
    image:
      "https://res.cloudinary.com/dyfgyhy2v/image/upload/v1756619208/IMG-20250819-WA0015_bcmet9.jpg",
    category: "makeup",
  },
  {
    id: 9,
    name: "Beauty Essentials Pack",
    price: 95,
    image:
      "https://res.cloudinary.com/dyfgyhy2v/image/upload/v1756619232/IMG-20250819-WA0024_i4nvce.jpg",
    category: "makeup",
  },
  {
    id: 10,
    name: "Luxury Gift Basket",
    price: 130,
    image:
      "https://res.cloudinary.com/dyfgyhy2v/image/upload/v1756619307/IMG-20250819-WA0032_tqwb4u.jpg",
    category: "gift",
  },
  {
    id: 11,
    name: "Surprise Hamper",
    price: 110,
    image:
      "https://res.cloudinary.com/dyfgyhy2v/image/upload/v1756619296/IMG-20250819-WA0030_th2bra.jpg",
    category: "gift",
  },
  {
    id: 12,
    name: "Fresh Fruit Basket",
    price: 55,
    image:
      "https://res.cloudinary.com/dyfgyhy2v/image/upload/v1756619310/IMG-20250819-WA0035_uziwav.jpg",
    category: "fresh",
  },
  {
    id: 13,
    name: "Healthy Green Basket",
    price: 60,
    image:
      "https://res.cloudinary.com/dyfgyhy2v/image/upload/v1756619320/IMG-20250819-WA0036_ctvqye.jpg",
    category: "fresh",
  },
  {
    id: 14,
    name: "smile flower",
    price: 60,
    image:
      "https://res.cloudinary.com/dyfgyhy2v/image/upload/v1756619212/IMG-20250819-WA0016_jljfs1.jpg",
    category: "flower",
  },
  {
    id: 15,
    name: "Beauty Essentials Pack",
    price: 95,
    image:
      "https://res.cloudinary.com/dyfgyhy2v/image/upload/v1756619208/IMG-20250819-WA0014_zywke7.jpg",
    category: "makeup",
  },
  {
    id: 16,
    name: "Beauty Essentials Pack",
    price: 95,
    image:
      "https://res.cloudinary.com/dyfgyhy2v/image/upload/v1756619208/IMG-20250819-WA0011_jrmwwy.jpg",
    category: "makeup",
  },
];

const Shop = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));

    // 👇 yaha notification trigger karo
    toast.success(`${product.name} added to cart!`);
  };
  const { searchQuery } = useSearch();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("category");

  const [sortOption, setSortOption] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  const filteredProducts = products.filter((p) => {
    const matchCategory = category ? p.category === category : true;
    const matchSearch = p.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "low-to-high") return a.price - b.price;
    if (sortOption === "high-to-low") return b.price - a.price;
    return 0;
  });

  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-5">
      <h2 className="text-3xl font-bold text-center mb-8"></h2>

      {/* Sort Dropdown */}
      <div className="flex justify-end max-w-6xl mx-auto mb-6">
        <select
          value={sortOption}
          onChange={(e) => {
            setSortOption(e.target.value);
            setCurrentPage(1);
          }}
          className="px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <option value="default">Default</option>
          <option value="low-to-high">Price: Low to High</option>
          <option value="high-to-low">Price: High to Low</option>
        </select>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {currentProducts.length > 0 ? (
          currentProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-52 object-cover"
              />
              <div className="p-5 flex flex-col items-center text-center">
                <h2 className="text-xl font-semibold text-gray-800">
                  {product.name}
                </h2>
                <p className="text-gray-600 mt-1">Rs {product.price}</p>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="
                    w-full mt-4 bg-emerald-400 text-white
                    py-2 rounded-full font-semibold
                    hover:bg-emerald-500 transition
                  "
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-3 text-center text-gray-500">
            No products found
          </p>
        )}
      </div>

      {/* Pagination */}
      {sortedProducts.length > productsPerPage && (
        <div className="flex justify-center items-center mt-8 space-x-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            className="px-3 py-1 rounded-lg bg-gray-200 hover:bg-gray-300"
            disabled={currentPage === 1}
          >
            Prev
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded-lg ${currentPage === i + 1
                  ? "bg-emerald-400 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
                }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            className="px-3 py-1 rounded-lg bg-gray-200 hover:bg-gray-300"
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Shop;
