import ArrowDropRightLineIcon from "remixicon-react/ArrowDropRightLineIcon";
import ArrowDropLeftLineIcon from "remixicon-react/ArrowDropLeftLineIcon";
import { motion } from "framer-motion";

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

export const ArrowButtons = () => {
  return (
    <div className="mb-28 flex items-center gap-2">
      <button className="relative flex h-[42px] w-[42px] items-center justify-center rounded-full ">
        <motion.svg
          className="absolute inset-0 rotate-90"
          width="42"
          height="42"
          viewBox="0 0 42 42"
          initial="hidden"
          animate="visible"
        >
          <motion.circle
            cx="21"
            cy="21"
            r="20"
            stroke="#95FAFE"
            strokeWidth="2"
            strokeOpacity="50%"
            fill="transparent"
            variants={draw}
            custom={{ delayTime: 0.3, durationTime: 0.3 }}
          />
        </motion.svg>
        <motion.svg
          className="absolute inset-0 rotate-90 -scale-y-100"
          width="42"
          height="42"
          viewBox="0 0 42 42"
          initial="hidden"
          animate="visible"
        >
          <motion.circle
            cx="21"
            cy="21"
            r="20"
            stroke="#95FAFE"
            strokeWidth="2"
            strokeOpacity="50%"
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
      <motion.button className="relative flex h-[56px] w-[56px] items-center justify-center rounded-full">
        <motion.svg
          className="absolute inset-0 rotate-90"
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
          className="absolute inset-0 rotate-90 -scale-y-100"
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
