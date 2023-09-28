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
    <div className="my-auto flex w-full justify-between">
      <div className=" flex h-[512px] w-1/2 flex-col">
        <ProjectContent subtitle={subtitle} name={name} description={description} />
        <ProjectButtons sourceCodeLink={sourceCodeLink} demoLink={demoLink} />
      </div>
      <RightColumn imageLink={websiteScreen} technologies={technologies} />
    </div>
  );
};
