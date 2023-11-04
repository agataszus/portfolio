import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { MeshStandardMaterial, Mesh as MeshType } from "three";
import { OBJLoader } from "three/examples/jsm/Addons.js";

type MeshProps = {
  angle: number;
  radius: number;
  speed: number;
  src: string;
};

export const Mesh = ({ angle, radius, speed, src }: MeshProps) => {
  const ref = useRef<MeshType>(null);

  const icon3D = useLoader(OBJLoader, src);
  const material = new MeshStandardMaterial({ color: "#000000" });

  let angleRadians = (angle * Math.PI) / 180;
  const positionX = radius * Math.cos(angleRadians);
  const positionZ = radius * Math.sin(angleRadians);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += (delta + speed) / 2;
      ref.current.position.x = radius * Math.cos(Math.PI - (angleRadians += (delta + speed) / 4));
      ref.current.position.z = radius * Math.sin(Math.PI - (angleRadians += (delta + speed) / 4));
    }
  });

  return (
    <group>
      <mesh
        position={[-positionX, 0, positionZ]}
        ref={ref}
        rotation={[Math.PI / 2, angleRadians - Math.PI / 2, 0, "YXZ"]}
        scale={0.18}
      >
        <primitive object={icon3D} material={material} />
        <meshStandardMaterial color="#95FAFE" />
      </mesh>
      <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0, "XYZ"]}>
        <torusGeometry args={[radius, 0.005, 30, 100]} />
        <meshStandardMaterial color="#C08FFE" opacity={0.7} transparent />
      </mesh>
    </group>
  );
};
