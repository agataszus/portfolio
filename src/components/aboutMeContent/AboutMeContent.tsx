import { Button } from "@/components/button/Button";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { AboutMeDescription } from "./parts/AboutMeDescription";
import { AboutMeTitle } from "./parts/AboutMeTitle";

const MOTION_BUTTON_COMMON_PROPS = {
  initial: ["buttonHidden", "textHidden", "arrowHidden", "arrowContainerHidden"],
  animate: ["buttonVisible", "textVisible", "arrowVisible", "arrowContainerVisible"],
};

export const AboutMeContent = () => {
  const router = useRouter();

  return (
    <div className="flex w-full flex-col gap-8 desktop-small:gap-4 tablet:mt-[600px] mobile:mt-[510px] mobile:items-center mobile:gap-7">
      <AboutMeTitle />
      <AboutMeDescription />
      <div className="mt-auto flex gap-8 desktop-small:gap-5 tablet:mt-10 tablet:justify-between tablet:gap-8 mobile:flex-col">
        <motion.div {...MOTION_BUTTON_COMMON_PROPS}>
          <Button variant="large" text="My projects" onClick={() => router.push("/projects")} additionalDelay={0.5} />
        </motion.div>
        <motion.div {...MOTION_BUTTON_COMMON_PROPS}>
          <Button variant="large" text="Contact" onClick={() => router.push("/contact")} additionalDelay={0.7} />
        </motion.div>
      </div>
    </div>
  );
};
