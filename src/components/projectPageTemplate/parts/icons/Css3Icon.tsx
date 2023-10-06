import {
  COLOR_GRAY_LIGHT,
  COLOR_GRAY_MID,
  COLOR_PRIMARY,
  COLOR_PRIMARY_DARKER,
  COLOR_PRIMARY_DARKEST,
  COLOR_WHITE,
  TechIconWithActiveProps,
} from "./icons.constants";

export const Css3Icon = ({ className, isActive }: TechIconWithActiveProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="800px"
      height="800px"
      viewBox="0 0 32 32"
      fill="none"
      className={className}
    >
      <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill={isActive ? COLOR_PRIMARY_DARKEST : COLOR_GRAY_MID} />
      <path d="M26 5H16V29.5L24 27L26 5Z" fill={isActive ? COLOR_PRIMARY_DARKER : COLOR_GRAY_LIGHT} />
      <path
        d="M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z"
        fill={isActive ? COLOR_PRIMARY : COLOR_WHITE}
      />
    </svg>
  );
};
