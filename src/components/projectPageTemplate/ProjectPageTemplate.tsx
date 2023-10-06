import { ProjectButtons } from "./parts/ProjectButtons";
import { ProjectContent } from "./parts/ProjectContent";
import { Project } from "@/services/content/types";
import { RightColumn } from "./parts/RightColumn";

type ProjectPageTemplateProps = {
  project: Project;
};

export const ProjectPageTemplate = ({ project }: ProjectPageTemplateProps) => {
  const { subtitle, name, description, sourceCodeLink, demoLink, websiteScreen, technologies } = project;

  return (
    <div className="relative my-auto flex w-full justify-between tablet:flex-col">
      <div className="flex h-[512px] w-1/2 flex-col tablet:h-full tablet:w-full tablet:items-center tablet:pt-[640px] mobile:pt-[600px]">
        <ProjectContent subtitle={subtitle} name={name} description={description} />
        <ProjectButtons sourceCodeLink={sourceCodeLink} demoLink={demoLink} />
      </div>
      <RightColumn imageLink={websiteScreen} technologies={technologies} />
    </div>
  );
};
