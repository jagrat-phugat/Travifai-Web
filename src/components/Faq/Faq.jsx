import { useState } from "react";

const faqData = [
  {
    question: "Q. What is Travifai?  ",
    answer:
      "Travifai is a revolutionary platform designed to connect travelers, hoteliers, travel agencies, and taxi owners, offering a seamless and commission-free travel experience.",
  },
  {
    question: "Q. How does Travifai benefit travelers? ",
    answer:
      "Travelers can enjoy a wide range of services, including easy access to accommodations, transportation options, and personalized travel planning—all without incurring commission fees.",
  },
  {
    question: "Q. How can travel agencies utilize Travifai? ",
    answer:
      "Travel agencies can leverage Travifai’s tools and resources to optimize bookings, enhance customer service, and collaborate with other stakeholders in the travel ecosystem.",
  },
  {
    question: "Q. How do I stay updated on Travifai's launch and features? ",
    answer:
      "You can sign up for updates on our website or follow us on social media to be the first to know about our launch and new features!",
  },
  {
    question:
      "Q. Are there any fees for hoteliers and taxi owners to join Travifai? ",
    answer:
      "No, Travifai operates on a commission-free model, allowing hoteliers and taxi owners to showcase their services without any hidden fees.",
  },
];

const Faq = () => {
  return (
    <div className="bg-gradient-to-r from-yellow-100 via-purple-100 to-purple-200 h-auto w-full flex flex-col items-center px-6 pt-12 pb-0 mb-0 overflow-hidden">
      {/* Section Wrapper */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-6xl w-full">
        {/* Left: Heading */}
        <div className="text-center md:text-left flex-1">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
            Frequently <br />
            <span className="text-purple-600 bg-yellow-100 px-2 py-1 rounded-md mt-2 block">
              Asked Questions
            </span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl mt-4">
            Dive Deep into the World of Travifai: Your Comprehensive Guide to
            Our Innovative Travel Platform, Designed to Connect Travelers with
            Hoteliers, Travel Agencies, and Taxi Owners for a Seamless and
            Enjoyable Travel Experience!
          </p>
          <div className="mt-6">
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
          </div>
        </div>

        {/* Right: FAQ Section */}
        <div className="flex-1">
          <div className="w-full max-w-2xl">
            {faqData.map((faq, index) => (
              <FaqItem
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-300 py-2">
      <button
        className="flex justify-between items-center w-full text-left text-lg font-semibold text-gray-800 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${question.replace(/\s+/g, "-")}`}
      >
        <span>{question}</span>
        <span
          className={`text-xl transform transition-transform duration-300 ${
            isOpen ? "rotate-180 text-purple-600" : "text-gray-600"
          }`}
        >
          {isOpen ? "−" : "+"}
        </span>
      </button>
      <div
        id={`faq-answer-${question.replace(/\s+/g, "-")}`}
        className={`transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-48 mt-1" : "max-h-0"
        }`}
      >
        <p className="text-gray-600 text-md bg-white p-3 rounded-md shadow-md">
          {answer}
        </p>
      </div>
    </div>
  );
};

export default Faq;
