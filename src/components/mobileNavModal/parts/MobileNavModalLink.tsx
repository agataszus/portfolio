import { Text } from "../../text/Text";
import Link from "next/link";

type MobileNavModalLinkProps = {
  linkTo: string;
  text: string;
  onClick: () => void;
};

export const MobileNavModalLink = ({ linkTo, text, onClick }: MobileNavModalLinkProps) => {
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
