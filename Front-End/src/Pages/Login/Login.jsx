import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/users/login",
        formData
      );

      alert("Login successful");
      login(response.data); // context me save
      navigate("/"); // home page
    } catch (error) {
      console.error(error.response?.data?.message || "Login failed");
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-50">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold mb-2 text-pink-600 text-center">
          Log in to Your Account
        </h2>
        <p className="text-gray-500 mb-6 text-center">
          Enter your details below
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
          />

          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-3 rounded-md hover:bg-pink-600 transition-colors"
          >
            Log In
          </button>
        </form>

        <p className="text-sm text-center mt-4">
          Forgot your password?{" "}
          <Link to="/forgot-password" className="text-pink-500 hover:underline">
            Reset it
          </Link>
        </p>

        <p className="text-sm text-center mt-2">
          Don't have an account?{" "}
          <Link to="/signup" className="text-pink-500 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
