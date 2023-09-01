import { Text } from "../text/Text";
import ArrowRightSFillIcon from "remixicon-react/ArrowRightSFillIcon";
import { cn } from "@/styles/helpers/cn";
import { AnimatePresence, animate, motion } from "framer-motion";
import { useState } from "react";

type ButtonProps = {
  variant: "small" | "large";
  text: string;
  onClick?: () => void;
  className?: string;
};

export const Button = ({ variant, text, className, onClick }: ButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const buttonClassName = cn(
    "border-2 border-primary cursor-pointer",
    { ["h-[52px] w-[140px] bg-transparent"]: variant === "small", ["h-[70px] w-[248px] flex"]: variant === "large" },
    className
  );
  const backgroundClassName = cn("absolute inset-0 z-0 bg-button-color-light transition-colors duration-500", {
    ["bg-primary"]: isClicked,
  });
  const arrowContainerClassName = cn(
    "flex h-full w-[70px] shrink-0 justify-end bg-button-color-light transition-colors duration-500",
    {
      ["bg-primary"]: isClicked,
    }
  );
  const textClassName = cn("z-10 transition-colors duration-500", {
    ["text-background-color-dark"]: isClicked,
  });
  const arrowClassName = cn("my-auto h-[16px] w-full justify-center fill-white transition-colors duration-500", {
    ["fill-background-color-dark"]: isClicked,
  });

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.button
        className={buttonClassName}
        onClick={() => {
          onClick?.();
          setIsClicked(true);
        }}
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
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
          <Text tag="span" variant="action-2" className={textClassName}>
            {text}
          </Text>
        </div>
        {variant === "large" && (
          <div className={arrowContainerClassName}>
            <ArrowRightSFillIcon className={arrowClassName} />
          </div>
        )}
      </motion.button>
    </AnimatePresence>
  );
};
