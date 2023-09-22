import { motion } from "framer-motion";
import { ComponentProps } from "react";
import { SparklesIcon } from "./icons/SparklesIcon";
import { PortfolioIcon } from "./icons/PortfolioIcon";
import { WeatherIcon } from "./icons/WeatherIcon";
import { MusicIcon } from "./icons/MusicIcon";
import { SortIcon } from "./icons/SortIcon";

const ICON_SLIDE_OFFSET = 90;

export enum IconNames {
  SPARKLES_ICON = "sparkles icon",
  PORTFOLIO_ICON = "portfolio icon",
  WEATHER_ICON = "weather icon",
  MUSIC_ICON = "music icon",
  SORT_ICON = "sort icon",
}

type ProjectIconProps = {
  name: IconNames;
  extraDelay: number;
};

export type CommonProjectIconProps = {
  svgProps: ComponentProps<typeof motion.svg>;
  pathProps: ComponentProps<typeof motion.path>;
};

export const ProjectIcon = ({ name, extraDelay }: ProjectIconProps) => {
  const svgInitial = { opacity: 0, y: ICON_SLIDE_OFFSET };
  const svgAnimate = {
    opacity: [0, 1],
    y: [ICON_SLIDE_OFFSET, 0],
  };
  const svgTransition = {
    opacity: { delay: extraDelay, duration: 1, ease: "easeOut" },
    y: { delay: extraDelay, duration: 1, ease: "easeOut" },
  };
  const pathInitial = { pathLength: 0 };
  const pathAnimate = { pathLength: [0, 1] };
  const pathTransition = { delay: 0.5 + extraDelay, duration: 3, ease: "easeOut" };
  const svgClassName = "h-16 w-16 stroke-primary";

  switch (name) {
    case IconNames.SPARKLES_ICON: {
      return (
        <SparklesIcon
          svgProps={{ initial: svgInitial, animate: svgAnimate, transition: svgTransition, className: svgClassName }}
          pathProps={{ initial: pathInitial, animate: pathAnimate, transition: pathTransition }}
        />
      );
    }
    case IconNames.PORTFOLIO_ICON: {
      return (
        <PortfolioIcon
          svgProps={{ initial: svgInitial, animate: svgAnimate, transition: svgTransition, className: svgClassName }}
          pathProps={{ initial: pathInitial, animate: pathAnimate, transition: pathTransition }}
        />
      );
    }
    case IconNames.WEATHER_ICON: {
      return (
        <WeatherIcon
          svgProps={{ initial: svgInitial, animate: svgAnimate, transition: svgTransition, className: svgClassName }}
          pathProps={{ initial: pathInitial, animate: pathAnimate, transition: pathTransition }}
        />
      );
    }
    case IconNames.MUSIC_ICON: {
      return (
        <MusicIcon
          svgProps={{ initial: svgInitial, animate: svgAnimate, transition: svgTransition, className: svgClassName }}
          pathProps={{ initial: pathInitial, animate: pathAnimate, transition: pathTransition }}
        />
      );
    }
    case IconNames.SORT_ICON: {
      return (
        <SortIcon
          svgProps={{ initial: svgInitial, animate: svgAnimate, transition: svgTransition, className: svgClassName }}
          pathProps={{ initial: pathInitial, animate: pathAnimate, transition: pathTransition }}
        />
      );
    }
  }
};
