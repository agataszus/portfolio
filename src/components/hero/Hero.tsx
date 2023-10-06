import { Button } from "../button/Button";
import { getProjectsPath } from "../desktopHomeNavigation/desktopHomeNavigation.constants";
import { Text } from "../text/Text";
import { motion } from "framer-motion";

const SUBHEADING_SLIDE_OFFSET = 250;
const HEADING_SLIDE_OFFSET = 170;

export const Hero = () => {
  return (
    <div className="flex w-[510px] flex-col pb-[52px]">
      <div className="mb-10 w-[250px] overflow-hidden">
        <motion.div
          initial={{ x: SUBHEADING_SLIDE_OFFSET }}
          animate={{ x: [SUBHEADING_SLIDE_OFFSET, 0] }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Text tag="p" variant="subtitle-2">
            Agata Szustkiewicz
          </Text>
        </motion.div>
      </div>
      <div className="mb-14 overflow-hidden">
        <motion.div
          initial={{ y: HEADING_SLIDE_OFFSET }}
          animate={{ y: [HEADING_SLIDE_OFFSET, 0] }}
          transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
        >
          <Text tag="h1" variant="heading-1">
            Hi! I&apos;m Agata.
            <br /> Frontend Developer
            <br />& blah blah
          </Text>
        </motion.div>
      </div>
      <motion.div
        initial={["buttonHidden", "textHidden", "arrowHidden", "arrowContainerHidden"]}
        animate={["buttonVisible", "textVisible", "arrowVisible", "arrowContainerVisible"]}
      >
        <Button
          variant="large"
          text="My projects"
          linkTo={getProjectsPath()}
          additionalDelay={0.5}
          isExternal={false}
        />
      </motion.div>
    </div>
  );
};
