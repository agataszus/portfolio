import { Text } from "@/components/text/Text";
import { motion } from "framer-motion";

const DESCRIPTION_SLIDE_OFFSET = 24;

type PageDescriptionProps = {
  description: string;
};

export const PageDescription = ({ description }: PageDescriptionProps) => {
  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ y: DESCRIPTION_SLIDE_OFFSET, opacity: 0, scale: 0.9 }}
        animate={{ y: [DESCRIPTION_SLIDE_OFFSET, 0], opacity: [0, 1], scale: [0.9, 1] }}
        transition={{ delay: 0.3, duration: 0.4, ease: "easeOut" }}
      >
        <Text tag="p" variant="action-1" className="font-light mobile:text-center">
          <span dangerouslySetInnerHTML={{ __html: description }} />
        </Text>
      </motion.div>
    </div>
  );
};
