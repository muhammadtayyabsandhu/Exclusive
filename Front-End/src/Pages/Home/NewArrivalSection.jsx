import React from 'react';
import bigone from "../../assets/Images/imgee.webp"


const NewArrivalSection = () => {
  const items = [
  {
    title: "Luxury Rose Flower Bucket",
    description: "Fresh red roses beautifully packed in a premium decorative bucket.",
    image: bigone,
    link: "#",
    size: "large"
  },
  {
    title: "Chocolate Lovers Gift Bucket",
    description: "An irresistible collection of gourmet chocolates in a stylish bucket.",
    image: "https://res.cloudinary.com/dyfgyhy2v/image/upload/v1755574269/WhatsApp_Image_2025-08-19_at_01.07.14_71b50126_au7mke.jpg",
    link: "#",
    size: "medium"
  },
  {
    title: "Cheesy Delight Snack Box",
    description: "A mix of premium cheese varieties, perfect for gifting or celebrations.",
    image: "https://res.cloudinary.com/dyfgyhy2v/image/upload/v1755574529/af2eab70-46a7-40ab-996b-581c8ec91ad2_aymddp.jpg",
    link: "#",
    size: "small"
  },
  {
    title: "Mixed Flower & Chocolate Combo",
    description: "A perfect pairing of vibrant flowers and delicious chocolates.",
    image: "https://res.cloudinary.com/dyfgyhy2v/image/upload/v1755574529/dfc92bd1-5d5f-4f5f-ac7c-a9481b383515_pl0ksk.jpg",
    link: "#",
    size: "small"
  },
  {
    title: "Romantic Surprise Bucket",
    description: "A themed bucket with roses, chocolates, and a touch of love.",
    image: "https://res.cloudinary.com/dyfgyhy2v/image/upload/v1755574529/0f6d668c-10fe-402a-b9c2-d9f26262c305_z6cemg.jpg",
    link: "#",
    size: "small"
  }
];



    return (
        <section className="bg-white px-4 py-8">
            {/* Header */}
            <div className="flex items-center gap-2">
                <div className="bg-red-500 w-2 h-6"></div>
                <h2 className="text-xl font-bold text-red-500">Featured</h2>
            </div>
            <h1 className="text-3xl font-bold mt-2">New Arrival</h1>

            {/* Grid Layout */}
            <div className="grid grid-cols-3 grid-rows-2 gap-4 mt-6">
                <div className="row-span-2 col-span-1 relative rounded-lg overflow-hidden bg-black flex justify-center items-center">
                    <img src={items[0].image} alt={items[0].title} className="max-w-full max-h-full object-contain bg-black" />
                    <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6 text-white">
                        <h3 className="text-xl font-bold">{items[0].title}</h3>
                        <p className="text-sm">{items[0].description}</p>
                        <a href={items[0].link} className="mt-2 text-white underline">Shop Now</a>
                    </div>
                </div>

                <div className="relative rounded-lg overflow-hidden bg-black flex justify-center items-center">
                    <img src={items[1].image} alt={items[1].title} className="max-w-full max-h-full object-contain bg-black" />
                    <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6 text-white">
                        <h3 className="text-lg font-bold">{items[1].title}</h3>
                        <p className="text-sm">{items[1].description}</p>
                        <a href={items[1].link} className="mt-2 text-white underline">Shop Now</a>
                    </div>
                </div>

                {items.slice(2).map((item, index) => (
                    <div key={index} className="relative rounded-lg overflow-hidden bg-black flex justify-center items-center">
                        <img src={item.image} alt={item.title} className="max-w-full max-h-full object-contain bg-black" />
                        <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6 text-white">
                            <h3 className="text-lg font-bold">{item.title}</h3>
                            <p className="text-sm">{item.description}</p>
                            <a href={item.link} className="mt-2 text-white underline">Shop Now</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default NewArrivalSection;
