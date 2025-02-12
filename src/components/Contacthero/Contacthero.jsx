import { FaComments, FaEnvelope, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const ContactHero = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-yellow-100 via-purple-100 to-purple-200 text-center px-6 py-12"
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
    >
      {/* Header Section */}
      <motion.h1
        className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-black leading-tight mb-6"
        variants={fadeInUp}
      >
        Revolutionizing the Travel & <br />
        Hospitality Industry{" "}
        <span className="text-purple-600 bg-yellow-100 px-2 py-1 rounded-md text-[2.9rem]">
          TravifAi
        </span>
      </motion.h1>

      <motion.p className="text-lg text-gray-700 max-w-2xl" variants={fadeInUp}>
        A Commission-Free, Cloud-Based Solution Empowering Hoteliers, Travel
        Agencies, and Travelers with Seamless Bookings and Real-Time Business
        Insights
      </motion.p>

      {/* Download Button */}
      <motion.div className="mt-8 flex gap-4" variants={fadeInUp}>
        <a href="YOUR_LINK_HERE">
          <button className="px-6 py-3 text-white bg-purple-600 rounded-full shadow-lg hover:bg-purple-700 hover:shadow-xl transition duration-300">
            Download Now
          </button>
        </a>
      </motion.div>

      {/* Contact Options */}
      <motion.div
        className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl"
        variants={fadeInUp}
      >
        {/* Chat Now */}
        <motion.a
          href="https://api.whatsapp.com/send?phone=+918218229729"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-lg transition cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-14 h-14 mx-auto flex items-center justify-center bg-blue-100 rounded-full">
            <FaComments className="text-blue-600 text-2xl" />
          </div>
          <h3 className="mt-4 text-lg font-semibold text-gray-800">Chat Now</h3>
          <p className="text-gray-600">Chat via WhatsApp</p>
          <button className="mt-4 px-5 py-2 bg-orange-500 text-white rounded-full text-sm font-semibold hover:bg-orange-600 transition">
            Start chat →
          </button>
        </motion.a>

        {/* Email Us */}
        <motion.a
          href="mailto:travifai2024@gmail.com"
          className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-lg transition cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-14 h-14 mx-auto flex items-center justify-center bg-purple-100 rounded-full">
            <FaEnvelope className="text-purple-600 text-2xl" />
          </div>
          <h3 className="mt-4 text-lg font-semibold text-gray-800">Email Us</h3>
          <p className="text-gray-600">Click to send an email</p>
          <p className="mt-2 text-gray-900 font-semibold">travifai2024@gmail.com</p>
        </motion.a>

        {/* Call or Text Us */}
        <motion.a
          href="tel:+918218229729"
          className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-lg transition cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-14 h-14 mx-auto flex items-center justify-center bg-red-100 rounded-full">
            <FaPhone className="text-red-600 text-2xl" />
          </div>
          <h3 className="mt-4 text-lg font-semibold text-gray-800">
            Call or Text Us
          </h3>
          <p className="text-gray-600">Click to call</p>
          <p className="mt-2 text-gray-900 font-semibold">+91 82182 29729</p>
        </motion.a>
      </motion.div>

      <motion.p className="mt-10 text-gray-600 text-sm" variants={fadeInUp}>
        We'll get back to you as soon as possible. Our team is available
        8am-6pm on weekdays.
      </motion.p>
    </motion.div>
  );
};

export default ContactHero;
