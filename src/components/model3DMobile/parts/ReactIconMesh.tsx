import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { OBJLoader } from "three/examples/jsm/Addons.js";
import { Mesh as MeshType } from "three";

export const ReactIconMesh = () => {
  const react3D = useLoader(OBJLoader, "/icons3D/react3.obj");
  const iconRef = useRef<MeshType>(null);

  useFrame((_, delta) => {
    if (iconRef.current) {
      iconRef.current.rotation.z += delta;
    }
  });

  return (
    <mesh position={[0, 0, 0]} scale={0.8} rotation={[Math.PI / 2, 0, 0, "XYZ"]} ref={iconRef}>
      <primitive object={react3D} />
    </mesh>
  );
};
