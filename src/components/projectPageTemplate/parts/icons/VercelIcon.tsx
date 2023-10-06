import { COLOR_PRIMARY, COLOR_WHITE, TechIconWithActiveProps } from "./icons.constants";

export const VercelIcon = ({ className, isActive }: TechIconWithActiveProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path d="M12 1L24 22H0L12 1Z" fill={isActive ? COLOR_PRIMARY : COLOR_WHITE} />
    </svg>
  );
};
