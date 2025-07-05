import React from "react";

const Story = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <p className="text-sm text-gray-500">
          Home <span className="mx-1">/</span>
          <span >About</span>
        </p>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-16 py-10 flex flex-col md:flex-row items-center justify-center justify-between gap-8">
        {/* Text Section */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Launched in 2015, Exclusive is South Asia’s premier online shopping
            marketplace with an active presence in Bangladesh. Supported by a
            wide range of tailored marketing data and service solutions,
            Exclusive has 10,500 sellers and 300 brands and serves 3 million
            customers across the region.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Exclusive has more than 1 Million products to offer, growing at a
            very fast pace. Exclusive offers a diverse assortment in categories
            ranging from consumer goods to electronics.
          </p>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 pl-20">
          {/* Replace the src with your actual image URL */}
          <img
            src="src\assets\Images\story.png"
            alt="Two people shopping"
            className="w-100 h-100 rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default Story;
