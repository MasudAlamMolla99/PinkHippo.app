import React from "react";
import { ShoppingCart, Headphones, User } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-[#fff7ee] py-3 shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <h1 className="text-3xl font-extrabold text-orange-600 tracking-wide">
            LilNest
          </h1>
        </div>

        {/* Search Bar */}
        <div className="flex items-center w-1/2 rounded-full overflow-hidden border border-gray-300 bg-white">
          <input
            type="text"
            placeholder="Search Keyword, Product or category"
            className="flex-grow px-4 py-2 text-sm outline-none"
          />
          <button className="bg-orange-600 text-white px-6 py-2 text-sm font-semibold hover:bg-orange-700">
            Search
          </button>
        </div>

        {/* Support & Cart */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2 bg-white">
            <Headphones className="text-black" size={20} />
            <div>
              <p className="text-xs text-gray-500 leading-tight">For support</p>
              <p className="text-sm font-semibold text-black">000-123-456789</p>
            </div>
          </div>

          <div className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2 bg-white">
            <ShoppingCart className="text-orange-600" size={20} />
            <div>
              <p className="text-xs text-gray-500 leading-tight">Subtotal</p>
              <p className="text-sm font-semibold text-black">Rs. 310.00</p>
            </div>
          </div>

          <button className="border border-gray-300 rounded-full p-2 bg-white hover:shadow-md">
            <User className="text-black" size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
