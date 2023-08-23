import { Text } from "../text/Text";

export const Navbar = () => {
  return (
    <div className="flex w-[324px] items-center justify-between">
      <Text tag="p" variant="action-1">
        About
      </Text>
      <Text tag="p" variant="action-1">
        Skills
      </Text>
      <Text tag="p" variant="action-1">
        Projects
      </Text>
    </div>
  );
};
