import React from 'react';
import { FaStar } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';

const ProductDetailPage = () => {
  return (
    <section className="px-6 py-10 max-w-[1200px] mx-auto">
      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Images Section */}
        <div className="flex gap-4">
          {/* Thumbnail column */}
          <div className="flex flex-col gap-4">
            <img src="/thumb1.png" alt="thumb" className="w-20 h-20 object-contain border p-1" />
            <img src="/thumb2.png" alt="thumb" className="w-20 h-20 object-contain border p-1" />
            <img src="/thumb3.png" alt="thumb" className="w-20 h-20 object-contain border p-1" />
            <img src="/thumb4.png" alt="thumb" className="w-20 h-20 object-contain border p-1" />
          </div>

          {/* Main Image */}
          <div className="flex-1 flex items-center justify-center bg-gray-100">
            <img src="/main.png" alt="Main" className="w-full max-w-md object-contain" />
          </div>
        </div>

        {/* Right Product Info Section */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Havic HV G-92 Gamepad</h2>
          <div className="flex items-center gap-2 mb-2">
            <FaStar className="text-yellow-400" />
            <span className="text-gray-600 text-sm">(150 Reviews)</span>
            <span className="text-green-600 text-sm ml-4">In Stock</span>
          </div>

          <p className="text-2xl font-semibold mb-4">$192.00</p>
          <p className="text-gray-600 mb-6 text-sm leading-relaxed">
            PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal. Pressure sensitive.
          </p>

          {/* Color Options */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold mb-1">Colours:</h4>
            <div className="flex gap-2">
              <span className="w-5 h-5 rounded-full bg-red-500 border border-gray-300"></span>
              <span className="w-5 h-5 rounded-full bg-blue-500 border border-gray-300"></span>
            </div>
          </div>

          {/* Size Options */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold mb-1">Size:</h4>
            <div className="flex gap-2">
              {['XS', 'S', 'M', 'L', 'XL'].map(size => (
                <button key={size} className={`px-3 py-1 border rounded text-sm ${size === 'M' ? 'bg-black text-white' : 'bg-white'}`}>{size}</button>
              ))}
            </div>
          </div>

          {/* Quantity and Buy */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center border rounded overflow-hidden">
              <button className="px-3 py-1 text-lg">-</button>
              <span className="px-4 py-1">2</span>
              <button className="px-3 py-1 text-lg">+</button>
            </div>
            <button className="bg-red-500 text-white px-6 py-2 rounded">Buy Now</button>
            <button className="border p-2 rounded text-gray-500">
              <AiOutlineHeart size={20} />
            </button>
          </div>

          {/* Delivery Info */}
          <div className="border p-4 rounded text-sm text-gray-700 space-y-2">
            <p><strong>🚚 Free Delivery</strong> <br />Enter your postal code for Delivery Availability</p>
            <p><strong>🔁 Return Delivery</strong> <br />Free 30 Days Delivery Returns. <span className="underline cursor-pointer">Details</span></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailPage;
