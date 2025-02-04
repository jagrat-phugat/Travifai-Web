import { useGLTF, useScroll, useTexture } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const MacContainer = () => {
    const { viewport } = useThree();
    const scaleFactor = Math.min(viewport.width / 4, 1.4); // Adjusting scale based on screen size

    let model = useGLTF('/model/mac.glb');
    let tex = useTexture('/model/red.jpg');

    let meshes = {};
    model.scene.traverse((e) => {
        meshes[e.name] = e;
    });

    if (meshes.screen) {
        meshes.screen.rotation.x = THREE.MathUtils.degToRad(180);
    }

    if (meshes.matte) {
        meshes.matte.material.map = tex;
        meshes.matte.material.emissiveIntensity = 0;
        meshes.matte.material.metalness = 0;
        meshes.matte.material.roughness = 1;
    }

    let data = useScroll();

    useFrame(() => {
        if (meshes.screen) {
            meshes.screen.rotation.x = THREE.MathUtils.degToRad(180 - data.offset * 90);
        }
    });

    return (
        <group position={[0, -13.9, 40]} scale={[scaleFactor, scaleFactor, scaleFactor]}>
            <primitive object={model.scene} />
        </group>
    );
};

export default MacContainer;
