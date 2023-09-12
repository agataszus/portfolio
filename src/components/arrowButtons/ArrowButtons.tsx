import ArrowDropRightLineIcon from "remixicon-react/ArrowDropRightLineIcon";
import ArrowDropLeftLineIcon from "remixicon-react/ArrowDropLeftLineIcon";
import { motion } from "framer-motion";
import { cn } from "@/styles/helpers/cn";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (times: { delayTime: number; durationTime: number }) => ({
    pathLength: [0, 0.502],
    opacity: [0, 1],
    transition: {
      pathLength: { delay: times?.delayTime, duration: times?.durationTime, ease: "easeOut" },
      opacity: { delay: times?.delayTime, duration: 0.01 },
    },
  }),
};

type ArrowButtonsProps = {
  handleClickRight: () => void;
  handleClickLeft: () => void;
  isLeftDisable: boolean;
  isRightDisable: boolean;
};

export const ArrowButtons = ({
  handleClickLeft,
  handleClickRight,
  isLeftDisable,
  isRightDisable,
}: ArrowButtonsProps) => {
  const buttonDisableClassName = "scale-75 origin-center opacity-50";

  return (
    <div className="mb-28 flex items-center gap-2">
      <button
        className={cn(
          "relative flex h-[56px] w-[56px] scale-100 items-center justify-center rounded-full opacity-100 transition-opacity transition-transform duration-500",
          isLeftDisable && buttonDisableClassName
        )}
        onClick={handleClickLeft}
      >
        <motion.svg
          className="absolute inset-0 m-auto rotate-90"
          width="56"
          height="56"
          viewBox="0 0 56 56"
          initial="hidden"
          animate="visible"
        >
          <motion.circle
            cx="28"
            cy="28"
            r="27"
            stroke="#95FAFE"
            strokeWidth="2"
            fill="transparent"
            variants={draw}
            custom={{ delayTime: 0.3, durationTime: 0.3 }}
          />
        </motion.svg>
        <motion.svg
          className="absolute inset-0 m-auto rotate-90 -scale-y-100"
          width="56"
          height="56"
          viewBox="0 0 56 56"
          initial="hidden"
          animate="visible"
        >
          <motion.circle
            cx="28"
            cy="28"
            r="27"
            stroke="#95FAFE"
            strokeWidth="2"
            fill="transparent"
            variants={draw}
            custom={{ delayTime: 0.3, durationTime: 0.3 }}
          />
        </motion.svg>
        <motion.div
          className="flex h-[24px] w-[24px] items-center justify-center"
          initial={{ translateX: 15 }}
          animate={{ translateX: 0 }}
          transition={{ delay: 0.3, duration: 0.3, ease: "easeOut" }}
        >
          <ArrowDropLeftLineIcon className="h-[24px] w-auto fill-white" />
        </motion.div>
      </button>
      <motion.button
        className={cn(
          "relative flex h-[56px] w-[56px] scale-100 items-center justify-center rounded-full opacity-100 transition-opacity transition-transform duration-500",
          isRightDisable && buttonDisableClassName
        )}
        onClick={handleClickRight}
      >
        <motion.svg
          className="absolute inset-0 m-auto rotate-90"
          width="56"
          height="56"
          viewBox="0 0 56 56"
          initial="hidden"
          animate="visible"
        >
          <motion.circle
            cx="28"
            cy="28"
            r="27"
            stroke="#95FAFE"
            strokeWidth="2"
            fill="transparent"
            variants={draw}
            custom={{ delayTime: 0.2, durationTime: 0.4 }}
          />
        </motion.svg>
        <motion.svg
          className="absolute inset-0 m-auto rotate-90 -scale-y-100"
          width="56"
          height="56"
          viewBox="0 0 56 56"
          initial="hidden"
          animate="visible"
        >
          <motion.circle
            cx="28"
            cy="28"
            r="27"
            stroke="#95FAFE"
            strokeWidth="2"
            fill="transparent"
            variants={draw}
            custom={{ delayTime: 0.2, durationTime: 0.4 }}
          />
        </motion.svg>
        <motion.div
          className="flex h-[24px] w-[24px] items-center justify-center"
          initial={{ translateX: -20 }}
          animate={{ translateX: 0 }}
          transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
        >
          <ArrowDropRightLineIcon className="h-[24px] w-auto fill-white" />
        </motion.div>
      </motion.button>
    </div>
  );
};
