import { Technology } from "@/services/content/getSkillsContent";
import { PageTitle } from "../pageTitle/PageTitle";
import { ProjectTechIcon, TechnologyName } from "../projectPageTemplate/parts/ProjectTechIcon";
import { useEffect, useRef } from "react";
import { Text } from "../text/Text";
import { motion } from "framer-motion";
import { TechIconButton } from "./parts/TechIconButton";
import { useRouter } from "next/router";
import { getSkillsPath } from "../desktopHomeNavigation/desktopHomeNavigation.constants";
import { usePrevious } from "@mantine/hooks";

type SkillsContentProps = {
  subtitle: string;
  title: string;
  technologies: Technology[];
};

export const SkillsContent = ({ subtitle, title, technologies }: SkillsContentProps) => {
  const router = useRouter();
  const { query, asPath } = router;
  const activeTechnology = technologies.find(({ name }) => query.technology === name);
  const { name } = activeTechnology || {};
  const descriptionContainerRef = useRef<HTMLDivElement>(null);
  const previousTechnologyValue = usePrevious(activeTechnology);
  const displayTechnology = activeTechnology || previousTechnologyValue;

  useEffect(() => {
    if (asPath === getSkillsPath())
      router.replace({ pathname: getSkillsPath(), query: { technology: technologies[0].name } });
    // eslint-disable-next-line react-hooks/exhaustive-deps, unicorn/consistent-destructuring
  }, [router.replace, asPath]);

  const handleClick = (name: TechnologyName) => {
    router.replace({ pathname: getSkillsPath(), query: { technology: name } }, undefined, { scroll: false });
    descriptionContainerRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="z-10 m-auto flex w-[560px] flex-col items-center justify-center gap-14 mobile:w-full">
      <div className="flex flex-col items-center gap-4">
        <PageTitle subtitle={subtitle} title={title} />
      </div>
      <motion.div
        className="flex h-48 w-full shrink-0 items-center gap-5 bg-background-color-mid px-6 py-9 shadow-lg tablet:scroll-mt-[88px] mobile:h-auto mobile:flex-col mobile:gap-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: [0, 1], scale: [0.8, 1] }}
        transition={{ delay: 0.4, duration: 0.5, type: "spring", stiffness: 80 }}
        ref={descriptionContainerRef}
      >
        {displayTechnology && (
          <>
            <ProjectTechIcon technologyName={displayTechnology.name} variant="large" />
            <div className="flex flex-col gap-3 mobile:items-center">
              <Text tag="h5" variant="action-3">
                {displayTechnology.label}
              </Text>
              <Text tag="p" variant="caption-1" className="leading-normal mobile:text-center">
                <span dangerouslySetInnerHTML={{ __html: displayTechnology.description }} />
              </Text>
            </div>
          </>
        )}
      </motion.div>
      <div className="flex w-[80%] flex-wrap justify-center gap-5 mobile:w-[90%]">
        {technologies.map(({ name: technologyName }, index) => (
          <TechIconButton
            isActive={technologyName === name}
            onClick={() => handleClick(technologyName)}
            technologyName={technologyName}
            additionalDelay={index / 10}
            key={technologyName}
          />
        ))}
      </div>
    </div>
  );
};
