import React, { useState } from "react";
import { ShoppingCart, Heart } from "lucide-react";
import { toast } from "react-toastify";

const handleAddtoCart = () => {
  toast.success("Item add to cart");
};

export default function ProductCard({ product }) {
  const [selectedColor, setSelectedColor] = useState(0);

  return (
    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm xl:max-w-xs bg-white shadow-md border border-[#FDE8D8] rounded-lg overflow-hidden flex flex-col transition-transform hover:scale-[1.05] duration-300 mx-auto">
      {/* Product Image */}
      <div className="w-full flex justify-center items-center bg-white p-3 sm:p-4 border-b border-gray-200">
        <img
          src={product.colors[selectedColor].src}
          alt={product.colors[selectedColor].alt}
          className="w-full max-h-48 sm:max-h-56 md:max-h-60 lg:max-h-52 object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1 flex flex-col justify-between p-3 sm:p-4 md:p-5">
        {/* Availability */}
        <div className="flex items-center mb-2">
          <span className="h-2 w-2 bg-green-500 rounded-full mr-2"></span>
          <span className="text-green-600 text-xs sm:text-sm font-medium">
            {product.inStock ? "In stock" : "Out of stock"}
          </span>
        </div>

        {/* Title */}
        <h2 className="font-extrabold text-base sm:text-lg grandstander-head  md:text-xl mb-1 text-gray-800">
          {product.name}
        </h2>

        {/* Price */}
        <div className="mb-2 flex items-center flex-wrap gap-2">
          <span className="font-extrabold text-sm sm:text-base text-gray-800">
            Rs. {product.price}.00
          </span>
          <span className="line-through text-gray-400 text-xs sm:text-sm">
            Rs. {product.oldPrice}.00
          </span>
        </div>

        {/* Description */}
        {/* <p className="text-gray-500 text-xs sm:text-sm mb-3 leading-snug">
          {product.description}
        </p> */}
      </div>

      {/* Buttons */}
      <div className="flex flex-row sm:flex-row gap-1 px-1 pb-3 sm:px-4 sm:pb-4">
        <button
          className=" cursor-pointer flex-3 py-2 sm:py-2.5 bg-amber-300 hover:bg-amber-400 rounded text-xs sm:text-base font-semibold flex items-center justify-center gap-2 transition"
          onClick={handleAddtoCart}>
          <ShoppingCart size={16} />
          Add to Cart
        </button>
        <button className="flex-1 py-2 sm:py-2.5 bg-pink-300 hover:bg-pink-400 rounded text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition">
          <Heart size={16} />
        </button>
      </div>
    </div>
  );
}
