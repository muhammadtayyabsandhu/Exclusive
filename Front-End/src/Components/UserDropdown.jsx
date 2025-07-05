import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  AiOutlineUser,
  AiOutlineSetting,
  AiOutlineShopping,
  AiOutlineCloseCircle,
  AiOutlineMessage,
  AiOutlineLogout,
} from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

export default function UserDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // Logout Functionality
  const handleLogout = () => {
    localStorage.removeItem("user"); // 'auth' variable clear ho jayega
    navigate("/signup/login"); // Redirect to login page
  };

  return (
    <div className="relative">
      <div
        className="text-xl text-gray-600 hover:text-red-500 cursor-pointer"
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
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="absolute right-0 mt-2 w-48 bg-white/30 shadow-lg rounded-lg py-2 backdrop-blur-lg border border-white/20 z-50"
            onMouseLeave={() => setIsOpen(false)}
          >
            <Link
              to="/account"
              className="flex items-center space-x-2 px-4 py-2 hover:bg-white/20 cursor-pointer text-white"
            >
              <AiOutlineSetting className="text-white" />
              <span>Manage My Account</span>
            </Link>
            <Link
              to="/orders"
              className="flex items-center space-x-2 px-4 py-2 hover:bg-white/20 cursor-pointer text-white"
            >
              <AiOutlineShopping className="text-white" />
              <span>My Order</span>
            </Link>
            <Link
              to="/cancellations"
              className="flex items-center space-x-2 px-4 py-2 hover:bg-white/20 cursor-pointer text-white"
            >
              <AiOutlineCloseCircle className="text-white" />
              <span>My Cancellations</span>
            </Link>
            <Link
              to="/reviews"
              className="flex items-center space-x-2 px-4 py-2 hover:bg-white/20 cursor-pointer text-white"
            >
              <AiOutlineMessage className="text-white" />
              <span>My Reviews</span>
            </Link>

            {/* Logout Button with Functionality */}
            <div
              onClick={handleLogout}
              className="flex items-center space-x-2 px-4 py-2 hover:bg-white/20 cursor-pointer text-red-400 border-t border-white/20"
            >
              <AiOutlineLogout className="text-red-400" />
              <span>Logout</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
