import { motion } from "framer-motion";

export enum IconNames {
  SPARKLES_ICON = "sparkles icon",
  PORTFOLIO_ICON = "portfolio icon",
  WEATHER_ICON = "weather icon",
  MUSIC_ICON = "music icon",
}

type ProjectIconProps = {
  name: IconNames;
  extraDelay: number;
};

export const ProjectIcon = ({ name, extraDelay }: ProjectIconProps) => {
  const svgInitial = { opacity: 0, y: 90 };
  const svgAnimate = {
    opacity: [0, 1],
    y: [90, 0],
  };
  const svgTransition = {
    opacity: { delay: extraDelay, duration: 1, ease: "easeOut" },
    y: { delay: extraDelay, duration: 1, ease: "easeOut" },
  };
  const pathInitial = { pathLength: 0 };
  const pathAnimate = { pathLength: [0, 1] };
  const pathTransition = { delay: 0.5 + extraDelay, duration: 3, ease: "easeOut" };

  switch (name) {
    case IconNames.SPARKLES_ICON: {
      return (
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="h-16 w-16 stroke-primary"
          initial={svgInitial}
          animate={svgAnimate}
          transition={svgTransition}
        >
          <motion.path
            initial={pathInitial}
            animate={pathAnimate}
            transition={pathTransition}
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
          />
        </motion.svg>
      );
    }
    case IconNames.PORTFOLIO_ICON: {
      return (
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="h-16 w-16 stroke-primary"
          initial={svgInitial}
          animate={svgAnimate}
          transition={svgTransition}
        >
          <motion.path
            initial={pathInitial}
            animate={pathAnimate}
            transition={pathTransition}
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
          />
        </motion.svg>
      );
    }
    case IconNames.WEATHER_ICON: {
      return (
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="h-16 w-16 stroke-primary"
          initial={svgInitial}
          animate={svgAnimate}
          transition={svgTransition}
        >
          <motion.path
            initial={pathInitial}
            animate={pathAnimate}
            transition={pathTransition}
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
          />
        </motion.svg>
      );
    }
    case IconNames.MUSIC_ICON: {
      return (
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="h-16 w-16 stroke-primary"
          initial={svgInitial}
          animate={svgAnimate}
          transition={svgTransition}
        >
          <motion.path
            initial={pathInitial}
            animate={pathAnimate}
            transition={pathTransition}
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z"
          />
        </motion.svg>
      );
    }
  }
};
