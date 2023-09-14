import { Text } from "../text/Text";
import Link from "next/link";

type NavLinkProps = {
  linkTo: string;
  text: string;
};

export const MobileNavLink = ({ linkTo, text }: NavLinkProps) => {
  return (
    <div className="flex h-7 flex-col">
      <Link href={linkTo} className="flex h-6">
        <Text tag="p" variant="heading-2" className="transition-colors hover:text-primary">
          {text}
        </Text>
      </Link>
    </div>
  );
};
