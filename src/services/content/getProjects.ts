import { IconNames } from "@/components/projectIcon/ProjectIcon";

const PROJECTS = [
  {
    slug: "eventhive",
    name: "EventHive",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, consequuntur sunt. Nemo soluta omnis, tenetur aperiam nihil, saepe commodi possimus iusto.",
    iconName: IconNames.SPARKLES_ICON,
    TechnologyIcon: "next",
  },
  {
    slug: "portfolio",
    name: "Portfolio",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, consequuntur sunt. Nemo soluta omnis, tenetur aperiam nihil, saepe commodi.",
    iconName: IconNames.PORTFOLIO_ICON,
    TechnologyIcon: "react",
  },
  {
    slug: "weather-app",
    name: "WeatherApp",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, consequuntur sunt. Nemo soluta omnis, tenetur aperiam nihil, saepe commodi possimus.",
    iconName: IconNames.WEATHER_ICON,
    TechnologyIcon: "javascript",
  },
  {
    slug: "efdance",
    name: "EFDance",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, consequuntur sunt. Nemo soluta omnis, tenetur aperiam nihil, saepe commodi.",
    iconName: IconNames.MUSIC_ICON,
    TechnologyIcon: "html",
  },
  {
    slug: "algorithms",
    name: "Algorithms",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, consequuntur sunt. Nemo soluta omnis, tenetur aperiam nihil, saepe commodi possimus.",
    iconName: IconNames.SORT_ICON,
    TechnologyIcon: "next",
  },
] as const;

export const getProjects = async () => PROJECTS;
