import UXUIImage from "/src/assets/UX-UI-services.png";

const Controller = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-yellow-100 via-purple-100 to-purple-200 px-4 sm:px-6 lg:px-12 py-12">
      
      {/* Header & Button Container */}
      <div className="w-full max-w-4xl flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-4">
      Empowering Hoteliers, Travel Agencies, and Travelers {" "}
        <span className="text-purple-600 bg-yellow-100 px-2 py-1 rounded-md text-[2.9rem]">
        TravifAi
        </span>
      </h1>

        {/* View All Button at Right End */}
        <a href="/about"> 
        <button className="mt-4 sm:mt-0 px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition">
          Blog
        </button>
        </a>
      </div>

      {/* Sections */}
      <div className="mt-8 w-full max-w-4xl space-y-8">
        
        {/* Graphic Design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 items-start gap-6 border-b py-6">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800">TravifAi For Hoteliers</h3>
          <p className="text-gray-600 text-left">
          TravifAi eliminates commission fees, allowing hoteliers to maximize revenue while managing bookings, rates, and inventory seamlessly. With cloud-based PMS, POS, and booking engine integration, hoteliers can track real-time business performance, enhance visibility, and automate marketing for better guest engagement.
          </p>
        </div>

        {/* UI/UX Design with Image */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center gap-6 border-b py-6">
          <h3 className="text-lg sm:text-xl font-semibold text-yellow-500 lg:col-span-1 text-center sm:text-left">
          TravifAi For Travel Agencies
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
          Travel agencies gain instant access to hotel inventories, real-time availability, and transparent pricing without intermediaries. The platform simplifies deal negotiations, automates proposal generation, and provides marketing tools to attract travelers while ensuring commission-free transactions.
          </p>
        </div>

        {/* Website Development */}
        <div className="grid grid-cols-1 sm:grid-cols-2 items-start gap-6 py-6">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800">TravifAi For Travelers</h3>
          <p className="text-gray-600 text-left">
          Travelers enjoy highly competitive room rates with a commission-free, transparent booking process. The platform offers personalized recommendations, direct communication with hoteliers, secure payments, and 24/7 customer support for a seamless travel experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Controller;