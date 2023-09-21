import { cn } from "@/styles/helpers/cn";
import { FullCircle } from "./FullCircle";
import { motion } from "framer-motion";
import ArrowDropLeftLineIcon from "remixicon-react/ArrowDropLeftLineIcon";

type ArrowButtonProps = {
  isButtonDisable: boolean;
  handleClick: () => void;
  initialTranslateX: number;
  delay: number;
  duration: number;
  Icon: typeof ArrowDropLeftLineIcon;
};

export const ArrowButton = ({
  isButtonDisable,
  handleClick,
  initialTranslateX,
  delay,
  duration,
  Icon,
}: ArrowButtonProps) => {
  const buttonDisableClassName = "scale-75 origin-center opacity-50 cursor-not-allowed";

  return (
    <button
      className={cn(
        "relative flex h-[56px] w-[56px] scale-100 items-center justify-center rounded-full opacity-100 transition-opacity transition-transform duration-500",
        isButtonDisable && buttonDisableClassName
      )}
      onClick={handleClick}
    >
      <FullCircle />
      <motion.div
        className="flex h-[24px] w-[24px] items-center justify-center"
        initial={{ translateX: initialTranslateX }}
        animate={{ translateX: 0 }}
        transition={{ delay, duration, ease: "easeOut" }}
      >
        <Icon className="h-[24px] w-auto fill-white" />
      </motion.div>
    </button>
  );
};
