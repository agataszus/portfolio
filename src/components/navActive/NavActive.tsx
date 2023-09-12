import { cn } from "@/styles/helpers/cn";
import { motion } from "framer-motion";

type NavActiveProps = {
  isHovered: boolean;
  isActive: boolean;
};

export const NavActive = ({ isHovered, isActive }: NavActiveProps) => {
  const className = cn("h-0.5 w-0 bg-primary transition-all", { ["w-5"]: isActive, ["w-9"]: isHovered });

  return (
    <motion.div
      className={className}
      initial={{ scaleX: 0, originX: 0 }}
      animate={{ scaleX: [0, 1], originX: 0 }}
      transition={{ delay: 0.5, duration: 0.4, ease: "easeOut" }}
    />
  );
};
