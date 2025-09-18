import React, { useEffect, useState } from "react";
import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const Dashboard = () => {
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);

  // Fetch total products
  const fetchTotalProducts = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/v1/products");
      setTotalProducts(data.products?.length || 0);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  // Fetch total users
  const fetchTotalUsers = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/users/count");
      setTotalUsers(data.totalUsers || 0);
    } catch (err) {
      console.error("Error fetching users:", err);
    }
  };

  useEffect(() => {
    fetchTotalProducts();
    fetchTotalUsers();
  }, []);

  // Prepare chart data
  const chartData = [
    { name: "Products", count: totalProducts },
    { name: "Users", count: totalUsers },
  ];

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-[#36468E] text-center">Admin Dashboard</h1>

      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-4 text-center">Total Products & Users</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#36468E" barSize={60} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;
