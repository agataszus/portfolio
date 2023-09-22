import { Button } from "../button/Button";
import { Navbar } from "../navbar/Navbar";
import { Text } from "../text/Text";
import { motion } from "framer-motion";
import { MobileNavbar } from "../mobileNavbar/MobileNavbar";
import MenuLineIcon from "remixicon-react/MenuLineIcon";
import CloseLineIcon from "remixicon-react/CloseLineIcon";
import { useState } from "react";
import { cn } from "@/styles/helpers/cn";
import { Hamburger } from "../hamburger/Hamburger";

type TopbarProps = {
  className?: string;
};

export const Topbar = ({ className }: TopbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: [50, 0], opacity: [0, 1] }}
          transition={{
            y: { duration: 0.5, ease: "easeOut" },
            opacity: { duration: 0.7, ease: "easeOut" },
          }}
        >
          <div className="z-60 flex flex-col">
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
          </div>

          <div className="hidden cursor-pointer tablet:block">
            <Hamburger isMenuOpen={isMenuOpen} handleClick={() => setIsMenuOpen(!isMenuOpen)} />
          </div>
          <Navbar />
          <motion.div
            className="tablet:hidden"
            initial={["buttonHidden", "textHidden"]}
            animate={["buttonVisible", "textVisible"]}
          >
            <Button variant="small" text="contact" additionalDelay={0.4} />
          </motion.div>
        </motion.div>
      </div>
      {isMenuOpen && <MobileNavbar handleLinkClick={() => setIsMenuOpen(false)} />}
    </>
  );
};
