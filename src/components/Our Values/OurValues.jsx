import React from "react";
import { motion } from "framer-motion";

const values = [
  {
    title: "Transparency",
    description:
      "No hidden fees, no surprises—just complete pricing clarity and honest connections.",
    icon: "🔍",
  },
  {
    title: "Empowerment",
    description:
      "Giving travelers, hoteliers, travel agencies, and taxi providers full control over their choices, earnings, and growth.",
    icon: "💪",
  },
  {
    title: "Innovation",
    description:
      "Harnessing smart technology to simplify travel, optimize processes, and create seamless experiences.",
    icon: "🚀",
  },
  {
    title: "Community",
    description:
      "Building a connected ecosystem where businesses and travelers grow together, fostering trust and long-term success.",
    icon: "🤝",
  },
];

const OurValues = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-yellow-100 via-purple-100 to-purple-200 p-10 md:p-20">
      {/* Title with Subtle Animation */}
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold text-black mb-14 text-center tracking-wide"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Our Core Values
      </motion.h1>

      {/* Values Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {values.map((value, index) => (
          <motion.div
            key={index}
            className="relative bg-white/90 backdrop-blur-lg shadow-md rounded-xl p-6 md:p-8 flex flex-col items-center text-center transform hover:scale-[1.02] transition duration-300 hover:shadow-2xl border border-purple-200"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.2 }}
          >
            <div className="text-4xl md:text-5xl mb-4">{value.icon}</div>
            <h3 className="text-2xl md:text-3xl font-bold text-purple-700">
              {value.title}
            </h3>
            <p className="text-gray-700 mt-2 text-base md:text-lg leading-relaxed">
              {value.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OurValues;
