import React from "react";

/* Dummy data — apni API ya props se replace kar lena */
const products = [
  {
    id: 1,
    name: "Rose Paradise",
    price: 1499,
    image: "https://res.cloudinary.com/dyfgyhy2v/image/upload/v1751806538/WhatsApp_Image_2025-07-06_at_16.39.02_668a189a_qjvwfs.jpg",
  },
  {
    id: 2,
    name: "Choco Love Basket",
    price: 1899,
    image: "https://res.cloudinary.com/dyfgyhy2v/image/upload/v1751806537/WhatsApp_Image_2025-07-06_at_16.39.02_8efe2274_i7whzk.jpg",
  },
  {
    id: 3,
    name: "Mini Bloom Box",
    price: 999,
    image: "https://res.cloudinary.com/dyfgyhy2v/image/upload/v1751806537/WhatsApp_Image_2025-07-06_at_16.39.01_740805a1_uozomh.jpg",
  },
  {
    id: 4,
    name: "Sunshine Surprise",
    price: 1299,
    image: "https://res.cloudinary.com/dyfgyhy2v/image/upload/v1751806536/WhatsApp_Image_2025-07-06_at_16.39.02_83a95df8_vfywwy.jpg",
  },
  {
    id: 5,
    name: "Lavender Dream",
    price: 1599,
    image: "https://res.cloudinary.com/dyfgyhy2v/image/upload/v1751806537/WhatsApp_Image_2025-07-06_at_16.39.01_740805a1_uozomh.jpg",
  },
];

export default function ProductCarousel() {
  return (
    <section className="py-8 bg-pink-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold text-black mb-6">
          Gift Bouquet
        </h2>

        {/* Horizontal scroll container */}
        <div
          className="
            flex gap-6 overflow-x-auto scroll-smooth 
            snap-x snap-mandatory pb-3
            [&::-webkit-scrollbar]:hidden    /* hide scrollbar on WebKit */
            -mx-2 px-2
          "
        >
          {products.map((p) => (
            <div
              key={p.id}
              className="
                min-w-[220px] lg:min-w-[260px] snap-start
                bg-white rounded-2xl shadow hover:shadow-lg transition
                flex-shrink-0
              "
            >
              {/* Product Image */}
              <img
                src={p.image}
                alt={p.name}
                className="h-40 w-full object-contain rounded-t-2xl"
              />

              {/* Info */}
              <div className="p-4 text-center">
                <h3 className="font-semibold text-black">{p.name}</h3>
                <p className="text-pink-700 font-medium mt-1">
                  Rs&nbsp;{p.price}
                </p>

                {/* Add to Cart */}
                <button
                  className="
                    w-full mt-4 bg-emerald-400 text-white
                    py-2 rounded-full font-semibold
                    hover:bg-emerald-400 transition
                  "
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
