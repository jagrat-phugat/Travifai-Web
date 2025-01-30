const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-yellow-100 via-purple-100 to-purple-200 text-center p-6">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
        Transform the Way You <br />
        Manage Your  <br></br> <br></br><span className="text-purple-600 bg-yellow-100 px-2">Finances</span>
      </h1>
      <p className="mt-4 text-lg text-gray-700 max-w-2xl">
        Whether you are a small business owner, a finance professional, or an
        individual seeking better control over your finances, FundForge is your
        comprehensive solution.
      </p>
      <div className="mt-8 flex gap-4">
        <button className="px-6 py-3 text-white bg-purple-600 rounded-full hover:bg-purple-700 transition">
          Get Started
        </button>
        <button className="px-6 py-3 text-purple-600 bg-white border border-purple-600 rounded-full hover:bg-purple-100 transition">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default HeroSection;