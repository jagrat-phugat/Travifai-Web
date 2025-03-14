import { useGLTF, useScroll, useTexture } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useEffect, useMemo, useState } from "react";

const MacContainer = () => {
  const { viewport, size } = useThree();
  const data = useScroll();

  // Dynamic scaling based on screen width
  const scaleFactor = useMemo(() => {
    if (size.width < 640) return 0.8; // Mobile
    if (size.width < 1024) return 1.1; // Tablet
    return Math.min(viewport.width / 4, 1.4); // Default desktop scale
  }, [size.width, viewport.width]);

  // Dynamic positioning for different screen sizes
  const positionY = useMemo(() => {
    if (size.width < 640) return -8; // Mobile
    if (size.width < 1024) return -12; // Tablet
    return -13.9; // Desktop
  }, [size.width]);

  const model = useGLTF("/model/mac.glb");
  const tex = useTexture("/model/red.png");

  // Store references to mesh objects
  const meshes = useMemo(() => {
    let tempMeshes = {};
    model.scene.traverse((obj) => {
      tempMeshes[obj.name] = obj;
    });
    return tempMeshes;
  }, [model]);

  useEffect(() => {
    if (meshes.screen) {
      meshes.screen.rotation.x = THREE.MathUtils.degToRad(180);
    }
    if (meshes.matte) {
      meshes.matte.material.map = tex;
      meshes.matte.material.emissiveIntensity = 0;
      meshes.matte.material.metalness = 0;
      meshes.matte.material.roughness = 1;
      tex.anisotropy = 16; 
    }
  }, [meshes, tex]);

  useFrame(() => {
    if (meshes.screen) {
      meshes.screen.rotation.x = THREE.MathUtils.degToRad(180 - data.offset * 90);
    }
  });

  return (
    <group position={[0, positionY, 40]} scale={[scaleFactor, scaleFactor, scaleFactor]}>
      <primitive object={model.scene} />
    </group>
  );
};

export default MacContainer;
