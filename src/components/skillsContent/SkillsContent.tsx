import { Technology } from "@/services/content/getSkillsContent";
import { PageTitle } from "../pageTitle/PageTitle";
import { ProjectTechIcon, TechnologyName } from "../projectPageTemplate/parts/ProjectTechIcon";
import { useState } from "react";
import { Text } from "../text/Text";

type SkillsContentProps = {
  subtitle: string;
  title: string;
  technologies: Technology[];
};

export const SkillsContent = ({ subtitle, title, technologies }: SkillsContentProps) => {
  const [technologyName, setTechnologyName] = useState<TechnologyName>(technologies[0].name);
  const [description, setDescription] = useState(technologies[0].description);

  const handleClick = (description: string, name: TechnologyName) => {
    setDescription(description);
    setTechnologyName(name);
  };

  return (
    <div className="z-10 m-auto flex w-[560px] flex-col items-center justify-center gap-14">
      <div className="flex flex-col items-center gap-4">
        <PageTitle subtitle={subtitle} title={title} />
      </div>
      <div className="flex min-h-[140px] w-full shrink-0 items-center gap-4 bg-background-color-mid px-6 py-9 shadow-lg">
        <ProjectTechIcon technologyName={technologyName} variant="large" />
        <Text tag="p" variant="caption-1" className="leading-normal">
          {description}
        </Text>
      </div>
      <div className="flex w-[80%] flex-wrap justify-center gap-5">
        {technologies.map(({ name, description }) => (
          <button key={name} onClick={() => handleClick(description, name)}>
            <ProjectTechIcon technologyName={name} variant="small" />
          </button>
        ))}
      </div>
    </div>
  );
};
