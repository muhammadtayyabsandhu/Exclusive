import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSearch } from "../Search/SearchContext";
import { toast } from "react-toastify";
import axios from "axios";
import { Smile, Frown, Heart, Gift, Sparkles, Leaf } from "lucide-react";

const moodCategoryMap = {
  happy: "flower",
  sad: "chocolate",
  love: "gift",
  surprise: "money",
  beauty: "makeup",
  fresh: "fresh",
};

const moodDescriptions = {
  happy: "When people are happy, they usually go for bright flowers like sunflowers and marigolds because they look cheerful and lively.",
  sad: "In sad moments, most people prefer white flowers such as lilies and chrysanthemums since they represent peace and comfort.",
  love: "For love, red roses are the most common choice in Pakistan – they are a symbol of romance and affection.",
  surprise: "For surprises, people often pick mixed flower bouquets because the variety feels exciting and colorful.",
  beauty: "To celebrate beauty, orchids and pastel roses are usually selected since they are elegant and attractive.",
  fresh: "For a fresh and uplifting feeling, jasmine and tulips are popular choices as they are widely loved in Pakistan.",
};

const Shop = () => {
  const { searchQuery } = useSearch();
  const location = useLocation();

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [sortOption, setSortOption] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedMood, setSelectedMood] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const productsPerPage = 6;
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("category");

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/v1/products/");
        setProducts(res.data.products);
      } catch (err) {
        console.error(err);
        toast.error("Failed to load products!");
      }
    };
    fetchProducts();
  }, []);

  // Show mood popup if no category
  useEffect(() => {
    if (!category) setShowPopup(true);
    else setShowPopup(false);
  }, [category]);

  const handleAddToCart = (product) => {
    setCart((prev) => [...prev, product]);
    toast.success(`${product.title} added to cart!`);
  };

  // Filter products
  const filteredProducts = products.filter((p) => {
    const moodCategory = selectedMood ? moodCategoryMap[selectedMood] : null;
    const matchMood = moodCategory ? p.category === moodCategory : true;
    const matchCategory = category ? p.category === category : true;
    const matchSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchMood && matchCategory && matchSearch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "low-to-high") return a.new_price - b.new_price;
    if (sortOption === "high-to-low") return b.new_price - a.new_price;
    return 0;
  });

  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-5">
      {/* Mood Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-md z-50">
          <div className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl p-8 shadow-2xl w-[420px] text-center animate-fadeIn">
            <h2 className="text-2xl font-extrabold mb-6 text-gray-800 drop-shadow">
              Select Your Mood
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => { setSelectedMood("happy"); setShowPopup(false); }}
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-green-400 to-emerald-500 text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all"
              >
                <Smile size={20} /> Happy
              </button>
              <button
                onClick={() => { setSelectedMood("sad"); setShowPopup(false); }}
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-blue-400 to-indigo-500 text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all"
              >
                <Frown size={20} /> Sad
              </button>
              <button
                onClick={() => { setSelectedMood("love"); setShowPopup(false); }}
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-pink-400 to-rose-500 text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all"
              >
                <Heart size={20} /> Love
              </button>
              <button
                onClick={() => { setSelectedMood("surprise"); setShowPopup(false); }}
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-purple-400 to-fuchsia-500 text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all"
              >
                <Gift size={20} /> Surprise
              </button>
              <button
                onClick={() => { setSelectedMood("beauty"); setShowPopup(false); }}
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-orange-400 to-red-500 text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all"
              >
                <Sparkles size={20} /> Beauty
              </button>
              <button
                onClick={() => { setSelectedMood("fresh"); setShowPopup(false); }}
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-lime-400 to-green-600 text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all"
              >
                <Leaf size={20} /> Fresh
              </button>
              <button
                onClick={() => { setSelectedMood(""); setShowPopup(false); }}
                className="col-span-2 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-gray-400 to-gray-600 text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all"
              >
                All Products
              </button>
            </div>
          </div>
        </div>
      )}
{/* Mood Description */}
{selectedMood && (
  <div className="max-w-3xl mx-auto mb-6 p-6 rounded-2xl shadow-xl bg-gradient-to-r from-emerald-200 via-green-100 to-emerald-200 border-2 border-green-300 text-center animate-fadeIn">
    <h3 className="text-xl md:text-2xl font-bold text-green-800 mb-2 drop-shadow-lg">
      {selectedMood.charAt(0).toUpperCase() + selectedMood.slice(1)} Mood 🌸
    </h3>
    <p className="text-gray-700 text-base md:text-lg font-medium">
      {moodDescriptions[selectedMood]}
    </p>
  </div>
)}


      {/* Sort Dropdown */}
      <div className="flex justify-end max-w-6xl mx-auto mb-6">
        <select
          value={sortOption}
          onChange={(e) => { setSortOption(e.target.value); setCurrentPage(1); }}
          className="px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <option value="default">Default</option>
          <option value="low-to-high">Price: Low to High</option>
          <option value="high-to-low">Price: High to Low</option>
        </select>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {currentProducts.length > 0 ? currentProducts.map((p) => (
          <div key={p._id} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <img src={p.image} alt={p.title} className="w-full h-52 object-cover" />
            <div className="p-5 flex flex-col items-center text-center">
              <h2 className="text-xl font-semibold text-gray-800">{p.title}</h2>
              <p className="text-gray-600 mt-1">Rs {p.new_price}</p>
              <button onClick={() => handleAddToCart(p)} className="w-full mt-4 bg-emerald-400 text-white py-2 rounded-full font-semibold hover:bg-emerald-500 transition">Add to Cart</button>
            </div>
          </div>
        )) : <p className="col-span-3 text-center text-gray-500">No products found</p>}
      </div>

      {/* Pagination */}
      {sortedProducts.length > productsPerPage && (
        <div className="flex justify-center items-center mt-8 space-x-2">
          <button onClick={() => setCurrentPage(prev => Math.max(prev-1,1))} disabled={currentPage===1} className="px-3 py-1 rounded-lg bg-gray-200 hover:bg-gray-300">Prev</button>
          {[...Array(totalPages)].map((_, i) => (
            <button key={i} onClick={() => setCurrentPage(i+1)} className={`px-3 py-1 rounded-lg ${currentPage===i+1?"bg-emerald-400 text-white":"bg-gray-200 hover:bg-gray-300"}`}>{i+1}</button>
          ))}
          <button onClick={() => setCurrentPage(prev => Math.min(prev+1,totalPages))} disabled={currentPage===totalPages} className="px-3 py-1 rounded-lg bg-gray-200 hover:bg-gray-300">Next</button>
        </div>
      )}
    </div>
  );
};

export default Shop;
