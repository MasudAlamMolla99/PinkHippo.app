import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white relative mt-4">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
        {/* Brand */}
        <div className="space-y-4 md:col-span-1">
          <h2 className="text-2xl font-bold">PinkHippo</h2>
          <p className="text-gray-400">
            A charming and beautiful online toy store where fantasies are
            lovingly constructed in the heart of the city.
          </p>
          <div className="flex space-x-3 mt-2 text-lg">
            <i className="fab fa-facebook-f hover:text-blue-500 cursor-pointer"></i>
            <i className="fab fa-instagram hover:text-pink-500 cursor-pointer"></i>
            <i className="fab fa-twitter hover:text-blue-400 cursor-pointer"></i>
            <i className="fab fa-pinterest-p hover:text-red-500 cursor-pointer"></i>
            <i className="fab fa-youtube hover:text-red-600 cursor-pointer"></i>
          </div>
        </div>

        {/* Help */}
        <div>
          <h3 className="font-semibold mb-4">Help</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white cursor-pointer">FAQs</li>
            <li className="hover:text-white cursor-pointer">
              Shipping Information
            </li>
            <li className="hover:text-white cursor-pointer">
              Returns And Exchanges
            </li>
          </ul>
        </div>

        {/* How We Can Help */}
        <div>
          <h3 className="font-semibold mb-4">How We Can Help</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white cursor-pointer">
              Customer Support
            </li>
            <li className="hover:text-white cursor-pointer">Sales Inquiries</li>
            <li className="hover:text-white cursor-pointer">Feedback</li>
          </ul>
        </div>

        {/* About */}
        <div>
          <h3 className="font-semibold mb-4">About</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white cursor-pointer">Our Story</li>
            <li className="hover:text-white cursor-pointer">Our Team</li>
            <li className="hover:text-white cursor-pointer">
              Mission And Values
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-400 mb-2">
            Questions? We're here for you Monday - Friday 10am-6pm ET.
          </p>
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-center gap-2">
              <i className="fas fa-location-dot"></i> 58 A, East Madison Street,
              Baltimore, MD, USA 4508
            </li>
            <li className="flex items-center gap-2">
              <i className="fas fa-envelope"></i> contact@example.com
            </li>
            <li className="flex items-center gap-2">
              <i className="fas fa-phone"></i> +123-456-789
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 py-2 flex flex-col sm:flex-row justify-between items-center px-4 max-w-7xl mx-auto gap-2 text-center sm:text-left">
        <p className="text-gray-400 text-sm font-medium">
          PinkHippo © 2025. All Rights Reserved.
        </p>
        <p className="text-gray-400 text-sm font-medium">
          Made with ❤ by sketchNsnap
        </p>
      </div>
    </footer>
  );
};

export default Footer;
