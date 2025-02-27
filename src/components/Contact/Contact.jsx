import { useState } from "react";
import leftIllustration from "../../assets/left.png";
import rightIllustration from "../../assets/right.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });

  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const form = new FormData();
    form.append("access_key", "afc2c5fe-074b-485d-977a-780069d00af6"); // Web3Forms Public Access Key
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("phone", formData.phone);
    form.append("interest", formData.interest);
    form.append("message", formData.message);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: form,
    });

    const data = await response.json();
    setLoading(false);

    if (data.success) {
      setStatus({ type: "success", message: "Message sent successfully!" });
      setFormData({ name: "", email: "", phone: "", interest: "", message: "" });
    } else {
      setStatus({ type: "error", message: "Failed to send message. Try again!" });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-yellow-100 via-purple-100 to-purple-200 text-center p-6">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-6">
        Together Karein Explore, Milkar <br />
        Badhe More.{" "}
        <span className="text-purple-600 bg-yellow-100 px-2 py-1 rounded-md text-[2.9rem]">
          Contact Travifai
        </span>
      </h1>
      <p className="mt-2 text-lg text-gray-700 max-w-2xl">
        We’d love to hear from you! Whether you have questions, feedback, or just
        want to stay updated on our exciting journey, feel free to reach out.
      </p>

      <div className="mt-8 flex flex-wrap justify-center items-center gap-6 w-full max-w-6xl">
        <div className="hidden md:block w-1/4 animate-fadeInLeft">
          <img src={leftIllustration} alt="Left Illustration" className="w-full" />
        </div>

        <form onSubmit={handleSubmit} className="p-8 bg-white shadow-lg rounded-xl max-w-lg w-full animate-fadeIn">
          <input type="hidden" name="access_key" value="afc2c5fe-074b-485d-977a-780069d00af6" />

          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-purple-500 transition"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-purple-500 transition"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="flex items-center border border-gray-300 p-3 rounded-lg w-full">
              <span className="mr-2">📞</span>
              <input
                type="tel"
                name="phone"
                placeholder="+91 000 0000000"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full outline-none"
              />
            </div>
            <select
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              required
              className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-purple-500 transition"
            >
              <option value="">Interested in</option>
              <option>Hoteliers</option>
              <option>Travelers</option>
              <option>Travel agency</option>
              <option>Taxi Service</option>
              <option>Others</option>
            </select>
          </div>
          <textarea
            name="message"
            placeholder="How can we help?"
            value={formData.message}
            onChange={handleChange}
            required
            className="border border-gray-300 p-3 rounded-lg w-full mt-4 h-24 focus:ring-2 focus:ring-purple-500 transition"
          ></textarea>

          {status && (
            <div
              className={`mt-4 p-3 rounded-lg text-white ${
                status.type === "success" ? "bg-green-500" : "bg-red-500"
              }`}
            >
              {status.message}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="mt-4 px-6 py-3 text-white bg-purple-600 rounded-full shadow-lg hover:bg-purple-700 hover:shadow-xl transition duration-300 disabled:bg-gray-400"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        <div className="hidden md:block w-1/4 animate-fadeInRight">
          <img src={rightIllustration} alt="Right Illustration" className="w-full" />
        </div>
      </div>

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
