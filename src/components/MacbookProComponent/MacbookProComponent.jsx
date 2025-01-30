
import { Canvas } from '@react-three/fiber';
import { Environment, ScrollControls } from '@react-three/drei';
import MacContainer from '../MacContainer/MacContainer.jsx'; // Make sure to import your MacContainer component


const MacbookProComponent = () => {
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-yellow-100 via-purple-100 to-purple-200 text-center p-6'>
      

      {/* Canvas where the laptop is working */}
      <Canvas camera={{ fov: 12, position: [0, -14, 220] }}>
        <Environment files={[
          "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/studio_small_09_2k.hdr",
        ]} />
        
        <ScrollControls>
          <MacContainer />  
        </ScrollControls>
      </Canvas>
    </div>
  );
};

export default MacbookProComponent;