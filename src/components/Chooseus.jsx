import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    img: "/images/gift.png",
    title: "Customised Gifts",
    desc: "Personalize your presents for every occasion.",
  },
  {
    img: "/images/customericon.png",
    title: "Customer Support",
    desc: "We’re here to help you 24/7 with your queries.",
  },
  {
    img: "/images/worldwide.png",
    title: "Worldwide Shipping",
    desc: "Delivering love and joy across the globe.",
  },
  {
    img: "/images/discount.png",
    title: "Many discounts",
    desc: "Delivering love and joy across the globe.",
  },
];

export default function FeatureSlider() {
  // Duplicate items for seamless infinite loop
  const loopItems = [...features, ...features];

  return (
    <>
      <h1 className="text-3xl md:text-4xl grandstander-head    text-center font-bold mb-8 mt-6">
        Why Choose Us ?
      </h1>
      <div className="overflow-hidden bg-white py-6">
        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 7, // adjust for speed
          }}>
          {loopItems.map((item, i) => (
            <div
              key={i}
              className="flex items-center bg-white border border-gray-400 shadow-sm rounded-2xl px-6 py-4 min-w-[300px] sm:min-w-[360px] md:min-w-[400px]">
              <img
                src={item.img}
                alt={item.title}
                className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
              />
              <div className="ml-4 border-l border-gray-200 pl-4">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 ">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
}
