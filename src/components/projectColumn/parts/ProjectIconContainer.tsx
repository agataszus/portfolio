import { motion } from "framer-motion";
import { IconCircle } from "./IconCircle";
import { IconNames, ProjectIcon } from "@/components/projectIcon/ProjectIcon";

type ProjectIconContainerProps = {
  iconName: IconNames;
  extraDelay: number;
};

export const ProjectIconContainer = ({ iconName, extraDelay }: ProjectIconContainerProps) => {
  return (
    <motion.div
      className="relative z-10 my-6 flex h-[126px] w-[126px] shrink-0 items-center justify-center rounded-full border-2 border-primary/30 [overflow:var(--hover-border-overflow)] tablet:absolute tablet:left-[--tablet-left-to-left] tablet:top-10 tablet:-mt-4 tablet:mb-4 tablet:translate-x-[--tablet-translate-x] mobile:relative mobile:left-0 mobile:top-0 mobile:my-4 mobile:mt-0"
      initial={{ borderColor: "rgb(149, 250, 254, 0)", y: 90, x: "var(--tablet-translate-x)" }}
      animate={{
        borderColor: ["rgb(149, 250, 254, 0)", "rgb(149, 250, 254, 0.3)"],
        y: [90, 0],
        x: "var(--tablet-translate-x)",
      }}
      transition={{
        borderColor: { delay: 1 + extraDelay, duration: 1.5 },
        y: { delay: 0.3 + extraDelay, duration: 1 },
        x: { duration: 0.5 },
      }}
    >
      <IconCircle />
      <ProjectIcon name={iconName} extraDelay={extraDelay} />
    </motion.div>
  );
};
