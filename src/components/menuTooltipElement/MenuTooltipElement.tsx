import Link from "next/link";
import { Text } from "../text/Text";

type MenuTooltipElementProps = {
  linkTo: string;
  text: string;
  onClick: () => void;
};

export const MenuTooltipElement = ({ linkTo, text, onClick }: MenuTooltipElementProps) => {
  return (
    <div
      className="bg-background-color-light/50 transition-transform duration-200 hover:scale-[1.15]"
      onClick={onClick}
    >
      <Link href={linkTo} className="flex px-10 py-3">
        <Text tag="p" variant="action-1">
          {text}
        </Text>
      </Link>
    </div>
  );
};
