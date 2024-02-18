import { navbarElements } from "data/global";
import DropdownLink from "./DropdownLink";
import { NavLinkProps } from "types";

export interface DropdownLinksProps extends NavLinkProps {
  clickHandler: () => void;
}

export default function DropdownLinks({ scrollDuration, clickHandler }: DropdownLinksProps) {
  return (
    <div className="relative flex h-auto w-full flex-col px-8 md:hidden">
      {navbarElements.map((item, index) => {
        return (
          <DropdownLink
            key={index}
            item={item}
            scrollDuration={scrollDuration}
            clickHandler={clickHandler}
          />
        );
      })}
    </div>
  );
}
