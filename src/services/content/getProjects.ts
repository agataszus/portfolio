import { IconNames } from "@/components/projectIcon/ProjectIcon";

const PROJECTS = [
  {
    slug: "eventhive",
    name: "EventHive",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo soluta omnis, tenetur aperiam nihil, saepe commodi possimus iusto.",
    iconName: IconNames.SPARKLES_ICON,
    TechnologyIcon: "react",
    subtitle: "Vite + React project",
    videoLink: "/",
    sourceCodeLink: "https://github.com/agataszus/eventhive",
    demoLink: "https://eventhive-sigma.vercel.app/",
    websiteScreen: "/",
    technologies: [
      {
        name: "react",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      },
      {
        name: "vite",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        name: "typescript",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        name: "css-modules",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        name: "sass",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        name: "tanstack-query",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        name: "vercel",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        name: "eslint",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        name: "prettier",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
  },
  {
    slug: "portfolio",
    name: "Portfolio",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo soluta omnis, tenetur aperiam nihil, saepe commodi.",
    iconName: IconNames.PORTFOLIO_ICON,
    TechnologyIcon: "next",
    subtitle: "Vite + Next.js project",
    videoLink: "/",
    sourceCodeLink: "https://github.com/agataszus/portfolio",
    demoLink: "https://portfolio-agataszus.vercel.app/",
    websiteScreen: "/",
    technologies: [
      {
        name: "next",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        name: "typescript",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        name: "tailwind",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        name: "framer-motion",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        name: "eslint",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        name: "prettier",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        name: "graphql",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        name: "datocms",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
  },
  {
    slug: "weather-app",
    name: "WeatherApp",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo soluta omnis, tenetur aperiam nihil, saepe commodi possimus.",
    iconName: IconNames.WEATHER_ICON,
    TechnologyIcon: "javascript",
    subtitle: "Javascript project",
    videoLink: "/",
    sourceCodeLink: "https://github.com/agataszus/weather-app",
    demoLink: "https://taupe-stardust-ee5f74.netlify.app/",
    websiteScreen: "/",
    technologies: [
      {
        name: "javascript",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        name: "vite",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        name: "eslint",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        name: "css-modules",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
  },
  {
    slug: "efdance",
    name: "EFDance",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo soluta omnis, tenetur aperiam nihil, saepe commodi.",
    iconName: IconNames.MUSIC_ICON,
    TechnologyIcon: "html",
    subtitle: "HTML5 project",
    videoLink: "/",
    sourceCodeLink: "https://github.com/agataszus/efdance-website",
    demoLink: "https://agataszus.github.io/efdance-website/",
    websiteScreen: "/",
    technologies: [
      {
        name: "css3",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        name: "html5",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        name: "javascript",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
  },
  {
    slug: "algorithms",
    name: "Algorithms",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo soluta omnis, tenetur aperiam nihil, saepe commodi possimus.",
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
