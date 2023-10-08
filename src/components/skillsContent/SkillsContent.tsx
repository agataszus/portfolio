import { Technology } from "@/services/content/getSkillsContent";
import { PageTitle } from "../pageTitle/PageTitle";
import { ProjectTechIcon, TechnologyName } from "../projectPageTemplate/parts/ProjectTechIcon";
import { useRef } from "react";
import { Text } from "../text/Text";
import { motion } from "framer-motion";
import { TechIconButton } from "./parts/TechIconButton";
import { useRouter } from "next/router";
import { getSkillsPath } from "../desktopHomeNavigation/desktopHomeNavigation.constants";

type SkillsContentProps = {
  subtitle: string;
  title: string;
  technologies: Technology[];
};

export const SkillsContent = ({ subtitle, title, technologies }: SkillsContentProps) => {
  const { query, push } = useRouter();
  const activeTechnology = technologies.find(({ name }) => query.technology === name);
  const { name, label, description } = activeTechnology ?? technologies[0];
  const descriptionContainerRef = useRef<HTMLDivElement>(null);

  const handleClick = (name: TechnologyName) => {
    push({ pathname: getSkillsPath(), query: { technology: name } });
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
        {activeTechnology && (
          <>
            <ProjectTechIcon technologyName={name} variant="large" />
            <div className="flex flex-col gap-3 mobile:items-center">
              <Text tag="h5" variant="action-3">
                {label}
              </Text>
              <Text tag="p" variant="caption-1" className="leading-normal mobile:text-center">
                <span dangerouslySetInnerHTML={{ __html: description }} />
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
