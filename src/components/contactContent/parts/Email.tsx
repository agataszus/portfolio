import { Text } from "@/components/text/Text";
import { motion } from "framer-motion";

export const Email = () => {
  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex flex-col items-start gap-1"
        initial={{ scale: 0, originX: 0 }}
        animate={{ scale: [0, 1], originX: 0 }}
        transition={{ delay: 0.5, duration: 0.2, type: "spring", stiffness: 70 }}
      >
        <Text tag="h4" variant="action-1" className="font-bold">
          Email
        </Text>
        <button onClick={() => navigator.clipboard.writeText("agataszus@gmail.com")}>
          <Text
            tag="span"
            variant="action-1"
            className="cursor-pointer font-light opacity-75 transition-opacity hover:opacity-100"
          >
            agataszus@gmail.com
          </Text>
        </button>
      </motion.div>
    </div>
  );
};
