import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

// ✅ Public Pages
import Signup from "../Pages/Signup/Signup";
import Login from "../Pages/Login/Login";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import CartPage from "../Pages/CartPage";
import ProductDetailPage from "../Pages/Product Detail page/ProductDetailPage";
import Shop from "../Pages/Shop/Shop";
import CheckoutPage from "../Pages/CheckoutPage";

// ✅ Admin Pages
import AdminLayout from "../Admin/AdminLayout";

import ProductList from "../Admin/ProductsList.jsx";
import AddProduct from "../Admin/AddProduct.jsx";

// ✅ Protected Route
import ProtectedRoute from "./ProtectedRoute";
import Dashboard from "../Admin/Dashboard.jsx";

const Main_routes = () => {
  return (
    <Routes>
      {/* 🔹 Auth Routes (Signup, Login) */}
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />

      {/* 🔹 User Layout Routes */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />

        {/* 🔒 Protected User Pages */}
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <CartPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <CheckoutPage />
            </ProtectedRoute>
          }
        />

        {/* 🌍 Public Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />

        {/* ❌ 404 */}
        <Route path="*" element={<PageNotFound />} />
      </Route>

      {/* 🔒 Admin Routes */}
      <Route
        path="/admin/*"
        element={
          <ProtectedRoute requiredRole="admin">
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        {/* Default redirect to dashboard */}
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard/>} />
        <Route path="products" element={<ProductList />} />
        <Route path="products/add_product" element={<AddProduct />} />
      </Route>
    </Routes>
  );
};

export default Main_routes;
