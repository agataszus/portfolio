import { useState } from "react";
import { MenuTooltipElement } from "../menuTooltipElement/MenuTooltipElement";
import { cn } from "@/styles/helpers/cn";
import { AnimatePresence, motion } from "framer-motion";

export const NAVIGATION_ELEMENTS = [
  {
    linkTo: "/",
    label: "Home",
  },
  {
    linkTo: "/",
    label: "About",
  },
  {
    linkTo: "/",
    label: "Skills",
  },
  {
    linkTo: "/",
    label: "Projects",
  },
  {
    linkTo: "/",
    label: "Contact",
  },
];

export const MenuTooltip = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative z-50 ml-8 self-start">
      <div
        className={cn(
          "flex h-6 w-9 cursor-pointer flex-col justify-between [--bg-opacity:0.8] hover:[--bg-opacity:1]",
          isMenuOpen && "[--bg-opacity:1]"
        )}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div className="h-1 w-full bg-primary opacity-[--bg-opacity] transition-opacity duration-200" />
        <div className="h-1 w-full bg-primary opacity-[--bg-opacity] transition-opacity duration-200" />
        <div className="h-1 w-full bg-primary opacity-[--bg-opacity] transition-opacity duration-200" />
      </div>
      <AnimatePresence mode="wait">
        {isMenuOpen && (
          <div className="absolute -top-3 left-16 flex gap-4 px-4">
            {NAVIGATION_ELEMENTS.map(({ linkTo, label }, index) => (
              <motion.div
                key={`${label}-tooltip`}
                className="z-50 shadow-lg backdrop-blur-md"
                initial={{ x: -50, opacity: 0 }}
                animate={{
                  x: [-50, 0],
                  opacity: [0, 1],
                  transition: { delay: index / 10, duration: 0.3, x: { type: "spring", stiffness: 200 } },
                }}
                exit={{
                  x: [0, -50],
                  opacity: [1, 0],
                  transition: { delay: (4 - index) / 10, duration: 0.3 },
                }}
              >
                <MenuTooltipElement linkTo={linkTo} text={label} onClick={() => setIsMenuOpen(false)} />
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
