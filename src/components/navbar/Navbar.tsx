import { NavLink } from "../navLink/NavLink";
import { NAVIGATION_ELEMENTS } from "./navbar.constants";

export const Navbar = () => {
  return (
    <div className="flex w-[424px] items-center justify-between tablet:hidden">
      {NAVIGATION_ELEMENTS.slice(0, -1).map(({ linkTo, label }, index) => (
        <NavLink linkTo={linkTo} text={label} key={index} />
      ))}
    </div>
  );
};
