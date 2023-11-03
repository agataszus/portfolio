import { useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/Addons.js";

export const ReactMesh = () => {
  const react3D = useLoader(OBJLoader, "/icons3D/react.obj");

  return (
    <mesh position={[0, 0, 0]} scale={0.4} rotation={[Math.PI / 2 + 0.26, 0.1, 0.1, "XYZ"]}>
      <primitive object={react3D} />
    </mesh>
  );
};
