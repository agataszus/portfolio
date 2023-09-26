import { motion } from "framer-motion";
import { BUTTON_LARGE_SIZE, BUTTON_MEDIUM_SIZE, BUTTON_SMALL_SIZE, ButtonVariant } from "../button.constants";
import { buttonDraw } from "../../projectColumn/projectColumn.constants";
import { cn } from "@/styles/helpers/cn";

type HalfRectProps = {
  variant: ButtonVariant;
  additionalDelay: number | undefined;
  className?: string;
};

const getSize = (variant: ButtonVariant) => {
  switch (variant) {
    case "large": {
      return BUTTON_LARGE_SIZE;
    }
    case "medium": {
      return BUTTON_MEDIUM_SIZE;
    }
    case "small": {
      return BUTTON_SMALL_SIZE;
    }
  }
};

export const HalfRect = ({ variant, additionalDelay, className }: HalfRectProps) => {
  const size = getSize(variant);

  return (
    <motion.svg className={cn("absolute top-0 z-10", className)} width={size.width} height={size.height}>
      <motion.rect
        width={size.width}
        height={size.height}
        strokeWidth="4px"
        stroke="#95FAFE"
        fill="transparent"
        variants={buttonDraw}
        custom={{ additionalDelay, variant }}
      ></motion.rect>
    </motion.svg>
  );
};
