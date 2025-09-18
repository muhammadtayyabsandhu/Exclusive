import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, requiredRole }) => {
  const userData = JSON.parse(localStorage.getItem("user"));
  const user = userData?.user || userData; // backend response ke hisaab se

  // agar user login hi nahi hai
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // agar specific role required hai aur user match nahi karta
  if (requiredRole && user.role !== requiredRole) {
    return <Navigate to="/" replace />; // unauthorized user ko home bhej do
  }

  return children;
};

export default ProtectedRoute;
