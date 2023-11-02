import { useThree } from "@react-three/fiber";

export const CameraControl = () => {
  const { camera } = useThree();
  camera.position.set(0, 0.5, 6);

  return null;
};
