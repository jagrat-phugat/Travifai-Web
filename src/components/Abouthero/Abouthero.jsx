import React from "react";
import { motion } from "framer-motion";

const Abouthero = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-yellow-100 via-purple-100 to-purple-200 text-center p-6">
      {/* Header Section */}
      <motion.h1
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Your Host, Never a Ghost!
        <br />
        Your Transparent Travel Partner{" "}
        <span className="text-purple-600 bg-yellow-100 px-2 py-1 rounded-md text-[2.9rem]">
          Travifai
        </span>
      </motion.h1>

      {/* Description */}
      <motion.p
        className="mt-2 text-lg text-gray-700 max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        A Commission-Free, Cloud-Based Solution Empowering Hoteliers, Travel
        Agencies, and Travelers with Seamless Bookings and Real-Time Business
        Insights.
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="mt-8 flex gap-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <a href="\home">
          <a
            href="https://drive.google.com/drive/folders/1liA5eO53qs80svbI7eHA0UwZ6LKMEXZ1"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition transform hover:scale-105 inline-block"
          >
            Download App
          </a>
        </a>
      </motion.div>

      {/* Image with Scroll Animation */}
      <motion.div
        className="mt-8 w-full flex justify-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      ></motion.div>
    </div>
  );
};

export default Abouthero;
