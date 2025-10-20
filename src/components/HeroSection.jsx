import React from "react";

const HeroSection = () => {
  return (
    <div className="w-full bg-gray-100 flex flex-col md:flex-row items-center justify-between px-6 md:px-16 lg:px-24 py-6">
      {/* Left Content */}
      <div className="md:w-1/2 mt-2 text-center md:text-left space-y-3 md:space-y-4">
        <span className="bg-blue-400 border border-gray-200 px-3 py-1 rounded-md text-sm font-medium text-white">
          Weekend Discount
        </span>

        <h1 className=" mt-4 text-4xl grandstander-head  md:text-4xl lg:text-6xl font-extrabold text-[#0a1435] leading-tight">
          Find The Best Toys <br /> For Your Kids
        </h1>

        <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-md mx-auto md:mx-0">
          Lorem ipsum dolor sit amet consectetur. Id fames there are many
          vulputate eget dolor.
        </p>

        <button className="bg-pink-300 hover:bg-pink-400 transition-all text-white font-semibold px-6 py-3 rounded-md flex items-center gap-2 mx-auto md:mx-0">
          Shop Now →
        </button>
      </div>

      {/* Right Image (Hidden on mobile) */}
      <div className="hidden md:flex md:w-1/2 justify-center">
        <img
          src="/images/mainimg.png"
          alt="Kid with toy"
          className="w-[85%] max-w-[600px] object-contain"
        />
      </div>
    </div>
  );
};

export default HeroSection;
