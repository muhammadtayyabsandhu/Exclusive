import React from "react";
import Slider from "react-slick";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import image1 from "../../assets/Images/Full E Commerce Website UI UX Design (Community)/image 46.png"
import image2 from "../../assets/Images/Full E Commerce Website UI UX Design (Community)/image 47.png"
import image3 from "../../assets/Images/Full E Commerce Website UI UX Design (Community)/image 51.png"

const teamData = [
  {
    name: "Tom Cruise",
    role: "Founder & Chairman",
    image: image1,
  },
  {
    name: "Emma Watson",
    role: "Managing Director",
    image: image2,
  },
  {
    name: "Will Smith",
    role: "Product Designer",
    image: image3,
  },
  {
    name: "Will Smith",
    role: "Product Designer",
    image: image3,
  },
  {
    name: "Will Smith",
    role: "Product Designer",
    image: image3,
  },
  // You can add more team members here...
];

const TeamSlider = () => {
  // Slider settings
  const settings = {
    dots: true,            // Show dots at bottom
    infinite: true,        // Loop slides
    speed: 500,
    slidesToShow: 3,       // Show 3 slides on desktop
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,  // Below 1024px
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,   // Below 768px
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,   // Below 640px
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-10 overflow-x-hidden">
      <Slider {...settings}>
        {teamData.map((member) => (
          <div key={member.name} className="p-4">
            <div className="bg-white rounded  text-center p-6 w-full h-70">
              <img
                src={member.image}
                alt={member.name}
                className="mx-auto w-full h-full object-contain"
              />
              <h3 className="text-xl font-semibold mt-4">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>

              {/* Social Icons */}
              <div className="flex items-center justify-center gap-4 mt-4 text-xl">
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-500 transition-colors"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-pink-500 transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TeamSlider;
