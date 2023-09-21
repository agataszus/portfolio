import { Text } from "../text/Text";
import ArrowRightSFillIcon from "remixicon-react/ArrowRightSFillIcon";
import { Button } from "../button/Button";
import { cn } from "@/styles/helpers/cn";
import { motion } from "framer-motion";
import { IconNames, ProjectIcon } from "../projectIcon/ProjectIcon";
import { TechnologyIcon } from "../technologyIcon/TechnologyIcon";

type ProjectColumnProps = {
  iconName: IconNames;
  index: number;
  name: string;
  description: string;
  Icon: typeof ArrowRightSFillIcon | "next" | "javascript";
};

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: () => ({
    pathLength: [0, 0.45],
    opacity: [0, 1],
    transition: {
      pathLength: { duration: 0.5, ease: "easeOut" },
      opacity: { duration: 0.01 },
    },
  }),
};

export const buttonDraw = {
  buttonHidden: { pathLength: 0 },
  buttonVisible: (additionalDelay: number = 0) => ({
    pathLength: [0, 0.82],
    transition: {
      delay: 0.1 + additionalDelay,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export const textButtonDraw = {
  textHidden: { x: -160, opacity: 0 },
  textHovered: () => ({
    opacity: [0, 1],
    x: [-160, 0],
    transition: { x: { duration: 0.3, ease: "easeOut" }, opacity: { duration: 0.8 } },
  }),
  textVisible: (additionalDelay: number = 0) => ({
    opacity: [0, 1],
    x: [-160, 0],
    transition: {
      x: { delay: additionalDelay, duration: 0.6, ease: "easeOut" },
      opacity: { delay: additionalDelay, duration: 0.6 },
    },
  }),
};

export const arrowDraw = {
  arrowHidden: { opacity: 0 },
  arrowVisible: (additionalDelay: number = 0) => ({
    opacity: [0, 1],
    transition: { delay: 0.5 + additionalDelay, duration: 0.3 },
  }),
};

export const arrowContainerDraw = {
  arrowContainerHidden: { x: 70 },
  arrowContainerVisible: (additionalDelay: number = 0) => ({
    x: [70, 0],
    transition: { delay: 0.3 + additionalDelay, duration: 0.2 },
  }),
};

export const ProjectColumn = ({ iconName, name, description, index, Icon }: ProjectColumnProps) => {
  const columnClassName = cn(
    "flex h-full w-[368px] shrink-0 flex-col gap-8 border-l-2 border-primary/40 px-11 py-8 relative",
    "[--hover-opacity:0%] [--default-opacity:100%] [--translate-x:0] [--hover-path-length:0] [--hover-border-overflow: hidden] [--hover-translate-y:10px] [--underline-width:22px] [--underline-color:rgb(149,250,254,0.6)] [--translate-x-text:70px] [--hover-rotate:-180deg]"
  );

  const extraDelay = (index - 1) * 0.1;

  return (
    <motion.div
      className={columnClassName}
      initial={["hidden", "buttonHidden", "textHidden", "arrowHidden", "arrowContainerHidden"]}
      whileHover={["visible", "buttonVisible", "textHovered", "arrowVisible", "arrowContainerVisible"]}
      variants={
        {
          visible: {
            "--hover-translate-y": "0",
            "--hover-border-overflow": "visible",
            "--hover-path-length": "1",
            "--default-opacity": "0%",
            "--hover-opacity": "100%",
            "--translate-x": "203px",
            "--underline-width": "38px",
            "--underline-color": "rgb(149, 250, 254)",
            "--translate-x-text": "0",
            "--hover-rotate": "0deg",
          },
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } as any
      }
      animate={{ background: "var(--gradient)" }}
      transition={{
        "--translate-x": { duration: 0.6 },
        "--hover-path-length": { duration: 1 },
        "--hover-translate-y": { duration: 0.5 },
        "--default-opacity": { duration: 0.5 },
        "--hover-opacity": { duration: 0.5 },
        "--hover-scale-x": { duration: 0.5 },
        "--hover-rotate": { duration: 0.5 },
      }}
    >
      <div className="absolute inset-0 z-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.3)0%,rgba(0,0,0,0.1)50%,rgba(0,0,0,0.05)100%)] opacity-[--hover-opacity] " />
      <motion.div
        className="absolute inset-0 z-0 bg-[linear-gradient(0deg,rgba(256,256,256,0.2)0%,rgba(256,256,256,0.1)50%,rgba(256,256,256,0.05)100%)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ delay: extraDelay, duration: 2, ease: "easeOut" }}
      />
      <div className="z-10 flex w-full justify-between">
        <div>
          <motion.div
            className="py-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1] }}
            transition={{ delay: 0.4 + extraDelay, duration: 0.5 }}
          >
            <Text tag="h4" variant="num-1">
              {`0${index}`}
            </Text>
          </motion.div>
          <motion.div
            className="z-10 mb-7 h-1 w-[var(--underline-width)] bg-[var(--underline-color)]"
            initial={{ y: -70 }}
            animate={{ y: [-70, 0] }}
            transition={{ delay: 0.3 + extraDelay, duration: 0.5 }}
          />
        </div>
        <div className="flex flex-col items-end gap-2 overflow-hidden">
          <Text tag="h4" variant="action-2" className="translate-x-[--translate-x-text] pt-4 opacity-80">
            Made with
          </Text>
          <div className="rotate-[--hover-rotate] opacity-[--hover-opacity]">
            <TechnologyIcon Icon={Icon} />
          </div>
        </div>
      </div>
      <motion.div
        className="relative z-10 my-6 flex h-[126px] w-[126px] shrink-0 items-center justify-center rounded-full border-2 border-primary/30 [overflow:--hover-border-overflow]"
        initial={{ borderColor: "rgb(149, 250, 254, 0)", y: 90 }}
        animate={{ borderColor: ["rgb(149, 250, 254, 0)", "rgb(149, 250, 254, 0.3)"], y: [90, 0] }}
        transition={{
          borderColor: { delay: 1 + extraDelay, duration: 1.5 },
          y: { delay: 0.3 + extraDelay, duration: 1 },
        }}
      >
        <motion.svg
          className=" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[120deg]"
          viewBox="0 0 128 128"
          width="128"
          height="128"
        >
          <motion.circle
            className=" fill-none stroke-primary"
            cx="64"
            cy="64"
            r="62"
            strokeWidth="4"
            animate={{ pathLength: 0 }}
            variants={draw}
            transition={{ duration: 0.5 }}
          ></motion.circle>
        </motion.svg>
        <ProjectIcon name={iconName} extraDelay={extraDelay} />
      </motion.div>
      <div className="z-10 overflow-hidden">
        <motion.div
          initial={{ translateY: 40 }}
          animate={{ translateY: [40, 0] }}
          transition={{ delay: 0.2 + extraDelay, duration: 0.5 }}
        >
          <Text tag="h2" variant="heading-2">
            {name}
          </Text>
        </motion.div>
      </div>

      {/* texts section */}
      <div className="relative h-96 w-full">
        <div className="overflow-hidden">
          <motion.div
            className="opacity-[--default-opacity]"
            initial={{ translateY: 20 }}
            animate={{ translateY: [20, 0] }}
            transition={{ delay: 0.3 + extraDelay, duration: 0.5 }}
          >
            <Text tag="p" variant="action-2" className="text-primary">
              See more &#8594;
            </Text>
          </motion.div>
        </div>

        <div className="absolute inset-0 z-10 flex translate-y-[--hover-translate-y] flex-col gap-12 opacity-[--hover-opacity]">
          <Text tag="p" variant="caption-1">
            {description}
          </Text>
          <div className="flex flex-col gap-3">
            <Text tag="p" variant="action-2" className="text-primary">
              Live demo &#8594;
            </Text>
            <Text tag="p" variant="action-2" className="text-primary">
              Code on github &#8594;
            </Text>
          </div>
        </div>
      </div>

      {/* button/arrow section */}
      <div className="relative mt-auto">
        <motion.div
          key={`column-arrow-${index}`}
          className="relative z-20 mb-8 flex h-[70px] w-[20px] items-center"
          initial={{ translateY: 48, translateX: "var(--translate-x)" }}
          animate={{ translateY: [48, 0], translateX: "var(--translate-x)" }}
          transition={{ duration: 0.5 }}
        >
          <ArrowRightSFillIcon className=" h-[20px] w-full fill-white" />
        </motion.div>
        <motion.div initial={{ opacity: "var(--hover-opacity)" }} animate={{ opacity: "var(--hover-opacity)" }}>
          <Button variant="large" text="learn more" className=" absolute bottom-8 left-0" />
        </motion.div>
      </div>
    </motion.div>
  );
};
