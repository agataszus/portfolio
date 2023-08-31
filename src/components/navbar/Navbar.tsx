import { NavLink } from "../navLink/NavLink";

export const Navbar = () => {
  return (
    <div className="flex w-[324px] items-center justify-between">
      <NavLink linkTo="/" text="About" />
      <NavLink linkTo="/" text="Skills" />
      <NavLink linkTo="/projects" text="Projects" />
    </div>
  );
};
