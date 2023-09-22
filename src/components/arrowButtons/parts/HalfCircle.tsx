import { motion } from "framer-motion";
import { draw } from "../arrowButtons.constants";
import { cn } from "@/styles/helpers/cn";

const SVG_SIZE = 56;
const CIRCLE_SIZE = 28;
const CIRCLE_R = 27;

type HalfCircleProps = {
  className?: string;
};

export const HalfCircle = ({ className }: HalfCircleProps) => {
  return (
    <motion.svg
      className={cn("absolute inset-0 m-auto rotate-90", className)}
      width={SVG_SIZE}
      height={SVG_SIZE}
      viewBox={`0 0 ${SVG_SIZE} ${SVG_SIZE}`}
      initial="hidden"
      animate="visible"
    >
      <motion.circle
        cx={CIRCLE_SIZE}
        cy={CIRCLE_SIZE}
        r={CIRCLE_R}
        stroke="#95FAFE"
        strokeWidth="2"
        fill="transparent"
        variants={draw}
        custom={{ delayTime: 0.3, durationTime: 0.3 }}
      />
    </motion.svg>
  );
};
