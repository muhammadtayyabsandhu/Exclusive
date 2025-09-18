// AdminLayout.jsx
import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import { FaHome, FaTachometerAlt, FaBox, FaPlus } from "react-icons/fa";

const AdminLayout = () => {
  return (
    <div className="flex h-screen">
      {/* 🔹 Sidebar */}
      <aside className="w-64 bg-pink-100 text-pink-900 p-6 flex flex-col">
        {/* Home Link */}
        <NavLink
          to="/"
          className="flex items-center gap-2 mb-8 p-2 rounded hover:bg-pink-200 transition-colors"
        >
          <FaHome /> <span>Back to Home</span>
        </NavLink>

        <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>

        <nav className="flex flex-col gap-3">
          <NavLink
            to="/admin/dashboard"
            className={({ isActive }) =>
              `flex items-center gap-2 p-2 rounded transition-colors ${
                isActive ? "bg-pink-200" : "hover:bg-pink-50"
              }`
            }
          >
            <FaTachometerAlt /> Dashboard
          </NavLink>

          <NavLink
            to="/admin/products"
            className={({ isActive }) =>
              `flex items-center gap-2 p-2 rounded transition-colors ${
                isActive ? "bg-pink-200" : "hover:bg-pink-50"
              }`
            }
          >
            <FaBox /> Products
          </NavLink>

          <NavLink
            to="/admin/products/add_product"
            className={({ isActive }) =>
              `flex items-center gap-2 p-2 rounded transition-colors ${
                isActive ? "bg-pink-200" : "hover:bg-pink-50"
              }`
            }
          >
            <FaPlus /> Add Product
          </NavLink>
        </nav>
      </aside>

      {/* 🔹 Main Content */}
      <main className="flex-1 p-6 overflow-y-auto bg-gray-50">
        <Outlet /> {/* Nested routes render here */}
      </main>
    </div>
  );
};

export default AdminLayout;
