import { datoCMSRequest } from "./datoCMSRequest";

type ContactContent = {
  subtitle: string;
  title: string;
  description: string;
  email: string;
};

export type ContactContentResponse = {
  contactContent: ContactContent;
};

const CONTACT_GRAPHQL_QUERY = `
query ContactContent {
  contactContent {
    subtitle
    title
    description
    email
  }
}
`;

export const getContactContent = async () => {
  const data = await datoCMSRequest<ContactContentResponse>({ query: CONTACT_GRAPHQL_QUERY });

  return data;
};
