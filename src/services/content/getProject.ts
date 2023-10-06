import { TechnologyName } from "@/components/projectPageTemplate/parts/ProjectTechIcon";
import { datoCMSRequest } from "./datoCMSRequest";

type Technology = {
  name: TechnologyName;
  description: string;
};

export type WebsiteScreen = {
  url: string;
  alt: string;
};

export type ProjectContent = {
  subtitle: string;
  name: string;
  description: string;
  sourceCodeLink: string;
  demoLink: string;
  websiteScreen: WebsiteScreen;
  technologies: Technology[];
};

export type ProjectContentResponse = {
  projectContent: ProjectContent;
};

const PROJECT_GRAPHQL_QUERY = (slug: string) => `
query ProjectContent {
  projectContent(filter: {slug: {eq: "${slug}"}}) {
    subtitle
    name
    description
    sourceCodeLink
    demoLink
    websiteScreen {
      url
      alt
    }
    technologies {
      name
      description
    }
  }
}
`;

export const getProject = async (slug: string) => {
  const data = await datoCMSRequest<ProjectContentResponse>({
    query: PROJECT_GRAPHQL_QUERY(slug),
  });

  return data;
};
