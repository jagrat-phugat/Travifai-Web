import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";
import { FaUserFriends, FaUserCheck, FaIdCard, FaDog } from "react-icons/fa";
import React from "react";

const PropertyRules = () => {
  const navigate = useNavigate();

  const [rules, setRules] = useState({
    coupleRule: "",
    guestRule: "",
    identityRule: "",
    petRule: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRules({ ...rules, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Rules:", rules);
    navigate("/signup/interface");
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-800 to-white px-4 py-6 font-sans">
      <div className="w-full max-w-3xl p-8 rounded-3xl shadow-2xl bg-gradient-to-br from-purple-400 via-purple-300 to-white bg-opacity-60 backdrop-blur-lg border border-white border-opacity-30 space-y-6 transition-all duration-500">
        {/* Header */}
        <div className="flex items-center space-x-2 mb-4">
          <button
            onClick={handleBack}
            className="text-black text-2xl hover:scale-110 transition"
          >
            <IoChevronBack />
          </button>
          <h1 className="text-2xl font-bold text-black">
            Property Information
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Couple Rule */}
          <div>
            <p className="text-sm font-semibold text-black mb-1">Couple Rule</p>
            <div className="flex items-center bg-white/80 px-4 py-2 rounded-xl shadow focus-within:ring-2 focus-within:ring-purple-400 transition">
              <span className="text-purple-600 mr-3">
                <FaUserFriends />
              </span>
              <input
                type="text"
                name="coupleRule"
                value={rules.coupleRule}
                onChange={handleChange}
                placeholder="Write text..."
                className="w-full bg-transparent outline-none text-black placeholder-gray-500"
              />
            </div>
          </div>

          {/* Guest Rule */}
          <div>
            <p className="text-sm font-semibold text-black mb-1">Guest Rule</p>
            <div className="flex items-center bg-white/80 px-4 py-2 rounded-xl shadow focus-within:ring-2 focus-within:ring-purple-400 transition">
              <span className="text-purple-600 mr-3">
                <FaUserCheck />
              </span>
              <input
                type="text"
                name="guestRule"
                value={rules.guestRule}
                onChange={handleChange}
                placeholder="Write text..."
                className="w-full bg-transparent outline-none text-black placeholder-gray-500"
              />
            </div>
          </div>

          {/* Identity Rules */}
          <div>
            <p className="text-sm font-semibold text-black mb-1">
              Identity Rules
            </p>
            <div className="flex items-center bg-white/80 px-4 py-2 rounded-xl shadow focus-within:ring-2 focus-within:ring-purple-400 transition">
              <span className="text-purple-600 mr-3">
                <FaIdCard />
              </span>
              <input
                type="text"
                name="identityRule"
                value={rules.identityRule}
                onChange={handleChange}
                placeholder="Write text..."
                className="w-full bg-transparent outline-none text-black placeholder-gray-500"
              />
            </div>
          </div>

          {/* Pet Rules */}
          <div>
            <p className="text-sm font-semibold text-black mb-1">Pet Rules</p>
            <div className="flex items-center bg-white/80 px-4 py-2 rounded-xl shadow focus-within:ring-2 focus-within:ring-purple-400 transition">
              <span className="text-purple-600 mr-3">
                <FaDog />
              </span>
              <input
                type="text"
                name="petRule"
                value={rules.petRule}
                onChange={handleChange}
                placeholder="Write text..."
                className="w-full bg-transparent outline-none text-black placeholder-gray-500"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-black text-white font-semibold hover:scale-105 transition duration-300 ease-in-out"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default PropertyRules;
