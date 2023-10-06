export const getHomePath = () => "/";
export const getAboutPath = () => "/about";
export const getSkillsPath = () => "/skills";
export const getProjectsPath = () => "/projects";
export const getProjectPath = (slug: string) => `${getProjectsPath()}/${slug}`;
export const getContactPath = () => "/contact";

export const NAVIGATION_ELEMENTS = [
  {
    linkTo: getHomePath(),
    label: "Home",
  },
  {
    linkTo: getAboutPath(),
    label: "About",
  },
  {
    linkTo: getSkillsPath(),
    label: "Skills",
  },
  {
    linkTo: getProjectsPath(),
    label: "Projects",
  },
  {
    linkTo: getContactPath(),
    label: "Contact",
  },
];
