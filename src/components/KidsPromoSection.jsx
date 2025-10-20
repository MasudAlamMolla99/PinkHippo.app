// src/components/KidsPromoSection.jsx
import React from "react";

export default function KidsPromoSection() {
  return (
    <div className=" min-h-screen flex items-center justify-center p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl w-full">
        {/* Left Card */}
        <div className="relative rounded-2xl overflow-hidden shadow-md h-full flex-col justify-end p-8">
          {/* ✅ Background Image */}
          <img
            src="/images/post1.jpg"
            alt="Toy Background"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />

          {/* ✅ Soft teal overlay for the background tint */}
          <div className="absolute inset-0z-0"></div>

          {/* ✅ Text Content */}
          <div className="relative z-10 flex flex-col justify-end h-full">
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-[#1b1b1b] mb-6 drop-shadow-sm tracking-tight">
              Creating Moments Of Wonder And Joy Through The Art Of Play.
            </h2>

            <button className="bg-[#fca311] hover:bg-[#e38c08] text-white text-sm font-semibold px-5 py-2 rounded-full w-fit transition-all shadow-sm">
              Shop Fluffy Toys
            </button>
          </div>
        </div>

        {/* Right Side (2 stacked cards) */}
        <div className="flex flex-col gap-6">
          {/* Top Right Card */}
          <div className="bg-[#d9f1f6] rounded-2xl p-8 flex flex-col justify-between shadow-md relative">
            <h2 className="text-2xl font-black leading-snug text-gray-800 mb-6">
              Crafting Magical Moments For Every Child’s Playful Adventures.
            </h2>

            <select className="bg-white border border-gray-200 text-[#1b1b1b] text-sm px-4 py-2 rounded-full w-fit font-semibold focus:outline-none hover:shadow-sm cursor-pointer">
              <option>Choose options</option>
              <option>New Arrivals</option>
              <option>Soft Toys</option>
              <option>Wooden Toys</option>
            </select>

            {/* Optional decoration */}
            <div className="absolute top-0 right-0 w-24 h-40">
              <img src="/images/post2.png" alt="" />
            </div>
          </div>

          {/* Bottom Right Card */}
          <div className="bg-[#f1d6be] rounded-2xl p-8 flex flex-col justify-between shadow-md relative">
            <h2 className="text-3xl font-black leading-tight text-gray-800 mb-6">
              Toy Land Welcomes
            </h2>
            <button className="bg-[#fca311] text-white px-5 py-2 rounded-full text-sm font-semibold w-fit hover:bg-[#e38c08] transition">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
