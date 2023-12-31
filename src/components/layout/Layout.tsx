import { cn } from "@/styles/helpers/cn";
import { AnimatePresence } from "framer-motion";
import { PropsWithChildren, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { usePrevious } from "@mantine/hooks";
import { SlidingOverlay } from "./parts/SlidingOverlay";

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
  const [isClientMounted, setIsClientMounted] = useState(false);

  /**
   * It is used to prevent render of children content on server side,
   * so the children are rendered only on client side
   * ensuring proper initial animations presence
   */
  useEffect(() => {
    setIsClientMounted(true);
  }, []);

  useEffect(() => {
    if (previousPathname && pathname !== previousPathname) setWasPathnameChanged(true);
  }, [pathname, previousPathname]);

  return (
    <div className={layoutClassName}>
      {/* div added to prevent flash of page content on load before initial animations */}
      <div
        className={cn("h-full w-full opacity-0 transition-opacity duration-[10ms]", isClientMounted && "opacity-100")}
      >
        {isClientMounted && (
          <>
            {wasPathnameChanged && <SlidingOverlay pathname={pathname} />}
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.4 } }}
                exit={{ opacity: 0, transition: { delay: 0.5, duration: 0.4 } }}
                className={cn("h-full w-full")}
                key={`content-animation-${pathname}`}
              >
                {children}
              </motion.div>
            </AnimatePresence>
          </>
        )}
      </div>
    </div>
  );
};
