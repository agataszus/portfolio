import { Canvas, useLoader } from "@react-three/fiber";
import { Mesh } from "./parts/Mesh";
// import { CameraControl } from "./parts/CameraControl";
import { OrbitControls } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/Addons.js";

export const Model3D = () => {
  const react3D = useLoader(OBJLoader, "/icons3D/react.obj");
  // return <primitive object={obj} />

  return (
    <div className="absolute inset-0 h-[200%] w-[200%] -translate-x-1/4 translate-y-[-38%]">
      <Canvas>
        {/* <CameraControl /> */}
        <ambientLight intensity={Math.PI / 5} />
        <spotLight position={[10, -10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI / 3} />
        <pointLight position={[-10, 10, -10]} decay={0} intensity={Math.PI / 5} />
        <group>
          {/* <mesh position={[0, 0, 0]}>
            <sphereGeometry args={[0.1, 64, 32]} />
            <meshStandardMaterial color="white" />
          </mesh> */}
          <mesh position={[0, 0, 0]} scale={0.3} rotation={[Math.PI / 2 + 0.5, 0, 0.1, "XYZ"]}>
            <primitive object={react3D} />
          </mesh>
        </group>
        <group rotation={[0.5, 0, 0.1, "XYZ"]}>
          <Mesh angle={80} radius={1.5} speed={0.007} />
          <Mesh angle={170} radius={2} speed={0.008} />
          <Mesh angle={290} radius={0.9} speed={0.011} />
          <Mesh angle={120} radius={2.3} speed={0.007} />
          <Mesh angle={310} radius={2.9} speed={0.007} />
        </group>
        <OrbitControls />
      </Canvas>
    </div>
  );
};
