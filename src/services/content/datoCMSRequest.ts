import { GraphQLClient, RequestDocument, Variables } from "graphql-request";
import { DATO_CMS_TOKEN } from "./content.constants";

type RequestOptions = {
  query: RequestDocument;
  variables?: Variables;
};

export function datoCMSRequest<TResponse>({ query, variables }: RequestOptions) {
  const headers = {
    authorization: `Bearer ${DATO_CMS_TOKEN}`,
  };

  const client = new GraphQLClient("https://graphql.datocms.com", { headers });

  return client.request<TResponse>(query, variables);
}
