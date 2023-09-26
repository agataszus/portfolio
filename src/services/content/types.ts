import { getProjects } from "./getProjects";

export type Projects = Awaited<ReturnType<typeof getProjects>>;

export type Project = Projects[number];
