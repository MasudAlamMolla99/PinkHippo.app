import React, { useState } from "react";
import { ShoppingCart, Search, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = ["Home", "Shop", "About", "Contact"];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6 py-2.5 relative">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/images/logoPinkhippo.jpg"
            alt="Pink Hippo Logo"
            className="w-10 h-10 md:w-12 md:h-12 object-cover rounded-full"
          />
          <div className="flex flex-col">
            <h1 className="mt-2 text-xl md:text-2xl font-extrabold text-pink-400 tracking-wide leading-none">
              Pink Hippo
            </h1>
            <h1 className="text-xs font-light">House of Cute Stuff</h1>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <ul className="flex justify-center space-x-7 text-[15px] font-semibold text-black py-2">
            {navLinks.map((link, index) => (
              <li
                key={index}
                className="cursor-pointer hover:text-pink-300 transition">
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4 md:gap-6">
          <button className="text-gray-700 hover:text-orange-600 transition">
            <Search size={22} />
          </button>
          <button className="text-gray-700 hover:text-orange-600 transition">
            <ShoppingCart size={22} />
          </button>
          <button className="text-gray-700 hover:text-orange-600 transition">
            <User size={22} />
          </button>

          {/* Animated Hamburger */}
          <button
            className="md:hidden text-gray-700 flex items-center justify-center"
            onClick={() => setMenuOpen(!menuOpen)}>
            <motion.svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              initial="closed"
              animate={menuOpen ? "open" : "closed"}>
              <motion.path
                d="M3 6H21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 6 },
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.path
                d="M3 12H21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
                transition={{ duration: 0.2 }}
              />
              <motion.path
                d="M3 18H21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: -6 },
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute left-0 right-0 bg-white border-t border-pink-200 md:hidden shadow-md z-40">
            <ul className="flex flex-col gap-4 p-4 text-center text-base font-semibold text-gray-800">
              {navLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="block hover:text-pink-400 transition"
                    onClick={() => setMenuOpen(false)}>
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
