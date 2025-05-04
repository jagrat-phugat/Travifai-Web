import React from "react";
import { motion } from "framer-motion";

const WhoAreWe = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-r from-yellow-50 via-purple-100 to-purple-300 text-center md:text-left p-8 gap-14">
      
      {/* Left Side - Animated Image */}
      <motion.div
        className="w-56 h-56 md:w-72 md:h-72 bg-white rounded-full overflow-hidden shadow-2xl flex items-center justify-center border-4 border-purple-500"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.05 }}
      >
        <img
          src="https://data.textstudio.com/output/sample/animated/2/7/8/5/we-4-5872.gif"
          alt="Who We Are"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Right Side - Text Content */}
      <motion.div
        className="max-w-2xl"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
          Who are we?{" "}
          <span className="text-purple-700 bg-yellow-200 px-3 py-1 rounded-lg shadow-md">
            Travifai
          </span>
        </h1>
        <p className="text-gray-800 text-lg md:text-xl leading-relaxed tracking-wide">
          Travifai was built with a simple but powerful belief—travel should be
          free from unnecessary costs, hidden commissions, and middlemen
          controlling the industry.
        </p>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed mt-5 border-l-4 border-purple-600 pl-4 italic">
          "I’m <strong className="text-purple-800">Ankur Kumar</strong>, the founder of Travifai. With over a
          decade of experience in operations and sales, I’ve seen how businesses
          thrive when they eliminate inefficiencies. 
        </p>
        <p className="text-gray-800 text-lg md:text-xl leading-relaxed mt-5">
          When I entered the travel industry, I realized something was deeply broken—hoteliers were losing
          revenue to commissions, travel agencies were stuck with limited
          inventory, taxi providers had no direct booking control, and travelers
          were paying more than they should.
        </p>
        <p className="text-gray-900 text-xl md:text-2xl font-semibold mt-6 bg-yellow-200 inline-block px-5 py-2 rounded-md shadow-md">
          That’s where <span className="text-purple-700">Travifai</span> comes in. We’re not just another travel
          platform—we’re a game-changer.
        </p>
      </motion.div>
    </div>
  );
};

export default WhoAreWe;
