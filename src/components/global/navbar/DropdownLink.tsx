import { Link as ScrollLink } from "react-scroll";
import { NavbarElement } from "types";

interface DropdownLinkProps {
  item: NavbarElement;
  scrollDuration: number;
  clickHandler: () => void;
  offset: number;
}

export default function DropdownLink({
  item,
  scrollDuration,
  clickHandler,
  offset,
}: DropdownLinkProps) {
  return (
    <ScrollLink
      to={item.target}
      smooth={true}
      offset={offset}
      duration={scrollDuration}
      onClick={clickHandler}
      className="my-2 cursor-pointer border-b-[1px] border-b-invertbg border-opacity-25 py-2 text-xl"
    >
      ~ {item.name}
    </ScrollLink>
  );
}
