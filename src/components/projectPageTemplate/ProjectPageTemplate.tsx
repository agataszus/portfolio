import { ProjectContent as ProjectContentType } from "@/services/content/getProject";
import { ProjectButtons } from "./parts/ProjectButtons";
import { ProjectContent } from "./parts/ProjectContent";
import { RightColumn } from "./parts/RightColumn";
import { useState } from "react";
import { ProjectVideo } from "./parts/ProjectVideo";

type ProjectPageTemplateProps = {
  project: ProjectContentType;
};

export const ProjectPageTemplate = ({ project }: ProjectPageTemplateProps) => {
  const { subtitle, name, description, sourceCodeLink, demoLink, websiteScreen, technologies, videoLink } = project;
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  return (
    <div className="relative my-auto flex w-full justify-between tablet:flex-col">
      <div className="flex h-[512px] w-1/2 flex-col tablet:h-full tablet:w-full tablet:items-center tablet:pt-[640px] mobile:pt-[550px]">
        <ProjectContent subtitle={subtitle} name={name} description={description} />
        <ProjectButtons sourceCodeLink={sourceCodeLink} demoLink={demoLink} />
      </div>
      <RightColumn
        image={websiteScreen}
        technologies={technologies}
        handleButtonClick={() => setIsVideoVisible(true)}
      />
      <ProjectVideo src={videoLink} onClose={() => setIsVideoVisible(false)} isVisible={isVideoVisible} />
    </div>
  );
};
