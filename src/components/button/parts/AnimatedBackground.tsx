import { cn } from "@/styles/helpers/cn";
import { AnimatePresence, motion } from "framer-motion";

type AnimatedBackgroundProps = {
  isExpanded: boolean;
  isActive: boolean;
};

export const AnimatedBackground = ({ isExpanded, isActive }: AnimatedBackgroundProps) => {
  const backgroundClassName = cn("absolute inset-0 z-0 bg-button-color-light transition-colors duration-500", {
    ["bg-primary"]: isActive,
  });

  return (
    <AnimatePresence mode="wait">
      {isExpanded && (
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
  );
};
