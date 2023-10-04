import Link from "next/link";
import { DesktopExpandableMenu } from "../desktopExpandableMenu/DesktopExpandableMenu";
import { Text } from "../text/Text";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const TOPBAR_SLIDE_OFFSET = 50;

export const ExpandableMenuTopbar = () => {
  const router = useRouter();

  return (
    <div className="z-60 h-14 w-full items-center overflow-hidden bg-transparent shadow-large-down-invisible transition-shadow duration-200 ease-in">
      <motion.div
        className="z-60 flex h-full w-full items-center justify-between"
        initial={{ y: TOPBAR_SLIDE_OFFSET, opacity: 0 }}
        animate={{ y: [TOPBAR_SLIDE_OFFSET, 0], opacity: [0, 1] }}
        transition={{
          y: { duration: 0.5, ease: "easeOut" },
          opacity: { duration: 0.7, ease: "easeOut" },
        }}
      >
        <DesktopExpandableMenu className="ml-0 self-center" />
        <Link href="/projects">
          <Text tag="p" variant="action-4" className="text-primary/80 duration-150 hover:text-primary">
            &#8592; Go back
          </Text>
        </Link>
      </motion.div>
    </div>
  );
};
