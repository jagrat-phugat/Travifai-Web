import React from "react";
import { motion } from "framer-motion";

const FeaturedBlog = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-yellow-100 via-purple-100 to-purple-300 text-center px-4 sm:px-6 lg:px-12 py-12 overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-10 left-10 w-16 h-16 sm:w-28 sm:h-28 bg-purple-400 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-12 h-12 sm:w-20 sm:h-20 bg-yellow-400 rounded-full opacity-20 blur-3xl"></div>

      {/* Hero Header */}
      <motion.h1 
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-black leading-tight mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Recent <span className="text-purple-700 bg-yellow-200 px-3 py-2 rounded-md shadow-md">Blog Posts</span>
      </motion.h1>

      {/* Blog Section */}
      <div className="mt-8 w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
        
        {/* Left Side: Large Image + Two Small Images */}
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <img
            src="https://img.freepik.com/free-photo/paragliding-mountains_23-2151944774.jpg"
            alt="Recent Blog 1"
            className="w-full sm:w-80 h-64 sm:h-96 object-cover rounded-lg shadow-lg"
          />
          <div className="flex flex-col justify-between mt-4 md:mt-0 md:ml-4 w-full sm:w-auto">
            <img
              src="https://img.freepik.com/premium-photo/collage-with-people-hiking-full-shot_23-2150385890.jpg"
              alt="Recent Blog 2"
              className="w-full sm:w-72 h-32 sm:h-48 object-cover rounded-lg shadow-lg"
            />
            <img
              src="https://img.freepik.com/free-photo/traveling-with-off-road-car_23-2151473063.jpg"
              alt="Recent Blog 3"
              className="w-full sm:w-72 h-32 sm:h-48 object-cover rounded-lg shadow-lg mt-4"
            />
          </div>
        </div>

        {/* Right Side: Text Content */}
        <div className="w-full md:w-1/2 text-left">
          <div className="mb-6">
            <p className="text-sm text-gray-500">Tanisha • 12 Feb 2025</p>
            <h3 className="font-semibold text-xl sm:text-2xl">
              Beyond Limits: The Ultimate Adventure Travel Guide
            </h3>
            <p className="text-gray-700 text-sm mt-2">
              Step out of your comfort zone and dive into the world of adrenaline-fueled adventures! 
              From scaling towering peaks to diving into the deep blue, this blog is your gateway 
              to the most thrilling experiences around the globe.
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="bg-gray-200 px-2 py-1 text-xs rounded">Adventure</span>
              <span className="bg-gray-200 px-2 py-1 text-xs rounded">Travel</span>
              <span className="bg-gray-200 px-2 py-1 text-xs rounded">Exploration</span>
            </div>
          </div>

          <div>
            <p className="text-sm text-gray-500">Bhanu Pande • 10 Feb 2025</p>
            <h3 className="font-semibold text-xl sm:text-2xl">
              Conquering the Uncharted: Top 5 Hidden Adventure Destinations
            </h3>
            <p className="text-gray-700 text-sm mt-2">
              Discover untouched landscapes, remote hiking trails, and secret diving spots 
              that promise an adventure like no other.
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="bg-gray-200 px-2 py-1 text-xs rounded">Hidden Gems</span>
              <span className="bg-gray-200 px-2 py-1 text-xs rounded">Adventure Travel</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBlog;
