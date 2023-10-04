import Image from "next/image";

type CSSModulesIconProps = {
  width: number;
  height: number;
};

export const CSSModulesIcon = ({ width, height }: CSSModulesIconProps) => {
  return (
    <Image
      alt="CSS modules icon"
      src="/icons/css-modules-logo.png"
      width={width}
      height={height}
      className="shrink-0 scale-125 invert"
    />
  );
};
