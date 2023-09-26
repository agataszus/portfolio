import { TechnologyIcon, TechnologyIcons } from "@/components/technologyIcon/TechnologyIcon";
import { Text } from "@/components/text/Text";

type MadeWithProps = {
  Icon: TechnologyIcons;
};

export const MadeWith = ({ Icon }: MadeWithProps) => {
  return (
    <div className="flex flex-col items-end gap-2 overflow-hidden">
      <Text tag="h4" variant="action-4" className="translate-x-[--translate-x-text] pt-4 opacity-80">
        Made with
      </Text>
      <div className="rotate-[--hover-rotate] opacity-[--hover-opacity]">
        <TechnologyIcon Icon={Icon} />
      </div>
    </div>
  );
};
