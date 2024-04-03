import { Link as ScrollLink } from "react-scroll";
import { NavbarElement } from "types";

interface DropdownLinkProps {
  scrollDuration: number;
  clickHandler: () => void;
  item: NavbarElement;
}

export default function DropdownLink({ item, scrollDuration, clickHandler }: DropdownLinkProps) {
  return (
    <ScrollLink
      to={item.target}
      smooth={true}
      offset={0}
      duration={scrollDuration}
      onClick={clickHandler}
      className="my-2 cursor-pointer border-b-[1px] border-b-invertbg border-opacity-25 py-2 text-xl"
    >
      ~ {item.name}
    </ScrollLink>
  );
}
