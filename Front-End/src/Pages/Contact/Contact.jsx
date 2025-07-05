import React, { useState } from "react";
// React Icons
import { FiPhoneCall, FiMail, FiPhone, FiSend, FiEdit } from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // TODO: Connect to backend or email service
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <p className="text-sm text-gray-500">
          Home <span className="mx-1">/</span>{" "}
          <span >Contact</span>
        </p>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-10 flex-1">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Card */}
          <div className="w-full md:w-1/3 bg-white rounded-md shadow p-6">
            {/* Call To Us */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold flex items-center gap-2 mb-2">
                <FiPhoneCall className="text-2xl  text-red-500" />
                Call To Us
              </h2>
              <p className="text-gray-600 text-sm">
                We are available 24/7, 7 days a week.
              </p>
              <p className="text-gray-600 text-sm mt-2">
                <span className="font-medium">Phone:</span> +8801112222
              </p>
            </div>

            {/* Write To Us */}
            <div>
              <h2 className="text-xl font-semibold flex items-center gap-2mb-2">
                <FiEdit className="text-2xl  text-red-500 " />
                Write To Us
              </h2>
              <p className="text-gray-600 text-sm">
                Fill out our form and we will contact you within 24 hours.
              </p>
              <p className="text-gray-600 text-sm mt-2">
                <span className="font-medium">Emails:</span> [email protected]
              </p>
              <p className="text-gray-600 text-sm">
                <span className="font-medium">Emails:</span> [email protected]
              </p>
            </div>
          </div>

          {/* Right Form */}
          <div className="w-full md:w-2/3 bg-white rounded-md shadow p-6">
            <form onSubmit={handleSubmit}>
              {/* Top row of inputs */}
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                {/* Name Input */}
                <div className="w-full md:w-1/3 relative">
                  <FiMail className="absolute top-3 left-3 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 pl-10 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
                {/* Email Input */}
                <div className="w-full md:w-1/3 relative">
                  <FiMail className="absolute top-3 left-3 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 pl-10 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
                {/* Phone Input */}
                <div className="w-full md:w-1/3 relative">
                  <FiPhone className="absolute top-3 left-3 text-gray-400" />
                  <input
                    type="text"
                    name="phone"
                    placeholder="Your Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 pl-10 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
              </div>

              {/* Message area */}
              <div className="relative mb-4">
                <FiEdit className="absolute top-3 left-3 text-gray-400" />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full p-3 pl-10 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-red-500 text-white px-6 py-3 rounded hover:bg-red-600 transition-colors"
              >
                <FiSend />
                Send Massage
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
