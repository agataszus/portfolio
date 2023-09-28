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
    <div className="mt-auto flex gap-8 desktop-small:gap-5 tablet:mt-10 tablet:justify-between tablet:gap-8 mobile:flex-col mobile:items-center">
      <motion.div {...MOTION_BUTTON_COMMON_PROPS}>
        <a href={sourceCodeLink} target="_blank" rel="noreferrer">
          <Button variant="medium" text="Source code" additionalDelay={0.5} />
        </a>
      </motion.div>
      <motion.div {...MOTION_BUTTON_COMMON_PROPS}>
        <a href={demoLink} target="_blank" rel="noreferrer">
          <Button variant="large" text="Live demo" additionalDelay={0.7} />
        </a>
      </motion.div>
    </div>
  );
};
