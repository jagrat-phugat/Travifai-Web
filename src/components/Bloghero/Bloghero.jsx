import React, { useState } from "react";
import { motion } from "framer-motion";

const Bloghero = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    const formUrl = "https://formspree.io/f/YOUR_FORM_ID"; // Replace with your Formspree/W3 Form ID

    try {
      const response = await fetch(formUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message: `Subscription request for TravifAi blog.` })
      });
      if (response.ok) {
        setMessage("Thank you for subscribing! Check your email.");
        setEmail("");
      } else {
        setMessage("Something went wrong. Try again.");
      }
    } catch (error) {
      setMessage("Error submitting form. Try again.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-yellow-100 via-purple-100 to-purple-200 text-center p-6"
    >
      {/* Header Section */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-4">
      Navigating the Future of Travel &  <br /> Hospitality Industry {" "}
        <span className="text-purple-600 bg-yellow-100 px-2 py-1 rounded-md text-[2.9rem]">
          TravifAi
        </span>
      </h1>
      <p className="mt-2 text-lg text-gray-700 max-w-2xl">
      From AI-Powered Solutions to Smarter Bookings – Explore the Future of Travel.Expert Tips, Industry Insights, and Tech Breakthroughs for Modern Travelers.
      </p>
      
      {/* Subscription Form */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-6 flex flex-wrap gap-3"
      >
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3">
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="px-4 py-3 w-full md:w-auto border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 hover:shadow-lg transition duration-300"
          >
            NOTIFY ME
          </button>
        </form>
      </motion.div>

      {message && <p className="mt-4 text-green-600">{message}</p>}
    </motion.div>
  );
};

export default Bloghero;