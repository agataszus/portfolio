import { cn } from "@/styles/helpers/cn";

type HamburgerProps = {
  isMenuOpen: boolean;
  handleClick: () => void;
};

export const Hamburger = ({ isMenuOpen, handleClick }: HamburgerProps) => {
  const lineClassName = "h-1 w-full bg-primary opacity-[--bg-opacity] transition-opacity duration-200";

  return (
    <div
      className={cn(
        "flex h-6 w-9 cursor-pointer flex-col justify-between [--bg-opacity:0.8] hover:[--bg-opacity:1]",
        isMenuOpen && "[--bg-opacity:1]"
      )}
      onClick={handleClick}
    >
      <div className={lineClassName} />
      <div className={lineClassName} />
      <div className={lineClassName} />
    </div>
  );
};
