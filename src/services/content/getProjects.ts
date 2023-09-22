import { IconNames } from "@/components/projectIcon/ProjectIcon";

const PROJECTS = [
  {
    name: "EventHive",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, consequuntur sunt. Nemo soluta omnis, tenetur aperiam nihil, saepe commodi possimus iusto.",
    iconName: IconNames.SPARKLES_ICON,
    TechnologyIcon: "next",
  },
  {
    name: "Portfolio",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, consequuntur sunt. Nemo soluta omnis, tenetur aperiam nihil, saepe commodi.",
    iconName: IconNames.PORTFOLIO_ICON,
    TechnologyIcon: "react",
  },
  {
    name: "WeatherApp",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, consequuntur sunt. Nemo soluta omnis, tenetur aperiam nihil, saepe commodi possimus.",
    iconName: IconNames.WEATHER_ICON,
    TechnologyIcon: "javascript",
  },
  {
    name: "EFDance",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, consequuntur sunt. Nemo soluta omnis, tenetur aperiam nihil, saepe commodi.",
    iconName: IconNames.MUSIC_ICON,
    TechnologyIcon: "html",
  },
  {
    name: "Algorithms",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, consequuntur sunt. Nemo soluta omnis, tenetur aperiam nihil, saepe commodi possimus.",
    iconName: IconNames.SORT_ICON,
    TechnologyIcon: "next",
  },
] as const;

export const getProjects = async () => PROJECTS;
