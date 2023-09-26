import { ReactNode } from "react";
import { PageTitle } from "../pageTitle/PageTitle";
import { PageDescription } from "../pageDescription/PageDescription";

type ProjectContentType = {
  subtitle: string;
  name: string;
  description: ReactNode;
};

export const ProjectContent = ({ subtitle, name, description }: ProjectContentType) => {
  return (
    <div className="flex w-full flex-col gap-8 mobile:items-center">
      <PageTitle subtitle={subtitle} title={name} />
      <PageDescription description={description} />
    </div>
  );
};