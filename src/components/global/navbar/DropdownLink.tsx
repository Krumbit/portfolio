import { Link as ScrollLink } from "react-scroll";
import { NavbarElement } from "types";
import { DropdownLinksProps } from "./DropdownLinks";

interface DropdownLinkProps extends DropdownLinksProps {
  item: NavbarElement,
}

export default function DropdownLink({ item, scrollDuration, clickHandler }: DropdownLinkProps) {
  return (
    <ScrollLink
      to={item.target}
      smooth={true}
      offset={0}
      duration={scrollDuration}
      onClick={clickHandler}
      className="cursor-pointer py-2 my-2 text-xl border-b-[1px] border-b-invertbg border-opacity-25"
    >
      ~ {item.name}
    </ScrollLink>
  );
}