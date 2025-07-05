import React, { useState } from "react";
import image1 from "../../assets/Images/Side Image.png"
const Login = () => {
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
          const response = await axios.post("http://localhost:5000/users/login", formData);
  
          alert("Login successful");
      } catch (error) {
          console.error("Login Error:", error.response?.data?.message || "Login failed");
          alert(error.response?.data?.message || "Something went wrong");
      }
  };
  
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side (Image) */}
      <div className="flex-1 hidden md:flex items-center justify-center bg-gray-50">
        <img
          src={image1}
          alt="Login"
          className="max-w-sm"
        />
      </div>

      {/* Right Side (Form) */}
      <div className="flex-1 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-semibold mb-2">Log in to Exclusive</h2>
          <p className="text-gray-500 mb-6">Enter your details below</p>

          {/* Form Start */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={formData.email}
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
              Log In
            </button>
          </form>

          {/* Forget Password Link */}
          <p className="text-sm text-center mt-4">
            <a href="/forgot-password" className="text-red-500 hover:underline">
              Forget Password?
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
