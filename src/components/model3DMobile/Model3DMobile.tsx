import { Canvas } from "@react-three/fiber";
import { ReactIconMesh } from "./parts/ReactIconMesh";

export const Model3DMobile = () => {
  return (
    <div className="absolute -right-16 top-1/2 h-full w-full translate-y-[-58%]">
      <Canvas>
        <ambientLight intensity={Math.PI / 10} color={"#95FAFE"} />
        <spotLight
          position={[3, -5, 15]}
          angle={0.15}
          penumbra={1}
          decay={0}
          intensity={Math.PI / 3}
          color={"#95FAFE"}
        />
        <pointLight position={[-10, 10, -10]} decay={0} intensity={Math.PI / 10} color={"#95FAFE"} />
        <ReactIconMesh />
      </Canvas>
    </div>
  );
};
