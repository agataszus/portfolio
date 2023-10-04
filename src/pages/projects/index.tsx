import { ProjectColumn } from "@/components/projectColumn/ProjectColumn";
import { ArrowButtons } from "@/components/arrowButtons/ArrowButtons";
import { Text } from "@/components/text/Text";
import Link from "next/link";
import { motion } from "framer-motion";
import { UIEvent, useRef, useState } from "react";
import { cn } from "@/styles/helpers/cn";
import { DesktopExpandableMenu } from "@/components/desktopExpandableMenu/DesktopExpandableMenu";
import { Topbar } from "@/components/topbar/Topbar";
import { GetStaticProps } from "next";
import { ProjectsContentResponse, getProjects } from "@/services/content/getProjects";
import { useScrollDownCheck } from "@/hooks/useScrollDownCheck";
import { useButtonsDisableCheck } from "@/hooks/useButtonsDisableCheck";
import { useProjectsOnArrowsClickScroll } from "@/hooks/useProjectsOnArrowsClickScroll";

export const getStaticProps: GetStaticProps<ProjectsContentResponse> = async () => {
  const { allProjectContents } = await getProjects();

  return {
    props: { allProjectContents },
  };
};

export default function ProjectsPage({ allProjectContents }: ProjectsContentResponse) {
  const isScrolledDown = useScrollDownCheck();
  const projectsContainerRef = useRef<HTMLDivElement>(null);
  const { isLeftDisabled, isRightDisabled } = useButtonsDisableCheck(projectsContainerRef);
  const handleArrowClick = useProjectsOnArrowsClickScroll(projectsContainerRef);

  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = (event: UIEvent<HTMLDivElement>) => {
    if (event.currentTarget.scrollLeft !== 0) {
      setIsScrolled(true);
      return;
    }

    setIsScrolled(false);
  };

  return (
    <div className="flex h-full w-full [--topbar-tablet-height:88px] tablet:mt-[--topbar-tablet-height] tablet:flex-col">
      <div className="hidden tablet:block">
        <Topbar className={cn(isScrolledDown && "shadow-large-down tablet:bg-background-color-dark/60")} />
      </div>
      <div
        className={cn(
          "flex h-full w-[340px] shrink-0 flex-col items-center justify-start gap-96 pt-12 shadow-large-right-invisible transition-shadow duration-200 ease-in desktop-mid:w-[270px] desktop-mid:gap-68 tablet:hidden",
          isScrolled && "shadow-large-right"
        )}
      >
        <DesktopExpandableMenu />
        <ArrowButtons
          handleClickLeft={() => handleArrowClick("left")}
          handleClickRight={() => handleArrowClick("right")}
          isLeftDisabled={isLeftDisabled}
          isRightDisabled={isRightDisabled}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1] }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-10 ml-8 mt-auto self-start"
        >
          <Link href="/">
            <Text tag="p" variant="action-4" className="text-primary/80 duration-150 hover:text-primary">
              &#8592; Go back
            </Text>
          </Link>
        </motion.div>
      </div>
      <div
        className="scrollbar-none flex overflow-x-scroll tablet:flex-col tablet:overflow-visible"
        onScroll={handleScroll}
        ref={projectsContainerRef}
      >
        {allProjectContents.map(
          ({ name, descriptionShort, iconName, technologyIconName, slug, demoLink, sourceCodeLink }, index) => (
            <ProjectColumn
              slug={slug}
              name={name}
              description={descriptionShort}
              iconName={iconName}
              index={index + 1}
              Icon={technologyIconName}
              demoLink={demoLink}
              sourceCodeLink={sourceCodeLink}
              key={name}
            />
          )
        )}
      </div>
    </div>
  );
}
