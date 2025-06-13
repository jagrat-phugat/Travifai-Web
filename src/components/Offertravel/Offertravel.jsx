import React, { useEffect } from "react";
import image2 from "../../assets/image1.png";

const Offertravel = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".animate-on-scroll");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-10");
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
        Travelers{" "}
        <span className="text-purple-700 bg-yellow-200 px-3 py-2 rounded-md text-[3rem]">
          TravifAi
        </span>
      </h1>

      <p className="mt-4 text-xl text-gray-800 max-w-3xl mx-auto leading-relaxed animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-200 ease-out">
        A **Commission-Free, Cloud-Based** Solution Empowering Hoteliers, Travel
        Agencies, and Travelers with Seamless Bookings & Real-Time Business
        Insights.
      </p>
      {/* CTA Button */}
      <div className="mt-8">
        <a href="/">
          <a
            href="https://drive.google.com/drive/folders/1liA5eO53qs80svbI7eHA0UwZ6LKMEXZ1"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition transform hover:scale-105 inline-block"
          >
            🚀 Download Now
          </a>
        </a>
      </div>
      {/* Main Content - Text Left, Image Right */}
      <div className="relative mt-12 flex flex-col md:flex-row-reverse items-center justify-between max-w-6xl mx-auto text-left">
        {/* Image (Right Side) */}
        <div className="w-full md:w-1/2 flex justify-center animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 ease-out">
          <img
            src={image2}
            alt="Travel Services"
            className="w-[90%] md:w-[85%] lg:w-[75%] h-auto shadow-lg rounded-lg"
          />
        </div>

        {/* Text (Left Side) */}
        <div className="w-full md:w-1/2 px-6 md:px-12 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-200 ease-out">
          <p className="text-lg text-gray-800 leading-relaxed">
            Traveling is one of life’s greatest joys, offering a chance to
            explore new cultures, savor diverse cuisines, and create
            unforgettable memories. Whether you’re wandering through the
            bustling streets of Tokyo, lounging on the pristine beaches of Bali,
            or hiking the majestic trails of the Swiss Alps, each destination
            has its own unique charm.
            <br />
            <br />
            Travel also fosters **personal growth**—challenging you to step out
            of your comfort zone, adapt to new environments, and connect with
            people from different backgrounds.
            <br />
            <br />
            So pack your bags, grab your passport, and embark on a journey that
            will enrich your life. **The world is waiting! 🌍✈️**
          </p>
        </div>
      </div>
    </div>
  );
};

export default Offertravel;
