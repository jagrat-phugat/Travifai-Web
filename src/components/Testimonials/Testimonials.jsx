import React from 'react';

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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-yellow-100 via-purple-100 to-purple-200 text-center p-6">
      {/* Header Section */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-4">
        Discover the World Through <br />
        Our Travelers'{" "}
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
