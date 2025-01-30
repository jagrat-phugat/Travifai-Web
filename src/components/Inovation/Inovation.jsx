

const Innovation = () => {
  return (
    <div className="bg-gradient-to-r from-yellow-100 via-purple-100 to-purple-200 min-h-screen flex flex-col items-center px-6 py-12">
      {/* Section Wrapper */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-6xl w-full">
        {/* Left: Heading */}
        <div className="text-center md:text-left flex-1">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
            Efficiency Meets{' '}
            <span className="text-purple-600 bg-yellow-100 px-0 py-0.5 rounded-md text-[2.9rem]">
              Innovation
            </span>
          </h1>
        </div>

        {/* Right: Paragraph */}
        <div className="flex-1">
          <p className="text-gray-600 text-lg md:text-xl">
            Whether you are a small business owner, a finance professional, or
            an individual seeking better control over your finances, FundForge
            is your comprehensive solution.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12 max-w-6xl w-full">
        {/* Feature: Payment Options */}
        <div className="flex flex-col items-center text-center w-full md:w-auto">
          <div className="bg-purple-100 text-purple-600 rounded-full p-4 mb-4">
            {/* Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 9V7a4 4 0 00-8 0v2M5 12h14l-1 9H6l-1-9z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-black mb-2">
            Payment Options
          </h3>
          <p className="text-gray-600">
            Convenient and hassle-free, our easy payment options streamline your
            purchasing experience. The easy way to manage payments.
          </p>
        </div>

        {/* Vertical Separator */}
        <div className="hidden md:block h-16 w-px bg-gray-300"></div>

        {/* Feature: Strong Security */}
        <div className="flex flex-col items-center text-center w-full md:w-auto">
          <div className="bg-purple-100 text-purple-600 rounded-full p-4 mb-4">
            {/* Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 11c.828 0 1.5-.672 1.5-1.5S12.828 8 12 8s-1.5.672-1.5 1.5S11.172 11 12 11z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 3C7.589 3 4 5.98 4 10c0 3.8 2.8 7 6 7.938V21h4v-3.062C17.2 17 20 13.8 20 10c0-4.02-3.589-7-8-7z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-black mb-2">
            Strong Security
          </h3>
          <p className="text-gray-600">
            With cutting-edge encryption technologies and robust protocols, we
            safeguard your data against cyber threats.
          </p>
        </div>

        {/* Vertical Separator */}
        <div className="hidden md:block h-16 w-px bg-gray-300"></div>

        {/* Feature: 24/7 Support */}
        <div className="flex flex-col items-center text-center w-full md:w-auto">
          <div className="bg-purple-100 text-purple-600 rounded-full p-4 mb-4">
            {/* Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9.75 21h4.5a1.75 1.75 0 001.75-1.75v-1.5A1.75 1.75 0 0014.25 16h-4.5A1.75 1.75 0 008 17.75v1.5c0 .966.784 1.75 1.75 1.75zM5 7h14a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2V9a2 2 0 012-2z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-black mb-2">
            24/7 Support
          </h3>
          <p className="text-gray-600">
            Our dedicated team is here around the clock to provide you with
            immediate assistance and solutions. We are providing the best.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12">
        <button className="px-8 py-4 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 transition duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Innovation;
