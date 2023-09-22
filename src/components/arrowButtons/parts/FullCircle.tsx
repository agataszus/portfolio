import { HalfCircle } from "./HalfCircle";

export const FullCircle = () => {
  return (
    <>
      <HalfCircle />
      <HalfCircle className="-scale-y-100" />
    </>
  );
};
