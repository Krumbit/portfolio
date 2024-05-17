import DropdownLink from "./DropdownLink";
import { NavLinkProps, NavbarElement } from "types";

interface DropdownLinksProps extends NavLinkProps {
  clickHandler: () => void;
  links: NavbarElement[];
}

export default function DropdownLinks({ scrollDuration, clickHandler, links }: DropdownLinksProps) {
  return (
    <div className="relative flex h-auto w-full flex-col overflow-hidden px-8 md:hidden">
      {links.map((item, index) => {
        return (
          <DropdownLink
            key={index}
            item={item}
            scrollDuration={scrollDuration}
            clickHandler={clickHandler}
            offset={item.offsetDropdownScroll ? -96 : 0}
          />
        );
      })}
    </div>
  );
}
