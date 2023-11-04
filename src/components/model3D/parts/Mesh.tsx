import { useFrame, useLoader } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { Mesh as MeshType } from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

type MeshProps = {
  angle: number;
  radius: number;
  speed: number;
  src: string;
};

export const Mesh = ({ angle, radius, speed, src }: MeshProps) => {
  const ref = useRef<MeshType>(null);
  const angleRadians = useRef((angle * Math.PI) / 180);

  const icon3D = useLoader(GLTFLoader, src);

  const { positionX, positionZ } = useMemo(
    () => ({
      positionX: radius * Math.cos(angleRadians.current),
      positionZ: radius * Math.sin(angleRadians.current),
    }),
    [radius]
  );

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += (delta + speed) / 2;
      angleRadians.current += (delta + speed) / 4;
      ref.current.position.x = radius * Math.cos(Math.PI - angleRadians.current);
      angleRadians.current += (delta + speed) / 4;
      ref.current.position.z = radius * Math.sin(Math.PI - angleRadians.current);
    }
  });

  return (
    <group>
      <mesh
        position={[-positionX, 0, positionZ]}
        ref={ref}
        rotation={[Math.PI / 2, angleRadians.current - Math.PI / 2, 0, "YXZ"]}
        scale={0.18}
      >
        <primitive object={icon3D.scene} />
      </mesh>
      <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0, "XYZ"]}>
        <torusGeometry args={[radius, 0.005, 30, 100]} />
        <meshStandardMaterial color="#C08FFE" opacity={0.7} transparent />
      </mesh>
    </group>
  );
};
