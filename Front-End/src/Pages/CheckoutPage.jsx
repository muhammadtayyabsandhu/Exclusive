import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  FaWhatsapp,
  FaMoneyBillWave,
  FaRegAddressCard,
  FaUserAlt,
  FaPhoneAlt,
} from "react-icons/fa";

export default function CheckoutPage() {
  const cartItems = useSelector((state) => state.cart.items || []);
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    payment: "COD",
  });

  const CLIENT_WHATSAPP_NUMBER = "923358474477"; // Client number (no +)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const buildWhatsAppMessage = () => {
    if (!cartItems.length) return "";

    const lines = [];
    lines.push("🌿 *New Order from Bloom & Beyond* 🌿");
    lines.push("");
    lines.push(` *Name:* ${formData.name}`);
    lines.push(` *Phone:* ${formData.phone}`);
    lines.push(`*Address:* ${formData.address}`);
    lines.push(` *Payment:* ${formData.payment}`);
    lines.push("");
    lines.push("*Order Details:*");

    cartItems.forEach((item, idx) => {
      lines.push(
        `${idx + 1}. ${item.name} x ${item.quantity} — Rs ${item.price} each — Subtotal: Rs ${
          item.price * item.quantity
        }`
      );
    });

    lines.push("");
    lines.push(`💰 *Total:* Rs ${subtotal}`);
    lines.push("");
    lines.push("✅ Please confirm availability and delivery time. Thanks!");

    return encodeURIComponent(lines.join("\n"));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.address) {
      alert("⚠️ Please fill all fields.");
      return;
    }

    if (!cartItems.length) {
      alert("Your cart is empty!");
      return;
    }

    // WhatsApp link
    const message = buildWhatsAppMessage();
    const waLink = `https://wa.me/${CLIENT_WHATSAPP_NUMBER}?text=${message}`;
    window.open(waLink, "_blank"); // Opens WhatsApp Web or App
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-50 to-green-100 flex justify-center items-center px-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full md:w-2/3 lg:w-1/2">
        <h1 className="text-3xl font-extrabold mb-6 text-green-700 text-center flex items-center justify-center gap-2">
          <FaMoneyBillWave /> Checkout
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Fill your details to place your order.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="relative">
            <FaUserAlt className="absolute left-3 top-4 text-gray-400" />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border pl-10 p-3 rounded-lg outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div className="relative">
            <FaPhoneAlt className="absolute left-3 top-4 text-gray-400" />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number (e.g. 0300xxxxxxx)"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full border pl-10 p-3 rounded-lg outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div className="relative">
            <FaRegAddressCard className="absolute left-3 top-4 text-gray-400" />
            <textarea
              name="address"
              placeholder="Delivery Address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full border pl-10 p-3 rounded-lg outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <h2 className="font-semibold mb-2 flex items-center gap-2 text-green-700">
              <FaMoneyBillWave /> Payment Method
            </h2>
            <div className="flex gap-4 flex-wrap">
              {["COD", "EasyPaisa", "JazzCash"].map((method) => (
                <label
                  key={method}
                  className={`flex items-center gap-2 px-4 py-2 border rounded-lg cursor-pointer transition ${
                    formData.payment === method
                      ? "bg-green-100 border-green-500"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value={method}
                    checked={formData.payment === method}
                    onChange={handleChange}
                  />
                  {method}
                </label>
              ))}
            </div>
          </div>

          <div className="text-xl text-green-700 font-bold text-center border-t pt-4">
            Total Amount: Rs. {subtotal}
          </div>

          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="flex-1 border border-gray-300 py-3 rounded-lg hover:bg-gray-100 transition"
            >
              Back
            </button>

            <button
              type="submit"
              className="flex-1 bg-green-600 text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-green-700 transition shadow-md"
            >
              <FaWhatsapp className="text-xl" /> Send Order
            </button>
          </div>
        </form>

        <p className="text-sm text-gray-500 mt-6 text-center">
          Clicking "Send Order" will open WhatsApp with your order details. Press <b>Send</b> inside WhatsApp to confirm.
        </p>
      </div>
    </div>
  );
}
