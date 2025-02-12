import leftIllustration from "../../assets/5397869-removebg-preview.png";
import rightIllustration from "../../assets/2391280-removebg-preview.png";
import { useState } from "react";

const ReviewForm = () => {
  const [review, setReview] = useState({
    name: "",
    email: "",
    rating: "",
    message: "",
    access_key: "YOUR_WEB3FORMS_ACCESS_KEY", // Replace with your Web3Forms key
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setReview({ ...review, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(review),
      });

      const result = await response.json();

      if (result.success) {
        setSuccessMessage("Thank you for your feedback! 🎉");
        setReview({ name: "", email: "", rating: "", message: "", access_key: "YOUR_WEB3FORMS_ACCESS_KEY" });
      } else {
        setSuccessMessage("Something went wrong. Please try again!");
      }
    } catch (error) {
      console.error("Error submitting the review:", error);
      setSuccessMessage("Failed to submit review. Try again later!");
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-yellow-100 via-purple-100 to-purple-200 text-center p-6">
      {/* Header Section */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-6">
        Share Your Experience with{" "}
        <span className="text-purple-600 bg-yellow-100 px-2 py-1 rounded-md text-[2.9rem]">
          Travifai
        </span>
      </h1>
      <p className="mt-2 text-lg text-gray-700 max-w-2xl">
        Your feedback helps us improve! Let us know about your experience using
        our services. We appreciate your honest review!
      </p>

      {/* Review Section */}
      <div className="mt-8 flex flex-wrap justify-center items-center gap-6 w-full max-w-6xl">
        {/* Left Illustration */}
        <div className="hidden md:block w-1/4 animate-fadeInLeft">
          <img src={leftIllustration} alt="Left Illustration" className="w-full" />
        </div>

        {/* Review Form */}
        <form
          className="p-8 shadow-lg rounded-xl max-w-lg w-full animate-fadeIn bg-white"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY" />

          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              value={review.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-purple-500 transition"
              required
            />
            <input
              type="email"
              name="email"
              value={review.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-purple-500 transition"
              required
            />
          </div>

          {/* Rating Selection */}
          <div className="mt-4">
            <label className="block text-gray-700 text-left font-medium mb-2">
              Rate Your Experience:
            </label>
            <select
              name="rating"
              value={review.rating}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-purple-500 transition"
              required
            >
              <option value="">Select Rating</option>
              <option value="5">⭐⭐⭐⭐⭐ - Excellent</option>
              <option value="4">⭐⭐⭐⭐ - Very Good</option>
              <option value="3">⭐⭐⭐ - Good</option>
              <option value="2">⭐⭐ - Fair</option>
              <option value="1">⭐ - Poor</option>
            </select>
          </div>

          {/* Review Message */}
          <textarea
            name="message"
            value={review.message}
            onChange={handleChange}
            placeholder="Share your experience..."
            className="border border-gray-300 p-3 rounded-lg w-full mt-4 h-24 focus:ring-2 focus:ring-purple-500 transition"
            required
          ></textarea>

          <button
            type="submit"
            className="mt-4 px-6 py-3 text-white bg-purple-600 rounded-full shadow-lg hover:bg-purple-700 hover:shadow-xl transition duration-300"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit Review"}
          </button>

          {/* Success Message */}
          {successMessage && (
            <p className="mt-4 text-green-600 font-semibold">{successMessage}</p>
          )}
        </form>

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

export default ReviewForm;
