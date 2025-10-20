import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Ayesha Khan",
    feedback: "Amazing service! Highly recommended.",
  },
  {
    name: "Fatima Sheikh",
    feedback: "Products arrived on time and quality is great.",
  },
  {
    name: "Zara Ali",
    feedback: "Excellent support and smooth experience.",
  },
  {
    name: "Hafsa Rahman",
    feedback: "I love shopping here! Will buy again.",
  },
];

export default function Testimonials() {
  return (
    <div className="bg-white mt-6  flex flex-col items-center py-8">
      <h1 className=" text-3xl md:text-4xl grandstander-head  font-bold mb-8 ">
        What Our Customers Say
      </h1>

      <div className="w-full overflow-hidden">
        <motion.div
          className="flex gap-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 20, // speed of sliding
            repeat: Infinity,
            ease: "linear",
          }}>
          {/* Duplicate array for seamless infinite scrolling */}
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div
              key={index}
              className="bg-white shadow-md border  border-gray-400 rounded-lg p-6  md:min-w-[300px] flex-shrink-0">
              <p className="text-gray-700 mb-4">"{testimonial.feedback}"</p>
              <h3 className="text-lg font-semibold">{testimonial.name}</h3>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
