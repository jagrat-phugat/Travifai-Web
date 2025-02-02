import { FaUser, FaShieldAlt, FaRocket } from "react-icons/fa";

export default function ResultsDrivenAgency() {
  return (
    <div className="bg-gradient-to-r from-yellow-100 via-purple-100 to-purple-200 p-10 flex flex-col items-center -mt-32">
      {/* First Section: Text starting from the left */}
      <div className="md:w-1/2 flex justify-start mt-6 md:mt-0 relative text-left top-16 -left-24">
        <div className="bg-black text-white px-6 py-4 rounded-full text-lg font-semibold absolute transform rotate-[-10deg] left-[-120px] top-0">
          LET'S SCALE YOUR BRAND ONLINE.
        </div>
        <div className="bg-black text-white px-6 py-4 rounded-full text-lg font-semibold absolute transform rotate-[4deg] left-[-120px] top-20">
          WE LET OUR RESULTS DO THE TALKING.
        </div>
      </div>

      {/* Second Section: Header text above the paragraph */}
      <div className="md:w-1/2 text-left ml-auto mt-6">
        {/* First part: Header texts */}
        <div className="md:w-1/2 flex flex-col md:flex-row items-center w-full mt-10">
          <div className="text-left">
            <h1 className="text-6xl font-bold text-gray-500 whitespace-nowrap">
              We're a results-driven agency;
            </h1>
            <h2 className="text-5xl font-semibold text-gray-800 mt-2 whitespace-nowrap">
              we never tie you into a long-term contract.
            </h2>
          </div>
        </div>

        {/* Paragraph aligned from the middle of the page */}
        <p className="text-gray-600 mt-4 max-w-2xl">
          We’re so confident in the results we can deliver, we know you’ll stay
          for the long run. Whether you’ve tried Facebook advertising before and
          had no luck or you’re struggling to know how to scale your account,
          you’ve come to the right place.
        </p>
      </div>

      {/* Third Section: Three cards */}
      <div className="flex flex-row justify-between gap-8 mt-10 w-full ">
        <div className="bg-white p-6 rounded-xl shadow-lg flex-1 transition-transform duration-300 transform hover:scale-105">
          <FaUser className="text-purple-500 text-3xl mb-4" />
          <h3 className="text-2xl font-semibold">Client-Centric Approach</h3>
          <p className="text-gray-600 mt-2 text-xl">
            We prioritize the unique needs and goals of each client, tailoring
            our strategies to ensure maximum impact and ROI. Your success is our
            success.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg flex-1 transition-transform duration-300 transform hover:scale-105">
          <FaShieldAlt className="text-blue-500 text-3xl mb-4" />
          <h3 className="text-2xl font-semibold">Transparency and Integrity</h3>
          <p className="text-gray-600 mt-2 text-xl">
            We maintain open and honest communication with our clients,
            providing clear insights and reporting to build trust and foster
            long-term partnerships.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg flex-1 transition-transform duration-300 transform hover:scale-105">
          <FaRocket className="text-indigo-500 text-3xl mb-4" />
          <h3 className="text-2xl font-semibold">Empowering Businesses</h3>
          <p className="text-gray-600 mt-2 text-xl">
            Through education, support, and strategic guidance, we empower our
            clients to take their Ecommerce operations to new heights.
          </p>
        </div>
      </div>
    </div>
  );
}
