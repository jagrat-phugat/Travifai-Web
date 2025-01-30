import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-yellow-100 via-purple-100 to-purple-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
          <img
  className="h-10 w-10" // Adjust size as needed
  src="../assets/logo.png"
  alt="Travifai Logo"
/>
            <span className="ml-2 text-lg font-bold text-black">Travifai</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-black transition">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-black transition">
              About Us
            </a>
            <a href="#" className="text-gray-700 hover:text-black transition">
              Blog
            </a>
            <a href="#" className="text-gray-700 hover:text-black transition">
              Pages
            </a>
            <a href="#" className="text-gray-700 hover:text-black transition">
              Pricing
            </a>
          </div>

          {/* Right Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <span className="text-gray-700">EN</span>
            <button className="px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition">
              Sign Up
            </button>
            <button className="px-4 py-2 border border-purple-600 text-purple-600 rounded-full hover:bg-purple-100 transition">
              Sign In
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-black hover:bg-gray-100 transition"
            >
              <svg
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
                  d={
                    isOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16m-7 6h7"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block text-gray-700 hover:text-black">
              Home
            </a>
            <a href="#" className="block text-gray-700 hover:text-black">
              About Us
            </a>
            <a href="#" className="block text-gray-700 hover:text-black">
              Blog
            </a>
            <a href="#" className="block text-gray-700 hover:text-black">
              Pages
            </a>
            <a href="#" className="block text-gray-700 hover:text-black">
              Pricing
            </a>
          </div>
          <div className="border-t border-gray-200">
            <div className="flex items-center justify-between px-4 py-3">
              <span className="text-gray-700">EN</span>
              <div className="flex space-x-4">
                <button className="px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition">
                  Sign Up
                </button>
                <button className="px-4 py-2 border border-purple-600 text-purple-600 rounded-full hover:bg-purple-100 transition">
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;