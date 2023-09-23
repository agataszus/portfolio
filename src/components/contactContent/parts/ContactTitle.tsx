import { Text } from "@/components/text/Text";
import { motion } from "framer-motion";

const SUBHEADING_SLIDE_OFFSET = 250;
const HEADING_SLIDE_OFFSET = 52;

export const ContactTitle = () => {
  return (
    <>
      <div className="flex w-[250px] overflow-hidden mobile:justify-center">
        <motion.div
          initial={{ x: SUBHEADING_SLIDE_OFFSET }}
          animate={{ x: [SUBHEADING_SLIDE_OFFSET, 0] }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Text tag="p" variant="subtitle-2">
            Contact
          </Text>
        </motion.div>
      </div>
      <div className="overflow-hidden tablet:mb-[600px] mobile:mb-[540px]">
        <motion.div
          initial={{ y: HEADING_SLIDE_OFFSET }}
          animate={{ y: [HEADING_SLIDE_OFFSET, 0] }}
          transition={{ delay: 0.3, duration: 0.3, ease: "easeOut" }}
        >
          <Text tag="h1" variant="heading-2">
            Get in touch
          </Text>
        </motion.div>
      </div>
    </>
  );
};
