import { Button } from "@/components/button/Button";
import { motion } from "framer-motion";

const MOTION_BUTTON_COMMON_PROPS = {
  initial: ["buttonHidden", "textHidden", "arrowHidden", "arrowContainerHidden"],
  animate: ["buttonVisible", "textVisible", "arrowVisible", "arrowContainerVisible"],
};

type ProjectButtonsProps = {
  sourceCodeLink: string;
  demoLink: string;
};

export const ProjectButtons = ({ sourceCodeLink, demoLink }: ProjectButtonsProps) => {
  return (
    <div className="mt-auto flex gap-8 desktop-small:gap-5 tablet:mt-12 tablet:w-full tablet:justify-between tablet:gap-8 mobile:flex-col mobile:items-center">
      <motion.div {...MOTION_BUTTON_COMMON_PROPS}>
        <Button variant="medium" text="Source code" additionalDelay={0.5} linkTo={sourceCodeLink} isExternal={true} />
      </motion.div>
      <motion.div {...MOTION_BUTTON_COMMON_PROPS}>
        <Button variant="large" text="Live demo" additionalDelay={0.7} linkTo={demoLink} isExternal={true} />
      </motion.div>
    </div>
  );
};
