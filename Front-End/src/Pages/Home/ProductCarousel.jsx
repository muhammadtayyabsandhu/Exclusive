import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Features/cartSlice";
import { toast } from "react-toastify";   // 👈 import toast

const products = [
  {
    id: 1,
    name: "Rose Paradise",
    price: 1499,
    image:
      "https://res.cloudinary.com/dyfgyhy2v/image/upload/v1751806538/WhatsApp_Image_2025-07-06_at_16.39.02_668a189a_qjvwfs.jpg",
  },
  {
    id: 2,
    name: "Choco Love Basket",
    price: 1899,
    image:
      "https://res.cloudinary.com/dyfgyhy2v/image/upload/v1751806537/WhatsApp_Image_2025-07-06_at_16.39.02_8efe2274_i7whzk.jpg",
  },
  {
    id: 3,
    name: "Mini Bloom Box",
    price: 999,
    image:
      "https://res.cloudinary.com/dyfgyhy2v/image/upload/v1751806537/WhatsApp_Image_2025-07-06_at_16.39.01_740805a1_uozomh.jpg",
  },
  {
    id: 3,
    name: "Mini Bloom Box",
    price: 999,
    image:
      "https://res.cloudinary.com/dyfgyhy2v/image/upload/v1751806537/WhatsApp_Image_2025-07-06_at_16.39.01_740805a1_uozomh.jpg",
  },
  {
    id: 3,
    name: "Mini Bloom Box",
    price: 999,
    image:
      "https://res.cloudinary.com/dyfgyhy2v/image/upload/v1751806537/WhatsApp_Image_2025-07-06_at_16.39.01_740805a1_uozomh.jpg",
  },
];

export default function ProductCarousel() {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));

    // 👇 yaha notification trigger karo
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <section className="py-8 bg-pink-50">
      <div className="max-w-7xl mx-auto px-6 ">
        <div className="flex items-center gap-2 mb-3">
          <div className="bg-pink-500 w-2 h-6 rounded-sm py-4"></div>
          <h2 className="text-xl font-bold text-pink-700">Gift Bouquet</h2>
        </div>

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
              <img
                src={p.image}
                alt={p.name}
                className="h-40 w-full object-contain rounded-t-2xl"
              />

              <div className="p-4 text-center">
                <h3 className="font-semibold text-black">{p.name}</h3>
                <p className="text-pink-700 font-medium mt-1">
                  Rs&nbsp;{p.price}
                </p>

                <button
                  onClick={() => handleAddToCart(p)}
                  className="
                    w-full mt-4 bg-emerald-400 text-white
                    py-2 rounded-full font-semibold
                    hover:bg-emerald-500 transition
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
