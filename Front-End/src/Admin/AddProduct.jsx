import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { FiUpload } from "react-icons/fi"; // react icon for upload

const AddProduct = ({ onProductAdded }) => {
  const [title, setTitle] = useState("");
  const [new_price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const categories = [
    { value: "flower", label: "Flower" },
    { value: "chocolate", label: "Chocolate" },
    { value: "gift", label: "Gift" },
    { value: "money", label: "Money" },
    { value: "makeup", label: "Makeup" },
    { value: "fresh", label: "Fresh" },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !new_price || !category || !image) {
      toast.error("Please fill all fields and select an image!");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("new_price", new_price);
    formData.append("category", category);
    formData.append("image", image);

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:5000/api/v1/products/create",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      toast.success("✅ Product added successfully!");
      setTitle("");
      setPrice("");
      setCategory("");
      setImage(null);

      if (onProductAdded) onProductAdded(res.data.product);
    } catch (err) {
      console.error(err);
      toast.error("❌ Failed to add product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-lg border">
      <h1 className="text-2xl font-bold mb-5 text-center text-[#36468E]">
        Add Product
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#36468E]"
        />
        <input
          type="number"
          placeholder="Price"
          value={new_price}
          onChange={(e) => setPrice(e.target.value)}
          className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#36468E]"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#36468E]"
        >
          <option value="">Select Category</option>
          {categories.map((c) => (
            <option key={c.value} value={c.value}>
              {c.label}
            </option>
          ))}
        </select>

        {/* File upload with icon */}
        <label className="flex items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-[#36468E] transition">
          <FiUpload className="text-3xl text-gray-400 mr-2" />
          {image ? image.name : "Click or drop image here"}
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            className="hidden"
          />
        </label>

        <button
          type="submit"
          className={`flex items-center justify-center gap-2 bg-[#36468E] text-white py-2 rounded-lg font-semibold transition-all duration-300 hover:bg-[#2b3570] ${
            loading ? "opacity-70 cursor-not-allowed" : ""
          }`}
          disabled={loading}
        >
          {loading && (
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              ></path>
            </svg>
          )}
          {loading ? "Uploading..." : "Add Product"}
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
