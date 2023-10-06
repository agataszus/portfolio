import { Text } from "@/components/text/Text";
import { ProjectTechIcon, TechnologyName } from "./ProjectTechIcon";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

type ProjectIconContainerProps = {
  additionalDelay: number;
  technologyName: TechnologyName;
  description: string;
};

const ICON_ROTATION = "-110deg";

const COMMON_TOOLTIP_PROPS = {
  initial: { opacity: 0 },
  animate: { opacity: [0, 1] },
  exit: { opacity: [1, 0] },
  transition: { duration: 0.3 },
};

export const ProjectIconContainer = ({ additionalDelay, technologyName, description }: ProjectIconContainerProps) => {
  const [isIconHovered, setIsIconHovered] = useState(false);

  return (
    <motion.div
      initial={{ rotate: ICON_ROTATION, opacity: 0 }}
      animate={{ rotate: [ICON_ROTATION, 0], opacity: [0, 1] }}
      transition={{ delay: 0.5 + additionalDelay, duration: 0.4 }}
      className="relative"
    >
      <AnimatePresence mode="wait">
        {isIconHovered && (
          <>
            <motion.div
              className={
                "absolute -top-1/3 left-1/2 w-[172px] -translate-x-1/2 -translate-y-full bg-background-color-dark px-3 py-2 shadow-md desktop-small:w-[144px] mobile:w-24"
              }
              {...COMMON_TOOLTIP_PROPS}
            >
              <Text tag="p" variant="action-5">
                {description}
              </Text>
            </motion.div>
            <motion.div
              {...COMMON_TOOLTIP_PROPS}
              className="absolute -top-1 left-1/2 z-10 h-0 w-0 -translate-x-1/2 -translate-y-full border-x-[8px] border-t-[12px] border-x-transparent border-t-background-color-dark"
            />
          </>
        )}
      </AnimatePresence>
      <div
        onMouseOver={() => setIsIconHovered(true)}
        onMouseLeave={() => setIsIconHovered(false)}
        className="cursor-pointer"
      >
        <ProjectTechIcon technologyName={technologyName} />
      </div>
    </motion.div>
  );
};
