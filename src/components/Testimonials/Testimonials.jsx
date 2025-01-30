import React from "react";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    image: "https://img.freepik.com/free-photo/man-proud-himself_1368-97.jpg?ga=GA1.1.1178751629.1738257872&semt=ais_hybrid",
    text: "I got connected to a provider, from the same community as me. So they understand the issue that I may have.",
    bgColor: "bg-yellow-200",
  },
  {
    id: 2,
    name: "Jane Smith",
    image: "https://img.freepik.com/free-photo/portrait-beautiful-girl-white-background_176420-55770.jpg?ga=GA1.1.1178751629.1738257872&semt=ais_hybrid",
    text: "I got connected to a provider, from the same community as me. So they understand the issue that I may have.",
    bgColor: "bg-green-200",
  },
  {
    id: 3,
    name: "Mike Johnson",
    image: "https://img.freepik.com/premium-photo/young-indian-man-wear-jacket-giving-expression-white-background_54391-6178.jpg?ga=GA1.1.1178751629.1738257872&semt=ais_hybrid",
    text: "I got connected to a provider, from the same community as me. So they understand the issue that I may have.",
    bgColor: "bg-blue-200",
  },
  {
    id: 4,
    name: "Sarah Lee",
    image: "https://img.freepik.com/free-photo/vertical-shot-happy-dark-skinned-female-with-curly-hair_273609-15519.jpg?ga=GA1.1.1178751629.1738257872&semt=ais_hybrid",
    text: "I got connected to a provider, from the same community as me. So they understand the issue that I may have.",
    bgColor: "bg-red-200",
  },
  {
    id: 5,
    name: "Chris Brown",
    image: "https://img.freepik.com/free-photo/portrait-beautiful-young-woman-standing-grey-wall_231208-10760.jpg?ga=GA1.1.1178751629.1738257872&semt=ais_hybrid",
    text: "I got connected to a provider, from the same community as me. So they understand the issue that I may have.",
    bgColor: "bg-purple-200",
  },
];

const Testimonials = () => {
  return (
    <div className="p-8 text-center">
        <div className="flex justify-center mb-2">
  {[...Array(5)].map((_, index) => (
    <span key={index} className="text-yellow-500 text-4xl">★</span>
  ))}
</div>

      <h2 className="text-3xl font-bold text-blue-900">More Than 60,000 5-Star Reviews</h2>
      <p className="text-red-500 text-xl font-semibold mt-2">Reviews</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-8">
        {testimonials.map((testimonial, index) => (
          <div key={testimonial.id} className="flex flex-col gap-4">
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;