import myImage from "../../assets/frame.png";

const descriptions = [
  {
    id: 1,
    text: "I got connected to a provider, from the same community as me. So they understand the issue that I may have.",
    bgColor: "bg-yellow-200",
  },
  {
    id: 2,
    text: "I got connected to a provider, from the same community as me. So they understand the issue that I may have.",
    bgColor: "bg-green-200",
  },
  {
    id: 3,
    text: "I got connected to a provider, from the same community as me. So they understand the issue that I may have.",
    bgColor: "bg-blue-200",
  },
  {
    id: 4,
    text: "I got connected to a provider, from the same community as me. So they understand the issue that I may have.",
    bgColor: "bg-red-200",
  },
  {
    id: 5,
    text: "I got connected to a provider, from the same community as me. So they understand the issue that I may have.",
    bgColor: "bg-purple-200",
  },
  {
    id: 6,
    text: "I got connected to a provider, from the same community as me. So they understand the issue that I may have.",
    bgColor: "bg-indigo-200",
  },
];

const Description = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-yellow-100 via-purple-100 to-purple-200 text-center p-6">
      {/* Header Section */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-4">
        Transform the Way You <br />
        Manage Your{" "}
        <span className="text-purple-600 bg-yellow-100 px-2 py-1 rounded-md text-[2.9rem]">
          Finances
        </span>
      </h1>
      <p className="mt-2 text-lg text-gray-700 max-w-2xl">
        Whether you are a small business owner, a finance professional, or an
        individual seeking better control over your finances, FundForge is your
        comprehensive solution.
      </p>
      <div className="mt-8 flex gap-4">
        <button className="px-6 py-3 text-white bg-purple-600 rounded-full shadow-lg hover:bg-purple-700 transition duration-300">
          Download Now
        </button>
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
            className="w-64 md:w-76 lg:w-93 h-auto rounded-lg shadow-lg"
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
