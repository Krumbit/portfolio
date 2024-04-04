"use client";
import DropdownLinks from "components/global/navbar/DropdownLinks";
import Hamburger from "components/global/navbar/Hamburger";
import MainLink from "components/global/navbar/MainLink";
import SubLinks from "components/global/navbar/SubLinks";
import ThemeSwitcher from "components/global/navbar/ThemeSwitcher";
import { useState } from "react";
import { NavbarElement } from "types";

const menuAnimationDurationMs = 350;

interface NavBarProps {
  mainLinksToSamePage: boolean;
  mainLink: string;
  subLinks: NavbarElement[];
  dropdownHeight: string;
}

export default function Navbar({
  mainLinksToSamePage,
  mainLink,
  subLinks,
  dropdownHeight,
}: NavBarProps) {
  const [open, setOpen] = useState<boolean>(false);
  const handleClick = () => setOpen(!open);

  return (
    <header id="dropdown" className={`ddopen fixed z-40 w-screen backdrop-blur-md`}>
      <div className="flex h-24 w-full items-center justify-between px-4">
        <MainLink
          linksToSamePage={mainLinksToSamePage}
          link={mainLink}
          scrollDuration={menuAnimationDurationMs}
        />
        <SubLinks links={subLinks} scrollDuration={menuAnimationDurationMs} />
        <div className="flex items-center align-middle md:hidden">
          <ThemeSwitcher
            className={`translate-x-0 transition-[transform,opacity] duration-250 ${
              open ? "translate-x-0 opacity-100" : "pointer-events-none translate-x-14 opacity-0"
            }`}
          />
          <Hamburger openState={open} clickHandler={handleClick} />
        </div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          open ? dropdownHeight : "h-0"
        }`}
      >
        <DropdownLinks
          links={subLinks}
          scrollDuration={menuAnimationDurationMs}
          clickHandler={handleClick}
        />
      </div>
    </header>
  );
}
