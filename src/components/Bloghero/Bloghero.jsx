import React, { useState } from "react";
import { motion } from "framer-motion";
import myImage from "../../assets/left.png";
 // Ensure this image is optimized

const Bloghero = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubscribe = () => {
    if (!email) {
      setError("Please enter your email.");
    } else if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
    } else {
      alert(`Subscribed with: ${email}`);
      setEmail("");
      setError("");
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-yellow-100 via-purple-100 to-purple-300 text-center px-6 py-12 overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-10 left-16 w-28 h-28 bg-purple-400 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-16 right-16 w-20 h-20 bg-yellow-400 rounded-full opacity-20 blur-3xl"></div>

      {/* Hero Header */}
      <motion.h1 
        className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-black leading-tight mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Revolutionizing Travel & <br />
        Hospitality with{" "}
        <span className="text-purple-700 bg-yellow-200 px-3 py-2 rounded-md text-[3rem] shadow-md">
          TravifAi
        </span>
      </motion.h1>

      {/* Subtext */}
      <motion.p 
        className="mt-3 text-lg md:text-xl text-gray-700 max-w-2xl leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
      >
        Wander More, Worry Less. <br className="sm:hidden" />
        Travel the World with Us!
      </motion.p>

      {/* Email Subscription Box */}
      <motion.div
        className="mt-6 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full max-w-md"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-5 py-3 w-full sm:w-72 border border-gray-400 rounded-full outline-none text-gray-700 bg-white shadow-md focus:ring-2 focus:ring-purple-500 transition-all"
        />
        <button
          onClick={handleSubscribe}
          className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition-all duration-300"
        >
          Subscribe
        </button>
      </motion.div>

      {/* Error Message */}
      {error && <p className="text-red-600 mt-2">{error}</p>}

      {/* CTA Buttons */}
      <motion.div 
        className="mt-8 flex gap-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
      
      </motion.div>

      {/* Image with Scroll Animation */}
      <motion.div 
        className="mt-12 w-full flex justify-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.img 
          src={myImage} 
          alt="Travel Illustration" 
          className="w-full max-w-md sm:max-w-lg md:max-w-xl object-contain drop-shadow-lg rounded-lg"
          animate={{ y: [0, -10, 0] }} // Floating effect
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        />
      </motion.div>
      
    </div>
  );
}

export default Bloghero;
