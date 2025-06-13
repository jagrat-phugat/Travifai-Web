import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blog" },
    { name: "Testimonials", path: "/testimonials" },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-gradient-to-r from-yellow-100 via-purple-100 to-purple-200 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center text-2xl font-extrabold text-purple-800 animate-pulse"
          >
            TRAVIFAI
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item, index) => (
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
            <a
              href="https://drive.google.com/drive/folders/1liA5eO53qs80svbI7eHA0UwZ6LKMEXZ1"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition transform hover:scale-105 inline-block"
            >
              Download App
            </a>
            <Link
              to="/contact"
              className="px-4 py-2 border border-purple-600 text-purple-600 rounded-full hover:bg-purple-100 transition transform hover:scale-105"
            >
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

      {/* Mobile Fullscreen Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            className="fixed top-0 right-0 w-full h-full bg-gradient-to-r from-yellow-100 via-purple-100 to-purple-200 shadow-xl p-5 z-50 flex flex-col"
          >
            {/* Close Button */}
            <button
              onClick={closeMenu}
              className="text-gray-700 text-3xl absolute top-4 right-6 hover:text-black"
            >
              ✖
            </button>

            {/* Mobile Menu Items */}
            <div className="mt-20 space-y-8 text-center text-lg">
              {menuItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="text-gray-700 hover:text-black transform hover:scale-110 transition"
                >
                  <Link to={item.path} onClick={closeMenu}>
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Bottom Buttons */}
            <div className="mt-auto pb-10 text-center">
              <span className="text-gray-700">EN</span>
              <div className="flex flex-col space-y-4 mt-5">
                <a
                  href="https://drive.google.com/drive/folders/1liA5eO53qs80svbI7eHA0UwZ6LKMEXZ1"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition transform hover:scale-105 inline-block"
                >
                  Download App
                </a>
                <Link
                  to="/contact"
                  onClick={closeMenu}
                  className="px-4 py-2 border border-purple-600 text-purple-600 rounded-full hover:bg-purple-100 transition transform hover:scale-105"
                >
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
