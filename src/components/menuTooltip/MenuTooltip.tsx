import { useState } from "react";
import { MenuTooltipElement } from "../menuTooltipElement/MenuTooltipElement";
import { AnimatePresence, motion } from "framer-motion";
import { Hamburger } from "../hamburger/Hamburger";
import { NAVIGATION_ELEMENTS } from "../navbar/navbar.constants";

const NAV_ELEMENT_SLIDE_OFFSET = -50;

export const MenuTooltip = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative z-50 ml-8 self-start">
      <Hamburger isMenuOpen={isMenuOpen} handleClick={() => setIsMenuOpen(!isMenuOpen)} />
      <AnimatePresence mode="wait">
        {isMenuOpen && (
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
                <MenuTooltipElement linkTo={linkTo} text={label} onClick={() => setIsMenuOpen(false)} />
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
