import React from "react";

const products = [
  {
    id: 1,
    name: "Chocolate Bouquet",
    price: 2500,
    image: "https://via.placeholder.com/200x160.png?text=Chocolate+Bouquet",
  },
  {
    id: 2,
    name: "Flower Bouquet",
    price: 1800,
    image: "https://via.placeholder.com/200x160.png?text=Flower+Bouquet",
  },
  {
    id: 3,
    name: "Money Bouquet",
    price: 3000,
    image: "https://via.placeholder.com/200x160.png?text=Money+Bouquet",
  },
  {
    id: 4,
    name: "Makeup Bouquet",
    price: 4000,
    image: "https://via.placeholder.com/200x160.png?text=Makeup+Bouquet",
  },
];

export default function Makeup() {
  return (
    <section className="py-8 bg-pink-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="flex items-center gap-2 mb-3">
          <div className="bg-pink-500 w-2 h-6 rounded-sm"></div>
          <h2 className="text-xl font-bold text-pink-700">Makeup Bouquets</h2>
        </div>

        {/* Horizontal Scroll */}
        <div
          className="
            flex gap-6 overflow-x-auto scroll-smooth 
            snap-x snap-mandatory pb-3
            [&::-webkit-scrollbar]:hidden
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
                className="h-40 w-full object-cover rounded-t-2xl"
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
