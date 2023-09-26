import { Text } from "@/components/text/Text";
import { motion } from "framer-motion";

type ButtonSubmitProps = {
  label?: string;
};

export const ButtonSubmit = ({ label }: ButtonSubmitProps) => {
  return (
    <motion.button
      className="cursor-pointer"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1] }}
      transition={{ delay: 1, duration: 0.3, ease: "easeIn" }}
    >
      <Text tag="span" variant="action-3">
        {label || "Submit"} &#8594;
      </Text>
    </motion.button>
  );
};
