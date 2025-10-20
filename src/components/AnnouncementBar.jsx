import React from "react";
import { motion } from "framer-motion";

export default function AnnouncementBar() {
  const text = "Free Shipping Over ₹100 | Use Code WELCOME10 For 10% Off";

  return (
    <div className="bg-pink-300 text-white overflow-hidden whitespace-nowrap py-1 md:py-2 text-sm font-medium">
      <motion.div
        className="inline-block"
        animate={{ x: ["100%", "-100%"] }}
        transition={{
          duration: 10, // total time to slide
          repeat: Infinity,
          ease: "linear",
        }}>
        {text} &nbsp;&nbsp;&nbsp; {/* duplicate text for seamless looping */}
      </motion.div>
    </div>
  );
}
