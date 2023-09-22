import { cn } from "@/styles/helpers/cn";
import { FullCircle } from "./FullCircle";
import { motion } from "framer-motion";
import ArrowDropLeftLineIcon from "remixicon-react/ArrowDropLeftLineIcon";

type ArrowButtonProps = {
  isDisable: boolean;
  onClick: () => void;
  initialTranslateX: number;
  delay: number;
  duration: number;
  Icon: typeof ArrowDropLeftLineIcon;
};

export const ArrowButton = ({ isDisable, onClick, initialTranslateX, delay, duration, Icon }: ArrowButtonProps) => {
  const disableClassName = "scale-75 origin-center opacity-50 cursor-not-allowed";

  return (
    <button
      className={cn(
        "relative flex h-14 w-14 scale-100 items-center justify-center rounded-full opacity-100 transition-opacity transition-transform duration-500",
        isDisable && disableClassName
      )}
      onClick={onClick}
    >
      <FullCircle />
      <motion.div
        className="flex h-6 w-6 items-center justify-center"
        initial={{ translateX: initialTranslateX }}
        animate={{ translateX: 0 }}
        transition={{ delay, duration, ease: "easeOut" }}
      >
        <Icon className="h-6 w-auto fill-white" />
      </motion.div>
    </button>
  );
};
