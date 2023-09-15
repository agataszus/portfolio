import Link from "next/link";
import { Text } from "../text/Text";
import { useRouter } from "next/router";
import { cn } from "@/styles/helpers/cn";
import { NavActive } from "../navActive/NavActive";

type NavLinkProps = {
  linkTo: string;
  text: string;
};

export const NavLink = ({ linkTo, text }: NavLinkProps) => {
  const { pathname } = useRouter();
  const isActive = linkTo === pathname;

  const linkClassName = cn(isActive && "flex flex-col");

  return (
    <div className="flex h-7 flex-col">
      <Link href={linkTo} className="flex h-6">
        <Text tag="p" variant="action-1">
          {text}
        </Text>
      </Link>
      {isActive && <NavActive />}
    </div>
  );
};
