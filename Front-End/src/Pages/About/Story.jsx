import React from "react";

const Story = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <p className="text-sm text-gray-500">
          Home <span className="mx-1">/</span>
          <span>About</span>
        </p>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-16 py-10 flex flex-col md:flex-row items-center justify-center justify-between gap-8">
        {/* Text Section */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Started with a simple love for flowers, our journey began with the
            idea of bringing happiness and emotions beautifully wrapped in every
            bouquet. What started as a small flower shop has now blossomed into
            an online destination for unique floral creations, chocolate
            bouquets, money bouquets, and customized gift baskets.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We believe that every bouquet tells a story — of love, care,
            celebration, or even comfort. With fresh flowers sourced daily and
            creative arrangements handcrafted by our team, we’ve delivered joy
            to thousands of customers. Our mission is simple: to make every
            occasion memorable with the perfect bouquet.
          </p>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 pl-20">
          <img
            src="https://res.cloudinary.com/dyfgyhy2v/image/upload/v1756619208/IMG-20250819-WA0014_zywke7.jpg"
            alt="Beautiful flower bouquet"
            className="w-100 h-100 rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default Story;
