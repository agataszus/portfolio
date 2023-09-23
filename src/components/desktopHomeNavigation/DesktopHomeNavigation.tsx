import { NAVIGATION_ELEMENTS } from "./desktopHomeNavigation.constants";
import { NavLink } from "./parts/DesktopHomeNavigationLink";

export const DesktopHomeNavigation = () => {
  return (
    <div className="flex w-[424px] items-center justify-between tablet:hidden">
      {NAVIGATION_ELEMENTS.slice(0, -1).map(({ linkTo, label }, index) => (
        <NavLink linkTo={linkTo} text={label} key={index} />
      ))}
    </div>
  );
};
