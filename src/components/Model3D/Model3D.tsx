import { Canvas, useLoader } from "@react-three/fiber";
import { Mesh } from "./parts/Mesh";
import { OrbitControls } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/Addons.js";
import { Vector3 } from "three";

export const Model3D = () => {
  const react3D = useLoader(OBJLoader, "/icons3D/react.obj");
  const vector0 = new Vector3(0, 0, 0);

  return (
    <div className="absolute inset-0 h-[200%] w-[200%] -translate-x-1/4 translate-y-[-35%] desktop-small:h-[150%] desktop-small:w-[150%] desktop-small:translate-x-[-20%] desktop-small:translate-y-[-25%]">
      <Canvas>
        <ambientLight intensity={Math.PI / 10} color={"#95FAFE"} />
        <spotLight intensity={Math.PI / 600} color={"#ffffff"} position={[0, 0, 0.4]} />
        <spotLight
          position={[3, -5, 15]}
          angle={0.15}
          penumbra={1}
          decay={0}
          intensity={Math.PI / 3}
          color={"#95FAFE"}
        />
        <pointLight position={[-10, 10, -10]} decay={0} intensity={Math.PI / 10} color={"#95FAFE"} />
        <pointLight position={[0, 0, 0]} decay={0} intensity={Math.PI / 200} color={"#ffffff"} />

        <group>
          <mesh position={[0, 0, 0]} scale={0.4} rotation={[Math.PI / 2 + 0.26, 0.1, 0.1, "XYZ"]}>
            <primitive object={react3D} />
          </mesh>
        </group>
        <group rotation={[0.26, -0.1, 0.1, "XYZ"]}>
          <Mesh angle={80} radius={1.9} speed={0.007} src="/icons3D/next.obj" />
          <Mesh angle={170} radius={2.2} speed={0.008} src="/icons3D/html.obj" />
          <Mesh angle={290} radius={1.5} speed={0.011} src="/icons3D/javascript.obj" />
          <Mesh angle={120} radius={2.4} speed={0.007} src="/icons3D/css.obj" />
          <Mesh angle={310} radius={2.9} speed={0.007} src="/icons3D/typescript.obj" />
        </group>
        <OrbitControls
          minDistance={4.5}
          maxDistance={6}
          target0={vector0}
          minAzimuthAngle={-Math.PI / 4}
          maxAzimuthAngle={Math.PI / 4}
          minPolarAngle={(Math.PI * 4) / 9}
          maxPolarAngle={(Math.PI * 5) / 9}
        />
      </Canvas>
    </div>
  );
};
