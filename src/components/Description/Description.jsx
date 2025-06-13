import myImage from "../../assets/frame.png";

const descriptions = [
  {
    id: 1,
    text: "Commission-Free Online Booking – Zero commission fees for hoteliers, travelers, and travel agents.",
    bgColor: "bg-yellow-200",
  },
  {
    id: 2,
    text: "H & T Connect – Direct communication between hoteliers and travel agents for seamless deal management.",
    bgColor: "bg-green-200",
  },
  {
    id: 3,
    text: "Unified Booking & Inventory Manager – Manage rates, inventory, and bookings across multiple platforms from one interface.",
    bgColor: "bg-blue-200",
  },
  {
    id: 4,
    text: "Daily Insights & Reports – Real-time analytics on bookings, revenue, expenses, and business performance.",
    bgColor: "bg-red-200",
  },
  {
    id: 5,
    text: "Marketing & Reputation Management – Automated digital marketing, proposal creation, and review analysis for brand growth.",
    bgColor: "bg-purple-200",
  },
  {
    id: 6,
    text: "Cloud-Based Business Solutions – Integrated PMS, POS, booking engine, manpower management, and customer support.",
    bgColor: "bg-indigo-200",
  },
];

const Description = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-yellow-100 via-purple-100 to-purple-200 text-center p-6">
      {/* Header Section */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-4">
        Revolutionizing the Travel & <br />
        Hospitality Industry{" "}
        <span className="text-purple-600 bg-yellow-100 px-2 py-1 rounded-md text-[2.9rem]">
          TravifAi
        </span>
      </h1>
      <p className="mt-2 text-lg text-gray-700 max-w-2xl">
        A Commission-Free, Cloud-Based Solution Empowering Hoteliers, Travel
        Agencies, and Travelers with Seamless Bookings and Real-Time Business
        Insights
      </p>
      <div className="mt-8 flex gap-4">
        <a href="/" className="mt-8">
          <a
            href="https://drive.google.com/drive/folders/1liA5eO53qs80svbI7eHA0UwZ6LKMEXZ1"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition transform hover:scale-105 inline-block"
          >
            Download App
          </a>
        </a>
      </div>

      {/* Main Content Section */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 items-center max-w-6xl w-full px-6">
        {/* Left Cards */}
        <div className="flex flex-col gap-4">
          {descriptions.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className={`p-4 ${item.bgColor} rounded-lg shadow-md text-gray-900`}
            >
              {item.text}
            </div>
          ))}
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src={myImage}
            alt="Description"
            className="w-64 md:w-76 lg:w-90 h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Right Cards */}
        <div className="flex flex-col gap-4">
          {descriptions.slice(3, 6).map((item) => (
            <div
              key={item.id}
              className={`p-4 ${item.bgColor} rounded-lg shadow-md text-gray-900`}
            >
              {item.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Description;
