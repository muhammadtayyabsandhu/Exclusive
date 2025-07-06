import React from "react";
import { motion } from "framer-motion";
import { FaGift } from "react-icons/fa";

export default function GiftBasketsSection() {
  const float = {
    hidden: { y: 0 },
    show: {
      y: [0, -12, 0],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <section className="relative isolate overflow-hidden">
      {/* 🎨 Background: Soft Light Pink */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-200 via-pink-100 to-pink-200" />

      {/* 🌸 Blurred blobs */}
      <div className="absolute -top-10 -left-10 h-48 w-48 rounded-full bg-pink-300/30 blur-3xl" />
      <div className="absolute bottom-6 right-0 h-56 w-56 rounded-full bg-pink-400/30 blur-3xl" />

      {/* 🌿 Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-14 grid lg:grid-cols-2 gap-10 items-center">
        {/* 🌿 Left Side (Text) */}
        <div className="text-emerald-800">
          <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight">
            Gift Bouquet <br />
            <span className="text-black">Full of Love</span>
          </h2>
          <p className="mt-4 max-w-md text-black text-base sm:text-lg">
            Send joy with handcrafted baskets of treats, flowers, and memories.
            Designed to make every moment special.
          </p>

          <a
            href="#shop-baskets"
            className="inline-block mt-6 bg-emerald-600 text-white font-semibold px-6 py-2.5 rounded-full shadow hover:bg-emerald-700 transition"
          >
            Shop Now
          </a>
        </div>

        {/* 🎁 Right Side (Gift Card) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Floating gift icons */}
          {[[-40, -30], [190, -10], [130, 150]].map(([x, y], i) => (
            <motion.span
              key={i}
              variants={float}
              initial="hidden"
              animate="show"
              style={{ left: x, top: y }}
              className="absolute text-emerald-500/90"
            >
              <FaGift className="text-3xl drop-shadow" />
            </motion.span>
          ))}

          {/* Gift Card */}
          <div className="relative mx-auto w-72 sm:w-80 aspect-[5/6] rounded-2xl
                          bg-white/20 backdrop-blur-xl shadow-2xl overflow-hidden border border-white/50">
            <img
              src="https://res.cloudinary.com/dyfgyhy2v/image/upload/v1751806095/WhatsApp_Image_2025-07-06_at_16.39.00_0b65fa7e_thpoqw.jpg"
              alt="Gift Basket"
              className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent" />
            <div className="absolute bottom-0 w-full p-5 text-emerald-800">
              <h3 className="text-lg font-semibold">Mini Bloom Box</h3>
              <p className="text-sm text-emerald-600">Cookies • Flowers • Surprise</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
