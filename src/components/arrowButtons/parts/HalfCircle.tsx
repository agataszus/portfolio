import { motion } from "framer-motion";
import { draw } from "../arrowButtons.constants";
import { cn } from "@/styles/helpers/cn";

type HalfCircleProps = {
  className?: string;
};

export const HalfCircle = ({ className }: HalfCircleProps) => {
  const svgSize = 56;
  const circleSize = 28;
  const circleR = 27;

  return (
    <motion.svg
      className={cn("absolute inset-0 m-auto rotate-90", className)}
      width={svgSize}
      height={svgSize}
      viewBox={`0 0 ${svgSize} ${svgSize}`}
      initial="hidden"
      animate="visible"
    >
      <motion.circle
        cx={circleSize}
        cy={circleSize}
        r={circleR}
        stroke="#95FAFE"
        strokeWidth="2"
        fill="transparent"
        variants={draw}
        custom={{ delayTime: 0.3, durationTime: 0.3 }}
      />
    </motion.svg>
  );
};
