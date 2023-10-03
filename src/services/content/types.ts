import { getProject } from "./getProject";
import { getProjects } from "./getProjects";

export type Projects = Awaited<ReturnType<typeof getProjects>>;

export type Project = Awaited<ReturnType<typeof getProject>>;
