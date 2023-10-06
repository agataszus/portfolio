import { TechnologyName } from "@/components/projectPageTemplate/parts/ProjectTechIcon";
import { datoCMSRequest } from "./datoCMSRequest";

export type Technology = {
  name: TechnologyName;
  label: string;
  description: string;
};

type SkillsContent = {
  subtitle: string;
  title: string;
  technologies: Technology[];
};

export type SkillsContentResponse = {
  skillsContent: SkillsContent;
};

const SKILLS_GRAPHQL_QUERY = `
query SkillsContent {
  skillsContent {
    subtitle
    title
    technologies {
      name
      label
      description
    }
  }
}
`;

export const getSkillsContent = async () => {
  const data = await datoCMSRequest<SkillsContentResponse>({ query: SKILLS_GRAPHQL_QUERY });

  return data;
};
