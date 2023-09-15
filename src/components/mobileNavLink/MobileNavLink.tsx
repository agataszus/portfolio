import { Text } from "../text/Text";
import Link from "next/link";

type NavLinkProps = {
  linkTo: string;
  text: string;
  onClick: () => void;
};

export const MobileNavLink = ({ linkTo, text, onClick }: NavLinkProps) => {
  return (
    <div className="flex flex-col">
      <Link href={linkTo} className="flex" onClick={onClick}>
        <Text tag="p" variant="heading-2" className="h-full transition-colors hover:text-primary">
          {text}
        </Text>
      </Link>
    </div>
  );
};
