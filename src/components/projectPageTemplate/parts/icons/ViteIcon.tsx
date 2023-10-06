import {
  COLOR_GRAY_MID,
  COLOR_PRIMARY,
  COLOR_PRIMARY_DARKEST,
  COLOR_WHITE,
  TechIconWithActiveProps,
} from "./icons.constants";

export const ViteIcon = ({ className, isActive }: TechIconWithActiveProps) => {
  const mainColor = isActive ? COLOR_PRIMARY : COLOR_WHITE;
  const darkColor = isActive ? COLOR_PRIMARY_DARKEST : COLOR_GRAY_MID;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="800px"
      height="800px"
      viewBox="0 0 32 32"
      fill="none"
      className={className}
    >
      <title>file_type_vite</title>
      <path
        d="M29.8836 6.146L16.7418 29.6457c-.2714.4851-.9684.488-1.2439.0052L2.0956 6.1482c-.3-.5262.1498-1.1635.746-1.057l13.156 2.3516a.7144.7144 0 00.2537-.0004l12.8808-2.3478c.5942-.1083 1.0463.5241.7515 1.0513z"
        fill={darkColor}
      />
      <path
        d="M22.2644 2.0069l-9.7253 1.9056a.3571.3571 0 00-.2879.3294l-.5982 10.1038c-.014.238.2045.4227.4367.3691l2.7077-.6248c.2534-.0585.4823.1647.4302.4194l-.8044 3.9393c-.0542.265.1947.4918.4536.4132l1.6724-.5082c.2593-.0787.5084.1487.4536.414l-1.2784 6.1877c-.08.387.4348.598.6495.2662L16.5173 25 24.442 9.1848c.1327-.2648-.096-.5667-.387-.5106l-2.787.5379c-.262.0505-.4848-.1934-.4109-.4497l1.8191-6.306c.074-.2568-.1496-.5009-.4118-.4495z"
        fill={mainColor}
      />
    </svg>
  );
};
