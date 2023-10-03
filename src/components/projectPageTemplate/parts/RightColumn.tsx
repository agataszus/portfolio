import { Text } from "@/components/text/Text";
import Image from "next/image";
import PlayLineIcon from "remixicon-react/PlayLineIcon";
import { TechnologyName } from "./ProjectTechIcon";
import { motion } from "framer-motion";
import { ProjectIconContainer } from "./ProjectIconContainer";
import { MOBILE, useMediaQueries } from "@/hooks/useMediaQueries";
import { WebsiteScreen } from "@/services/content/getProject";

const IMAGE_SCALE = 0.8;
const SUBHEADING_OFFSET = 150;

type RightColumnProps = {
  image: WebsiteScreen;
  technologies: readonly { name: TechnologyName; description: string }[];
};

export const RightColumn = ({ image, technologies }: RightColumnProps) => {
  const mediaQuery = useMediaQueries();

  return (
    <div className="z-10 flex flex-col items-end gap-16 [--hover-opacity:0] desktop-small:mr-5 tablet:absolute tablet:left-1/2 tablet:top-24 tablet:-translate-x-1/2 tablet:items-center">
      <motion.button
        className="relative h-[210] w-[400] bg-black shadow-xl"
        initial={{ opacity: 0, scale: IMAGE_SCALE }}
        animate={{ opacity: [0, 1], scale: [IMAGE_SCALE, 1] }}
        transition={{ delay: 0.2, duration: 0.5, type: "spring", stiffness: 80 }}
      >
        <Image
          alt={image.alt}
          src={image.url}
          width={mediaQuery === MOBILE ? 280 : 400}
          height={mediaQuery === MOBILE ? 150 : 210}
        />
        <PlayLineIcon className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 fill-gray-100/30" />
      </motion.button>
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
            : technologies.map(({ name, description }, index) => (
                <ProjectIconContainer
                  technologyName={name}
                  description={description}
                  additionalDelay={index / 10}
                  key={name}
                />
              ))}
        </div>
      </div>
    </div>
  );
};
