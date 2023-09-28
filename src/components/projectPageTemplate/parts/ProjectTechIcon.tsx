import ReactjsLineIcon from "remixicon-react/ReactjsLineIcon";
import Html5FillIcon from "remixicon-react/Html5FillIcon";
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
import { commonIconClassName, commonIconProps, iconSize } from "./icons/icons.constants";
import { TypescriptIcon } from "./icons/TypescriptIcon";
import { cn } from "@/styles/helpers/cn";

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
  | "html5";

type ProjectTechIconProps = {
  technologyName: TechnologyName;
};

export const ProjectTechIcon = ({ technologyName }: ProjectTechIconProps) => {
  switch (technologyName) {
    case "react": {
      return <ReactjsLineIcon className={cn(commonIconClassName, "fill-white")} />;
    }
    case "vite": {
      return <ViteIcon {...commonIconProps} />;
    }
    case "typescript": {
      return <TypescriptIcon {...commonIconProps} />;
    }
    case "css-modules": {
      return <CSSModulesIcon width={iconSize} height={iconSize} />;
    }
    case "sass": {
      return <SassIcon {...commonIconProps} />;
    }
    case "tanstack-query": {
      return <ReactQueryIcon {...commonIconProps} />;
    }
    case "vercel": {
      return <VercelIcon {...commonIconProps} />;
    }
    case "eslint": {
      return <EslintIcon {...commonIconProps} />;
    }
    case "prettier": {
      return <PrettierIcon {...commonIconProps} />;
    }
    case "next": {
      return <NextIcon {...commonIconProps} />;
    }
    case "tailwind": {
      return <TailwindIcon {...commonIconProps} />;
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
      return <Css3Icon {...commonIconProps} />;
    }
    case "html5": {
      return <Html5FillIcon className={cn(commonIconClassName, "fill-white")} />;
    }
  }
};
