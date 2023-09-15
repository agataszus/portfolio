import { NavLink } from "../navLink/NavLink";

export const Navbar = () => {
  return (
    <div className="flex w-[424px] items-center justify-between tablet:hidden">
      <NavLink linkTo="/" text="Home" />
      <NavLink linkTo="/" text="About" />
      <NavLink linkTo="/" text="Skills" />
      <NavLink linkTo="/projects" text="Projects" />
    </div>
  );
};
