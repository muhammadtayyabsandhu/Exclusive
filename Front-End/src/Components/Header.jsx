import React, { useState, useEffect } from "react";
import logo from "../assets/Images/logo.png"
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import TopHeader from "./TopHeader";
import UserDropdown from "./UserDropdown";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);

  const cartCount = useSelector((state) => state.cart.items.length);

  const headerRef = React.useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };

    updateHeaderHeight();
    window.addEventListener("resize", updateHeaderHeight);

    return () => window.removeEventListener("resize", updateHeaderHeight);
  }, []);

  const toggleNav = () => setNavOpen(!navOpen);

  return (
    <>
      {isSticky && (
        <div
          style={{
            height: `${headerHeight}px`,
            transition: "height 0.3s ease",
          }}
        />
      )}

      <div
        ref={headerRef}
        className={`w-full bg-white shadow transition-all duration-500 z-50 ${
          isSticky
            ? "fixed top-0 left-0 shadow-lg animate-slide-down"
            : "relative"
        }`}
      >
        <div
          className={`w-full bg-gray-100 transition-all duration-500 ${
            isSticky ? "h-0 overflow-hidden opacity-0" : "h-auto opacity-100"
          }`}
        >
          <TopHeader />
        </div>

        <header className="w-full bg-white">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
           <div className="text-xl font-bold">
  <Link to="/">
   <div className="flex items-center h-10"> 
  <Link to="/">
    <img
      src={logo}
      alt="Bloom and Beyond Logo"
      className="h-full max-h-50 w-auto object-contain"
    />
  </Link>
</div>
  </Link>
</div>


            {/* ✅ Desktop Navigation */}
            <nav className="hidden md:flex space-x-6 text-gray-700">
              {["/", "/shop", "/about", "/contact"].map((path, index) => (
                <Link key={index} to={path} className="relative group">
                  {path.replace("/", "") || "Home"}
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-purple-500 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300"
                    layoutId="underline"
                  />
                </Link>
              ))}
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  className="border border-gray-300 rounded-full py-1 px-3 pr-8 focus:outline-none focus:border-blue-500 text-sm"
                />
                <AiOutlineSearch className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer" />
              </div>
              <AiOutlineHeart className="text-xl text-gray-600 hover:text-red-500 cursor-pointer" />
              <Link to="/cart" className="relative">
                <AiOutlineShoppingCart className="text-xl text-gray-600 hover:text-blue-500 cursor-pointer" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {cartCount}
                  </span>
                )}
              </Link>
              <UserDropdown />
            </div>

            <div className="md:hidden">
              {navOpen ? (
                <AiOutlineClose
                  className="text-2xl cursor-pointer"
                  onClick={toggleNav}
                />
              ) : (
                <AiOutlineMenu
                  className="text-2xl cursor-pointer"
                  onClick={toggleNav}
                />
              )}
            </div>
          </div>

          {/* ✅ Mobile Navigation */}
          <div
            className={`md:hidden flex flex-col items-center space-y-4 bg-white py-4 transition-all duration-500 ${
              navOpen
                ? "max-h-60 opacity-100"
                : "max-h-0 opacity-0 overflow-hidden"
            }`}
          >
            <Link to="/" onClick={() => setNavOpen(false)}>Home</Link>
            <Link to="/shop" onClick={() => setNavOpen(false)}>Shop</Link>
            <Link to="/about" onClick={() => setNavOpen(false)}>About</Link>
            <Link to="/contact" onClick={() => setNavOpen(false)}>Contact</Link>
            <Link to="/signup" onClick={() => setNavOpen(false)}>Signup</Link>
          </div>
        </header>
      </div>
    </>
  );
}
