import { Text } from "../text/Text";
import { cn } from "@/styles/helpers/cn";
import { motion } from "framer-motion";
import { useState } from "react";
import { textButtonDraw } from "../projectColumn/projectColumn.constants";
import { FullRect } from "./parts/FullRect";
import { AnimatedBackground } from "./parts/AnimatedBackground";
import { Arrow } from "./parts/Arrow";
import { ButtonVariant } from "./button.constants";
import { useTimeout } from "@mantine/hooks";
import { ButtonWrapper } from "./parts/ButtonWrapper";

type ButtonProps = {
  variant: ButtonVariant;
  text: string;
  linkTo: string;
  className?: string;
  additionalDelay?: number;
  isExternal: boolean;
};

export const Button = ({ variant, text, className, additionalDelay, linkTo, isExternal }: ButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const { start: startTimeout } = useTimeout(() => setIsClicked(false), 1000);

  const buttonClassName = cn(
    "cursor-pointer relative",
    {
      ["h-12 w-40 bg-transparent"]: variant === "small",
      ["h-[70px] w-[180px] bg-transparent"]: variant === "medium",
      ["h-[70px] w-[248px] flex"]: variant === "large",
    },
    className
  );
  const textClassName = cn("z-10 transition-colors duration-500", {
    ["text-background-color-dark"]: isClicked,
  });

  const handleClick = () => {
    setIsClicked(true);

    startTimeout();
  };

  return (
    <ButtonWrapper isExternal={isExternal} linkTo={linkTo}>
      <motion.button
        className={buttonClassName}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: additionalDelay, duration: 1 }}
        onClick={handleClick}
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
              <Text tag="span" variant="action-4" className={textClassName}>
                {text}
              </Text>
            </motion.div>
          </div>
        </div>
        {variant === "large" && <Arrow isActive={isClicked} additionalDelay={additionalDelay} />}
      </motion.button>
    </ButtonWrapper>
  );
};
