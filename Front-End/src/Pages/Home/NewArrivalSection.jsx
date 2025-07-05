import React from 'react';
import bigone from "../../assets/Images/New Arrival Section/ps5.png"
import women from "../../assets/Images/New Arrival Section/attractiv-hat.png"
import speakers from "../../assets/Images/New Arrival Section/speaker.png"
import perfume from "../../assets/Images/New Arrival Section/Gucci.png"

const NewArrivalSection = () => {
    const items = [
        {
            title: "PlayStation 5",
            description: "Black and White version of the PS5 coming out on sale.",
            image: bigone,
            link: "#",
            size: "large"
        },
        {
            title: "Women's Collections",
            description: "Featured woman collections that give you another vibe.",
            image: women,
            link: "#",
            size: "medium"
        },
        {
            title: "Speakers",
            description: "Amazon wireless speakers",
            image: speakers,
            link: "#",
            size: "small"
        },
        {
            title: "Perfume",
            description: "GUCCI INTENSE OUD EDP",
            image: perfume,
            link: "#",
            size: "small"
        },
        {
            title: "Perfume",
            description: "GUCCI INTENSE OUD EDP",
            image: perfume,
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
