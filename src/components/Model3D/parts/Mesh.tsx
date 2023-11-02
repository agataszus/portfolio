import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh as MeshType } from "three";

type MeshProps = {
  angle: number;
  radius: number;
  speed: number;
};

export const Mesh = ({ angle, radius, speed }: MeshProps) => {
  const ref = useRef<MeshType>(null);

  let angleRadians = (angle * Math.PI) / 180;
  console.log(angleRadians);
  const positionX = radius * Math.cos(angleRadians);
  const positionZ = radius * Math.sin(angleRadians);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += speed * 2;
      ref.current.position.x = radius * Math.cos(Math.PI - (angleRadians += speed));
      ref.current.position.z = radius * Math.sin(Math.PI - (angleRadians += speed));
    }
  });

  return (
    <group>
      <mesh position={[positionX, 0, positionZ]} ref={ref} rotation={[0, angleRadians + Math.PI / 2, 0, "YXZ"]}>
        <boxGeometry args={[0.5, 1, 0.1]} />
        <meshStandardMaterial color="#95FAFE" />
      </mesh>
      <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0, "XYZ"]}>
        <torusGeometry args={[radius, 0.005, 30, 100]} />
        <meshStandardMaterial color="#95FAFE" />
      </mesh>
    </group>
  );
};
