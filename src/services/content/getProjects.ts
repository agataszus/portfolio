import { IconNames } from "@/components/projectIcon/ProjectIcon";

const PROJECTS = [
  {
    slug: "eventhive",
    name: "EventHive",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, consequuntur sunt. Nemo soluta omnis, tenetur aperiam nihil, saepe commodi possimus iusto.",
    iconName: IconNames.SPARKLES_ICON,
    TechnologyIcon: "react",
    subtitle: "Vite + React project",
    videoLink: "/",
    sourceCodeLink: "https://github.com/agataszus/eventhive",
    demoLink: "https://eventhive-sigma.vercel.app/",
    websiteScreen: "/",
    technologies: [
      "react",
      "vite",
      "typescript",
      "css-modules",
      "sass",
      "tanstack-query",
      "vercel",
      "eslint",
      "prettier",
    ],
  },
  {
    slug: "portfolio",
    name: "Portfolio",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, consequuntur sunt. Nemo soluta omnis, tenetur aperiam nihil, saepe commodi.",
    iconName: IconNames.PORTFOLIO_ICON,
    TechnologyIcon: "next",
    subtitle: "Vite + Next.js project",
    videoLink: "/",
    sourceCodeLink: "https://github.com/agataszus/portfolio",
    demoLink: "https://portfolio-agataszus.vercel.app/",
    websiteScreen: "/",
    technologies: ["next", "typescript", "tailwind", "framer-motion", "eslint", "prettier", "graphql", "datocms"],
  },
  {
    slug: "weather-app",
    name: "WeatherApp",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, consequuntur sunt. Nemo soluta omnis, tenetur aperiam nihil, saepe commodi possimus.",
    iconName: IconNames.WEATHER_ICON,
    TechnologyIcon: "javascript",
    subtitle: "Javascript project",
    videoLink: "/",
    sourceCodeLink: "https://github.com/agataszus/weather-app",
    demoLink: "https://taupe-stardust-ee5f74.netlify.app/",
    websiteScreen: "/",
    technologies: ["javascript", "vite", "eslint", "css-modules"],
  },
  {
    slug: "efdance",
    name: "EFDance",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, consequuntur sunt. Nemo soluta omnis, tenetur aperiam nihil, saepe commodi.",
    iconName: IconNames.MUSIC_ICON,
    TechnologyIcon: "html",
    subtitle: "HTML5 project",
    videoLink: "/",
    sourceCodeLink: "https://github.com/agataszus/efdance-website",
    demoLink: "https://agataszus.github.io/efdance-website/",
    websiteScreen: "/",
    technologies: ["css3", "html5", "javascript"],
  },
  {
    slug: "algorithms",
    name: "Algorithms",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, consequuntur sunt. Nemo soluta omnis, tenetur aperiam nihil, saepe commodi possimus.",
    iconName: IconNames.SORT_ICON,
    TechnologyIcon: "next",
    subtitle: "Vite + Next.js project",
    videoLink: "/",
    sourceCodeLink: "/",
    demoLink: "/",
    websiteScreen: "/",
    technologies: [],
  },
] as const;

export const getProjects = async () => PROJECTS;
