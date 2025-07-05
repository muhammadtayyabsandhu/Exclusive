import React from "react";
import {
  AiOutlineArrowRight,
  AiOutlineEnvironment,
  AiOutlineMail,
  AiOutlinePhone,
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-10 pb-6">
      {/* Top Section: 5 Columns */}
      <div
        className="
          max-w-7xl mx-auto px-4
          grid grid-cols-1 md:grid-cols-5 gap-8
          text-center md:text-left
          justify-items-center md:justify-items-start
          items-center md:items-start
        "
      >
        {/* ----- Column 1: Exclusive / Subscribe ----- */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Exclusive</h2>
          <p className="mb-4">Subscribe</p>
          <p className="text-sm mb-4">Get 10% off your First order</p>
          <div className="flex items-center justify-center md:justify-start">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-gray-800 text-white px-3 py-2 rounded-l focus:outline-none"
            />
            <button className="bg-white text-black px-3 py-2 rounded-r hover:bg-gray-200 transition">
              <AiOutlineArrowRight />
            </button>
          </div>
        </div>

        {/* ----- Column 2: Support ----- */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Support</h2>
          {/* Address */}
          <div className="flex items-start gap-2 mb-1 justify-center md:justify-start">
            <AiOutlineEnvironment className="mt-1" />
            <p className="text-sm leading-5">
              111 Bijoy sarani, Dhaka, <br />
              DH-1236, Bangladesh
            </p>
          </div>
          {/* Email */}
          <div className="flex items-center gap-2 mb-1 justify-center md:justify-start">
            <AiOutlineMail />
            <p className="text-sm">exclusive@gmail.com</p>
          </div>
          {/* Phone */}
          <div className="flex items-center gap-2 mb-1 justify-center md:justify-start">
            <AiOutlinePhone />
            <p className="text-sm">+88015-88888-9999</p>
          </div>
        </div>

        {/* ----- Column 3: Account ----- */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Account</h2>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="#" className="hover:text-gray-300 transition">
                My Account
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300 transition">
                Login / Register
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300 transition">
                Cart
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300 transition">
                Wishlist
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300 transition">
                Shop
              </a>
            </li>
          </ul>
        </div>

        {/* ----- Column 4: Quick Link ----- */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Quick Link</h2>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="#" className="hover:text-gray-300 transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300 transition">
                Terms Of Use
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300 transition">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* ----- Column 5: Download App ----- */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Download App</h2>
          <p className="text-sm mb-3">Save up to 50% on your first order only</p>

          {/* Buttons: Play Store & App Store */}
          <div className="flex space-x-2 mb-3 justify-center md:justify-start">
            <a href="#" className="inline-block">
              <img
                src="/path/to/playstore.png"
                alt="Google Play"
                className="h-10 object-cover"
              />
            </a>
            <a href="#" className="inline-block">
              <img
                src="/path/to/appstore.png"
                alt="App Store"
                className="h-10 object-cover"
              />
            </a>
          </div>

          {/* QR Code (Placeholder) */}
          <div className="bg-white p-2 inline-block mb-3">
            <img
              src="https://via.placeholder.com/80x80?text=QR+Code"
              alt="QR Code"
              className="h-20 w-20 object-cover"
            />
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-2 justify-center md:justify-start">
            <a href="#" className="hover:text-gray-400 transition">
              <AiFillFacebook className="text-2xl" />
            </a>
            <a href="#" className="hover:text-gray-400 transition">
              <AiFillTwitterSquare className="text-2xl" />
            </a>
            <a href="#" className="hover:text-gray-400 transition">
              <AiFillInstagram className="text-2xl" />
            </a>
            <a href="#" className="hover:text-gray-400 transition">
              <AiFillLinkedin className="text-2xl" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-4 mt-8 border-t border-gray-700 pt-4 flex flex-col items-center justify-center">
        <p className="text-xs text-gray-400">
          © Copyright Ritmel 2022. All right reserved
        </p>
      </div>
    </footer>
  );
}
