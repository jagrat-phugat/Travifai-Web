
import { Canvas } from '@react-three/fiber';
import { Environment, ScrollControls } from '@react-three/drei';
import MacContainer from '../MacContainer/MacContainer.jsx'; // Make sure to import your MacContainer component


const MacbookProComponent = () => {
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-yellow-100 via-purple-100 to-purple-200 text-center p-6'>
       <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-4">
      Transform the Way You <br />
      Manage Your <span className="text-purple-600 bg-yellow-100 px-0 py-0.5 rounded-md text-[2.9rem]">Finances</span>
    </h1>
    <p className="mt-2 text-lg text-gray-700 max-w-2xl">
      Whether you are a small business owner, a finance professional, or an
      individual seeking better control over your finances, FundForge is your
      comprehensive solution.
    </p>
    <br></br>

      {/* Canvas where the laptop is working */}
      <Canvas camera={{ fov: 10, position: [0, -14, 220] }}>
        <Environment files={[
          "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/studio_small_09_2k.hdr",
        ]} />
        
         <ScrollControls pages={3} damping={0.1} html={false}>
            <MacContainer />
          </ScrollControls>
      </Canvas>
    </div>
  );
};

export default MacbookProComponent;

