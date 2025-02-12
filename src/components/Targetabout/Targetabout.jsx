import React, { useEffect, useRef } from "react";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";

const FeatureCard = ({ imgSrc, title, highlight, description, index }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0", "scale-100");
          }
        });
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`flex flex-col items-center text-center max-w-xs transition-transform duration-1000 ease-out opacity-0 translate-y-10 scale-90`}
      style={{ transitionDelay: `${index * 200}ms` }} // Staggered effect
    >
      {/* Image */}
      <img src={imgSrc} alt={title} className="w-32 h-32 mb-4 transform transition-all duration-700 hover:scale-110" />

      {/* Title */}
      <h3 className="text-xl font-semibold">
        <span className="text-purple-700 font-bold">{highlight}</span> {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
};

const Targetabout = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-yellow-100 via-purple-100 to-purple-200 text-center p-6 overflow-hidden">
      {/* Header Section */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-6">
        What We Offer to <br />
        World{" "}
        <span className="text-purple-700 bg-yellow-200 px-3 py-2 rounded-md text-[3rem]">
          TravifAi
        </span>
      </h1>

      {/* Features Section */}
      <div className="flex flex-col md:flex-row flex-wrap justify-center gap-8 mt-8">
        <FeatureCard
          imgSrc={image1}
          title="Connections"
          highlight="Restored"
          description="Strengthen family bonds through improved communication and understanding."
          index={0}
        />
        <FeatureCard
          imgSrc={image2}
          title="Anxiety"
          highlight="Reduced"
          description="Learn effective ways to combat anxiety, and stay calm under stress."
          index={1}
        />
        <FeatureCard
          imgSrc={image3}
          title="Self-Esteem"
          highlight="Enhanced"
          description="Develop a positive and healthy self-image."
          index={2}
        />
        <FeatureCard
          imgSrc={image4}
          title="Productivity"
          highlight="Improved"
          description="Boost efficiency and make the most of your time with smart habits."
          index={3}
        />
      </div>
    </div>
  );
};

export default Targetabout;
