import { Text } from "@/components/text/Text";
import Image from "next/image";
import PlayLineIcon from "remixicon-react/PlayLineIcon";
import { ProjectTechIcon, TechnologyName } from "./ProjectTechIcon";
import { motion } from "framer-motion";

type RightColumnProps = {
  imageLink: string;
  technologies: readonly TechnologyName[];
};

export const RightColumn = ({ imageLink, technologies }: RightColumnProps) => {
  return (
    <div className="z-10 flex flex-col items-end gap-16">
      <motion.button
        className="relative h-[210] w-[400] bg-black shadow-xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: [0, 1], scale: [0.8, 1] }}
        transition={{ delay: 0.2, duration: 0.5, type: "spring", stiffness: 80 }}
      >
        <Image alt="Project website screen" src={imageLink} width={400} height={210} />
        <PlayLineIcon className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 fill-gray-100/30" />
      </motion.button>
      <div className="flex flex-col items-end gap-8 overflow-hidden">
        <motion.div
          initial={{ x: 150 }}
          animate={{ x: [150, 0] }}
          transition={{ delay: 0.3, duration: 0.35, ease: "easeOut" }}
        >
          <Text tag="h4" variant="subtitle-2" className="italic text-white">
            technologies
          </Text>
        </motion.div>
        <div className="flex w-[300px] flex-wrap justify-end gap-4">
          {technologies.length === 0
            ? null
            : technologies.map((technology, index) => (
                <motion.div
                  key={technology}
                  initial={{ rotate: "90deg", opacity: 0 }}
                  animate={{ rotate: ["-110deg", "0deg"], opacity: [0, 1] }}
                  transition={{ delay: 0.5 + index / 10, duration: 0.4 }}
                >
                  <ProjectTechIcon technologyName={technology} />
                </motion.div>
              ))}
        </div>
      </div>
    </div>
  );
};
