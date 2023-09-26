import { Text } from "@/components/text/Text";
import { motion } from "framer-motion";

const DESCRIPTION_SLIDE_OFFSET = 24;

export const ContactDescription = () => {
  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ y: DESCRIPTION_SLIDE_OFFSET, opacity: 0, scale: 0.9 }}
        animate={{ y: [DESCRIPTION_SLIDE_OFFSET, 0], opacity: [0, 1], scale: [0.9, 1] }}
        transition={{ delay: 0.3, duration: 0.4, ease: "easeOut" }}
      >
        <Text tag="p" variant="action-1" className="font-light mobile:text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto iste sint hic exercitationem, itaque
          dignissimos illum atque cupiditate voluptate quos harum dolor aliquid quibusdam iure doloribus vitae unde
          dolorem deserunt.
        </Text>
      </motion.div>
    </div>
  );
};