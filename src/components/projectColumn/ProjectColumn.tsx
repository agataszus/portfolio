import { cn } from "@/styles/helpers/cn";
import { Variants, motion, useInView } from "framer-motion";
import { IconNames } from "../projectIcon/ProjectIcon";
import { DESKTOP, DESKTOP_MID, DESKTOP_SMALL, MOBILE, TABLET, useMediaQueries } from "@/hooks/useMediaQueries";
import { useRef } from "react";
import { ProjectNumber } from "./parts/ProjectNumber";
import { MadeWith } from "./parts/MadeWith";
import { ProjectIconContainer } from "./parts/ProjectIconContainer";
import { ProjectName } from "./parts/ProjectName";
import { ProjectLinks } from "./parts/ProjectLinks";
import { ArrowToButton } from "./parts/ArrowToButton";
import { TechnologyIcons } from "../technologyIcon/TechnologyIcon";

type ProjectColumnProps = {
  iconName: IconNames;
  index: number;
  name: string;
  description: string;
  Icon: TechnologyIcons;
};

export const ProjectColumn = ({ iconName, name, description, index, Icon }: ProjectColumnProps) => {
  const mediaQuery = useMediaQueries();
  const columnRef = useRef<HTMLDivElement>(null);

  const columnClassName = cn(
    "flex h-full desktop-mid:w-[368px] tablet:h-[450px] tablet:w-full mobile:h-[720px] w-[450px] shrink-0 flex-col tablet:gap-3 desktop-mid:gap-8 gap-10 tablet:border-t-2 tablet:border-l-0 border-l-2 border-primary/40 desktop-mid:px-11 px-14 mobile:px-8 py-8 relative overflow-y-hidden",
    "[--hover-opacity:0%] [--default-opacity:100%] [--translate-x:0] [--hover-path-length:0] [--hover-border-overflow: hidden] [--hover-translate-y:10px] [--underline-width:22px] [--underline-color:rgb(149,250,254,0.6)] [--translate-x-text:70px] [--hover-rotate:-180deg] [--tablet-left-to-left:50%] tablet:[--tablet-translate-x:-50%] [--tablet-translate-x:0] mobile:[--tablet-translate-x:0]"
  );

  const extraDelay = (index - 1) * 0.1;

  const isInView = useInView(columnRef, { margin: "-300px 0px" });

  return (
    <motion.div
      ref={columnRef}
      className={columnClassName}
      initial={["hidden", "buttonHidden", "textHidden", "arrowHidden", "arrowContainerHidden"]}
      whileHover={
        [DESKTOP, DESKTOP_MID, DESKTOP_SMALL].includes(mediaQuery)
          ? ["visible", "buttonVisible", "textHovered", "arrowVisible", "arrowContainerVisible"]
          : undefined
      }
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
            "--tablet-left-to-left": "0",
            "--tablet-translate-x": "0",
          },
        } as Variants
      }
      animate={
        isInView && [MOBILE, TABLET].includes(mediaQuery)
          ? ["visible", "buttonVisible", "textHovered", "arrowVisible", "arrowContainerVisible"]
          : undefined
      }
      transition={{
        "--translate-x": { duration: 0.6 },
        "--hover-path-length": { duration: 1 },
        "--hover-translate-y": { duration: 0.5 },
        "--default-opacity": { duration: 0.5 },
        "--hover-opacity": { duration: 0.5 },
        "--hover-scale-x": { duration: 0.5 },
        "--hover-rotate": { duration: 0.5 },
        "--tablet-left-to-left": { duration: 0.5, ease: "easeOut" },
      }}
    >
      {/* dark gradient on hover */}
      <div className="bg-linear-gradient-black absolute inset-0 z-0 opacity-[--hover-opacity] " />
      {/* light gradient on render */}
      <motion.div
        className="bg-linear-gradient-white-to-right tablet:bg-linear-gradient-white-tablet-to-bottom absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ delay: extraDelay, duration: 2, ease: "easeOut" }}
      />
      <div className="z-10 mb-20 flex w-full justify-between desktop-mid:mb-0">
        <ProjectNumber index={index} extraDelay={extraDelay} />
        <MadeWith Icon={Icon} />
      </div>
      <div className="relative flex h-full w-full flex-col gap-10 desktop-mid:gap-8 tablet:gap-3 mobile:gap-4">
        <ProjectIconContainer iconName={iconName} extraDelay={extraDelay} />
        <ProjectName name={name} extraDelay={extraDelay} />
        <ProjectLinks extraDelay={extraDelay} description={description} />
        <ArrowToButton index={index} />
      </div>
    </motion.div>
  );
};
