import { Canvas } from "@react-three/fiber";
import { Environment, ScrollControls } from "@react-three/drei";
import MacContainer from "../MacContainer/MacContainer.jsx";
import "../Hero/hero.css"
const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-yellow-100 via-purple-100 to-purple-200 text-center p-6">
      <div className="flex items-center space-x-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
          Together Karein Explore, <br />
          Mil Kar Badhe More{" "}
          <span className="text-purple-600 bg-yellow-100 px-2">Travafai</span>
        </h1>
      </div>
      <p className="mt-4 text-lg text-gray-700 max-w-2xl">
        A one-stop platform connecting travelers, hoteliers, travel agencies, and taxi owners.
        This innovative solution streamlines the travel experience, making it easier for users
        to plan, book, and manage their trips all in one place.
      </p>
      <div className="mt-8 flex gap-4">
        <button className="px-6 py-3 text-white bg-purple-600 rounded-full hover:bg-purple-700 transition">
          Get Started
        </button>
        <button className="px-6 py-3 text-purple-600 bg-white border border-purple-600 rounded-full hover:bg-purple-100 transition">
          Learn More
        </button>
      </div>
      
      {/* 3D Model Section */}
      <section className="w-full h-[500px] mt-10 scroll-container">
      <Canvas camera={{ fov: 10, position: [0, -14, 220] }}>
        <Environment
          files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/studio_small_09_2k.hdr"
        />
        <ScrollControls className="scroll-controls">
          <MacContainer />
        </ScrollControls>
      </Canvas>
    </section>
    </section>
  );
};

export default HeroSection;