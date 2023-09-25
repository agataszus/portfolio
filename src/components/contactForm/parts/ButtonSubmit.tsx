import { Text } from "@/components/text/Text";
import { motion } from "framer-motion";

export const ButtonSubmit = () => {
  return (
    <motion.button
      className="mt-5 cursor-pointer self-end"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1] }}
      transition={{ delay: 1, duration: 0.3, ease: "easeIn" }}
    >
      <Text tag="span" variant="action-3">
        Submit &#8594;
      </Text>
    </motion.button>
  );
};
