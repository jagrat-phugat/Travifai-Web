import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-yellow-100 via-purple-100 to-purple-200 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Text */}
          <Link to="/" className="flex items-center text-2xl font-extrabold text-purple-800 animate-pulse">
            TRAVIFAI
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {[
              { name: "Home", path: "/" },
              { name: "About Us", path: "/about" },
              { name: "Services", path: "/services" },
              { name: "Blog", path: "/blog" },
              { name: "Testimonials", path: "/testimonials" }
            ].map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="text-gray-700 hover:text-black transition-transform transform hover:scale-110"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <span className="text-gray-700">EN</span>
            <button className="px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition transform hover:scale-105">
              Download App
            </button>
            <Link to="/contact" className="px-4 py-2 border border-purple-600 text-purple-600 rounded-full hover:bg-purple-100 transition transform hover:scale-105">
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-black hover:bg-gray-100 transition"
            >
              <motion.svg
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                />
              </motion.svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Side Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            className="fixed top-0 right-0 w-64 h-full bg-gradient-to-r from-yellow-100 via-purple-100 to-purple-200 shadow-xl p-5 z-50"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-700 text-2xl absolute top-4 right-4 hover:text-black"
            >
              ✖
            </button>
            <div className="mt-10 space-y-6 text-lg">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Blog", path: "/blog" },
                { name: "Pages", path: "/pages" },
                { name: "Testimonials", path: "/testimonials" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="block text-gray-700 hover:text-black transform hover:scale-110 transition"
                  onClick={() => setIsOpen(false)}
                >
                  <Link to={item.path}>{item.name}</Link>
                </motion.div>
              ))}
            </div>
            <div className="border-t border-gray-300 mt-5 pt-5">
              <span className="text-gray-700">EN</span>
              <div className="flex space-x-4 mt-3">
                <button className="px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition transform hover:scale-105">
                  Download App
                </button>
                <Link to="/contact" className="px-4 py-2 border border-purple-600 text-purple-600 rounded-full hover:bg-purple-100 transition transform hover:scale-105">
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
