import { cn } from "@/styles/helpers/cn";
import Image from "next/image";

type CSSModulesIconProps = {
  width: number;
  height: number;
  isActive: boolean;
};

export const CSSModulesIcon = ({ width, height, isActive }: CSSModulesIconProps) => {
  return (
    <Image
      alt="CSS modules icon"
      src="/icons/css-modules-logo.png"
      width={width}
      height={height}
      className={cn(
        "shrink-0 scale-125 invert",
        isActive && "[filter:invert(93%)sepia(57%)saturate(5388%)hue-rotate(161deg)brightness(104%)contrast(99%)]"
      )}
    />
  );
};
