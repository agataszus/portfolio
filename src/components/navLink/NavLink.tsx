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
  navActive: () => ({ scaleX: [1], originX: 0, transition: { delay: 0.5, duration: 0.4, ease: "easeOut" } }),
};

export const NavLink = ({ linkTo, text }: NavLinkProps) => {
  const { pathname } = useRouter();
  const isActive = linkTo === pathname;

  return (
    <motion.div
      className={cn("flex h-7 flex-col [--nav-active-width:0]", isActive && "[--nav-active-width:20px]")}
      initial={["navHidden"]}
      whileHover={["navActive", "active"]}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      variants={{ active: { "--nav-active-width": "36px" } } as any}
    >
      <Link href={linkTo} className="flex h-6">
        <Text tag="p" variant="action-2">
          {text}
        </Text>
      </Link>
      <motion.div className="h-0.5 w-[var(--nav-active-width)] bg-primary transition-all" variants={navigationDraw} />
    </motion.div>
  );
};
