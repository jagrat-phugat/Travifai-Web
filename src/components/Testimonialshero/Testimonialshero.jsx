import { useEffect, useState } from "react";
import image2 from "/src/assets/travel2.png"; // Foreground Image
import image from "/src/assets/travel.png"; // Background Image

const Testimonialshero = () => {
  const [text, setText] = useState("");
  const fullText = "What Our Travelers & Partners Say About TravifAi";
  const speed = 80; // Typing speed

  // Typing Effect
  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(typingInterval);
    }, speed);
    return () => clearInterval(typingInterval);
  }, []);

  // Scroll Animation Effect
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");
    const revealOnScroll = () => {
      revealElements.forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight - 50) {
          el.classList.add("animate-fadeIn");
        }
      });
    };
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between min-h-screen bg-gradient-to-r from-yellow-100 via-purple-100 to-purple-200 p-6 relative overflow-hidden">
      {/* Left Side: Text & Input */}
      <div className="md:w-1/2 pl-10 reveal">
        <h1 className="text-left text-6xl md:text-7xl lg:text-8xl mt-10 font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 drop-shadow-lg shadow-blue-600 animate-textGlow">
          {text}
          <span className="blink">|</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-lg reveal">
          We’re crafting something revolutionary for travelers, hoteliers, travel agencies, and taxi owners! 🚀
        </p>

        <div className="mt-6 flex flex-wrap gap-3 reveal">
          <input
            type="email"
            placeholder="Enter email"
            className="px-4 py-3 w-full md:w-auto border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />
          <button className="px-6 py-3 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 hover:shadow-lg transition duration-300">
            NOTIFY ME
          </button>
        </div>
      </div>

      {/* Image Wrapper (Layered Effect) */}
      <div className="md:w-1/2 flex justify-center relative mt-10 reveal">
        {/* Background Image */}
        <img 
          src={image}
          alt="Background Rocket" 
          className="absolute top-[-150px] left-0 w-full max-w-4xl h-auto z-0 opacity-60 animate-float"
        />
        {/* Foreground Image */}
        <img 
          src={image2}
          alt="Rocket Launch" 
          className="relative w-full max-w-3xl md:max-w-4xl lg:max-w-5xl h-auto z-10 animate-fadeInUp"
        />
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(10px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        @keyframes textGlow {
          0% {
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
          }
          50% {
            text-shadow: 0 0 20px rgba(255, 255, 255, 1);
          }
          100% {
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out forwards;
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-textGlow {
          animation: textGlow 2s infinite alternate;
        }
        .blink {
          animation: blink 1s step-end infinite;
        }
        @keyframes blink {
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Testimonialshero;
