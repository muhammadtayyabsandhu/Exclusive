import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  AiOutlineUser,
  AiOutlineLogout,
  AiOutlineDashboard,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function UserDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const role = user?.user?.role; // backend structure me `user.role`

  return (
    <div className="relative">
      <div
        className="text-xl text-gray-700 hover:text-red-500 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <AiOutlineUser />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute right-0 mt-2 w-52 bg-white shadow-lg rounded-xl py-3 border border-gray-200 z-50"
            onMouseLeave={() => setIsOpen(false)}
          >
            {/* ✅ Dashboard - only for admin */}
            {role === "admin" && (
              <div
                onClick={() => navigate("/admin/dashboard")}
                className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700"
              >
                <AiOutlineDashboard />
                <span>Dashboard</span>
              </div>
            )}

            {/* ✅ Logout */}
            <div
              onClick={() => {
                logout();
                navigate("/login");
              }}
              className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500 font-medium border-t border-gray-200"
            >
              <AiOutlineLogout />
              <span>Logout</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
