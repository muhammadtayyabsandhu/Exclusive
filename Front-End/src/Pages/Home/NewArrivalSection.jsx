// src/components/NewArrivalSection.jsx
import React from "react";
import bigone from "../../assets/Images/imgee.webp";

const NewArrivalSection = () => {
  const items = [
    {
      title: "Luxury Rose Flower Bucket",
      description:
        "Fresh red roses beautifully packed in a premium decorative bucket.",
      image: bigone,
      link: "#",
    },
    {
      title: "Chocolate Lovers Gift Bucket",
      description:
        "An irresistible collection of gourmet chocolates in a stylish bucket.",
      image:
        "https://res.cloudinary.com/dyfgyhy2v/image/upload/v1755574269/WhatsApp_Image_2025-08-19_at_01.07.14_71b50126_au7mke.jpg",
      link: "#",
    },
    {
      title: "Cheesy Delight Snack Box",
      description:
        "A mix of premium cheese varieties, perfect for gifting or celebrations.",
      image:
        "https://res.cloudinary.com/dyfgyhy2v/image/upload/v1755574529/af2eab70-46a7-40ab-996b-581c8ec91ad2_aymddp.jpg",
      link: "#",
    },
    {
      title: "Mixed Flower & Chocolate Combo",
      description: "A perfect pairing of vibrant flowers and delicious chocolates.",
      image:
        "https://res.cloudinary.com/dyfgyhy2v/image/upload/v1755574529/dfc92bd1-5d5f-4f5f-ac7c-a9481b383515_pl0ksk.jpg",
      link: "#",
    },
    {
      title: "Romantic Surprise Bucket",
      description:
        "A themed bucket with roses, chocolates, and a touch of love.",
      image:
        "https://res.cloudinary.com/dyfgyhy2v/image/upload/v1755574529/0f6d668c-10fe-402a-b9c2-d9f26262c305_z6cemg.jpg",
      link: "#",
    },
  ];

  return (
    <section className="bg-white px-4 py-12">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <div className="bg-red-500 w-2 h-6"></div>
        <h2 className="text-xl font-bold text-red-500">Featured</h2>
      </div>
      <h1 className="text-3xl font-bold">New Arrival</h1>

      {/* Responsive Grid Layout */}
      <div className="grid gap-4 mt-8 
                      grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 
                      grid-rows-5 lg:grid-rows-2 
                      h-auto lg:h-[450px]">
        {/* Left Top */}
        <div className="relative rounded-lg overflow-hidden row-span-1 lg:row-span-1">
          <img
            src={items[1].image}
            alt={items[1].title}
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0 flex flex-col justify-end p-4 text-white"
            style={{
              background: "linear-gradient(to bottom, rgba(255,255,255,0.3), rgba(236,72,153,0.4))",
            }}
          >
            <h3 className="text-lg font-bold">{items[1].title}</h3>
            <p className="text-sm">{items[1].description}</p>
            <a href={items[1].link} className="mt-1 underline text-white text-sm">
              Shop Now
            </a>
          </div>
        </div>

        {/* Center Big Image */}
        <div className="relative rounded-lg overflow-hidden row-span-1 sm:row-span-1 lg:row-span-2 col-span-1 sm:col-span-2 lg:col-span-2">
          <img
            src={items[0].image}
            alt={items[0].title}
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0 flex flex-col justify-end p-6 text-white"
            style={{
              background: "linear-gradient(to bottom, rgba(255,255,255,0.3), rgba(236,72,153,0.35))",
            }}
          >
            <h3 className="text-2xl font-bold">{items[0].title}</h3>
            <p className="text-base">{items[0].description}</p>
            <a href={items[0].link} className="mt-2 underline text-white text-sm">
              Shop Now
            </a>
          </div>
        </div>

        {/* Right Top */}
        <div className="relative rounded-lg overflow-hidden row-span-1 lg:row-span-1">
          <img
            src={items[2].image}
            alt={items[2].title}
            className="w-full h-full object-fill"
          />
          <div
            className="absolute inset-0 flex flex-col justify-end p-4 text-white"
            style={{
              background: "linear-gradient(to bottom, rgba(255,255,255,0.3), rgba(236,72,153,0.4))",
            }}
          >
            <h3 className="text-lg font-bold">{items[2].title}</h3>
            <p className="text-sm">{items[2].description}</p>
            <a href={items[2].link} className="mt-1 underline text-white text-sm">
              Shop Now
            </a>
          </div>
        </div>

        {/* Left Bottom */}
        <div className="relative rounded-lg overflow-hidden row-span-1 lg:row-span-1">
          <img
            src={items[3].image}
            alt={items[3].title}
            className="w-full h-full object-fill"
          />
          <div
            className="absolute inset-0 flex flex-col justify-end p-4 text-white"
            style={{
              background: "linear-gradient(to bottom, rgba(255,255,255,0.3), rgba(236,72,153,0.4))",
            }}
          >
            <h3 className="text-lg font-bold">{items[3].title}</h3>
            <p className="text-sm">{items[3].description}</p>
            <a href={items[3].link} className="mt-1 underline text-white text-sm">
              Shop Now
            </a>
          </div>
        </div>

        {/* Right Bottom */}
        <div className="relative rounded-lg overflow-hidden row-span-1 lg:row-span-1">
          <img
            src={items[4].image}
            alt={items[4].title}
            className="w-full h-full object-fill"
          />
          <div
            className="absolute inset-0 flex flex-col justify-end p-4 text-white"
            style={{
              background: "linear-gradient(to bottom, rgba(255,255,255,0.3), rgba(236,72,153,0.35))",
            }}
          >
            <h3 className="text-lg font-bold">{items[4].title}</h3>
            <p className="text-sm">{items[4].description}</p>
            <a href={items[4].link} className="mt-1 underline text-white text-sm">
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrivalSection;
