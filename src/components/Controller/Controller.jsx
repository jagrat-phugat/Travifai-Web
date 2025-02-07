import UXUIImage from "/src/assets/UX-UI-services.png";

const Controller = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-yellow-100 via-purple-100 to-purple-200 px-4 sm:px-6 lg:px-12 py-12">
      
      {/* Header & Button Container */}
      <div className="w-full max-w-4xl flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
          Our Expertise,<br /> <span className="text-purple-600">Your Advantage</span>
        </h2>

        {/* View All Button at Right End */}
        <button className="mt-4 sm:mt-0 px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition">
          View All
        </button>
      </div>

      {/* Sections */}
      <div className="mt-8 w-full max-w-4xl space-y-8">
        
        {/* Graphic Design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 items-start gap-6 border-b py-6">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800">Graphic Design</h3>
          <p className="text-gray-600 text-left">
            From eye-catching visuals to brand-defining graphics, we create designs that communicate your story and captivate your audience.
          </p>
        </div>

        {/* UI/UX Design with Image */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center gap-6 border-b py-6">
          <h3 className="text-lg sm:text-xl font-semibold text-yellow-500 lg:col-span-1 text-center sm:text-left">
            UI/UX Design
          </h3>

          {/* Image in the middle */}
          <div className="flex justify-center">
            <img
              src={UXUIImage}
              alt="UI/UX Design"
              className="max-w-full h-auto object-cover "
            />
          </div>

          {/* Description aligned to the right */}
          <p className="text-gray-600 text-left lg:col-span-1">
            We design user-centric interfaces and experiences that not only look stunning but also ensure seamless navigation and engagement for your audience.
          </p>
        </div>

        {/* Website Development */}
        <div className="grid grid-cols-1 sm:grid-cols-2 items-start gap-6 py-6">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800">Website Development</h3>
          <p className="text-gray-600 text-left">
            Our websites are built to perform—responsive, fast, and optimized for all devices, ensuring your online presence stands out.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Controller;
