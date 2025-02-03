import { useState } from "react";


const faqData = [
  {
    question: "Q. What is Travifai?",
    answer: "Travifai is a comprehensive financial management solution designed for small businesses and individuals."
  },
  {
    question: "Q. How does Travifai help small businesses?",
    answer: "Travifai provides tools for budgeting, expense tracking, and financial reporting to help small businesses manage their finances effectively."
  },
  {
    question: "Q. What is Travifai?",
    answer: "Travifai is a comprehensive financial management solution designed for small businesses and individuals."
  },
  {
    question: "Q. How does Travifai help small businesses?",
    answer: "Travifai provides tools for budgeting, expense tracking, and financial reporting to help small businesses manage their finances effectively."
  },
  {
    question: "Q. Is Travifai suitable for personal finance management?",
    answer: "Yes, Travifai offers features that cater to personal finance management, allowing individuals to track their expenses and savings."
  }
];

const Faq = () => {
  return (
    <div className="bg-gradient-to-r from-yellow-100 via-purple-100 to-purple-200 min-h-screen flex flex-col items-center px-6 py-12">
      {/* Section Wrapper */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-6xl w-full">
        {/* Left: Heading */}
        <div className="text-center md:text-left flex-1">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
          Frequently 
          {' '}<br/>
            <span className="text-purple-600 bg-yellow-100 px-0 py-0.5 rounded-md text-[2.9rem]">
            Asked Questions
            </span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl">
            Whether you are a small business owner, a finance professional, or
            an individual seeking better control over your finances, Travifai
            is your comprehensive solution.
          </p>
          <div className="mt-8 flex gap-4">
            <button className="px-6 py-3 text-white bg-purple-600 rounded-full shadow-lg hover:bg-purple-700 transition duration-300">
              Download Now
            </button>
          </div>
        </div>
          
        {/* Right: FAQ Section */}
        <div className="flex-1">
          <div className="mt-12 w-full max-w-2xl">
            {faqData.map((faq, index) => (
              <FaqItem key={index} question={faq.question} answer={faq.answer} />
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
    <div className="border-b border-gray-300 py-4">
      <button
        className="flex justify-between w-full text-left text-lg font-semibold text-gray-800"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${question.replace(/\s+/g, '-')}`}
      >
        {question}
        <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>
      {isOpen && (
        <p id={`faq-answer-${question.replace(/\s+/g, '-')}`} className="mt-2 text-gray-600">
          {answer}
        </p>
      )}
    </div>
  );
};

export default Faq;
