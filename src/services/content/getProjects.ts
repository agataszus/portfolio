import { datoCMSRequest } from "./datoCMSRequest";
import { IconNames } from "@/components/projectIcon/ProjectIcon";
import { TechnologyIcons } from "@/components/technologyIcon/TechnologyIcon";

type ProjectContent = {
  slug: string;
  name: string;
  descriptionShort: string;
  iconName: IconNames;
  technologyIconName: TechnologyIcons;
  demoLink: string;
  sourceCodeLink: string;
  isComingSoon: boolean;
};

export type ProjectsContentResponse = {
  allProjectContents: ProjectContent[];
};

const PROJECTS_GRAPHQL_QUERY = `
query ProjectsContent {
  allProjectContents {
    slug
    name
    descriptionShort
    iconName
    technologyIconName
    demoLink
    sourceCodeLink
    isComingSoon
  }
}
`;

export const getProjects = async () => {
  const data = await datoCMSRequest<ProjectsContentResponse>({
    query: PROJECTS_GRAPHQL_QUERY,
  });

  return data;
};
