import { datoCMSRequest } from "./datoCMSRequest";

type AboutContent = {
  subtitle: string;
  title: string;
  description: string;
};

export type AboutContentResponse = {
  aboutContent: AboutContent;
};

const ABOUT_GRAPHQL_QUERY = `
query AboutContent {
  aboutContent {
    subtitle
    title
    description
  }
}
`;

export const getAboutContent = async () => {
  const data = await datoCMSRequest<AboutContentResponse>({
    query: ABOUT_GRAPHQL_QUERY,
  });

  return data;
};
