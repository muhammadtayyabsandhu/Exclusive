import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function CheckoutPage() {
  const cartItems = useSelector((state) => state.cart.items || []);
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    payment: "COD", // COD | EasyPaisa | JazzCash
  });

  // 👇 Fixed WhatsApp number
  const BUSINESS_WHATSAPP_NUMBER = "923026633640";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((s) => ({ ...s, [name]: value }));
  };

  const buildWhatsAppMessage = () => {
    const lines = [];
    lines.push("🛒 New Order from Bloom & Beyond");
    lines.push("");
    lines.push(`👤 Name: ${formData.name}`);
    lines.push(`📞 Phone: ${formData.phone}`);
    lines.push(`📍 Address: ${formData.address}`);
    lines.push(`💳 Payment Method: ${formData.payment}`);
    lines.push("");
    lines.push("📦 Order Details:");
    cartItems.forEach((it, idx) =>
      lines.push(
        `${idx + 1}. ${it.name} x ${it.quantity} — Rs ${it.price} each — Subtotal: Rs ${
          it.price * it.quantity
        }`
      )
    );
    lines.push("");
    lines.push(`💰 Total: Rs ${subtotal}`);
    lines.push("");
    lines.push("✅ Please confirm availability and delivery time. Thanks!");
    return encodeURIComponent(lines.join("\n"));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.phone.trim() || !formData.address.trim()) {
      alert("Please fill Name, Phone and Address.");
      return;
    }

    // ✅ WhatsApp link
    const text = buildWhatsAppMessage();
    const waLink = `https://wa.me/${BUSINESS_WHATSAPP_NUMBER}?text=${text}`;

    // Open WhatsApp
    window.open(waLink, "_blank");
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen flex justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full md:w-2/3 lg:w-1/2">
        <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">Checkout</h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border p-3 rounded-md outline-none"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number (e.g. 0300xxxxxxx)"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full border p-3 rounded-md outline-none"
          />
          <textarea
            name="address"
            placeholder="Delivery Address"
            value={formData.address}
            onChange={handleChange}
            required
            className="w-full border p-3 rounded-md outline-none"
          />

          <div>
            <h2 className="font-semibold mb-2">Select Payment Method</h2>

            <label className="flex items-center gap-2 mb-2">
              <input
                type="radio"
                name="payment"
                value="COD"
                checked={formData.payment === "COD"}
                onChange={handleChange}
              />
              Cash on Delivery (COD)
            </label>

            <label className="flex items-center gap-2 mb-2">
              <input
                type="radio"
                name="payment"
                value="EasyPaisa"
                checked={formData.payment === "EasyPaisa"}
                onChange={handleChange}
              />
              EasyPaisa
            </label>

            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="payment"
                value="JazzCash"
                checked={formData.payment === "JazzCash"}
                onChange={handleChange}
              />
              JazzCash
            </label>
          </div>

          <div className="text-gray-800 font-bold text-lg">
            Total Amount: Rs.{subtotal}
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="flex-1 border border-gray-300 py-3 rounded-md hover:bg-gray-100"
            >
              Back
            </button>

            <button
              type="submit"
              className="flex-1 bg-green-600 text-white py-3 rounded-md hover:bg-green-700"
            >
              Send Order via WhatsApp
            </button>
          </div>
        </form>

        <p className="text-sm text-gray-500 mt-4">
          Clicking "Send Order via WhatsApp" will open WhatsApp with your order details. You need to press **Send** inside WhatsApp to confirm.
        </p>
      </div>
    </div>
  );
}
