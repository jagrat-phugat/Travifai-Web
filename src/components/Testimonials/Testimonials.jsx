import { useState } from "react";
import { motion } from "framer-motion";

const testimonials = [
  { id: 1, name: "Bhanu Prakash Pandey", image: "https://img.freepik.com/free-photo/man-proud-himself_1368-97.jpg", text: "TravifAi transformed our hotel bookings with zero commission fees—game changer!", bgColor: "bg-yellow-200" },
  { id: 2, name: "Tanisha", image: "https://img.freepik.com/free-photo/portrait-beautiful-girl-white-background_176420-55770.jpg", text: "Finally, a transparent platform that connects hoteliers and travel agencies in real time!", bgColor: "bg-green-200" },
  { id: 3, name: "Yogata Negi", image: "https://img.freepik.com/premium-photo/young-indian-man-wear-jacket-giving-expression-white-background_54391-6178.jpg", text: "Seamless inventory and rate management across multiple platforms—huge time saver!", bgColor: "bg-blue-200" },
  { id: 4, name: "Sarah Lee", image: "https://img.freepik.com/free-photo/vertical-shot-happy-dark-skinned-female-with-curly-hair_273609-15519.jpg", text: "Love the direct hotel-agent communication—no middlemen, just great deals!", bgColor: "bg-red-200" },
  { id: 5, name: "Chris Brown", image: "https://img.freepik.com/free-photo/portrait-beautiful-young-woman-standing-grey-wall_231208-10760.jpg", text: "TravifAi's insights and analytics helped us boost revenue and optimize expenses!", bgColor: "bg-purple-200" },
  { id: 6, name: "John Doe", image: "https://img.freepik.com/free-photo/man-proud-himself_1368-97.jpg", text: "The marketing automation tools have been a game-changer for our travel agency ", bgColor: "bg-yellow-200" },
  { id: 7, name: "Jane Smith", image: "https://img.freepik.com/free-photo/portrait-beautiful-girl-white-background_176420-55770.jpg", text: "As a traveler, I got the best hotel rates without hidden charges—highly recommend! ", bgColor: "bg-green-200" },
  { id: 8, name: "Mike Johnson", image: "https://img.freepik.com/premium-photo/young-indian-man-wear-jacket-giving-expression-white-background_54391-6178.jpg", text: "A truly all-in-one platform—PMS, POS, booking engine, and business tracking!", bgColor: "bg-blue-200" },
  { id: 9, name: "Sarah Lee", image: "https://img.freepik.com/free-photo/vertical-shot-happy-dark-skinned-female-with-curly-hair_273609-15519.jpg", text: "Super easy to use, and their 24/7 customer support is fantastic", bgColor: "bg-red-200" },
  { id: 10, name: "Chris Brown", image: "https://img.freepik.com/free-photo/portrait-beautiful-young-woman-standing-grey-wall_231208-10760.jpg", text: "TravifAi is redefining the travel industry with efficiency, transparency, and savings!", bgColor: "bg-purple-200" }
];

const Testimonials = () => {
  const [visibleCount, setVisibleCount] = useState(5);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 5);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-yellow-100 via-purple-100 to-purple-200 text-center p-6">
      {/* Header Section */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-4">
        Discover the World Through <br />
        Our Travelers{" "}
        <span className="text-purple-600 bg-yellow-100 px-0 py-0.5 rounded-md text-[2.9rem]">
          Eyes!
        </span>
      </h1>
      <p className="mt-2 text-lg text-gray-700 max-w-2xl">
        Valuable comments and experiences shared by our amazing users.
        Join the journey and see what our travelers have to say!
      </p>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-8">
        {testimonials.slice(0, visibleCount).map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            className="flex flex-col gap-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {index % 2 === 0 ? (
              <>
                <div className="p-4 rounded-xl shadow-md bg-white">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-80 object-cover rounded-xl"
                  />
                </div>
                <div className={`p-4 rounded-xl shadow-md ${testimonial.bgColor}`}>
                  <p className="text-gray-700">{testimonial.text}</p>
                </div>
              </>
            ) : (
              <>
                <div className={`p-4 rounded-xl shadow-md ${testimonial.bgColor}`}>
                  <p className="text-gray-700">{testimonial.text}</p>
                </div>
                <div className="p-4 rounded-xl shadow-md bg-white">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-80 object-cover rounded-xl"
                  />
                </div>
              </>
            )}
          </motion.div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleCount < testimonials.length && (
        <motion.button
          onClick={handleLoadMore}
          className="px-6 py-3 mt-8 text-white bg-purple-600 rounded-full shadow-lg hover:bg-purple-700 transition duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Load More
        </motion.button>
      )}
    </div>
  );
};

export default Testimonials;
