import React, { useState } from "react";
import myImage from "../../assets/left.png";
import myImage2 from "../../assets/right.png";

const Abouthero = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation pattern
    return emailRegex.test(email);
  };

  const handleSubscribe = () => {
    if (!email) {
      setError("Please enter your email.");
    } else if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
    } else {
      alert(`Subscribed with: ${email}`);
      setEmail(""); // Clear input after subscribing
      setError(""); // Clear error after successful submission
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-r from-yellow-100 via-purple-100 to-purple-200 text-center p-6 relative">
      {/* Blog Heading */}
      <div className="text-6xl font-bold mt-4 translate-y-40">
        Wander More, Worry Less <br /> Travel the World with Us!
      </div>
      <p className="text-lg mt-4 translate-y-40">
        Unveiling Hidden Gems & Travel Stories from Around the World!
      </p>

      {/* Email Subscription Box */}
      <div className="mt-6 flex flex-col items-center translate-y-40">
        <div className="flex items-center border border-gray-400 rounded-full overflow-hidden shadow-md">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-2 w-64 outline-none text-gray-700 bg-white"
          />
          <button
            onClick={handleSubscribe}
            className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 font-semibold transition-all duration-300"
          >
            Subscribe
          </button>
        </div>

        {/* Error Message */}
        {error && <p className="text-red-600 mt-2">{error}</p>}
      </div>

      {/* Right-Aligned Image */}
      <div className="absolute bottom-0 right-0">
        <img 
          src={myImage} 
          alt="Hero Section" 
          className="w-80 max-w-xl h-auto object-contain -translate-y-20"
        />
      </div>

      <div className="absolute bottom-0 left-0">
        <img 
          src={myImage2} 
          alt="Hero Section" 
          className="w-80 max-w-xl h-auto object-contain -translate-y-20"
        />
      </div>

    </div>
  );
};

export default Abouthero;
