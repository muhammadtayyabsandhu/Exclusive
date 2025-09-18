import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Features/cartSlice";
import { toast } from "react-toastify";
import axios from "axios";

export default function ProductCarousel() {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products from backend
  const fetchProducts = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/v1/products");
      setProducts(data.products || []);
    } catch (error) {
      console.error("Error fetching products:", error);
      toast.error("❌ Failed to load products");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success(`${product.title || product.name} added to cart!`);
  };

  if (loading) {
    return <p className="text-center py-10">Loading products...</p>;
  }

  return (
    <section className="py-8 bg-pink-50">
      <div className="max-w-7xl mx-auto px-6 ">
        <div className="flex items-center gap-2 mb-3">
          <div className="bg-pink-500 w-2 h-6 rounded-sm py-4"></div>
          <h2 className="text-xl font-bold text-pink-700">Gift Bouquet</h2>
        </div>

        <div
          className="
            flex gap-6 overflow-x-auto scroll-smooth 
            snap-x snap-mandatory pb-3
            [&::-webkit-scrollbar]:hidden
            -mx-2 px-2
          "
        >
          {products.map((p) => (
            <div
              key={p._id}
              className="
                min-w-[220px] lg:min-w-[260px] snap-start
                bg-white rounded-2xl shadow hover:shadow-lg transition
                flex-shrink-0
              "
            >
              <img
                src={p.image}
                alt={p.title}
                className="h-40 w-full object-cover rounded-t-2xl"
              />

              <div className="p-4 text-center">
                <h3 className="font-semibold text-black">{p.title}</h3>
                <p className="text-pink-700 font-medium mt-1">
                  Rs&nbsp;{p.new_price}
                </p>

                <button
                  onClick={() => handleAddToCart(p)}
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
          ))}
        </div>
      </div>
    </section>
  );
}
