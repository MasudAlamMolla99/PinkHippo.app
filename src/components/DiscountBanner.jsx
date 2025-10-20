import React from "react";
// replace with your image path

const DiscountBanner = () => {
  return (
    <div className="w-full bg-gray-100  text-black  flex flex-col justify-between md:flex-row items-center md:justify-between px-6 md:px-8 md:py-1 overflow-hidden relative mt-10 md:mt-20">
      {/* Left Text Section */}
      <div className="flex-1 md:justify-start z-10">
        <h2 className=" text-center grandstander-head  mt-2 md:text-start text-3xl md:text-4xl font-semibold leading-snug">
          Get 25% discount in all kind of
          <br /> super hero theme
        </h2>
      </div>

      {/* Right Image Section */}
      <div className="flex-1 flex  items-center md:items-end md:justify-end mt-6 md:mt-2 md:mb-0">
        {/* Discount Circle */}

        {/* Toys Image */}
        <img
          src="/images/teddy.png"
          alt="Toys discount banner"
          className="w-[280px] md:w-[360px] lg:w-[420px] object-contain mb-0"
        />
      </div>
    </div>
  );
};

export default DiscountBanner;
