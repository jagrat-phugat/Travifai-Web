import { useEffect, useState, useRef } from "react";
import "../Hero/hero.css";
import test from "../../assets/Travifai_your_team__2_-removebg-preview.png"; 

const handleButtonClick = () => {
  const googleFormUrl =
    "https://docs.google.com/forms/d/11Wwr5BWetz6rNxONkqO6WCyDq-vZQ4EdbPCqVApXbOs/edit";
  window.open(googleFormUrl, "_blank");
};

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Disconnect after it becomes visible
        }
      },
      { threshold: 0.3 }
    );

    if (heroRef.current) observer.observe(heroRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={heroRef}
      className={`flex flex-col items-center justify-center min-h-screen
      bg-gradient-to-r from-yellow-100 via-purple-100 to-purple-200 
      text-center p-6 transition-all duration-700 ease-in-out 
      ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"}`}
    >
      {/* Image */}
      <img
        src={test}
        alt="Travifai Hero"
        className={`w-72 md:w-96 lg:w-[32rem] mb-8 rounded-lg shadow-xl transition-all duration-700 ease-in-out 
        ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
      />

      {/* Title */}
      <h1
        className={`text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight transition-all duration-700 ease-in-out 
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <span className="text-purple-600 bg-yellow-100 px-2 py-1 rounded-md text-[2.9rem]">
          Travifai
        </span>
      </h1>

      {/* Description */}
      <p className={`mt-4 text-lg text-gray-700 max-w-2xl transition-all duration-700 ease-in-out delay-200 
      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        Travifai is a one-stop, transparent platform that redefines how you plan and book travel. More than just a service, we empower you with full control and freedom over your experience.
      </p>
      <p className="mt-2 text-lg text-gray-700">
        We believe travel is about seamless connections and collaborations between travelers, hoteliers, travel agencies, and taxi providers. Our role is to enable, connect, and support this growing community.
      </p>
      <p className="mt-2 text-lg text-gray-700">
        When we say “Save More. Earn More. Grow More.”, we mean it. Travelers get the best stays, hoteliers boost bookings with zero revenue cuts, travel agencies expand reach with real-time inventory, and taxi providers receive direct bookings with zero revenue cuts.
      </p>
      <p className="mt-2 text-lg text-gray-700">Experience the Travifai Edge today!</p>

      {/* Buttons */}
      <div className={`mt-8 flex gap-4 transition-all duration-700 ease-in-out delay-400 
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <button className="px-6 py-3 text-white bg-purple-600 rounded-full hover:bg-purple-700 transition">
        Travifai Edge
        </button>
        <button
          className="px-6 py-3 text-purple-600 bg-white border border-purple-600 rounded-full hover:bg-purple-100 transition"
          onClick={handleButtonClick}
        >
          Reach Us
        </button>
        <button className="px-6 py-3 text-white bg-purple-600 rounded-full hover:bg-purple-700 transition">
        Create Profile
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
