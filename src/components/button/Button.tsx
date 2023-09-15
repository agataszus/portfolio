import { Text } from "../text/Text";
import ArrowRightSFillIcon from "remixicon-react/ArrowRightSFillIcon";
import { cn } from "@/styles/helpers/cn";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { arrowContainerDraw, arrowDraw, buttonDraw, textButtonDraw } from "../projectColumn/ProjectColumn";

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
  const backgroundClassName = cn("absolute inset-0 z-0 bg-button-color-light transition-colors duration-500", {
    ["bg-primary"]: isClicked,
  });
  const arrowContainerClassName = cn(
    "h-full w-full shrink-0 bg-button-color-light transition-colors duration-500 overflow-hidden z-0",
    {
      ["bg-primary"]: isClicked,
    }
  );
  const textClassName = cn("z-10 transition-colors duration-500", {
    ["text-background-color-dark"]: isClicked,
  });
  const arrowClassName = cn("my-auto h-[20px] w-full justify-center fill-white transition-colors duration-500", {
    ["fill-background-color-dark"]: isClicked,
  });

  return (
    <motion.button
      className={buttonClassName}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      // exit={{ opacity: 0 }}
      transition={{ delay: additionalDelay, duration: 1 }}
      onClick={() => {
        onClick?.();
        setIsClicked(true);
      }}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      <motion.svg
        className="absolute right-0 top-0 z-10"
        width={variant === "large" ? 126 : 80}
        height={variant === "large" ? 72 : 48}
      >
        <motion.rect
          width={variant === "large" ? 126 : 80}
          height={variant === "large" ? 72 : 48}
          strokeWidth="4px"
          stroke="#95FAFE"
          fill="transparent"
          variants={buttonDraw}
          custom={additionalDelay}
        ></motion.rect>
      </motion.svg>
      <motion.svg
        className="absolute left-0 top-0 z-10 rotate-180 -scale-y-100"
        width={variant === "large" ? 126 : 80}
        height={variant === "large" ? 72 : 48}
      >
        <motion.rect
          width={variant === "large" ? 126 : 80}
          height={variant === "large" ? 72 : 48}
          strokeWidth="4px"
          stroke="#95FAFE"
          fill="transparent"
          variants={buttonDraw}
          custom={additionalDelay}
        ></motion.rect>
      </motion.svg>
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          {isHovered && (
            <motion.div
              className={backgroundClassName}
              initial={{ scaleX: 0, x: "100%" }}
              animate={{
                scaleX: [0, 1],
                x: ["100%", "0%"],
              }}
              exit={{
                scaleX: 0,
                x: "100%",
              }}
              transition={{ duration: 0.5 }}
            />
          )}
        </AnimatePresence>
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
      {variant === "large" && (
        <div className={"h-full w-[70px] shrink-0 justify-end overflow-hidden"}>
          <motion.div className={arrowContainerClassName} variants={arrowContainerDraw} custom={additionalDelay}>
            <motion.div className="flex h-full w-full justify-center" variants={arrowDraw} custom={additionalDelay}>
              <ArrowRightSFillIcon className={arrowClassName} />
            </motion.div>
          </motion.div>
        </div>
      )}
    </motion.button>
  );
};
