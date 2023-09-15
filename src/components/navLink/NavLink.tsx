import Link from "next/link";
import { Text } from "../text/Text";
import { useRouter } from "next/router";
import { NavActive } from "../navActive/NavActive";
import { useState } from "react";

type NavLinkProps = {
  linkTo: string;
  text: string;
};

export const NavLink = ({ linkTo, text }: NavLinkProps) => {
  const { pathname } = useRouter();
  const isActive = linkTo === pathname;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex h-7 flex-col" onMouseOver={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <Link href={linkTo} className="flex h-6">
        <Text tag="p" variant="action-2">
          {text}
        </Text>
      </Link>
      <NavActive isHovered={isHovered} isActive={isActive} />
    </div>
  );
};
