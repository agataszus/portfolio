import { Text } from "@/components/text/Text";
import { useTimeout } from "@mantine/hooks";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const COPIED_SCALE_OFFSET = 0.9;

type EmailProps = {
  email: string;
};

export const Email = ({ email }: EmailProps) => {
  const [isClicked, setIsClicked] = useState(false);
  const { start: startTimeout } = useTimeout(() => setIsClicked(false), 2000);

  const handleClick = () => {
    navigator.clipboard.writeText("agataszus@gmail.com");
    setIsClicked(true);

    startTimeout();
  };

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <motion.div
          className="flex flex-col items-start gap-1 mobile:items-center"
          initial={{ scale: 0, originX: 0 }}
          animate={{ scale: [0, 1], originX: 0 }}
          transition={{ delay: 0.5, duration: 0.2, type: "spring", stiffness: 70 }}
        >
          <Text tag="h4" variant="action-1" className="font-bold">
            Email
          </Text>
          <button onClick={handleClick} className="relative">
            <Text
              tag="span"
              variant="action-1"
              className="cursor-pointer font-light opacity-75 transition-opacity hover:opacity-100"
            >
              {email}
            </Text>
          </button>
        </motion.div>
      </div>
      <AnimatePresence mode="wait">
        {isClicked && (
          <motion.div
            className="absolute bottom-[-5px] left-48 flex bg-background-color-light px-3 py-2 shadow-sm"
            initial={{ opacity: 0, scale: COPIED_SCALE_OFFSET }}
            animate={{ opacity: [0, 1], scale: [COPIED_SCALE_OFFSET, 1] }}
            exit={{ opacity: [1, 0], scale: [1, COPIED_SCALE_OFFSET] }}
            transition={{ duration: 0.1, type: "spring", stiffness: 160 }}
          >
            <Text tag="h4" variant="caption-1">
              Copied!
            </Text>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
