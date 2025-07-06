import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";  // ✅ Axios added for API call
import { Link } from "react-router";
import { useNavigate } from 'react-router-dom';





const Signup = () => {
  


  const navigate = useNavigate(); // ✅ useNavigate hook added for navigation
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const res = await axios.post("https://backend-rho-weld.vercel.app/users/signup", formData);

        if (res.status === 200 || res.status === 201) {
           alert("Your Regestration has succesfully")
            localStorage.setItem("user", JSON.stringify(res.data));
            navigate("/");
        } else {
            throw new Error(res.data.message || "Signup failed!");
        }

    } catch (error) {
        console.error("Signup Error:", error.response?.data?.message || error.message);
        alert(error.response?.data?.message || "Signup failed");
    }
};




  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side (Image) */}
      <div className="flex-1 hidden md:flex items-center justify-center bg-gray-50">
        <img
          src="src\\assets\\Images\\Side Image.png"
          alt="Sign Up"
          className="max-w-sm"
        />
      </div>

      {/* Right Side (Form) */}
      <div className="flex-1 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-semibold mb-2">Create an account</h2>
          <p className="text-gray-500 mb-6">Enter your details below</p>

          {/* Form Start */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>

            <div>
              <input
                type="text"
                name="email"
                placeholder="Email or Phone Number"
                value={formData.emailOrPhone}
                onChange={handleChange}
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>

            <div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-red-500 text-white py-3 rounded-md hover:bg-red-600 transition-colors"
            >
              Create Account
            </button>
          </form>

          {/* Google Sign-Up Button */}
          <div className="mt-4">
            <button
              type="button"
              className="flex items-center justify-center gap-2 w-full border border-gray-300 py-3 rounded-md hover:bg-gray-100 transition-colors"
            >
              <FcGoogle className="text-xl" />
              Sign up with Google
            </button>
          </div>

          {/* Already have an account */}
          <p className="text-sm text-center mt-4">
            Already have an account?{" "}
            <Link to={"/signup/login" }className="text-red-500 hover:underline">
              Log in
            </Link>
           
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
