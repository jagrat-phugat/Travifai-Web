import React, { useEffect } from 'react';
import image3 from '../../assets/image4.png';

const Offeragency = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((element) => observer.observe(element));
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-yellow-100 via-purple-100 to-purple-200 text-center p-6 overflow-hidden">
      {/* Header Section */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-6 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 ease-out">
        What We Offer to <br />
        Travel Agencies{" "}
        <span className="text-purple-700 bg-yellow-200 px-3 py-2 rounded-md text-[3rem]">
          TravifAi
        </span>
      </h1>

      <p className="mt-4 text-xl text-gray-800 max-w-3xl mx-auto leading-relaxed animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-200 ease-out">
        A **Commission-Free, Cloud-Based** Solution Empowering Hoteliers, Travel Agencies, and Travelers with Seamless Bookings & Real-Time Business Insights.
      </p>

      {/* Main Content - Image Left, Text Right */}
      <div className="relative mt-12 flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto text-left">
        {/* Image (Left Side) */}
        <div className="w-full md:w-1/2 flex justify-center animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 ease-out">
          <img
            src={image3}
            alt="Travel Agency Services"
            className="w-[90%] md:w-[85%] lg:w-[75%] h-auto shadow-lg rounded-lg"
          />
        </div>

        {/* Text (Right Side) */}
        <div className="w-full md:w-1/2 px-6 md:px-12 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-200 ease-out">
          <p className="text-lg text-gray-800 leading-relaxed">
            Travel agencies are at the heart of **seamless travel experiences**, offering curated itineraries, personalized recommendations, and exclusive deals.  
            Whether it's **business trips, luxury vacations, or adventure travel**, we empower agencies with tools to **streamline operations and maximize customer satisfaction**.  
            <br />
            <br />
            With **real-time data, AI-driven insights, and commission-free bookings**, we help agencies **scale effortlessly** while providing top-notch services to travelers worldwide.  
            <br />
            <br />
            🚀 **Embrace the future of travel agency operations today!**
          </p>

          {/* CTA Button */}
          <div className="mt-8">
            <a href="YOUR_LINK_HERE">
              <button className="px-8 py-4 text-white font-semibold text-lg bg-gradient-to-r from-purple-600 to-purple-800 rounded-full shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300">
                🚀 Get Started Now
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offeragency;
