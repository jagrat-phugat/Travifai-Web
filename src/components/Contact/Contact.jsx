import leftIllustration from "../../assets/left.png";
import rightIllustration from "../../assets/right.png";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-yellow-100 via-purple-100 to-purple-200 text-center p-6">
      {/* Header Section */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-6">
        Together Karein Explore, Milkar <br />
        Badhe More.{" "}
        <span className="text-purple-600 bg-yellow-100 px-2 py-1 rounded-md text-[2.9rem]">
          Contact Travifai
        </span>
      </h1>
      <p className="mt-2 text-lg text-gray-700 max-w-2xl">
        We’d love to hear from you! Whether you have questions, feedback, or just want to stay updated on our exciting journey, feel free to reach out. Drop us a message, and we’ll get back to you as soon as possible!
      </p>

      {/* Contact Section */}
      <div className="mt-8 flex flex-wrap justify-center items-center gap-6 w-full max-w-6xl">
        {/* Left Illustration */}
        <div className="hidden md:block w-1/4 animate-fadeInLeft">
          <img src={leftIllustration} alt="Left Illustration" className="w-full" />
        </div>

        {/* Contact Form */}
        <div className="p-8  shadow-lg rounded-xl max-w-lg w-full animate-fadeIn">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-purple-500 transition"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-purple-500 transition"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="flex items-center border border-gray-300 p-3 rounded-lg w-full">
              <span className="mr-2">📞</span>
              <input
                type="tel"
                placeholder="+91 000 0000000"
                className="w-full outline-none"
              />
            </div>
            <select className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-purple-500 transition">
              <option>Interested in</option>
              <option>Hoteliers</option>
              <option>Travelers</option>
              <option>Travel agency</option>
              <option>Taxi Service</option>
              <option>Others</option>
            </select>
          </div>
          <textarea
            placeholder="How can we help?"
            className="border border-gray-300 p-3 rounded-lg w-full mt-4 h-24 focus:ring-2 focus:ring-purple-500 transition"
          ></textarea>
          <button className="mt-4 px-6 py-3 text-white bg-purple-600 rounded-full shadow-lg hover:bg-purple-700 hover:shadow-xl transition duration-300">
            Send Message
          </button>
        </div>

        {/* Right Illustration */}
        <div className="hidden md:block w-1/4 animate-fadeInRight">
          <img src={rightIllustration} alt="Right Illustration" className="w-full" />
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
        .animate-fadeInLeft {
          animation: fadeInLeft 0.8s ease-out forwards;
        }
        .animate-fadeInRight {
          animation: fadeInRight 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Contact;
