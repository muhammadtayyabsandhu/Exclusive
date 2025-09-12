import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CartItem from '../Components/CartItem';

export default function CartPage() {
  const cartItems = useSelector((state) => state.cart.items);
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const navigate = useNavigate(); // ✅ useNavigate hook

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">
        Shopping Cart
      </h1>

      {/* Cart Table Header */}
      <div className="grid grid-cols-5 font-semibold gap-5 text-gray-700 bg-white p-4 border-b border-gray-200 text-center">
        <p>Product</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Subtotal</p>
        <p>Action</p>
      </div>

      {/* Cart Items List */}
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}

      {/* Buttons */}
      <div className="flex justify-between items-center mt-8">
        <button className="border border-gray-400 text-gray-700 px-5 py-2 rounded-md hover:bg-gray-100">
          Return To Shop
        </button>
        <button className="border border-gray-400 text-gray-700 px-5 py-2 rounded-md hover:bg-gray-100">
          Update Cart
        </button>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-start mt-10 gap-8">
        {/* Coupon Section */}
        <div className="flex items-center border border-gray-300 w-full md:w-1/2">
          <input
            placeholder="Coupon Code"
            className="flex-1 p-3 outline-none text-gray-700"
          />
          <button className="bg-red-500 text-white px-5 py-3 font-medium hover:bg-red-600">
            Apply Coupon
          </button>
        </div>

        {/* Cart Total Box */}
        <div className="border border-gray-300 p-6 w-full md:w-1/3 bg-white shadow-sm">
          <h2 className="font-bold text-2xl mb-4 text-gray-800">Cart Total</h2>
          <div className="space-y-2 text-gray-700">
            <p className="flex justify-between">
              Subtotal: <span>Rs:{subtotal}</span>
            </p>
            <p className="flex justify-between">
              Shipping: <span>Free</span>
            </p>
            <p className="flex justify-between font-bold text-xl">
              Total: <span>Rs:{subtotal}</span>
            </p>
          </div>
          <button
            onClick={() => navigate('/checkout')} // ✅ navigate to checkout page
            className="bg-red-500 text-white w-full py-3 mt-4 font-medium hover:bg-red-600"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
