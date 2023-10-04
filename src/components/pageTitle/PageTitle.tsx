import { Text } from "@/components/text/Text";
import { motion } from "framer-motion";

const SUBHEADING_SLIDE_OFFSET = 250;
const HEADING_SLIDE_OFFSET = 52;

type PageTitleProps = {
  subtitle: string;
  title: string;
};

export const PageTitle = ({ subtitle, title }: PageTitleProps) => {
  return (
    <>
      <div className="flex w-auto overflow-hidden mobile:justify-center">
        <motion.div
          initial={{ x: SUBHEADING_SLIDE_OFFSET }}
          animate={{ x: [SUBHEADING_SLIDE_OFFSET, 0] }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Text tag="p" variant="subtitle-2">
            {subtitle}
          </Text>
        </motion.div>
      </div>
      <div className="overflow-hidden">
        <motion.div
          initial={{ y: HEADING_SLIDE_OFFSET }}
          animate={{ y: [HEADING_SLIDE_OFFSET, 0] }}
          transition={{ delay: 0.3, duration: 0.3, ease: "easeOut" }}
        >
          <Text tag="h1" variant="heading-2">
            {title}
          </Text>
        </motion.div>
      </div>
    </>
  );
};
