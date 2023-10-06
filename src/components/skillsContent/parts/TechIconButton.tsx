import { ProjectTechIcon, TechnologyName } from "@/components/projectPageTemplate/parts/ProjectTechIcon";
import { motion } from "framer-motion";

const ICON_ROTATION = "-110deg";

type TechIconButtonProps = {
  onClick: () => void;
  technologyName: TechnologyName;
  additionalDelay: number;
  isActive: boolean;
};

export const TechIconButton = ({ onClick, technologyName, additionalDelay, isActive }: TechIconButtonProps) => {
  const commonTransition = { delay: 0.5 + additionalDelay, duration: 0.4 };

  return (
    <motion.button
      onClick={onClick}
      initial={{ rotate: ICON_ROTATION, opacity: 0 }}
      animate={{ rotate: [ICON_ROTATION, 0], opacity: [0, 1] }}
      transition={{
        rotate: commonTransition,
        opacity: commonTransition,
        scale: { duration: 0.2 },
      }}
      whileHover={{ scale: 1.3 }}
      className="cursor-pointer"
    >
      <ProjectTechIcon technologyName={technologyName} variant="small" isActive={isActive} />
    </motion.button>
  );
};
