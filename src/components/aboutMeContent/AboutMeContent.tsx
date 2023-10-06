import { Button } from "@/components/button/Button";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { PageTitle } from "../pageTitle/PageTitle";
import { PageDescription } from "../pageDescription/PageDescription";

const MOTION_BUTTON_COMMON_PROPS = {
  initial: ["buttonHidden", "textHidden", "arrowHidden", "arrowContainerHidden"],
  animate: ["buttonVisible", "textVisible", "arrowVisible", "arrowContainerVisible"],
};

export const AboutMeContent = () => {
  const router = useRouter();

  return (
    <div className="flex w-full flex-col gap-8 desktop-small:gap-4 tablet:mt-[510px] mobile:items-center mobile:gap-7">
      <PageTitle subtitle="Agata Szustkiewicz" title="About me" />
      <PageDescription
        description={
          <>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto iste sint hic exercitationem, itaque
            dignissimos illum atque cupiditate voluptate quos harum dolor aliquid quibusdam iure doloribus vitae unde
            dolorem deserunt. Architecto iste sint hic exercitationem, itaque dignissimos illum atque cupiditate
            voluptate quos harum dolor aliquid quibusdam iure doloribus vitae unde dolorem deserunt.
            <br />
            <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto iste sint hic exercitationem, itaque
            dignissimos illum atque cupiditate voluptate quos harum dolor aliquid quibusdam iure doloribus vitae unde
            dolorem deserunt.
          </>
        }
      />
      <div className="mt-auto flex gap-8 desktop-small:gap-5 tablet:mt-10 tablet:justify-between tablet:gap-8 mobile:flex-col mobile:items-center">
        <motion.div {...MOTION_BUTTON_COMMON_PROPS}>
          <Button variant="large" text="My projects" onClick={() => router.push("/projects")} additionalDelay={0.5} />
        </motion.div>
        <motion.div {...MOTION_BUTTON_COMMON_PROPS}>
          <Button variant="medium" text="Contact" onClick={() => router.push("/contact")} additionalDelay={0.7} />
        </motion.div>
      </div>
    </div>
  );
};
