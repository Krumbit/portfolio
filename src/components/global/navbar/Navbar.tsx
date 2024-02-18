"use client";
import DropdownLinks from "components/global/navbar/DropdownLinks";
import Hamburger from "components/global/navbar/Hamburger";
import MainLink from "components/global/navbar/MainLink";
import SubLinks from "components/global/navbar/SubLinks";
import ThemeSwitcher from "components/global/navbar/ThemeSwitcher";
import { useState } from "react";

const menuAnimationDurationMs = 350;

export default function Navbar() {
  const [open, setOpen] = useState<boolean>(false);
  const handleClick = () => setOpen(!open);

  return (
    <header
      id="dropdown"
      className={`ddopen fixed z-40 w-screen overflow-hidden backdrop-blur-md ${
        open ? "h-88 md:h-24" : "h-24"
      }`}
    >
      <div className="flex h-24 w-full items-center justify-between px-4">
        <MainLink scrollDuration={menuAnimationDurationMs} />
        <SubLinks scrollDuration={menuAnimationDurationMs} />
        <div className="flex items-center align-middle md:hidden">
          <ThemeSwitcher
            className={`translate-x-0 transition-[transform,opacity] duration-250 ${
              open ? "translate-x-0 opacity-100" : "pointer-events-none translate-x-14 opacity-0"
            }`}
          />
          <Hamburger openState={open} clickHandler={handleClick} />
        </div>
      </div>
      <DropdownLinks scrollDuration={menuAnimationDurationMs} clickHandler={handleClick} />
    </header>
  );
}
