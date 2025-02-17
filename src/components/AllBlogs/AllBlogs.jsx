import React, { useState } from "react";
import { motion } from "framer-motion";
import { RiArrowDownDoubleLine } from "react-icons/ri"; // Import arrow icon

const allBlogs = [
  {
    title: "Exploring the Wild",
    description: "A journey into the heart of the forest, discovering hidden trails and breathtaking landscapes.",
    image: "https://img.freepik.com/free-photo/hiker-path-forest_23-2147683099.jpg",
  },
  {
    title: "Waves & Serenity",
    description: "Experience the calming sound of ocean waves and the beauty of the open sea.",
    image: "https://img.freepik.com/free-photo/sunset-with-sea-beach_74190-3834.jpg",
  },
  {
    title: "The Ultimate Road Trip",
    description: "Hit the open road and explore scenic routes filled with adventure and memories.",
    image: "https://img.freepik.com/free-photo/females-looking-map-leaning-car-while-her-male-friend-gesturing-road_23-2147855598.jpg",
  },
  {
    title: "Camping Under the Stars",
    description: "Embrace nature with an unforgettable camping experience under a sky full of stars.",
    image: "https://img.freepik.com/free-photo/fathers-day-celebration-with-kid_23-2151175703.jpg",
  },
  {
    title: "Hidden Waterfalls",
    description: "Discover breathtaking hidden waterfalls deep within the untouched wilderness.",
    image: "https://img.freepik.com/free-photo/beautiful-waterfall-landscape_23-2150526205.jpg",
  },
  {
    title: "Golden Hour at the Beach",
    description: "Witness the most mesmerizing sunset while strolling along a serene beach.",
    image: "https://img.freepik.com/free-photo/sad-contemplative-person-near-lake_23-2150420701.jpg",
  },
];

const AllBlogs = () => {
  const [visibleBlogs, setVisibleBlogs] = useState(4);

  // Function to load more blogs
  const loadMoreBlogs = () => {
    setVisibleBlogs((prev) => prev + 4);
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-300 via-purple-100 to-yellow-100 text-center px-6 py-12 overflow-hidden">
      
      {/* 🌟 Decorative Background Elements */}
      <div className="absolute top-10 left-16 w-28 h-28 bg-purple-400 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-16 right-16 w-20 h-20 bg-yellow-400 rounded-full opacity-20 blur-3xl"></div>

      {/* 📝 Hero Header */}
      <motion.h1 
        className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-black leading-tight mb-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        All Blog <span className="text-purple-700 bg-yellow-200 px-3 py-2 rounded-md shadow-md">Posts</span>
      </motion.h1>

      {/* 📌 Blog Grid with Glassmorphism Effect */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {allBlogs.slice(0, visibleBlogs).map((blog, index) => (
          <motion.div
            key={index}
            className="backdrop-blur-lg bg-white/30 border border-white/10 shadow-lg p-5 rounded-lg transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover rounded-lg"
            />
            <h3 className="mt-4 text-lg font-bold text-gray-900">{blog.title}</h3>
            <p className="text-sm text-gray-700 mt-2">{blog.description}</p>
            <button className="mt-4 px-5 py-2 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 transition-all">
              Read More
            </button>
          </motion.div>
        ))}
      </div>

      {/* 🔽 "More Blogs" Button */}
      {visibleBlogs < allBlogs.length && (
        <button
          onClick={loadMoreBlogs}
          className="mt-10 px-6 py-3 bg-purple-700 text-white rounded-lg shadow-md hover:bg-purple-800 transition-all flex items-center gap-2"
        >
          More Blogs <RiArrowDownDoubleLine className="text-xl" />
        </button>
      )}
      
    </div>
  );
};

export default AllBlogs;
