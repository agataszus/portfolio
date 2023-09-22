import Link from "next/link";
import { Text } from "../text/Text";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { cn } from "@/styles/helpers/cn";

type NavLinkProps = {
  linkTo: string;
  text: string;
};

export const navigationDraw = {
  navHidden: { scaleX: 0, originX: 0 },
  navActive: { scaleX: [0.75], originX: 0 },
  navHovered: { scaleX: [1], originX: 0 },
};

export const NavLink = ({ linkTo, text }: NavLinkProps) => {
  const { pathname } = useRouter();
  const isActive = linkTo === pathname;

  return (
    <motion.div
      className={cn("flex h-7 flex-col")}
      initial={["navHidden"]}
      animate={isActive ? ["navActive"] : ["navHidden"]}
      whileHover={["navHovered", "active"]}
    >
      <Link href={linkTo} className="flex h-6">
        <Text tag="p" variant="action-2">
          {text}
        </Text>
      </Link>
      <motion.div
        className="h-0.5 w-9 bg-primary transition-all"
        variants={navigationDraw}
        transition={{ duration: 0.2 }}
      />
    </motion.div>
  );
};
