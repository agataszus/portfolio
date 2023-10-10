import { Text } from "@/components/text/Text";
import { TechnologyName } from "./ProjectTechIcon";
import { motion } from "framer-motion";
import { ProjectIconContainer } from "./ProjectIconContainer";
import { WebsiteScreen } from "@/services/content/getProject";
import { ImageButton } from "./ImageButton";

const SUBHEADING_OFFSET = 150;

type RightColumnProps = {
  image: WebsiteScreen;
  technologies: readonly { name: TechnologyName; label: string }[];
  handleButtonClick: () => void;
};

export const RightColumn = ({ image, technologies, handleButtonClick }: RightColumnProps) => {
  return (
    <div className="z-10 flex flex-col items-end gap-16 [--hover-opacity:0] desktop-small:mr-5 tablet:absolute tablet:left-1/2 tablet:top-24 tablet:-translate-x-1/2 tablet:items-center mobile:gap-12">
      <ImageButton image={image} handleClick={handleButtonClick} />
      <div className="flex flex-col items-end gap-8 tablet:items-center">
        <div className="overflow-hidden">
          <motion.div
            initial={{ x: SUBHEADING_OFFSET }}
            animate={{ x: [SUBHEADING_OFFSET, 0] }}
            transition={{ delay: 0.3, duration: 0.35, ease: "easeOut" }}
          >
            <Text tag="h4" variant="subtitle-2" className="italic text-white">
              technologies
            </Text>
          </motion.div>
        </div>
        <div className="flex w-[300px] flex-wrap justify-end gap-4 tablet:justify-center">
          {technologies.length === 0
            ? null
            : technologies.map(({ name, label }, index) => (
                <ProjectIconContainer technologyName={name} label={label} additionalDelay={index / 10} key={name} />
              ))}
        </div>
      </div>
    </div>
  );
};
