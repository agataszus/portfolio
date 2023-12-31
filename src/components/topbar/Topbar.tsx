import { Button } from "../button/Button";
import { DesktopHomeNavigation } from "../desktopHomeNavigation/DesktopHomeNavigation";
import { Text } from "../text/Text";
import { motion } from "framer-motion";
import { MobileNavModal } from "../mobileNavModal/MobileNavModal";
import { useEffect, useState } from "react";
import { cn } from "@/styles/helpers/cn";
import { Hamburger } from "../hamburger/Hamburger";
import { useRouter } from "next/router";
import { getContactPath, getHomePath } from "../desktopHomeNavigation/desktopHomeNavigation.constants";
import { DESKTOP, DESKTOP_MID, DESKTOP_SMALL, useMediaQueries } from "@/hooks/useMediaQueries";
import Link from "next/link";

const TOPBAR_SLIDE_OFFSET = 50;

type TopbarProps = {
  className?: string;
};

export const Topbar = ({ className }: TopbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const contactPathname = getContactPath();
  const isContactPathname = router.pathname === contactPathname;
  const mediaQuery = useMediaQueries();

  useEffect(() => {
    if ([DESKTOP, DESKTOP_MID, DESKTOP_SMALL].includes(mediaQuery)) setIsMenuOpen(false);
  }, [mediaQuery]);

  return (
    <>
      <div
        className={cn(
          "z-60 w-full overflow-hidden bg-transparent shadow-large-down-invisible transition-shadow duration-200 ease-in tablet:fixed tablet:inset-x-0 tablet:top-0 tablet:block tablet:px-8 tablet:py-6 tablet:backdrop-blur-md",
          isMenuOpen && "tablet:bg-transparent",
          className
        )}
      >
        <motion.div
          className="z-60 flex h-full w-full items-center justify-between"
          initial={{ y: TOPBAR_SLIDE_OFFSET, opacity: 0 }}
          animate={{ y: [TOPBAR_SLIDE_OFFSET, 0], opacity: [0, 1] }}
          transition={{
            y: { delay: 0.2, duration: 0.5, ease: "easeOut" },
            opacity: { duration: 0.7, ease: "easeOut" },
          }}
        >
          <Link className="z-60 flex flex-col" href={getHomePath()} scroll={false}>
            <Text
              tag="div"
              variant="subtitle-1"
              className="leading-tight tracking-widest text-primary mobile:leading-tight"
            >
              Agata
            </Text>
            <Text
              tag="div"
              variant="subtitle-1"
              className="leading-tight tracking-widest text-white mobile:leading-none"
            >
              Szustkiewicz
            </Text>
          </Link>

          <div className="hidden cursor-pointer tablet:block">
            <Hamburger isCloseVisible={isMenuOpen} handleClick={() => setIsMenuOpen(!isMenuOpen)} />
          </div>
          <DesktopHomeNavigation />
          <motion.div
            className="tablet:hidden"
            initial={["buttonHidden", "textHidden"]}
            animate={["buttonVisible", "textVisible"]}
          >
            <Button
              variant="small"
              text="contact"
              additionalDelay={0.4}
              linkTo={isContactPathname ? "mailto:agataszus@gmail.com" : contactPathname}
              isExternal={false}
            />
          </motion.div>
        </motion.div>
      </div>
      {isMenuOpen && <MobileNavModal handleLinkClick={() => setIsMenuOpen(false)} />}
    </>
  );
};
