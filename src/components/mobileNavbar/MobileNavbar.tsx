import { useState } from "react";
import MenuLineIcon from "remixicon-react/MenuLineIcon";
import CloseLineIcon from "remixicon-react/CloseLineIcon";
import { MobileNavLink } from "../mobileNavLink/MobileNavLink";
import { AnimatePresence, motion } from "framer-motion";

export const MobileNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => setIsMenuOpen(false);

  return (
    <div className="hidden cursor-pointer tablet:block">
      <AnimatePresence mode="wait" initial={false}>
        {isMenuOpen ? (
          <CloseLineIcon className="relative z-60 h-9 w-auto fill-white" onClick={() => setIsMenuOpen(false)} />
        ) : (
          <MenuLineIcon className="h-9 w-auto fill-white" onClick={() => setIsMenuOpen(true)} />
        )}
        {isMenuOpen && (
          <motion.div
            key="modal-overlay"
            className="fixed inset-0 z-50 flex flex-col bg-background-color-dark/80 backdrop-blur-[var(--backdrop-blur)] [--backdrop-blur:10px]"
            initial={{ opacity: 0 }}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            animate={{ "--backdrop-blur": "10px", opacity: 1 } as any}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            exit={{ opacity: 0, transition: { duration: 0.1 } } as any}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <div className="my-auto flex h-[320px] w-full flex-col items-center justify-between">
              <div className="relative flex overflow-hidden">
                <motion.div
                  className="h-full w-full"
                  initial={{ y: 40 }}
                  animate={{ y: [40, 0] }}
                  transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
                >
                  <MobileNavLink linkTo="/" text="Home" onClick={handleClick} />
                </motion.div>
              </div>
              <div className="relative flex overflow-hidden">
                <motion.div
                  className="h-full w-full"
                  initial={{ y: 40 }}
                  animate={{ y: [40, 0] }}
                  transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
                >
                  <MobileNavLink linkTo="/" text="About" onClick={handleClick} />
                </motion.div>
              </div>
              <div className="relative flex overflow-hidden">
                <motion.div
                  className="h-full w-full"
                  initial={{ y: 40 }}
                  animate={{ y: [40, 0] }}
                  transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
                >
                  <MobileNavLink linkTo="/" text="Skills" onClick={handleClick} />
                </motion.div>
              </div>
              <div className="relative flex overflow-hidden">
                <motion.div
                  className="h-full w-full"
                  initial={{ y: 40 }}
                  animate={{ y: [40, 0] }}
                  transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
                >
                  <MobileNavLink linkTo="/projects" text="Projects" onClick={handleClick} />
                </motion.div>
              </div>
              <div className="relative flex overflow-hidden">
                <motion.div
                  className="h-full w-full"
                  initial={{ y: 40 }}
                  animate={{ y: [40, 0] }}
                  transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
                >
                  <MobileNavLink linkTo="/" text="Contact" onClick={handleClick} />
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
