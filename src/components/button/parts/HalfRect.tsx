import { motion } from "framer-motion";
import { BUTTON_LARGE_SIZE, BUTTON_SMALL_SIZE } from "../button.constants";
import { buttonDraw } from "../../projectColumn/projectColumn.constants";
import { cn } from "@/styles/helpers/cn";

type HalfRectProps = {
  variant: "large" | "small";
  additionalDelay: number | undefined;
  className?: string;
};

export const HalfRect = ({ variant, additionalDelay, className }: HalfRectProps) => {
  const size = variant === "large" ? BUTTON_LARGE_SIZE : BUTTON_SMALL_SIZE;

  return (
    <motion.svg className={cn("absolute top-0 z-10", className)} width={size.width} height={size.height}>
      <motion.rect
        width={size.width}
        height={size.height}
        strokeWidth="4px"
        stroke="#95FAFE"
        fill="transparent"
        variants={buttonDraw}
        custom={additionalDelay}
      ></motion.rect>
    </motion.svg>
  );
};
