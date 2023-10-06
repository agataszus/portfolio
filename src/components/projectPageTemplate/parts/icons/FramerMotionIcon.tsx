import { TechIconProps } from "./icons.constants";

export const FramerMotionIcon = ({ className }: TechIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="800px"
      height="800px"
      viewBox="0 0 48 48"
      className={className}
      fill="#ffffff"
    >
      <rect width="48" height="48" fill="transparent" />
      <path d="M9.3,2H38.7V16.7H24Zm0,14.7H24L38.7,31.3H9.3Zm0,14.6H24V46Z" />
    </svg>
  );
};
