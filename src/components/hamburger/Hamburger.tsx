import { cn } from "@/styles/helpers/cn";
import { motion } from "framer-motion";
import { bar1Draw, bar3Draw, hamburgerDraw } from "./hamburger.constants";

type HamburgerProps = {
  isMenuOpen: boolean;
  handleClick: () => void;
};

export const Hamburger = ({ isMenuOpen, handleClick }: HamburgerProps) => {
  const lineClassName = "h-1 w-full bg-primary opacity-[--bg-opacity] transition-opacity duration-200 absolute";

  return (
    <motion.div
      className={cn(
        "relative mb-1 h-6 w-9 cursor-pointer [--bg-opacity:0.8] hover:[--bg-opacity:1]",
        isMenuOpen && "[--bg-opacity:1]"
      )}
      onClick={handleClick}
      variants={hamburgerDraw}
      initial={["hamburgerVisible", "bar1Initial", "bar3Initial"]}
      animate={
        isMenuOpen ? ["closeVisible", "bar1Moved", "bar3Moved"] : ["hamburgerVisible", "bar1Initial", "bar3Initial"]
      }
    >
      <motion.div className={cn(lineClassName, "top-0")} variants={bar1Draw} />
      <div className={cn(lineClassName, "top-1/2")} />
      <motion.div className={cn(lineClassName, "top-full")} variants={bar3Draw} />
    </motion.div>
  );
};
