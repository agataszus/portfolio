import { Button } from "@/components/button/Button";
import { motion } from "framer-motion";
import { PageTitle } from "../pageTitle/PageTitle";
import { PageDescription } from "../pageDescription/PageDescription";
import { getContactPath, getProjectsPath } from "../desktopHomeNavigation/desktopHomeNavigation.constants";

const MOTION_BUTTON_COMMON_PROPS = {
  initial: ["buttonHidden", "textHidden", "arrowHidden", "arrowContainerHidden"],
  animate: ["buttonVisible", "textVisible", "arrowVisible", "arrowContainerVisible"],
};

type AboutMeContentProps = {
  description: string;
  subtitle: string;
  title: string;
};

export const AboutMeContent = ({ description, title, subtitle }: AboutMeContentProps) => {
  return (
    <div className="flex w-full flex-col gap-8 desktop-small:gap-4 tablet:mt-[510px] mobile:mt-[410px] mobile:items-center mobile:gap-7">
      <PageTitle subtitle={subtitle} title={title} />
      <PageDescription description={description} />
      <div className="mt-auto flex gap-8 pt-4 desktop-small:gap-5 tablet:mt-10 tablet:gap-8 tablet:pt-0 mobile:flex-col mobile:items-center">
        <motion.div {...MOTION_BUTTON_COMMON_PROPS}>
          <Button
            variant="large"
            text="My projects"
            linkTo={getProjectsPath()}
            additionalDelay={0.5}
            isExternal={false}
          />
        </motion.div>
        <motion.div {...MOTION_BUTTON_COMMON_PROPS}>
          <Button variant="medium" text="Contact" linkTo={getContactPath()} additionalDelay={0.7} isExternal={false} />
        </motion.div>
      </div>
    </div>
  );
};
