import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  // Fetch products
  const fetchProducts = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/v1/products");
      setProducts(data.products);
    } catch (error) {
      console.error("Error fetching products", error);
      toast.error("Failed to fetch products!");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Delete product
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;
    try {
      await axios.delete(`http://localhost:5000/api/v1/products/${id}`);
      setProducts(products.filter((p) => p._id !== id));
      toast.success("Product deleted successfully!");
    } catch (error) {
      console.error("Error deleting product", error);
      toast.error("Failed to delete product!");
    }
  };

  if (!products.length) {
    return <p className="text-center py-10 text-gray-500">No products found.</p>;
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center text-[#36468E]">
        Products List
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((p) => (
          <div
            key={p._id}
            className="bg-white shadow-lg rounded-2xl overflow-hidden hover:scale-105 transform transition duration-300"
          >
            <img
              src={p.image}
              alt={p.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg text-gray-800">{p.title}</h3>
              <p className="text-gray-500 text-sm mt-1">{p.category}</p>
              <p className="text-[#36468E] font-bold mt-2">Rs {p.new_price}</p>

              <div className="mt-4 flex gap-2">
                <button
                  onClick={() => handleDelete(p._id)}
                  className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg font-semibold transition"
                >
                  Delete
                </button>
             
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
