import React, { useEffect, useState } from "react";

const HeroBanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 5,
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        let { days, hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          seconds -= 1;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes -= 1;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours -= 1;
            } else {
              hours = 23;
              if (days > 0) {
                days -= 1;
              } else {
                clearInterval(timer);
              }
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-black flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-8 md:py-0 relative overflow-hidden h-auto md:h-[500px]">
      {/* Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/0"></div>

      {/* Left Content */}
      <div className="z-10 space-y-4 text-center md:text-left">
        <h3 className="text-green-500 font-bold text-sm md:text-lg">Categories</h3>
        <h1 className="text-white text-3xl md:text-5xl font-bold leading-snug md:leading-tight">
         Elegant blooms crafted  <br /> for every occasion
        </h1>

        {/* Countdown Timer */}
        <div className="flex justify-center md:justify-start gap-2 md:gap-4 mt-4">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="text-center">
              <p className="text-white text-lg md:text-2xl font-bold">
                {value.toString().padStart(2, "0")}
              </p>
              <p className="text-gray-400 text-xs md:text-sm">{unit.charAt(0).toUpperCase() + unit.slice(1)}</p>
            </div>
          ))}
        </div>

        {/* Buy Now Button */}
        <div className="flex justify-center md:justify-start">
          <button className="mt-4 md:mt-6 bg-green-500 text-black font-bold py-2 md:py-3 px-6 md:px-8 rounded-lg hover:bg-green-400 transition">
            Buy Now!
          </button>
        </div>
      </div>

      {/* Right Product Image */}
      <div className="z-10 mt-6 md:mt-0">
        <img
          src="https://res.cloudinary.com/dyfgyhy2v/image/upload/v1755573574/Adobe_Express_-_file_a86yxp.png"
          alt="JBL Speaker"
          className="h-[500px] md:h-[500px] object-contain"
        />
      </div>
    </div>
  );
};

export default HeroBanner;
