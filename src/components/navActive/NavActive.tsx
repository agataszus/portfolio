import { cn } from "@/styles/helpers/cn";

type NavActiveProps = {
  isHovered: boolean;
  isActive: boolean;
};

export const NavActive = ({ isHovered, isActive }: NavActiveProps) => {
  const className = cn("h-0.5 w-0 bg-primary transition-all", { ["w-5"]: isActive, ["w-9"]: isHovered });

  return <div className={className} />;
};
