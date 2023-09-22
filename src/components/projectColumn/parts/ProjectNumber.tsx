import { Text } from "@/components/text/Text";
import { motion } from "framer-motion";

type ProjectNumberProps = {
  index: number;
  extraDelay: number;
};

export const ProjectNumber = ({ index, extraDelay }: ProjectNumberProps) => {
  return (
    <div>
      <motion.div
        className="py-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1] }}
        transition={{ delay: 0.4 + extraDelay, duration: 0.5 }}
      >
        <Text tag="h4" variant="num-1">
          {`0${index}`}
        </Text>
      </motion.div>
      <motion.div
        className="z-10 mb-7 h-1 w-[var(--underline-width)] bg-[var(--underline-color)]"
        initial={{ y: -70 }}
        animate={{ y: [-70, 0] }}
        transition={{ delay: 0.3 + extraDelay, duration: 0.5 }}
      />
    </div>
  );
};
