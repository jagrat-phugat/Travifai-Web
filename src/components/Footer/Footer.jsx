import {
  FaWhatsapp,
  FaEnvelope,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { useEffect, useState } from "react";

const Footer = () => {
  // State for scroll animation
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen 
      bg-gradient-to-r from-yellow-100 via-purple-100 to-purple-200 
      text-center p-6 transition-opacity duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Header Section */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-4">
        Your Gateway to a Seamless <br /> Travel Experience!{" "}
        <span className="text-purple-600 bg-yellow-100 px-2 py-1 rounded-md text-[2.9rem]">
          TravifAi
        </span>
      </h1>
      <p className="mt-2 text-lg text-gray-700 max-w-2xl">
        Discover a one-stop platform that seamlessly connects travelers,
        hoteliers, travel agencies, and taxi owners, revolutionizing the way you
        experience travel!
      </p>
      <a href="YOUR_LINK_HERE" className="mt-8">
        <a
          href="/travifai.apk"
          download
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition transform hover:scale-105 inline-block"
        >
          Download App
        </a>
      </a>

      {/* Footer Section */}
      <div className="container mx-auto px-4 pt-12 pb-6 lg:pt-16 lg:pb-10">
        <div className="grid gap-12 lg:grid-cols-6">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <a
              href="/"
              aria-label="Go home"
              className="flex justify-center lg:justify-start mb-3"
            >
              <span className="text-purple-700 bg-yellow-200 px-3 py-1 rounded-md text-3xl font-bold">
                Travafai
              </span>
            </a>
            <p className="text-sm text-gray-700 leading-relaxed text-center lg:text-left">
              Together Karein Explore, Mil Kar Badhe More Travafai <br />A
              one-stop platform connecting travelers, hoteliers, travel
              agencies, and taxi owners.
            </p>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 gap-4 lg:col-span-4 md:grid-cols-4">
            {[
              {
                title: "Category",
                links: ["Home", "About", "Blog", "Contacts"],
              },
              {
                title: "Business",
                links: [
                  "Hotels",
                  "Travel Agencies",
                  "Travelers",
                  "Taxi Owners",
                ],
              },
              {
                title: "Blogs",
                links: [
                  "Travel Tips",
                  "Travifai Brochure",
                  "Travel Places",
                  "About App",
                ],
              },
              {
                title: "Social Media",
                links: ["WhatsApp", "Email", "LinkedIn", "Instagram"],
              },
            ].map((section, index) => (
              <div key={index}>
                <p className="font-semibold text-black mb-2">{section.title}</p>
                <ul className="space-y-1">
                  {section.links.map((link, idx) => (
                    <li key={idx}>
                      <a
                        href="/"
                        className="text-gray-700 hover:text-purple-500 transition"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-300 pt-4 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-sm text-gray-700 text-center sm:text-left">
            © 2025 Travafai Inc. All rights reserved.
          </p>
          <div className="flex space-x-3 mt-3 sm:mt-0">
            {[
              { href: "https://wa.me/+918218229729", icon: <FaWhatsapp /> },
              { href: "mailto:a.k@travifai.com", icon: <FaEnvelope /> },
              {
                href: "https://www.linkedin.com/company/travifai/?originalSubdomain=in",
                icon: <FaLinkedin />,
              },
              {
                href: "https://www.instagram.com/travifai?igsh=ZzFoam1wbmJweGhp&utm_source=qr",
                icon: <FaInstagram />,
              },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-700 hover:text-purple-900 transition text-xl"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
