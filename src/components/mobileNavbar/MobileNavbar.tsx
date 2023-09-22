import { MobileNavLink } from "../mobileNavLink/MobileNavLink";
import { AnimatePresence, TargetAndTransition, motion } from "framer-motion";
import { NAVIGATION_ELEMENTS } from "../navbar/navbar.constants";

const NAV_ELEMENT_SLIDE_OFFSET = 40;

type MobileNavbarProps = {
  handleLinkClick: () => void;
};

export const MobileNavbar = ({ handleLinkClick }: MobileNavbarProps) => {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key="modal-overlay"
        className="fixed inset-0 z-50 flex flex-col bg-background-color-dark/80 backdrop-blur-[var(--backdrop-blur)] [--backdrop-blur:10px]"
        initial={{ opacity: 0 }}
        animate={{ "--backdrop-blur": "10px", opacity: 1 } as TargetAndTransition}
        exit={{ opacity: 0, transition: { duration: 0.1 } }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        <div className="my-auto flex h-[320px] w-full flex-col items-center justify-between">
          {NAVIGATION_ELEMENTS.map(({ linkTo, label }, index) => (
            <div className="relative flex overflow-hidden" key={`mobile-nav-link-${index}`}>
              <motion.div
                className="h-full w-full"
                initial={{ y: NAV_ELEMENT_SLIDE_OFFSET }}
                animate={{ y: [NAV_ELEMENT_SLIDE_OFFSET, 0] }}
                transition={{ delay: 0.2 + index / 10, duration: 0.5, ease: "easeOut" }}
              >
                <MobileNavLink linkTo={linkTo} text={label} onClick={handleLinkClick} />
              </motion.div>
            </div>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
