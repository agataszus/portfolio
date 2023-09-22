import { NextIcon } from "./icons/NextIcon";
import { JavascriptIcon } from "./icons/JavascriptIcon";
import ReactJsLineIcon from "remixicon-react/ReactjsLineIcon";
import Html5LineIcon from "remixicon-react/Html5LineIcon";

export type TechnologyIcons = "next" | "javascript" | "react" | "html";

type TechnologyIconProps = {
  Icon: TechnologyIcons;
};

export const TechnologyIcon = ({ Icon }: TechnologyIconProps) => {
  const iconClassName = "h-auto w-8 fill-primary/70 z-10 relative";

  if (Icon === "next") return <NextIcon />;

  if (Icon === "javascript") return <JavascriptIcon className={iconClassName} />;

  if (Icon === "react") return <ReactJsLineIcon className={iconClassName} />;

  if (Icon === "html") return <Html5LineIcon className={iconClassName} />;
};
