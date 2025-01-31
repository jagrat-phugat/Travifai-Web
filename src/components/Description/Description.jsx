import myImage from '../../assets/frame.png';



const Description = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-yellow-100 via-purple-100 to-purple-200 text-center p-6">
      {/* Header Section */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-4">
        Transform the Way You <br />
        Manage Your <span className="text-purple-600 bg-yellow-100 px-0 py-0.5 rounded-md text-[2.9rem]">Finances</span>
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

      {/* Image Section */}
      <div className="flex justify-center items-center mt-10">
        <img src={myImage} alt="Description" className="w-64 h-auto rounded-lg shadow-lg" />
      </div>
    </div> // Closing the main div
  );
}

export default Description;