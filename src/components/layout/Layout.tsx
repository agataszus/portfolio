import { cn } from "@/styles/helpers/cn";
import { AnimatePresence } from "framer-motion";
import { PropsWithChildren, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { usePrevious } from "@mantine/hooks";

type LayoutProps = {
  className?: string;
} & PropsWithChildren;

export const Layout = ({ children, className }: LayoutProps) => {
  const layoutClassName = cn(
    "bg-gradient-radial h-screen w-screen overflow-hidden tablet:min-h-screen tablet:h-auto",
    className
  );
  const { pathname } = useRouter();
  const previousPathname = usePrevious(pathname);
  const [wasPathnameChanged, setWasPathnameChanged] = useState(false);

  useEffect(() => {
    if (previousPathname && pathname !== previousPathname) setWasPathnameChanged(true);
  }, [pathname, previousPathname]);

  return (
    <div className={layoutClassName}>
      {wasPathnameChanged && (
        <>
          <motion.div
            key={`overlay-animation-${pathname}-1`}
            className="fixed inset-0 z-[1000] bg-primary/20"
            initial={{ y: "100%" }}
            animate={{
              y: ["100%", "0%", "-100%"],
              transition: { delay: 0.5, duration: 0.8, ease: [0.17, 0.67, 0.53, 0.89] },
            }}
          />
          <motion.div
            key={`overlay-animation-${pathname}-2`}
            className="fixed inset-0 z-[1000] overflow-hidden bg-primary"
            initial={{ y: "100%" }}
            animate={{
              y: ["100%", "0%", "-100%"],
              transition: { delay: 0.65, duration: 0.65, ease: [0.37, 0.59, 0.68, 0.83] },
            }}
          >
            {/* <motion.div
              className="absolute inset-0 flex -translate-y-1/2 items-center justify-center text-7xl font-extrabold uppercase text-sky-800/70"
              initial={{ y: "-100%" }}
              animate={{
                y: ["-100%", "0%", "100%"],
                transition: { delay: 0.65, duration: 0.65, ease: [0.38, 0.57, 0.69, 0.81] },
              }}
            >
              Agata.dev
            </motion.div> */}
            {/* <div className="fixed inset-0 -translate-y-full">
              <div className="absolute inset-0 flex translate-y-full items-center justify-center text-7xl font-extrabold uppercase text-sky-800/70 ">
                Agata.dev
              </div>
            </div> */}
          </motion.div>
        </>
      )}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.4 } }}
          exit={{ opacity: 0, transition: { delay: 0.5, duration: 0.4 } }}
          className="h-full w-full"
          key={`content-animation-${pathname}`}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
