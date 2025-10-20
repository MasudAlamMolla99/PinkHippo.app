import { motion } from "framer-motion";
import React from "react";

const AutoScrollBar = () => {
  const items = [
    { name: "Little Toy", emoji: "🐢" },
    { name: "Cute Crocodile", emoji: "🐊" },
    { name: "Baby Shark", emoji: "🦈" },
    { name: "Smiley Fish", emoji: "🐠" },
    { name: "Little Toy", emoji: "🐢" },
    { name: "Cute Crocodile", emoji: "🐊" },
    { name: "Baby Shark", emoji: "🦈" },
    { name: "Smiley Fish", emoji: "🐠" },
    { name: "Little Toy", emoji: "🐢" },
    { name: "Cute Crocodile", emoji: "🐊" },
    { name: "Baby Shark", emoji: "🦈" },
    { name: "Smiley Fish", emoji: "🐠" },
  ];

  return (
    <div className="overflow-hidden  bg-pink-300 py-4 mt-6">
      <motion.div
        className="flex gap-10 whitespace-nowrap font-bold text-white text-2xl items-center"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 15,
          ease: "linear",
        }}>
        {/* Repeat the items twice for smooth looping */}
        {[...items, ...items].map((item, index) => (
          <span key={index} className="flex items-center gap-2">
            {item.name} <span className="text-3xl">{item.emoji}</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default AutoScrollBar;
