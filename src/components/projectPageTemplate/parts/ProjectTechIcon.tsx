import ReactjsFillIcon from "remixicon-react/ReactjsFillIcon";
import Html5FillIcon from "remixicon-react/Html5FillIcon";
import GithubFillIcon from "remixicon-react/GithubFillIcon";
import { ViteIcon } from "./icons/ViteIcon";
import { CSSModulesIcon } from "./icons/CSSModulesIcon";
import { SassIcon } from "./icons/SassIcon";
import { ReactQueryIcon } from "./icons/ReactQueryIcon";
import { VercelIcon } from "./icons/VercelIcon";
import { EslintIcon } from "./icons/EslintIcon";
import { PrettierIcon } from "./icons/PrettierIcon";
import { NextIcon } from "./icons/NextIcon";
import { TailwindIcon } from "./icons/TailwindIcon";
import { FramerMotionIcon } from "./icons/FramerMotionIcon";
import { GraphqlIcon } from "./icons/GraphqlIcon";
import { DatocmsIcon } from "./icons/DatocmsIcon";
import { JavascriptIcon } from "./icons/JavascriptIcon";
import { Css3Icon } from "./icons/Css3Icon";
import { TypescriptIcon } from "./icons/TypescriptIcon";
import { cn } from "@/styles/helpers/cn";
import { GitIcon } from "./icons/GitIcon";
import { ThreeJs } from "./icons/ThreeJs";

export type TechnologyName =
  | "react"
  | "vite"
  | "typescript"
  | "css-modules"
  | "sass"
  | "tanstack-query"
  | "vercel"
  | "eslint"
  | "prettier"
  | "next"
  | "tailwind"
  | "framer-motion"
  | "graphql"
  | "datocms"
  | "javascript"
  | "css3"
  | "html5"
  | "github"
  | "git"
  | "threejs";

type ProjectTechIconProps = {
  technologyName: TechnologyName;
  variant: "small" | "large";
  isActive?: boolean;
};

export const ProjectTechIcon = ({ technologyName, variant, isActive = false }: ProjectTechIconProps) => {
  const commonIconClassName = cn(
    "shrink-0",
    variant === "small" && "h-10 w-10",
    variant === "large" && "h-20 w-20",
    isActive && "fill-primary"
  );

  const iconSize = variant === "small" ? 40 : 80;

  const commonIconProps = {
    className: commonIconClassName,
  };

  const commonIconWithActiveProps = {
    className: commonIconClassName,
    isActive: isActive,
  };

  switch (technologyName) {
    case "react": {
      return <ReactjsFillIcon className={cn("fill-white", commonIconClassName)} />;
    }
    case "vite": {
      return <ViteIcon {...commonIconWithActiveProps} />;
    }
    case "typescript": {
      return <TypescriptIcon {...commonIconWithActiveProps} />;
    }
    case "css-modules": {
      return <CSSModulesIcon width={iconSize} height={iconSize} isActive={isActive} />;
    }
    case "sass": {
      return <SassIcon {...commonIconProps} />;
    }
    case "tanstack-query": {
      return <ReactQueryIcon {...commonIconWithActiveProps} />;
    }
    case "vercel": {
      return <VercelIcon {...commonIconWithActiveProps} />;
    }
    case "eslint": {
      return <EslintIcon {...commonIconWithActiveProps} />;
    }
    case "prettier": {
      return <PrettierIcon {...commonIconProps} />;
    }
    case "next": {
      return <NextIcon {...commonIconWithActiveProps} />;
    }
    case "tailwind": {
      return <TailwindIcon {...commonIconWithActiveProps} />;
    }
    case "framer-motion": {
      return <FramerMotionIcon {...commonIconProps} />;
    }
    case "graphql": {
      return <GraphqlIcon {...commonIconProps} />;
    }
    case "datocms": {
      return <DatocmsIcon {...commonIconProps} />;
    }
    case "javascript": {
      return <JavascriptIcon {...commonIconProps} />;
    }
    case "css3": {
      return <Css3Icon {...commonIconWithActiveProps} />;
    }
    case "html5": {
      return <Html5FillIcon className={cn("fill-white", commonIconClassName)} />;
    }
    case "github": {
      return <GithubFillIcon className={cn("fill-white", commonIconClassName)} />;
    }
    case "git": {
      return <GitIcon {...commonIconProps} />;
    }
    case "threejs": {
      return <ThreeJs {...commonIconWithActiveProps} />;
    }
  }
};
