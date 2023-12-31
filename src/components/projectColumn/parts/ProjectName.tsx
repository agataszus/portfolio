import { Text } from "@/components/text/Text";
import { motion } from "framer-motion";

const NAME_SLIDE_OFFSET = 40;

type ProjectNameProps = {
  name: string;
  extraDelay: number;
};

export const ProjectName = ({ name, extraDelay }: ProjectNameProps) => {
  return (
    <div className="z-10 flex h-10 shrink-0 overflow-hidden tablet:absolute tablet:left-[--tablet-left-to-left] tablet:top-48 tablet:translate-x-[--tablet-translate-x] mobile:relative mobile:left-0 mobile:top-0">
      <motion.div
        initial={{ translateY: NAME_SLIDE_OFFSET }}
        animate={{ translateY: [NAME_SLIDE_OFFSET, 0] }}
        transition={{ delay: 0.2 + extraDelay, duration: 0.5 }}
      >
        <Text tag="h2" variant="heading-3" className="h-full">
          {name}
        </Text>
      </motion.div>
    </div>
  );
};
