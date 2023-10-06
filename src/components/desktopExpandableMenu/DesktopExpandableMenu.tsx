import { useState } from "react";
import { DesktopExpandableMenuLink } from "./parts/DesktopExpandableMenuLink";
import { AnimatePresence, motion } from "framer-motion";
import { Hamburger } from "../hamburger/Hamburger";
import { NAVIGATION_ELEMENTS } from "../desktopHomeNavigation/desktopHomeNavigation.constants";
import { cn } from "@/styles/helpers/cn";

const NAV_ELEMENT_SLIDE_OFFSET = -50;

type DesktopExpandableMenuProps = {
  className?: string;
};

export const DesktopExpandableMenu = ({ className }: DesktopExpandableMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={cn("relative z-50 ml-8 self-start", className)}>
      <Hamburger isCloseVisible={isOpen} handleClick={() => setIsOpen(!isOpen)} />
      <AnimatePresence mode="wait">
        {isOpen && (
          <div className="absolute -top-3 left-16 flex gap-4 px-4">
            {NAVIGATION_ELEMENTS.map(({ linkTo, label }, index) => (
              <motion.div
                key={`${label}-tooltip`}
                className="z-50 shadow-lg backdrop-blur-md"
                initial={{ x: NAV_ELEMENT_SLIDE_OFFSET, opacity: 0 }}
                animate={{
                  x: [NAV_ELEMENT_SLIDE_OFFSET, 0],
                  opacity: [0, 1],
                  transition: { delay: index / 10, duration: 0.3, x: { type: "spring", stiffness: 200 } },
                }}
                exit={{
                  x: [0, NAV_ELEMENT_SLIDE_OFFSET],
                  opacity: [1, 0],
                  transition: { delay: (4 - index) / 10, duration: 0.3 },
                }}
              >
                <DesktopExpandableMenuLink linkTo={linkTo} text={label} onClick={() => setIsOpen(false)} />
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
