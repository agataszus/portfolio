import { motion } from "framer-motion";
import { draw } from "../projectColumn.constants";

const SVG_SIZE = 128;
const CIRCLE_SIZE = 64;
const CIRCLE_R = 62;

export const IconCircle = () => {
  return (
    <motion.svg
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[120deg]"
      viewBox={`0 0 ${SVG_SIZE} ${SVG_SIZE}`}
      width={SVG_SIZE}
      height={SVG_SIZE}
    >
      <motion.circle
        className=" fill-none stroke-primary"
        cx={CIRCLE_SIZE}
        cy={CIRCLE_SIZE}
        r={CIRCLE_R}
        strokeWidth="4"
        animate={{ pathLength: 0 }}
        variants={draw}
        transition={{ duration: 0.5 }}
      ></motion.circle>
    </motion.svg>
  );
};
