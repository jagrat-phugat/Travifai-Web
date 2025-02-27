import React, { useEffect } from 'react';
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';
import image4 from '../../assets/image4.png';

const ServicesHero = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach(element => observer.observe(element));
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-yellow-100 via-purple-100 to-purple-200 text-center px-4 sm:px-6 lg:px-12 overflow-hidden">
      {/* Floating Images */}
      <img
        src={image1}
        alt="Decorative"
        className="absolute top-5 left-5 w-28 sm:w-40 md:w-52 lg:w-60 opacity-0 translate-y-10 transition-all duration-1000 ease-out animate-on-scroll"
      />
      <img
        src={image2}
        alt="Decorative"
        className="absolute top-16 right-5 w-32 sm:w-48 md:w-56 lg:w-72 opacity-0 translate-y-10 transition-all duration-1000 delay-200 ease-out animate-on-scroll"
      />
      <img
        src={image3}
        alt="Decorative"
        className="absolute bottom-20 left-5 w-32 sm:w-44 md:w-52 lg:w-72 opacity-0 translate-y-10 transition-all duration-1000 delay-400 ease-out animate-on-scroll"
      />
      <img
        src={image4}
        alt="Decorative"
        className="absolute bottom-5 right-5 w-28 sm:w-40 md:w-52 lg:w-60 opacity-0 translate-y-10 transition-all duration-1000 delay-600 ease-out animate-on-scroll"
      />

      {/* Main Content */}
      <div className="z-10 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-300 ease-out max-w-3xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-black leading-tight mb-6 drop-shadow-md">
          Revolutionizing the <br />
          Travel & Hospitality Industry
          <span className="text-purple-700 bg-yellow-200 px-3 py-1 sm:py-2 rounded-md text-2xl sm:text-3xl md:text-4xl">
            TravifAi
          </span>
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-800 leading-relaxed">
          A <strong>Commission-Free, Cloud-Based</strong> Solution Empowering Hoteliers, Travel Agencies, and Travelers with Seamless Bookings & Real-Time Insights.
        </p>

        {/* CTA Button */}
        <div className="mt-8 sm:mt-10">
          <a href="YOUR_LINK_HERE">
            <button className="px-6 sm:px-8 py-3 sm:py-4 text-white font-semibold text-base sm:text-lg bg-gradient-to-r from-purple-600 to-purple-800 rounded-full shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300">
              🚀 Download Now
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServicesHero;
