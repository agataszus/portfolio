import { cn } from "@/styles/helpers/cn";
import { TechIconProps } from "../ProjectTechIcon";

export const DatocmsIcon = ({ className }: TechIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className, "scale-90")}
      fill="#ffffff"
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      role="img"
    >
      <path d="M12 0H.076v24H12c5.964 0 11.924-5.373 11.924-11.998C23.924 5.376 17.963 0 12 0zm0 17.453a5.453 5.453 0 1 1 5.455-5.451A5.45 5.45 0 0 1 12 17.452z" />
    </svg>
  );
};
