import { ProjectColumn } from "@/components/projectColumn/ProjectColumn";
import { ArrowButtons } from "@/components/arrowButtons/ArrowButtons";
import { IconNames } from "@/components/projectIcon/ProjectIcon";
import { Text } from "@/components/text/Text";
import Link from "next/link";
import { motion } from "framer-motion";
import ReactJsLineIcon from "remixicon-react/ReactjsLineIcon";
import Html5LineIcon from "remixicon-react/Html5LineIcon";
import { UIEvent, useLayoutEffect, useRef, useState } from "react";
import { cn } from "@/styles/helpers/cn";
import { DESKTOP, useMediaQueries } from "@/hooks/useMediaQueries";
import { MenuTooltip } from "@/components/menuTooltip/MenuTooltip";

const PROJECTS = [
  {
    name: "EventHive",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, consequuntur sunt. Nemo soluta omnis, tenetur aperiam nihil, saepe commodi possimus iusto.",
    iconName: IconNames.SPARKLES_ICON,
    TechnologyIcon: "next",
  },
  {
    name: "Portfolio",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, consequuntur sunt. Nemo soluta omnis, tenetur aperiam nihil, saepe commodi.",
    iconName: IconNames.PORTFOLIO_ICON,
    TechnologyIcon: ReactJsLineIcon,
  },
  {
    name: "WeatherApp",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, consequuntur sunt. Nemo soluta omnis, tenetur aperiam nihil, saepe commodi possimus.",
    iconName: IconNames.WEATHER_ICON,
    TechnologyIcon: "javascript",
  },
  {
    name: "EFDance",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, consequuntur sunt. Nemo soluta omnis, tenetur aperiam nihil, saepe commodi.",
    iconName: IconNames.MUSIC_ICON,
    TechnologyIcon: Html5LineIcon,
  },
  {
    name: "Algorithms",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, consequuntur sunt. Nemo soluta omnis, tenetur aperiam nihil, saepe commodi possimus.",
    iconName: IconNames.SORT_ICON,
    TechnologyIcon: "next",
  },
] as const;

export default function ProjectsPage() {
  const mediaQuery = useMediaQueries();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isLeftDisable, setIsLeftDisable] = useState(true);
  const [isRightDisable, setIsRightDisable] = useState(false);
  const projectsContainerRef = useRef<HTMLDivElement>(null);

  const getClientWidth = () => projectsContainerRef.current?.clientWidth ?? 0;
  const getScrollLeft = () => projectsContainerRef.current?.scrollLeft ?? 0;
  const getScrollWidth = () => projectsContainerRef.current?.scrollWidth ?? 0;

  useLayoutEffect(() => {
    const checkButtonsDisable = () => {
      const isLeftDisable = getScrollLeft() === 0;
      setIsLeftDisable(isLeftDisable);

      const isRightDisable = getScrollLeft() + getClientWidth() === getScrollWidth();
      setIsRightDisable(isRightDisable);
    };
    const projectsContainerRefCurrent = projectsContainerRef.current;

    projectsContainerRefCurrent?.addEventListener("scroll", checkButtonsDisable);

    return () => projectsContainerRefCurrent?.removeEventListener("scroll", checkButtonsDisable);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projectsContainerRef.current]);

  const handleArrowClick = (direction: "left" | "right") => {
    const clientWidth = projectsContainerRef.current?.clientWidth;
    const scrollLeft = projectsContainerRef.current?.scrollLeft;
    const elementWidth = mediaQuery === DESKTOP ? 450 : 368;

    if (clientWidth === undefined || scrollLeft === undefined) return;

    const scrollToLeftOffset =
      direction === "right"
        ? Math.floor(scrollLeft / elementWidth + 1) * elementWidth
        : Math.ceil(scrollLeft / elementWidth - 1) * elementWidth;

    projectsContainerRef.current?.scrollTo({
      behavior: "smooth",
      left: scrollToLeftOffset,
    });
  };

  const handleScroll = (event: UIEvent<HTMLDivElement>) => {
    if (event.currentTarget.scrollLeft !== 0) {
      setIsScrolled(true);
      return;
    }

    setIsScrolled(false);
  };

  return (
    <div className="flex h-full w-full">
      <div
        className={cn(
          "flex h-full w-[340px] shrink-0 flex-col items-center justify-start gap-96 pt-12 shadow-large-right-invisible transition-shadow duration-200 ease-in desktop-mid:w-[270px] desktop-mid:gap-68",
          isScrolled && "shadow-large-right"
        )}
      >
        <MenuTooltip />
        <ArrowButtons
          handleClickLeft={() => handleArrowClick("left")}
          handleClickRight={() => handleArrowClick("right")}
          isLeftDisable={isLeftDisable}
          isRightDisable={isRightDisable}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1] }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-10 ml-8 mt-auto self-start"
        >
          <Link href="/">
            <Text tag="p" variant="action-3" className="text-primary/80 duration-150 hover:text-primary">
              &#8592; Go back
            </Text>
          </Link>
        </motion.div>
      </div>
      <div className="scrollbar-none flex overflow-x-scroll" onScroll={handleScroll} ref={projectsContainerRef}>
        {PROJECTS.map(({ name, description, iconName, TechnologyIcon }, index) => (
          <ProjectColumn
            name={name}
            description={description}
            iconName={iconName}
            index={index + 1}
            key={name}
            Icon={TechnologyIcon}
          />
        ))}
      </div>
    </div>
  );
}
