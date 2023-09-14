import { useState } from "react";
import MenuLineIcon from "remixicon-react/MenuLineIcon";
import CloseLineIcon from "remixicon-react/CloseLineIcon";
import { MobileNavLink } from "../mobileNavLink/MobileNavLink";

export const MobileNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="cursor-pointer">
      {isMenuOpen ? (
        <CloseLineIcon className="relative z-60 h-9 w-auto fill-white" onClick={() => setIsMenuOpen(false)} />
      ) : (
        <MenuLineIcon className="h-9 w-auto fill-white" onClick={() => setIsMenuOpen(true)} />
      )}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-background-color-dark/95">
          <div className="my-auto flex h-[320px] w-full flex-col items-center justify-between">
            <MobileNavLink linkTo="/" text="Home" />
            <MobileNavLink linkTo="/" text="About" />
            <MobileNavLink linkTo="/" text="Skills" />
            <MobileNavLink linkTo="/projects" text="Projects" />
            <MobileNavLink linkTo="/" text="Contact" />
          </div>
        </div>
      )}
    </div>
  );
};
