"use client";
import DropdownLinks from "components/global/navbar/DropdownLinks";
import Hamburger from "components/global/navbar/Hamburger";
import MainLink from "components/global/navbar/MainLink";
import SubLinks from "components/global/navbar/SubLinks";
import ThemeSwitcher from "components/global/navbar/ThemeSwitcher";
import { useEffect, useState } from "react";
import { NavbarElement } from "types";

const menuAnimationDurationMs = 350;

interface NavBarProps {
  mainLinksToSamePage?: boolean;
  mainLink: string;
  subLinks: NavbarElement[];
}

export default function Navbar({ mainLinksToSamePage, mainLink, subLinks }: NavBarProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const handleClick = () => setOpen(!open);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY !== 0);
    };

    // Set initial scroll state
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="dropdown"
      className={`fixed z-40 w-screen border-b-2 border-white backdrop-blur-md transition-colors duration-250 ${scrolled ? "border-opacity-5" : "border-opacity-0"}`}
    >
      <div className="flex h-24 w-full items-center justify-between px-4">
        <MainLink
          linksToSamePage={!!mainLinksToSamePage}
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
        className={`grid transition-all duration-500 ease-in-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
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
