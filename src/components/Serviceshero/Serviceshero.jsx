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
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-yellow-100 via-purple-100 to-purple-200 text-center p-6 overflow-hidden">
      {/* Floating Images with Animations */}
      <img src={image1} alt="Decorative" className="absolute top-10 left-10 w-60 h-auto opacity-0 translate-y-10 transition-all duration-1000 ease-out animate-on-scroll" />
      <img src={image2} alt="Decorative" className="absolute top-20 right-16 w-72 h-auto opacity-0 translate-y-10 transition-all duration-1000 delay-200 ease-out animate-on-scroll" />
      <img src={image3} alt="Decorative" className="absolute bottom-20 left-16 w-72 h-auto opacity-0 translate-y-10 transition-all duration-1000 delay-400 ease-out animate-on-scroll" />
      <img src={image4} alt="Decorative" className="absolute bottom-10 right-10 w-60 h-auto opacity-0 translate-y-10 transition-all duration-1000 delay-600 ease-out animate-on-scroll" />

      {/* Main Content */}
      <div className="z-10 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-300 ease-out">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-black leading-tight mb-6 drop-shadow-md">
          Revolutionizing the <br />
          Travel & Hospitality Industry
          <span className="text-purple-700 bg-yellow-200 px-3 py-2 rounded-md text-[3rem]">
            TravifAi
          </span>
        </h1>
        <p className="mt-4 text-xl text-gray-800 max-w-3xl mx-auto leading-relaxed">
          A **Commission-Free, Cloud-Based** Solution Empowering Hoteliers, Travel Agencies, and Travelers with Seamless Bookings & Real-Time Insights.
        </p>

        {/* CTA Button */}
        <div className="mt-10">
          <a href="YOUR_LINK_HERE">
            <button className="px-8 py-4 text-white font-semibold text-lg bg-gradient-to-r from-purple-600 to-purple-800 rounded-full shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300">
              🚀 Download Now
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServicesHero;
