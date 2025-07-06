import React from "react";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="relative pt-24 pb-10 text-gray-800">
      {/* 🌊 Decorative top wave */}
      <svg
        className="absolute top-0 left-0 w-full h-20 md:h-32 rotate-180"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#fce7f3"
          d="M0,96L60,122.7C120,149,240,203,360,213.3C480,224,600,192,720,170.7C840,149,960,139,1080,154.7C1200,171,1320,213,1380,234.7L1440,256V0H1380C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0H0Z"
        />
      </svg>

      {/* 🎀 Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-pink-100 to-pink-50" />

      {/* 🪟 Glass card */}
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="backdrop-blur-md bg-white/60 rounded-3xl shadow-xl p-10 grid gap-8
                        grid-cols-1 md:grid-cols-3 text-center md:text-left">
          {/* Brand / About */}
          <div>
            <h2 className="text-3xl font-extrabold text-pink-600 mb-2">
              Bloom&nbsp;&amp;&nbsp;Beyond
            </h2>
            <p className="text-sm leading-relaxed">
              Hand‑crafted bouquets, baskets&nbsp;and gifts —
              spreading joy one bloom at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Navigate</h3>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:text-pink-600">Home</a></li>
              <li><a href="#" className="hover:text-pink-600">Shop</a></li>
              <li><a href="#" className="hover:text-pink-600">My&nbsp;Account</a></li>
              <li><a href="#" className="hover:text-pink-600">Contact</a></li>
              <li><a href="#" className="hover:text-pink-600">FAQs</a></li>
            </ul>
          </div>

          {/* Social + Newsletter */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-3">Stay Connected</h3>

            {/* Social icons */}
            <div className="flex space-x-4 mb-6 text-2xl text-pink-600">
              {[AiFillFacebook, AiFillTwitterSquare, AiFillInstagram, AiFillLinkedin].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="transform hover:scale-110 transition duration-300"
                  >
                    <Icon />
                  </a>
                )
              )}
            </div>

            {/* Mini newsletter input */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="w-full flex bg-white rounded-full overflow-hidden shadow"
            >
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 px-4 py-2 text-sm focus:outline-none"
              />
              <button className="bg-pink-600 text-white px-4 hover:bg-pink-700">
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Bottom line */}
        <p className="mt-8 text-center text-xs text-gray-600">
          © {new Date().getFullYear()} Bloom &amp; Beyond. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
