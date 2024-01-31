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
    <header id="dropdown" className={`fixed ddopen w-screen overflow-hidden backdrop-blur-md z-40 ${open ? "h-88 md:h-24" : "h-24"}`}>
      <div className="flex h-24 w-full justify-between items-center px-4">
        <MainLink scrollDuration={menuAnimationDurationMs} />
        <SubLinks scrollDuration={menuAnimationDurationMs} />
        <div className='md:hidden flex items-center align-middle'>
          <ThemeSwitcher className={`translate-x-0 transition-[transform,opacity] duration-250 ${open ? "translate-x-0 opacity-100" : "opacity-0 translate-x-14 pointer-events-none"}`} />
          <Hamburger openState={open} clickHandler={handleClick} />
        </div>
      </div>
      <DropdownLinks scrollDuration={menuAnimationDurationMs} clickHandler={handleClick} />
    </header>
  );
}