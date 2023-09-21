import { Text } from "../text/Text";
import { cn } from "@/styles/helpers/cn";
import { motion } from "framer-motion";
import { useState } from "react";
import { textButtonDraw } from "../projectColumn/constants";
import { FullRect } from "./parts/FullRect";
import { AnimatedBackground } from "./parts/AnimatedBackground";
import { Arrow } from "./parts/Arrow";

type ButtonProps = {
  variant: "small" | "large";
  text: string;
  onClick?: () => void;
  className?: string;
  additionalDelay?: number;
};

export const Button = ({ variant, text, className, onClick, additionalDelay }: ButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const buttonClassName = cn(
    "cursor-pointer relative",
    { ["h-[48px] w-[160px] bg-transparent"]: variant === "small", ["h-[70px] w-[248px] flex"]: variant === "large" },
    className
  );
  const textClassName = cn("z-10 transition-colors duration-500", {
    ["text-background-color-dark"]: isClicked,
  });

  return (
    <motion.button
      className={buttonClassName}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: additionalDelay, duration: 1 }}
      onClick={() => {
        onClick?.();
        setIsClicked(true);
      }}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      <FullRect variant={variant} additionalDelay={additionalDelay} />
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
        <AnimatedBackground isActive={isClicked} isExpanded={isHovered} />
        <div className="z-10 h-full overflow-hidden">
          <motion.div
            className="flex h-full w-full items-center justify-center"
            variants={textButtonDraw}
            custom={additionalDelay}
          >
            <Text tag="span" variant="action-3" className={textClassName}>
              {text}
            </Text>
          </motion.div>
        </div>
      </div>
      {variant === "large" && <Arrow isActive={isClicked} additionalDelay={additionalDelay} />}
    </motion.button>
  );
};
